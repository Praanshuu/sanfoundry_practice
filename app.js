(function () {
  "use strict";

  const BANK = window.PRACTICE_BANK;
  if (!BANK || !Array.isArray(BANK.subjects) || BANK.subjects.length === 0) {
    document.getElementById("questionArea").innerHTML =
      '<div class="empty-box"><h3>No question bank found</h3><p>Run <code>python generate_web_data.py</code> first.</p></div>';
    return;
  }

  const STORAGE_KEY = "practicehub_multi_subject_v1";
  const LEGACY_KEY = "sanfoundry_dbms_progress_v1";
  // Always point to the local Python/MongoDB server even when opened via file://
  const API_PROGRESS_URL =
    window.location.protocol === "file:" ? "http://127.0.0.1:8000/api/progress" : "/api/progress";

  let store = loadStore();
  let noteSaveTimer = null;

  let state = {
    subjectId: BANK.subjects[0].id,
    tab: "practice", // practice | topics | overview
    scope: "KEEP", // KEEP | SELECTIVE | KEEP_SELECTIVE | REMOVE | ALL
    status: "ALL", // ALL | UNATTEMPTED | INCORRECT | MARKED | ATTEMPTED
    topicFilterType: null, // null | "syllabus" | "sanfoundry"
    topicFilterValue: null,
    search: "",
    layout: "single", // single | list
    showPalette: true,
    openNoteQids: new Set(), // question IDs with note editor currently expanded
    index: 0,
    randomIds: null, // null or array of question IDs
    topicGroupMode: "syllabus", // syllabus | sanfoundry
    topicScopeFilter: "ALL",
    topicSearch: "",
  };

  function mergeSubjectObjects(a = {}, b = {}) {
    const out = {};
    const sids = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const sid of sids) {
      const sa = a[sid] || {};
      const sb = b[sid] || {};
      out[sid] = {
        attempts: { ...(sa.attempts || {}), ...(sb.attempts || {}) },
        marked: { ...(sa.marked || {}), ...(sb.marked || {}) },
        notes: { ...(sa.notes || {}), ...(sb.notes || {}) },
      };
    }
    return out;
  }

  function loadStore() {
    let base = { theme: "light", bySubject: {} };
    try {
      // 1. Check legacy key first so earlier progress is always preserved
      const legacyRaw = localStorage.getItem(LEGACY_KEY);
      if (legacyRaw) {
        const lp = JSON.parse(legacyRaw);
        if (lp && typeof lp === "object") {
          base.theme = lp.theme || base.theme;
          base.bySubject["dbms-sql"] = {
            attempts: lp.attempts || {},
            marked: lp.marked || {},
            notes: lp.notes || {},
          };
        }
      }
      // 2. Merge with current multi-subject key
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          base.theme = parsed.theme || base.theme;
          base.bySubject = mergeSubjectObjects(base.bySubject, parsed.bySubject || {});
        }
      }
    } catch (e) {
      console.warn(e);
    }
    return base;
  }

  function saveStore(replaceExact = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      console.warn(e);
    }
    syncToServer(replaceExact);
  }

  function hasAnyLocalProgress(bySubject) {
    for (const sid of Object.keys(bySubject || {})) {
      const s = bySubject[sid] || {};
      if (
        Object.keys(s.attempts || {}).length > 0 ||
        Object.keys(s.marked || {}).length > 0 ||
        Object.keys(s.notes || {}).length > 0
      ) {
        return true;
      }
    }
    return false;
  }

  function syncToServer(replaceExact = false) {
    fetch(API_PROGRESS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...store, replace: replaceExact }),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res && res.bySubject && !replaceExact) {
          store.bySubject = mergeSubjectObjects(store.bySubject, res.bySubject);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
          } catch (e) {}
        }
        updateStorageBadge(res.backend);
      })
      .catch(() => {
        updateStorageBadge("browser");
      });
  }

  function updateStorageBadge(backend) {
    const el = document.getElementById("storageBadge");
    if (!el) return;
    if (backend === "mongodb") {
      el.textContent = "🟢 MongoDB";
      el.title = "Connected & synced with local MongoDB (sanfoundry_practice)";
    } else if (backend === "local_json") {
      el.textContent = "🟢 Local JSON";
      el.title = "Saved to local progress.json on disk";
    } else {
      el.textContent = "💾 Browser";
      el.title = "Server offline — saved in browser localStorage (run python serve.py to sync with MongoDB)";
    }
  }

  function loadFromServer() {
    fetch(API_PROGRESS_URL)
      .then((r) => r.json())
      .then((remote) => {
        updateStorageBadge(remote.backend);
        const remoteBySubj = remote.bySubject || {};
        const hadLocal = hasAnyLocalProgress(store.bySubject);

        // Merge local browser progress and MongoDB server progress so neither ever wipes the other
        store.bySubject = mergeSubjectObjects(remoteBySubj, store.bySubject);
        if (remote.theme && !hadLocal) {
          store.theme = remote.theme;
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        } catch (e) {}
        applyTheme();
        render();

        // Push merged progress back to MongoDB so any attempts from file:// or localStorage are saved in MongoDB immediately
        if (hadLocal) {
          syncToServer(false);
        }
      })
      .catch(() => {
        updateStorageBadge("browser");
      });
  }

  function getSubjProgress(subjectId = state.subjectId) {
    if (!store.bySubject[subjectId]) {
      store.bySubject[subjectId] = { attempts: {}, marked: {}, notes: {} };
    }
    if (!store.bySubject[subjectId].notes) {
      store.bySubject[subjectId].notes = {};
    }
    return store.bySubject[subjectId];
  }

  function getCurrentSubject() {
    return BANK.subjects.find((s) => s.id === state.subjectId) || BANK.subjects[0];
  }

  // DOM Elements
  const elSubjectSelect = document.getElementById("subjectSelect");
  const elMainNavTabs = document.getElementById("mainNavTabs");
  const elQuickScorePill = document.getElementById("quickScorePill");
  const elBtnTheme = document.getElementById("btnTheme");

  const elViewPractice = document.getElementById("viewPractice");
  const elViewTopics = document.getElementById("viewTopics");
  const elViewOverview = document.getElementById("viewOverview");

  const elScopeSelect = document.getElementById("scopeSelect");
  const elStatusSelect = document.getElementById("statusSelect");
  const elActiveTopicChip = document.getElementById("activeTopicChip");
  const elSearchInput = document.getElementById("searchInput");
  const elBtnRandomSet = document.getElementById("btnRandomSet");
  const elBtnLayoutToggle = document.getElementById("btnLayoutToggle");
  const elBtnTogglePalette = document.getElementById("btnTogglePalette");

  const elPracticeWorkspace = document.getElementById("practiceWorkspace");
  const elQuestionArea = document.getElementById("questionArea");
  const elPalettePanel = document.getElementById("palettePanel");
  const elPaletteTotalBadge = document.getElementById("paletteTotalBadge");
  const elQuickTopicSelect = document.getElementById("quickTopicSelect");
  const elPalCorrect = document.getElementById("palCorrect");
  const elPalWrong = document.getElementById("palWrong");
  const elPalMarked = document.getElementById("palMarked");
  const elPalLeft = document.getElementById("palLeft");
  const elPaletteGrid = document.getElementById("paletteGrid");
  const elBtnJumpUnattempted = document.getElementById("btnJumpUnattempted");

  const elTopicGroupMode = document.getElementById("topicGroupMode");
  const elBtnGroupSyllabus = document.getElementById("btnGroupSyllabus");
  const elTopicScopeFilter = document.getElementById("topicScopeFilter");
  const elTopicSearchInput = document.getElementById("topicSearchInput");
  const elTopicsGrid = document.getElementById("topicsGrid");

  const elOverviewContent = document.getElementById("overviewContent");

  // Initialize Subject Selector & Scope Options
  function initSubjects() {
    elSubjectSelect.innerHTML = BANK.subjects
      .map((s) => `<option value="${escapeAttr(s.id)}">${escapeHtml(s.name)} (${s.total_questions})</option>`)
      .join("");
    elSubjectSelect.value = state.subjectId;
    syncSubjectControls();
  }

  function syncSubjectControls() {
    const subj = getCurrentSubject();
    if (subj.has_priority_categories) {
      const c = subj.counts;
      elScopeSelect.classList.remove("hidden");
      elTopicScopeFilter.classList.remove("hidden");
      elScopeSelect.innerHTML = `
        <option value="KEEP">Keep — Main Bank (${c.KEEP})</option>
        <option value="SELECTIVE">Selective — Priority 2 (${c.SELECTIVE})</option>
        <option value="KEEP_SELECTIVE">Keep + Selective (${c.KEEP + c.SELECTIVE})</option>
        <option value="REMOVE">Remove — Excluded (${c.REMOVE})</option>
        <option value="ALL">All Questions (${subj.total_questions})</option>
      `;
      if (!["KEEP", "SELECTIVE", "KEEP_SELECTIVE", "REMOVE", "ALL"].includes(state.scope)) {
        state.scope = "KEEP";
      }
      elScopeSelect.value = state.scope;
    } else {
      state.scope = "ALL";
      elScopeSelect.classList.add("hidden");
      elTopicScopeFilter.classList.add("hidden");
    }

    if (subj.has_syllabus_mapping) {
      elBtnGroupSyllabus.classList.remove("hidden");
    } else {
      state.topicGroupMode = "sanfoundry";
      elBtnGroupSyllabus.classList.add("hidden");
      syncTopicModeButtons();
    }
    populateQuickTopicSelect();
  }

  function populateQuickTopicSelect() {
    const subj = getCurrentSubject();
    const scopedQs = subj.questions.filter((q) => matchesScope(q, state.scope));

    const sylMap = new Map();
    const sfMap = new Map();
    for (const q of scopedQs) {
      sylMap.set(q.syllabus_topic, (sylMap.get(q.syllabus_topic) || 0) + 1);
      sfMap.set(q.topic, (sfMap.get(q.topic) || 0) + 1);
    }

    let html = `<option value="ALL">All Topics in Scope (${scopedQs.length})</option>`;
    if (subj.has_syllabus_mapping && sylMap.size > 0) {
      const sylEntries = Array.from(sylMap.entries()).sort((a, b) => {
        const na = parseInt(a[0], 10) || 999;
        const nb = parseInt(b[0], 10) || 999;
        return na - nb || a[0].localeCompare(b[0]);
      });
      html += `<optgroup label="By Syllabus Topic">`;
      for (const [name, cnt] of sylEntries) {
        const val = `syllabus::${name}`;
        html += `<option value="${escapeAttr(val)}">${escapeHtml(name)} (${cnt})</option>`;
      }
      html += `</optgroup>`;
    }

    const sfEntries = Array.from(sfMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    html += `<optgroup label="By Sanfoundry Topic">`;
    for (const [name, cnt] of sfEntries) {
      const val = `sanfoundry::${name}`;
      html += `<option value="${escapeAttr(val)}">${escapeHtml(name)} (${cnt})</option>`;
    }
    html += `</optgroup>`;

    elQuickTopicSelect.innerHTML = html;
    if (state.topicFilterType && state.topicFilterValue) {
      const targetVal = `${state.topicFilterType}::${state.topicFilterValue}`;
      if ([...elQuickTopicSelect.options].some((o) => o.value === targetVal)) {
        elQuickTopicSelect.value = targetVal;
      } else {
        elQuickTopicSelect.value = "ALL";
      }
    } else {
      elQuickTopicSelect.value = "ALL";
    }
  }

  // Filtering
  function matchesScope(q, scope) {
    if (scope === "ALL") return true;
    if (scope === "KEEP_SELECTIVE") return q.category === "KEEP" || q.category === "SELECTIVE";
    return q.category === scope;
  }

  function matchesStatus(q, status, prog) {
    const ans = prog.attempts[q.id];
    const marked = !!prog.marked[q.id] || !!(prog.notes && prog.notes[q.id]);
    if (status === "ALL") return true;
    if (status === "UNATTEMPTED") return !ans;
    if (status === "ATTEMPTED") return !!ans;
    if (status === "INCORRECT") return !!ans && ans !== q.correct_answer;
    if (status === "MARKED") return marked;
    return true;
  }

  function getFilteredQuestions() {
    const subj = getCurrentSubject();
    const prog = getSubjProgress();
    const all = subj.questions;

    if (state.randomIds) {
      const byId = new Map(all.map((q) => [q.id, q]));
      return state.randomIds.map((id) => byId.get(id)).filter((q) => q && matchesStatus(q, state.status, prog));
    }

    const qSearch = state.search.trim().toLowerCase();
    return all.filter((q) => {
      if (!matchesScope(q, state.scope)) return false;
      if (!matchesStatus(q, state.status, prog)) return false;
      if (state.topicFilterType === "syllabus" && q.syllabus_topic !== state.topicFilterValue) return false;
      if (state.topicFilterType === "sanfoundry" && q.topic !== state.topicFilterValue) return false;

      if (qSearch) {
        if (qSearch.startsWith("#")) {
          const idNum = parseInt(qSearch.slice(1), 10);
          if (!isNaN(idNum)) return q.id === idNum;
        }
        const userNote = (prog.notes && prog.notes[q.id]) || "";
        const hay =
          `#${q.id} ${q.topic} ${q.syllabus_topic} ${q.question} ${Object.values(q.options).join(" ")} ${userNote}`.toLowerCase();
        if (!hay.includes(qSearch)) return false;
      }
      return true;
    });
  }

  // Quick Score Pill in Navbar
  function updateHeaderScore() {
    const subj = getCurrentSubject();
    const prog = getSubjProgress();
    let attempted = 0;
    let correct = 0;
    for (const q of subj.questions) {
      const a = prog.attempts[q.id];
      if (a) {
        attempted++;
        if (a === q.correct_answer) correct++;
      }
    }
    const acc = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    elQuickScorePill.textContent =
      attempted > 0 ? `${attempted} done • ${acc}%` : `0 / ${subj.counts.KEEP || subj.total_questions} done`;
  }

  // Format question stem and options cleanly
  function formatStem(text) {
    const lines = String(text || "").split("\n");
    if (lines.length <= 1) return escapeHtml(text);
    return `${escapeHtml(lines[0])}<div class="code-snippet">${escapeHtml(lines.slice(1).join("\n"))}</div>`;
  }

  function formatOpt(text) {
    const s = String(text || "");
    if (s.includes("\n")) return `<div class="code-snippet" style="margin-top:0">${escapeHtml(s)}</div>`;
    return escapeHtml(s);
  }

  // Render a single Question Card
  function renderCard(q, posIndex, totalCount) {
    const subj = getCurrentSubject();
    const prog = getSubjProgress();
    const chosen = prog.attempts[q.id] || null;
    const savedNote = (prog.notes && prog.notes[q.id]) || "";
    const isMarked = !!prog.marked[q.id] || !!savedNote;
    const showNoteBox = isMarked || state.openNoteQids.has(q.id);

    const optsHtml = Object.keys(q.options)
      .map((letter) => {
        let cls = "";
        if (chosen) {
          if (letter === q.correct_answer) cls = "is-correct";
          else if (letter === chosen) cls = "is-wrong";
        }
        return `
          <button class="opt-row ${cls}" data-qid="${q.id}" data-opt="${escapeAttr(letter)}">
            <span class="opt-letter">${escapeHtml(letter)}</span>
            <span class="opt-body">${formatOpt(q.options[letter])}</span>
          </button>
        `;
      })
      .join("");

    let feedbackHtml = "";
    if (chosen) {
      const right = chosen === q.correct_answer;
      const hasMeta = q.syllabus_detail || q.faculty_alignment || q.reason;
      const detailsHtml = hasMeta
        ? `
          <details class="details-note">
            <summary>Syllabus &amp; Faculty Alignment Note</summary>
            <div class="details-note-body">
              <div><strong>Syllabus Topic:</strong> ${escapeHtml(q.syllabus_topic)} (${escapeHtml(q.syllabus_detail)})</div>
              ${q.faculty_alignment ? `<div><strong>Faculty Material:</strong> ${escapeHtml(q.faculty_alignment)}</div>` : ""}
              ${q.reason ? `<div><strong>Scope Reason:</strong> ${escapeHtml(q.reason)}</div>` : ""}
            </div>
          </details>
        `
        : "";

      feedbackHtml = `
        <div class="feedback">
          <div class="feedback-top ${right ? "right" : "wrong"}">
            <span>${right ? `✓ Correct (${q.correct_answer})` : `✗ Incorrect — Correct Answer is ${q.correct_answer}`}</span>
            <button class="btn btn-outline js-retry-one" data-qid="${q.id}" style="padding:3px 9px;font-size:0.76rem;">↺ Retry</button>
          </div>
          ${q.explanation ? `<div class="explanation">${escapeHtml(q.explanation)}</div>` : ""}
          ${detailsHtml}
        </div>
      `;
    }

    const noteBoxHtml = showNoteBox
      ? `
        <div class="note-box">
          <div class="note-box-header">
            <span>📝 Personal Revision Note (Bookmark #${q.id})</span>
            <span class="note-status" id="note-status-${q.id}">${savedNote ? "Saved" : "Auto-saves as you type"}</span>
          </div>
          <textarea
            class="note-textarea js-note-input"
            data-qid="${q.id}"
            placeholder="Write your revision note, shortcut, or MySQL syntax reminder for this question..."
          >${escapeHtml(savedNote)}</textarea>
        </div>
      `
      : "";

    const warnHtml = q.warning ? `<div class="note-banner">⚠️ ${escapeHtml(q.warning)}</div>` : "";
    const catBadge = subj.has_priority_categories ? `<span class="tag tag-${q.category}">${q.category}</span>` : "";
    const posBadge =
      typeof posIndex === "number" ? `<span class="q-number">Q${posIndex + 1}/${totalCount}</span>` : "";

    return `
      <article class="q-card" id="qcard-${q.id}">
        <div class="q-meta">
          <div class="q-meta-left">
            ${posBadge}
            <span class="q-number">#${q.id}</span>
            <span class="tag tag-topic">${escapeHtml(q.topic)}</span>
            ${catBadge}
          </div>
          <div class="q-meta-right">
            <button
              class="bookmark-btn ${savedNote ? "active" : ""} js-toggle-note"
              data-qid="${q.id}"
              title="Add or edit a personal revision note"
            >
              📝 ${savedNote ? "Edit Note" : "Add Note"}
            </button>
            <button
              class="bookmark-btn ${isMarked ? "active" : ""} js-bookmark"
              data-qid="${q.id}"
              title="Bookmark this question for revision (Shortcut: M)"
            >
              ${isMarked ? "★ Bookmarked" : "☆ Bookmark"}
            </button>
          </div>
        </div>

        ${warnHtml}
        ${noteBoxHtml}

        <div class="q-text">${formatStem(q.question)}</div>

        <div class="options">${optsHtml}</div>

        ${feedbackHtml}
      </article>
    `;
  }

  // Render Question Navigator Side Panel
  function renderPalette(filtered) {
    elPracticeWorkspace.classList.toggle("palette-collapsed", !state.showPalette);
    elPalettePanel.classList.toggle("hidden", !state.showPalette);
    elBtnTogglePalette.classList.toggle("active", state.showPalette);
    if (!state.showPalette) return;

    const prog = getSubjProgress();
    let cRight = 0;
    let cWrong = 0;
    let cMarked = 0;
    let cLeft = 0;

    const tilesHtml = filtered
      .map((q, idx) => {
        const ans = prog.attempts[q.id];
        const noteText = (prog.notes && prog.notes[q.id]) || "";
        const marked = !!prog.marked[q.id] || !!noteText;
        let cls = "";
        let statusLabel = "Unattempted";

        if (ans) {
          if (ans === q.correct_answer) {
            cls += " is-correct";
            cRight++;
            statusLabel = `Correct (${ans})`;
          } else {
            cls += " is-wrong";
            cWrong++;
            statusLabel = `Wrong (chose ${ans}, ans ${q.correct_answer})`;
          }
        } else {
          cLeft++;
        }

        if (marked) {
          cls += " is-marked";
          cMarked++;
        }
        if (state.layout === "single" && idx === state.index) {
          cls += " is-current";
        }

        const notePreview = noteText ? ` | Note: ${noteText.slice(0, 60)}` : "";
        const tooltip = `Q${idx + 1} (#${q.id}) • ${q.topic} — ${statusLabel}${marked ? " ★" : ""}${notePreview}`;
        return `<button class="pal-tile${cls}" data-idx="${idx}" data-qid="${q.id}" title="${escapeAttr(tooltip)}">${
          idx + 1
        }</button>`;
      })
      .join("");

    elPaletteTotalBadge.textContent = `${filtered.length} Qs`;
    elPalCorrect.textContent = cRight;
    elPalWrong.textContent = cWrong;
    elPalMarked.textContent = cMarked;
    elPalLeft.textContent = cLeft;
    elPaletteGrid.innerHTML = tilesHtml;

    const activeTile = elPaletteGrid.querySelector(".pal-tile.is-current");
    if (activeTile) {
      activeTile.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  // Render Practice Tab
  function renderPractice() {
    populateQuickTopicSelect();

    if (state.topicFilterValue) {
      elActiveTopicChip.classList.remove("hidden");
      elActiveTopicChip.textContent = `${state.topicFilterValue} ✕`;
    } else {
      elActiveTopicChip.classList.add("hidden");
    }

    elBtnRandomSet.classList.toggle("active", !!state.randomIds);
    elBtnRandomSet.textContent = state.randomIds ? "🎲 Random 20 (Exit)" : "🎲 Random 20";
    elBtnLayoutToggle.textContent = state.layout === "single" ? "List View" : "Single Card";

    const filtered = getFilteredQuestions();
    renderPalette(filtered);

    if (filtered.length === 0) {
      elQuestionArea.innerHTML = `
        <div class="empty-box">
          <h3>No questions match your current filter</h3>
          <p style="margin-top:6px;">Try clearing the topic or switching the filter back to All Questions.</p>
          <button class="btn btn-primary" style="margin-top:14px;" id="btnResetPracticeFilters">Reset Filters</button>
        </div>
      `;
      document.getElementById("btnResetPracticeFilters").addEventListener("click", () => {
        state.scope = getCurrentSubject().has_priority_categories ? "KEEP" : "ALL";
        state.status = "ALL";
        state.topicFilterType = null;
        state.topicFilterValue = null;
        state.search = "";
        state.randomIds = null;
        elScopeSelect.value = state.scope;
        elStatusSelect.value = "ALL";
        elSearchInput.value = "";
        render();
      });
      return;
    }

    if (state.index >= filtered.length) {
      state.index = Math.max(0, filtered.length - 1);
    }

    if (state.layout === "single") {
      const q = filtered[state.index];
      const pagerHtml = `
        <div class="pager">
          <button class="btn btn-outline" id="btnPrev" ${state.index === 0 ? "disabled" : ""}>← Previous</button>
          <span class="pager-info">Question ${state.index + 1} of ${filtered.length}</span>
          <div class="pager-btns">
            <button class="btn btn-outline" id="btnSurprise" title="Jump to a random question">🎲 Jump</button>
            <button class="btn btn-primary" id="btnNext" ${state.index >= filtered.length - 1 ? "disabled" : ""}>Next →</button>
          </div>
        </div>
      `;
      elQuestionArea.innerHTML = renderCard(q, state.index, filtered.length) + pagerHtml;

      document.getElementById("btnPrev").addEventListener("click", () => {
        if (state.index > 0) {
          state.index--;
          renderPractice();
        }
      });
      document.getElementById("btnNext").addEventListener("click", () => {
        if (state.index < filtered.length - 1) {
          state.index++;
          renderPractice();
        }
      });
      document.getElementById("btnSurprise").addEventListener("click", () => {
        if (filtered.length > 1) {
          let next = state.index;
          while (next === state.index) next = Math.floor(Math.random() * filtered.length);
          state.index = next;
          renderPractice();
        }
      });
    } else {
      elQuestionArea.innerHTML = filtered.map((q, idx) => renderCard(q, idx, filtered.length)).join("");
    }
  }

  // Render Topics Tab
  function renderTopics() {
    const subj = getCurrentSubject();
    const prog = getSubjProgress();
    const query = state.topicSearch.trim().toLowerCase();
    const scopeFilter = subj.has_priority_categories ? state.topicScopeFilter : "ALL";

    const groups = new Map();
    for (const q of subj.questions) {
      if (scopeFilter !== "ALL" && q.category !== scopeFilter) continue;
      const key = state.topicGroupMode === "syllabus" ? q.syllabus_topic : q.topic;
      if (!groups.has(key)) {
        groups.set(key, { name: key, questions: [], categories: new Set() });
      }
      const g = groups.get(key);
      g.questions.push(q);
      g.categories.add(q.category);
    }

    const entries = Array.from(groups.values()).filter((g) => !query || g.name.toLowerCase().includes(query));
    entries.sort((a, b) => {
      const na = parseInt(a.name, 10) || 999;
      const nb = parseInt(b.name, 10) || 999;
      return na - nb || a.name.localeCompare(b.name);
    });

    if (entries.length === 0) {
      elTopicsGrid.innerHTML = '<div class="empty-box" style="grid-column:1/-1">No matching topics found.</div>';
      return;
    }

    elTopicsGrid.innerHTML = entries
      .map((g) => {
        const total = g.questions.length;
        let done = 0;
        let right = 0;
        for (const q of g.questions) {
          const a = prog.attempts[q.id];
          if (a) {
            done++;
            if (a === q.correct_answer) right++;
          }
        }
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        const primaryCat = g.categories.size === 1 ? Array.from(g.categories)[0] : null;
        const badgeHtml =
          subj.has_priority_categories && primaryCat
            ? `<span class="tag tag-${primaryCat}">${primaryCat}</span>`
            : "";

        return `
          <button class="topic-card" data-tmode="${state.topicGroupMode}" data-tname="${escapeAttr(g.name)}">
            <div class="topic-card-top">
              <span class="topic-card-title">${escapeHtml(g.name)}</span>
              ${badgeHtml}
            </div>
            <div class="topic-card-sub">
              <span>${done} / ${total} attempted</span>
              <span>${done > 0 ? `${Math.round((right / done) * 100)}% accuracy` : "Start →"}</span>
            </div>
            <div class="progress-track">
              <div class="progress-bar" style="width:${pct}%"></div>
            </div>
          </button>
        `;
      })
      .join("");
  }

  // Render Overview & Syllabus Tab
  function renderOverview() {
    const subj = getCurrentSubject();
    const prog = getSubjProgress();

    let attempted = 0;
    let correct = 0;
    let incorrect = 0;
    let marked = 0;
    const bookmarkedQuestions = [];

    for (const q of subj.questions) {
      const a = prog.attempts[q.id];
      if (a) {
        attempted++;
        if (a === q.correct_answer) correct++;
        else incorrect++;
      }
      const hasNote = !!(prog.notes && prog.notes[q.id]);
      if (prog.marked[q.id] || hasNote) {
        marked++;
        bookmarkedQuestions.push(q);
      }
    }

    const acc = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    const notesReviewHtml =
      bookmarkedQuestions.length > 0
        ? `
          <div class="overview-panel">
            <h3>★ Bookmarked Questions &amp; Personal Notes (${bookmarkedQuestions.length})</h3>
            <div class="notes-review-list">
              ${bookmarkedQuestions
                .map((q) => {
                  const note = (prog.notes && prog.notes[q.id]) || "";
                  return `
                    <div class="notes-review-item js-jump-qid" data-qid="${q.id}">
                      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
                        <span><strong>#${q.id}</strong> • <span class="tag tag-topic">${escapeHtml(q.topic)}</span></span>
                        <span style="font-size:0.76rem;color:var(--primary);font-weight:600;">Open Question →</span>
                      </div>
                      <div style="font-size:0.88rem;font-weight:600;">${escapeHtml(q.question.split("\n")[0])}</div>
                      ${
                        note
                          ? `<div style="font-size:0.83rem;color:var(--selective);background:var(--selective-soft);padding:6px 10px;border-radius:6px;">📝 ${escapeHtml(
                              note
                            )}</div>`
                          : `<div style="font-size:0.78rem;color:var(--text-muted);">No note added yet — click to open and add a note.</div>`
                      }
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        `
        : "";

    const scopeNoteHtml = subj.has_priority_categories
      ? `
        <div class="overview-panel">
          <h3>Preparation Priority Plan (${escapeHtml(subj.name)})</h3>
          <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:10px;">
            • <strong>${subj.counts.KEEP} KEEP</strong>: Main practice bank — solve these first alongside your assignments.<br/>
            • <strong>${subj.counts.SELECTIVE} SELECTIVE</strong>: Lower-priority or dialect-specific — solve after the main bank.<br/>
            • <strong>${subj.counts.REMOVE} REMOVE</strong>: Excluded from current revision scope.<br/>
            • <strong>Note on SQL Comments (#227–#236)</strong>: Contains stored-procedure questions — do not discard blindly.<br/>
            • <strong>MySQL Dialect Caveat</strong>: Retain your faculty's exact MySQL syntax for procedures, functions, and triggers.
          </p>
        </div>
      `
      : "";

    const syllabusHtml = subj.syllabus_markdown
      ? `
        <div class="overview-panel">
          <h3>Complete Course Syllabus &amp; Master Topic Index</h3>
          <div class="syllabus-box">${escapeHtml(subj.syllabus_markdown)}</div>
        </div>
      `
      : "";

    elOverviewContent.innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-card-label">Attempted</span>
          <span class="stat-card-num">${attempted} <span style="font-size:0.9rem;color:var(--text-muted);font-weight:500;">/ ${subj.total_questions}</span></span>
        </div>
        <div class="stat-card">
          <span class="stat-card-label">Accuracy</span>
          <span class="stat-card-num" style="color:var(--keep)">${acc}%</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-label">Incorrect</span>
          <span class="stat-card-num" style="color:var(--remove)">${incorrect}</span>
          ${
            incorrect > 0
              ? `<div style="display:flex;gap:6px;margin-top:4px;">
                  <button class="btn btn-outline" id="btnOverviewPracticeWrong" style="padding:4px 8px;font-size:0.76rem;">Practice (${incorrect})</button>
                  <button class="btn btn-outline" id="btnOverviewClearWrong" style="padding:4px 8px;font-size:0.76rem;">Retry All</button>
                </div>`
              : ""
          }
        </div>
        <div class="stat-card">
          <span class="stat-card-label">★ Bookmarked</span>
          <span class="stat-card-num" style="color:var(--selective)">${marked}</span>
          ${
            marked > 0
              ? `<div style="margin-top:4px;">
                  <button class="btn btn-outline" id="btnOverviewPracticeMarked" style="padding:4px 8px;font-size:0.76rem;">Practice (${marked})</button>
                </div>`
              : ""
          }
        </div>
      </div>

      ${notesReviewHtml}
      ${scopeNoteHtml}
      ${syllabusHtml}

      <div class="overview-panel">
        <h3>Adding More Subjects Later</h3>
        <p style="font-size:0.86rem;color:var(--text-muted);">
          To add another subject (e.g. Python, OS, Linux, Big Data), run:<br/>
          <code>python scraper.py &lt;SavedHTMLFolder&gt; --subject "Python" -o python_questions.json</code><br/>
          <code>python generate_web_data.py</code><br/>
          It will automatically sync to MongoDB and appear in the top-left Subject dropdown.
        </p>
        <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
          <button class="btn btn-outline" id="btnExport">Export Progress JSON</button>
          <label class="btn btn-outline" style="cursor:pointer;">
            Import Progress JSON
            <input type="file" id="inputImport" accept=".json" hidden />
          </label>
          <button class="btn btn-outline" id="btnResetSubj" style="color:var(--remove);border-color:var(--remove);">
            Reset ${escapeHtml(subj.name)} Progress
          </button>
        </div>
      </div>
    `;

    elOverviewContent.querySelectorAll(".js-jump-qid").forEach((item) => {
      item.addEventListener("click", () => {
        const targetQid = parseInt(item.dataset.qid, 10);
        state.scope = "ALL";
        state.status = "ALL";
        state.topicFilterType = null;
        state.topicFilterValue = null;
        state.randomIds = null;
        elScopeSelect.value = "ALL";
        elStatusSelect.value = "ALL";
        const all = getCurrentSubject().questions;
        const idx = all.findIndex((q) => q.id === targetQid);
        state.index = idx >= 0 ? idx : 0;
        state.openNoteQids.add(targetQid);
        switchTab("practice");
      });
    });

    const btnWrong = document.getElementById("btnOverviewPracticeWrong");
    if (btnWrong) {
      btnWrong.addEventListener("click", () => {
        state.scope = "ALL";
        state.status = "INCORRECT";
        state.topicFilterType = null;
        state.topicFilterValue = null;
        state.randomIds = null;
        state.index = 0;
        elScopeSelect.value = "ALL";
        elStatusSelect.value = "INCORRECT";
        switchTab("practice");
      });
    }

    const btnClearWrong = document.getElementById("btnOverviewClearWrong");
    if (btnClearWrong) {
      btnClearWrong.addEventListener("click", () => {
        for (const q of subj.questions) {
          if (prog.attempts[q.id] && prog.attempts[q.id] !== q.correct_answer) {
            delete prog.attempts[q.id];
          }
        }
        saveStore(true);
        render();
      });
    }

    const btnMarked = document.getElementById("btnOverviewPracticeMarked");
    if (btnMarked) {
      btnMarked.addEventListener("click", () => {
        state.scope = "ALL";
        state.status = "MARKED";
        state.topicFilterType = null;
        state.topicFilterValue = null;
        state.randomIds = null;
        state.index = 0;
        elScopeSelect.value = "ALL";
        elStatusSelect.value = "MARKED";
        switchTab("practice");
      });
    }

    document.getElementById("btnExport").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "practicehub_progress.json";
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("inputImport").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          if (parsed && parsed.bySubject) {
            store.bySubject = mergeSubjectObjects(store.bySubject, parsed.bySubject);
            saveStore(false);
            render();
          }
        } catch (err) {
          alert("Invalid progress JSON file.");
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("btnResetSubj").addEventListener("click", () => {
      if (confirm(`Reset all attempts, bookmarks, and notes for ${subj.name}?`)) {
        store.bySubject[state.subjectId] = { attempts: {}, marked: {}, notes: {} };
        saveStore(true);
        render();
      }
    });
  }

  function switchTab(tabName) {
    state.tab = tabName;
    elMainNavTabs.querySelectorAll(".nav-tab").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tabName);
    });
    elViewPractice.classList.toggle("hidden", tabName !== "practice");
    elViewTopics.classList.toggle("hidden", tabName !== "topics");
    elViewOverview.classList.toggle("hidden", tabName !== "overview");
    render();
  }

  function syncTopicModeButtons() {
    elTopicGroupMode.querySelectorAll(".seg-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.mode === state.topicGroupMode);
    });
  }

  function render() {
    updateHeaderScore();
    if (state.tab === "practice") renderPractice();
    else if (state.tab === "topics") renderTopics();
    else renderOverview();
  }

  // Event Listeners
  elSubjectSelect.addEventListener("change", () => {
    state.subjectId = elSubjectSelect.value;
    state.topicFilterType = null;
    state.topicFilterValue = null;
    state.randomIds = null;
    state.index = 0;
    syncSubjectControls();
    render();
  });

  elMainNavTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-tab");
    if (!btn) return;
    switchTab(btn.dataset.tab);
  });

  elScopeSelect.addEventListener("change", () => {
    state.scope = elScopeSelect.value;
    state.randomIds = null;
    state.index = 0;
    renderPractice();
  });

  elStatusSelect.addEventListener("change", () => {
    state.status = elStatusSelect.value;
    state.index = 0;
    renderPractice();
  });

  elActiveTopicChip.addEventListener("click", () => {
    state.topicFilterType = null;
    state.topicFilterValue = null;
    state.index = 0;
    renderPractice();
  });

  elQuickTopicSelect.addEventListener("change", () => {
    const val = elQuickTopicSelect.value;
    state.randomIds = null;
    state.index = 0;
    if (val === "ALL") {
      state.topicFilterType = null;
      state.topicFilterValue = null;
    } else {
      const [tType, ...rest] = val.split("::");
      state.topicFilterType = tType;
      state.topicFilterValue = rest.join("::");
    }
    renderPractice();
  });

  elSearchInput.addEventListener("input", () => {
    state.search = elSearchInput.value;
    state.randomIds = null;
    state.index = 0;
    renderPractice();
  });

  elBtnRandomSet.addEventListener("click", () => {
    if (state.randomIds) {
      state.randomIds = null;
      state.index = 0;
      renderPractice();
      return;
    }
    const pool = getFilteredQuestions();
    if (pool.length === 0) return;
    const copy = [...pool];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    state.randomIds = copy.slice(0, 20).map((q) => q.id);
    state.index = 0;
    renderPractice();
  });

  elBtnLayoutToggle.addEventListener("click", () => {
    state.layout = state.layout === "single" ? "list" : "single";
    renderPractice();
  });

  elBtnTogglePalette.addEventListener("click", () => {
    state.showPalette = !state.showPalette;
    renderPractice();
  });

  // Side Panel Question Grid Click
  elPaletteGrid.addEventListener("click", (e) => {
    const tile = e.target.closest(".pal-tile");
    if (!tile) return;
    const idx = parseInt(tile.dataset.idx, 10);
    const qid = parseInt(tile.dataset.qid, 10);
    state.index = idx;

    if (state.layout === "single") {
      renderPractice();
    } else {
      const cardEl = document.getElementById(`qcard-${qid}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  elBtnJumpUnattempted.addEventListener("click", () => {
    const filtered = getFilteredQuestions();
    const prog = getSubjProgress();
    if (filtered.length === 0) return;

    for (let offset = 1; offset <= filtered.length; offset++) {
      const candidateIdx = (state.index + offset) % filtered.length;
      const q = filtered[candidateIdx];
      if (!prog.attempts[q.id]) {
        state.index = candidateIdx;
        if (state.layout === "single") {
          renderPractice();
        } else {
          const cardEl = document.getElementById(`qcard-${q.id}`);
          if (cardEl) cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }
    }
  });

  // Delegated clicks & note input inside Question Area
  elQuestionArea.addEventListener("click", (e) => {
    const prog = getSubjProgress();

    const optRow = e.target.closest(".opt-row");
    if (optRow) {
      const qid = parseInt(optRow.dataset.qid, 10);
      prog.attempts[qid] = optRow.dataset.opt;
      saveStore(false);
      updateHeaderScore();
      renderPractice();
      return;
    }

    const bmBtn = e.target.closest(".js-bookmark");
    if (bmBtn) {
      const qid = parseInt(bmBtn.dataset.qid, 10);
      if (prog.marked[qid]) {
        delete prog.marked[qid];
        delete prog.notes[qid];
        state.openNoteQids.delete(qid);
        saveStore(true);
      } else {
        prog.marked[qid] = true;
        state.openNoteQids.add(qid);
        saveStore(false);
      }
      renderPractice();
      return;
    }

    const noteBtn = e.target.closest(".js-toggle-note");
    if (noteBtn) {
      const qid = parseInt(noteBtn.dataset.qid, 10);
      if (state.openNoteQids.has(qid) && !prog.marked[qid] && !prog.notes[qid]) {
        state.openNoteQids.delete(qid);
      } else {
        state.openNoteQids.add(qid);
        prog.marked[qid] = true;
        saveStore(false);
      }
      renderPractice();
      const textarea = elQuestionArea.querySelector(`.js-note-input[data-qid="${qid}"]`);
      if (textarea) textarea.focus();
      return;
    }

    const retryBtn = e.target.closest(".js-retry-one");
    if (retryBtn) {
      const qid = parseInt(retryBtn.dataset.qid, 10);
      delete prog.attempts[qid];
      saveStore(true);
      updateHeaderScore();
      renderPractice();
      return;
    }
  });

  elQuestionArea.addEventListener("input", (e) => {
    const noteInput = e.target.closest(".js-note-input");
    if (!noteInput) return;
    const qid = parseInt(noteInput.dataset.qid, 10);
    const val = noteInput.value.trim();
    const prog = getSubjProgress();

    if (val) {
      prog.notes[qid] = val;
      prog.marked[qid] = true;
    } else {
      delete prog.notes[qid];
    }

    const statusEl = document.getElementById(`note-status-${qid}`);
    if (statusEl) statusEl.textContent = "Saving...";

    clearTimeout(noteSaveTimer);
    noteSaveTimer = setTimeout(() => {
      saveStore(!val);
      if (statusEl) statusEl.textContent = "Saved to MongoDB ✓";
      renderPalette(getFilteredQuestions());
    }, 350);
  });

  // Topics Tab Events
  elTopicGroupMode.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg-btn");
    if (!btn) return;
    state.topicGroupMode = btn.dataset.mode;
    syncTopicModeButtons();
    renderTopics();
  });

  elTopicScopeFilter.addEventListener("change", () => {
    state.topicScopeFilter = elTopicScopeFilter.value;
    renderTopics();
  });

  elTopicSearchInput.addEventListener("input", () => {
    state.topicSearch = elTopicSearchInput.value;
    renderTopics();
  });

  elTopicsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".topic-card");
    if (!card) return;
    const tmode = card.dataset.tmode;
    const tname = card.dataset.tname;

    state.topicFilterType = tmode;
    state.topicFilterValue = tname;
    state.randomIds = null;
    state.index = 0;

    const subj = getCurrentSubject();
    if (subj.has_priority_categories) {
      const matching = subj.questions.filter((q) =>
        tmode === "syllabus" ? q.syllabus_topic === tname : q.topic === tname
      );
      if (matching.length > 0 && !matching.some((q) => matchesScope(q, state.scope))) {
        state.scope = "ALL";
        elScopeSelect.value = "ALL";
      }
    }
    switchTab("practice");
  });

  // Keyboard shortcuts in Single Card Practice Mode
  document.addEventListener("keydown", (e) => {
    if (state.tab !== "practice" || state.layout !== "single") return;
    if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;

    const filtered = getFilteredQuestions();
    if (filtered.length === 0) return;
    const q = filtered[state.index];
    if (!q) return;

    const prog = getSubjProgress();
    const key = e.key.toUpperCase();
    const numMap = { "1": "A", "2": "B", "3": "C", "4": "D" };
    const letter = numMap[key] || (["A", "B", "C", "D"].includes(key) ? key : null);

    if (letter && q.options[letter] !== undefined) {
      e.preventDefault();
      prog.attempts[q.id] = letter;
      saveStore(false);
      updateHeaderScore();
      renderPractice();
    } else if (e.key === "ArrowRight" || key === "N") {
      if (state.index < filtered.length - 1) {
        e.preventDefault();
        state.index++;
        renderPractice();
      }
    } else if (e.key === "ArrowLeft" || key === "P") {
      if (state.index > 0) {
        e.preventDefault();
        state.index--;
        renderPractice();
      }
    } else if (key === "M") {
      e.preventDefault();
      if (prog.marked[q.id]) {
        delete prog.marked[q.id];
        delete prog.notes[q.id];
        state.openNoteQids.delete(q.id);
        saveStore(true);
      } else {
        prog.marked[q.id] = true;
        state.openNoteQids.add(q.id);
        saveStore(false);
      }
      renderPractice();
    }
  });

  // Theme Toggle
  function applyTheme() {
    document.body.classList.toggle("dark", store.theme === "dark");
    elBtnTheme.textContent = store.theme === "dark" ? "☀️" : "🌙";
  }

  elBtnTheme.addEventListener("click", () => {
    store.theme = store.theme === "dark" ? "light" : "dark";
    saveStore(false);
    applyTheme();
  });

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  applyTheme();
  initSubjects();
  render();
  loadFromServer();
})();

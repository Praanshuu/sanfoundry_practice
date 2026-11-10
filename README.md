# Sanfoundry Question Scraper

A minimal Python tool that extracts multiple-choice questions, options, answers, and explanations from Sanfoundry subject/topic pages (or locally saved HTML pages) and exports them to a structured JSON file.

## Features

- Extracts question stems, multiple-choice options (`A`, `B`, `C`, `D`, ...), correct answers, and explanations.
- Follows pagination links (`rel="next"`) and discovers topic pages from subject hub pages (e.g., `1000-python-questions-answers`).
- Prevents infinite pagination loops and skips duplicate questions across pages.
- Supports both live URLs and locally saved HTML files or directories.
- Respects `robots.txt`, applies polite request delays, reports actual HTTP errors, and stops gracefully if a Cloudflare/anti-bot challenge is encountered.

## Project Structure

```text
.
├── scraper.py          # CLI entry point, pagination loop, deduplication, and JSON export
├── parser.py           # HTML parser for Sanfoundry question pages and hub pages
├── fetcher.py          # Polite HTTP client with robots.txt and challenge detection
├── requirements.txt    # Python dependencies (requests, beautifulsoup4)
├── README.md           # Documentation
└── tests/
    ├── test_scraper.py # Automated test suite
    └── fixtures/       # Representative Sanfoundry HTML fixtures
```

## Installation

Requires Python 3.10+.

```bash
pip install -r requirements.txt
```

## Usage

### 1. Scrape from a Sanfoundry URL

```bash
python scraper.py https://www.sanfoundry.com/1000-python-questions-answers/ -o questions.json
```

Optional flags:

- `-o, --output <path>`: Output JSON file path (default: `questions.json`).
- `-s, --subject <name>`: Explicitly set the subject name (inferred automatically from the page title or URL if omitted).
- `--max-pages <int>`: Maximum number of pages to process (default: `50`).
- `--max-questions <int>`: Stop after collecting this many unique questions.
- `--delay <float>`: Polite delay in seconds between HTTP requests (default: `2.0`).
- `--no-pagination`: Only parse the provided target(s) without following pagination or hub links.
- `--same-topic-only`: Only follow `Next` links that stay within the same topic series.

### 2. Parse Locally Saved HTML Pages

If automated HTTP requests from your network are blocked by Cloudflare, open the desired Sanfoundry page(s) in your browser, save them as HTML, and pass the file(s) or folder to `scraper.py`:

```bash
python scraper.py tests/fixtures/mapreduce_dev_2.html -o questions.json
```

Or pass multiple files / a directory of `.html` files:

```bash
python scraper.py tests/fixtures/ -o questions.json
```

## Output JSON Format

```json
{
  "subject": "Python",
  "source": "Sanfoundry",
  "total_questions": 2,
  "questions": [
    {
      "id": 1,
      "topic": "Python Basics",
      "question": "Which of the following is a Python data type?",
      "options": {
        "A": "int",
        "B": "float",
        "C": "list",
        "D": "All of the above"
      },
      "correct_answer": "D",
      "explanation": "Explanation if available",
      "source_url": "https://example.com/question"
    }
  ]
}
```

## Running Tests

Run the test suite from the repository root:

```bash
python -m unittest discover -s tests -v
```

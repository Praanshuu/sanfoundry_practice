import re
s="Something is there somewhere"
ob=re.search("s.*?e",s,re.I|re.M)
if ob!=None:
    print(ob.group())
    print(ob.span())
else:
    print("not found")

import re
s="Something is there somewhere"
ob=re.match("s.*?e",s,re.I|re.M)
if ob!=None:
    print(ob.group())
    print(ob.span())
else:
    print("not found")
    

s="Something is there somewhere"
ob=re.search("t.*?e",s,re.I|re.M)
if ob!=None:
    print(ob.group())
    print(ob.span())
else:
    print("not found")


s="Something is there somewhere"
ob=re.match("t.*?e",s,re.I|re.M)
if ob!=None:
    print(ob.group())
    print(ob.span())
else:
    print("not found")
    
    
    
import re
s="Something is there somewhere"
lst=re.findall("s.*?e",s,re.I|re.M)
if lst!=None:
    print(lst)
else:
    print("not found")

import re
s="Something is there somewhere"
lst=re.finditer("s.*?e",s,re.I|re.M)
if lst!=None:
    for ob in lst:
        print(ob.group())
        print(ob.span())
else:
    print("not found")
    
    
s="Something is there somewhere"
newstr=re.sub("s.*?e","XXXXXXXX",s,flags=re.I|re.M,count=1)
print(newstr)

myreg=re.compile("s.*?e",re.I|re.M)
m=myreg.search(s)
if m!=None:
    print(m.group())
    print(m.span())
else:
    print("not found")


s="This is string"
m=re.search("^(\w+)\s\w+\s$(\w+)",s)
if m!=None:
    print(m.group())
    print(m.group(1))
    print(m.group(2))

acno="XXXXXXXX1234XXXX"
m=re.search("^X{8}(\d{4})X{4}$")
if m!=None:
    print(m.group(1))
    
s="what is status of #1234 "
s="is flight #454567 is on time"








    
    
    
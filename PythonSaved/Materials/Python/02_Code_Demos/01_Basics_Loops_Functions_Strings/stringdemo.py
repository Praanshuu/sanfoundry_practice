s="This is string"
print("length",len(s))
print("revesrse",s[::-1])
print("even index ",s[::2])

s="There is cat, this my cat, your cat is cute"
print(s.find('cat'))
print(s.find('cat',10))
print(s.find('cat',23))
print(s.find('cat',33))


print(s.rfind('cat'))
print(s.rfind('cat',0,31))
print(s.rfind('cat',0,21))
print(s.rfind('cat',0,8))


print(s.index('cat'))
print(s.index('dog'))
print(s.rindex('cat'))
print(s.rindex('dog'))


i=0
while True:
    i=s.find('cat',i)
    if i==-1:
        break
    print(i)
    i=i+1
    
pos=s.find('cat')
while pos!=-1:
    print("pos : ",pos)
    pos=s.find('cat',pos+1)


pos=s.rfind('cat')
while  pos!=-1:
    print("pos : ",pos)
    pos=s.rfind('cat',0,pos)  
    

s="aaa   bab  This is string bbxxxaaa"
print(s.strip('a bx'))
print(s.lstrip('a bx'))
print(s.rstrip('a bx'))
    
s="home sweet home, is my home"
print(s.split(" "))

s=input("enter data")
lst=s.split(",")
for w in lst:
    print(w)
    
print(" ".join(lst))

s="rain in SPAIN is in plain"
print(s.replace("ain",'xxxxxxx',count=1))



s="asd12345"
print(s.isdecimal())

print(s.isalnum())
print(s.isalpha())
print(s.count("s"))











x="Hello"
y="Hello"
print(id(x),id(y))
print(x is y)
y="welcome"
print(id(x),id(y))
z=y
print(id(z),id(y))
s=input("enetr string")
print(id(z),id(y),id(s))

lst=[12,13,14,15]
lst1=lst
print(lst,lst1)
lst2=lst.copy() #shallow copy
lst.append(100)
#lst2 will no show 100
print(lst,lst1,lst2)




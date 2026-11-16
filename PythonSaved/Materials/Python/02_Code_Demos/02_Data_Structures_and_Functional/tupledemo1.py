a=1,2,3
a1=(3,"ccc",67)
'''
x=a[0]
y=a[1]
z=a[2]
'''
x,y,z=a
print(x,y,z)
print(a)

def myf1(a=34,b=45):
    a=a+12
    b=b+20
    return a,b
    
    
x=45
y=4
p,q=myf1(x,y)


def addition(a=6,b=7,*t):
    print(a,b,t)
    s=a+b
    for num in t:
        s+=num
    return s










addition(12,34)
addition(1,2,4,23,45,7,8)




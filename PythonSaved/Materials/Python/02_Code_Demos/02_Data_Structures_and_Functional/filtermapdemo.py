lst=[12,13,14,12,10,5,7]
lst2=[]
for num in lst:
    if num%2==0:
        lst2.append(num)

print(lst2)

#list comprehension operator
lst21=[num for num in lst if num%2==0]

#filter(function,iterable) function should return True /False

    
lst211=list(filter(lambda x:x%2==0 ,lst))


lst3=[]
for num in lst:
    lst3.append(num*num)
    
lst31=[num*num for num in lst]

lst32=list(map(lambda a:a*a,lst))

from functools import reduce
s=reduce(lambda acc,num:acc+num,lst)
print("Sum: ",s)

s1=sum(lst)



lst=['Pune','Mumbai','Banglore','Delhi']

s=reduce(lambda x,y:x if len(x)>len(y) else y)

#Concatenate only 1 st 3 letters of all string


st=reduce(lambda x,y:x+y[0:3],lst,'')
print(st)






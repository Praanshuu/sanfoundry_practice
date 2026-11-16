lst=[12,'xxx',2,3,[10,20]]
lst=[12,13,14,10,4,5,23,12,13]
for num in lst:
    print(num,end=" ")
    
#add single value at the end
lst.append(12)
lst.append("xxxx")
print(lst)

#add multiple values at the end
lst.extend([1,2,3,45,5])
lst.extend("dfghjk")
#add value at specific position
lst.insert(4,23)
#find position of 1 st occurence
#throws exception if not found
print(lst.index(23))
print(lst.index(100))

#delete data from list
lst.pop()
#deletes the 1 st occurance if found
#otherwise throw exception
if 23 in lst:
   lst.remove(23)
#overwrite value at 3 rd position
lst[3]=45
#inplace reverse
lst.reverse()
print(lst)
#inplece sor data in ascending order
lst.sort()
print(lst)
#sort in descending order
lst.sort(reverse=True)




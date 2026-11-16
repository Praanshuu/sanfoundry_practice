lst=[1,2,3,410,23,23,12,23,2,]
for num in sorted(lst):
    print(num)
    
for num in sorted(lst,reverse=True):
    print(num) 
    
for num in reversed(lst):
    print(num)
    
n=23

for idx,num in enumerate(lst): #[(0,1),(1,2),(2,3)]
    if num==n:
        print( idx)
        
lst=["Pune","mumbai","Delhi","Banglore","Nashik"]
for idx,city in enumerate(lst,1):
    print(f"{idx}) {city}")
    
lst1=[10,20,30,40]
for num,city in zip(lst1,lst):
    print(f"{num}------>{city}")
    
   
     

    
    
    
    
   

    








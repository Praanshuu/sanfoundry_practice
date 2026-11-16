#https://codeshare.io/alV70y
lst=[("Java",200,150),("cpp",180,200)]
def addnewcourse():
    nm=input("enetr name")
    duration=int(input("enetr duration"))
    capacity=int(input("enter capacity"))
    lst.append((nm,duration,capacity))
    return True

def displayAll(clst=lst):
    for c,d,cap in clst:
        print(f"{c}---->{d}---->{cap}")
        
def displayByCapacity(c):
    clist=[]
    for course in lst:
        if course[2]>c:
           clist.append(c)
    if len(clist)>0:
        return clist
    else:
        return None
def deleteByName(nm):
    for course in lst:
        if course[0]==nm:
            lst.remove(course)
            return True
    return False
            
            
            
choice=0
while choice!=9:
    choice=int(input("""
                     1. add new course
                     2. delete course by name
                     3. display all
                     4. display by capacity
                     5. display by duration
                     6. sort on duration
                     7.sort on capacity
                     8. modify course duration and capacity
                     9.exit"""))
    match choice:
        case 1:
            status=addnewcourse()
            if status:
                print("course added successfully")
            else:
                print("Error occured")
        case 2:
            nm=input("enetr name to delete")
            status=deleteByName(nm)
            if status:
                print("Deleted successfully")
            else:
                print("Not found")
                
        case 3:
            displayAll()
            
        case 4:
            c=int(input("enter capacity"))
            lstcap=displayByCapacity(c)
            if lstcap!=None:
                displayAll(lstcap)
            
            pass
        case 5:
            pass
        case 6:
            pass
        case 7:
            pass
        case 8:
            pass
        case 9:
            print("Thank you for visiting......")
            
        case _:
            print("wrong choice")
                
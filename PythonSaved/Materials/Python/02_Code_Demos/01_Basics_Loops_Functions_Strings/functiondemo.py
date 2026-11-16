import sys
def checkPrime(n):
    for i in range(2,n):
        if n%i==0:
            return False
    return True

choice=0
while choice!=7:
    choice=int(input("""
                     1. find factorial
                     2. check prime number
                     3. print table
                     4. find digit addition
                     5. find maximum of 3 numbers
                     6. display only odd numbers
                     7.exit
                     
                     """))
    match choice:
        case 1:
            pass
        case 2:
            num=int(input("enter a number"))
            status=checkPrime(num)
            if status:
                print("number is prime",num)
            else:
                print("number is not prime",num)
        case 3:
            pass
        case 4:
            pass
        case 5:
            pass
        case 6:
            pass
        case 7:
            print("Thank you for visiting the code.......")
            #sys.exit(0)
        case _:
            print("wrong choice")
                     
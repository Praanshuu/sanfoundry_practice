def f1(x=10):
    '''
       this is function1 accepts 1 parameter
       and display message
    '''
    print("in f1",x)

def f2():
    '''
     this is f2 ,it displays message
    '''
    print("in f2")

if __name__=='__main__':
    f1(100)
    f1()
    f2()
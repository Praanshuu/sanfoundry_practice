'''import module1
print("in usemodule1")
module1.f1()
module1.f2()
'''


#import sys
#sys.path.append(r'd:\pythonmodule')
'''
import module1 as m1
import mypackage.module11 as m11
import mypackage.module21 as m21
m1.f1()
m1.f2()
m11.f12()
m21.f21()
'''

from module1 import f1,f2
from mypackage.module11 import *
f11()
f12()



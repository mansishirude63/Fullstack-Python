print("Hellow world")

name = "Mansi"
age = 17
print("my name is", name ,". and my age is ", age)

# arithmetic operators  

x = 10 
y = 5
print("addition is : ", x+y)
print("Subtraction is : ", x- y)
print("Multiplication is : ", x*y)
print("Division is : ", x/y)
print("floor division is : ", x//y)
print("Modulus is : ", x%y)
print("Square of x : ", x**2)
print("Square of y : ", y**2)


# Comparison operators 

# ==, >, >=, , <, <=, != 

# logical operators 

# and or not 

# check odd or Even 

num1 = int(input("Enter the number to check even or odd : "))
if(num1 % 2 == 0):
    print("Even number")
else:
    print("Odd number")


marks = int(input("Enter marks to check grade : "))

if(marks >= 75):
    print("A grade")
elif(marks <75 and marks >= 60):
    print("B Grade")
elif(marks <60 and marks >= 35):
    print("C grade")
else:
    print("Fail")


pAmount=10000 ; rateOfInt =7  ; durat =13 
simpleInterest  = (pAmount * rateOfInt * durat) /100
print(simpleInterest) 

# Food Delivery App Discount 

# orderAMT 
# Membership  

# Member  , order > 1000 
# dis 20% 

# Member , order >500 
# dis 10% 

# non-member order >5000 
# dis 5% 

# otherwise 
# no discount 

isMember =True; order=2000
if(isMember and order >1000):
    orderAmount =order
    Discount= order*0.2
    FinalBill= orderAmount -  Discount
elif(isMember and order>500):
    orderAmount =order
    Discount= order*0.1
    FinalBill= orderAmount -  Discount
elif(order > 5000):
    orderAmount =order
    Discount= order*0.05
    FinalBill= orderAmount -  Discount
else:
    orderAmount = order
    FinalBill = orderAmount



# hello * 10 
for i in range(10):
    print("Hello")

for i in range(1,6):
    print(i)

for i in range(11, 21, 2):
    print(i)

for i in range(1,11):
    print(5 * i)

# sum of numbers from 11 to 20 
sum = 0
for i in range(11,21):
    sum = sum + i 
print(sum)


x = 1 
while(x<=10):
    print(x)
    x +=1 

password = ''

while password != "admin@123":
    password = input("Enter password")

print("Approved")

for i in range(10):
    if(i == 5):
        continue
# 0 1 2 3 4 6 7 8 9 

for i in range(10):
    if(i==5):
        break 
# 0 1 2 3 4 5


#             * * *
#             * * *
#             * * *

for i in range(3):
    print("* " * 3)

#             * 
#             * * 
#             * * *

for i in range(1,5):
    print("* " * i)
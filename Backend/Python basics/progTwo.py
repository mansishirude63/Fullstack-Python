# create calculator 

# Enter choice 
# 1. addition
# 2. subtraction
# 3. Multiplication
# 4. Division
# 5. Exit
def adiition(a,b):
    print("addition is : ", a+b)
def subtraction(a,b):
    print("Subtraction is : ",a-b)
def multiplication(a,b):
    print("Multiplication is : ",a*b)
def division(a,b):
    if(b == 0):
        print("Cannot divide by ZERO")
        return
    print("Division is : ", a/b)

while(True):
    print("======CALCULATOR=======")

    print("1. addition")
    print("2. subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")

    choice = int(input("Enter choice : "))

    if(choice == 5):
        print("Thank You...")
        break
    elif(choice == 1):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        adiition(num1,num2)
    elif(choice == 2):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        subtraction(num1,num2)
    elif(choice == 3):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        multiplication(num1, num2)
    elif(choice == 4):
        num1 = int(input("Enter first number : "))
        num2 = int(input("Enter second number : "))
        division(num1,num2)
    else:
        print("Enter correct choice...")
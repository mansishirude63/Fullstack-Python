# students = ["Mansi","Shreya","Dipak"]
# print(students)

# students.append("Rahi")
# print(students)

# students.remove("Dipak")
# print(students)

# for value in students:
#     print(value)

# print(students[0])
# print(students[-1])

# # students[3] = "Nikita"

# s1 = input("Enter student name : ")
# students.append(s1)
# print(students)

# # Search value from an array
# search = input("Enter student name for search : ")

# # for st in students:
# #     if(st==search):
# #         print("Found")
# #     else:
# #         print("Not Found!")

# if search in students:
#     print("Found")
# else:
#     print("Not Found!")

# colors = []
# for x in range(4):
#     c1 = input("Enter color name : ")
#     colors.append(c1)
# print(colors)

# numbers = [10,20,30,40,50]
# print(sum(numbers))
# print(len(numbers))

# sum1 = 0
# for num in numbers:
#     sum1=sum1+num
# print(sum1)
# print(max(numbers))

# # Maximum number from given list 
# maxNumber = numbers[0]
# for n in numbers:
#     if n>maxNumber:
#         maxNumber = n
# print(maxNumber)

# # Minimum number from given list 

# minNumber = numbers[0]
# for n in numbers:
#     if n<minNumber:
#         minNumber = n
# print(minNumber)


# numList = [10,10,20,30,24,40,24,40,24,30]

# getNum = int(input("Enter number for find occurences : "))
# count = 0
# for x in numList:
#     if(x == getNum):
#         count += 1
# print(getNum, "appears", count, "times")

fruits = ("Apple", "Banana","Mango")
for x in fruits:
    print(x)

fruitList = list(fruits)
print(fruits)
print(fruitList)

tupleFruitList = tuple(fruitList)
print(tupleFruitList)

n1 = (10,20)
n2 = (30,40)
n3 = (50,60)
n4 = n1+n2+n3
print(n4)

n5 = (1,2,3)
n6 = n5*3
print(n6)


# reverse tuple

n7 = (10,20,30,40,50)

revn7 = n7[::-1]
print(revn7)


# count positive num and negative num from given tuple

numbers = (3,-6,9,5,-4,-3,8,-1,-9,4)
pos = 0
neg = 0

for num in numbers:
    if(num>0):
        pos += 1
    else:
        neg +=1

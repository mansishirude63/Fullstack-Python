def addStudent():
    name = input("Enter Name Of Student : ")

    with open("students.txt", "a") as file:
        file.write(name + "\n")

    print("Student added successfully...")

def showStudents():
    try:
        with open("students.txt" , "r") as file:
            students = file.readlines()
        
        if len(students) == 0:
            print("Student not Found!")

        else:
            print("------Student List:------")
            for i, stud in enumerate(students,start=1):
              print(f"{i} {stud.strip()}")

    except FileNotFoundError:
        print("File does not exits!!")

def searchStudent():
        try:
            search = input("Enter student name to search : ")

            with open("students.txt" , "r") as file:
                students = file.readlines()

            found = False

            for stud in students:
                if stud.strip().lower() == search.lower():
                    found = True
                    break

            if found:
                print("Student Found.")
            else:
                print("Student Not Found.")

        except FileNotFoundError:
            print("File does not exist!!!")
        
    

while True:

    print("=======Student Manager=======")
    print("1. Add New Student")
    print("2. Show Student List")
    print("3. Search Student")
    print("4. Exit")

    choice = input("Enter Choice : ")

    if(choice == "4"):
        print("Exiting..")
        break

    elif(choice == "1"):
        addStudent()

    elif(choice == "2"):
        showStudents()

    elif(choice == "3"):
        searchStudent()
    
    else:
        print("Invalid Choice!")
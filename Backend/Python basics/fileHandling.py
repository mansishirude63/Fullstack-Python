file1 = open('notes.txt',"w")
file1.write("This is first line..")
file1.close()

file2 = open('notes.txt',"a")
file2.write("\nThis is second line...")
file2.close()

file3 = open('notes.txt',"r")
data = file3.read()
print(data)
file3.close()

with open("notes.txt",'r') as fileForRead:
    lines = fileForRead.readlines()
    for i, line in enumerate(lines, start=1):
        print(line.strip())
    
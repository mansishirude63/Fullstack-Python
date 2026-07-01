class Product:
    def __init__(self,id,title,price,quantity):
        self.id = id
        self.title = title
        self.price = price
        self.quantity = quantity

    def addProduct(self):
        print(f"Product '{self.title}' added successfully. ")

    def displayProduct(self):
        # print("------Display Product------")
        print("Product Title : " ,self.title)
        print("Price : " ,self.price)
        print("Quantity : " ,self.quantity,'\n')


# p1 = Product(101, "Laptop", 40000, 5 )
# p1.addProduct()

# p2 = Product(102,"Mobile", 21000, 10)
# p2.addProduct()

# productsList = []
# productsList.append(p1)
# productsList.append(p2)
# p3 = Product(103, "TV", 40000, 6 )
# productsList.append(p3)

productsList = []

NoOfProducts = int(input("Enter number of products to add : "))

for i in range(1,NoOfProducts+1):
    print("\nEnter values for product id : ", i)
    p_title = input("Enter product title : ")
    p_price = input("Enter product price : ")
    p_quantity = int(input("Enter quantity of product : "))
    p = Product(i, p_title, p_price, p_quantity)
    productsList.append(p)

print("\n====== Product List ======\n")
for p in productsList:
    p.displayProduct()


# search product by ID
found = False
searchId = int(input("Enter Product Id to search : "))
for prod in productsList:
    if(prod.id == searchId):
        found = True
        prod.displayProduct()
        break
if(not found):
    print("Product not found!")
    
# update quantity of a given product take input id

getId = int(input("Enter Id of a product whose quantity will update : "))
updateFlag = False
for p in productsList:
    if(p.id == getId):
        updateFlag = True
        qua = int(input("Enter quantity : "))
        p.quantity  = p.quantity + qua
        print("\n====== After Update Quantity ======\n")
        p.displayProduct()
if(not updateFlag):
    print("Product not found!")


# get id from user for delete
# id matches delete object from a list remove()
# display all products

getId = int(input("Enter Id of a product which you want to delete : "))
updateFlag = False
for p in productsList:
    if(p.id == getId):
        updateFlag = True
        productsList.remove(p)
        print("====== Product Deleted Successfully =======")
if(not updateFlag):
    print("Product not found")
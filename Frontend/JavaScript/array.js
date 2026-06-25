const fruits = ["Apple", "Mango", "Banana"]

console.log(typeof (fruits))
console.log(fruits)
console.log(fruits[0])
len = fruits.length
console.log(fruits[len - 1])

fruits.push("Grapes")
console.log(fruits)

fruits.unshift("Strawberry")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

console.log(fruits.slice(0, 2))



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let n = 0; n <= num.length - 1; n++) {
    console.log(num)
}

for (index in fruits) {
    console.log(fruits)
}
for (value of fruits) {
    console.log(fruits)
}

fruits.map((val, ind) => {
    console.log("I like to eat", val)
})

num.map((n, i) => {
    console.log(n * n)
})

const evenArray2 = num.filter((v, i) => v % 2 == 0)
console.log(evenArray2)
const oddArray2 = num.filter((v, i) => v % 2 != 0)
console.log(oddArray2)

products = [
    {
        id: 1,
        title: "Iphone15",
        price: 100000,
        cat: "electronics"
    },
    {
        id: 2,
        title: "Oppo",
        price: 17000,
        cat: "electronics"
    },
    {
        id: 3,
        title: "kurti",
        price: 1200,
        cat: "cloths"
    },
    {
        id: 4,
        title: "Shirts",
        price: 1000,
        cat: "cloths"
    }

]

products.filter((prod)=>prod.cat == "electronics")
console.log(prod.filter((prod) => prod.cat ==="electronics"))
minprice = 100
maxprice = 10000
products.filter((p,i)=>p.price > minprice && p.price , maxprice)
console.log(prod.filter((prod)=> prod.price >= minprice && prod.price <= maxprice))

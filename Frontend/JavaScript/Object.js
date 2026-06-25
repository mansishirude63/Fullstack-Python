const student = {
    name:"Shinchan",
    age:21,
    characters:["Messy","Harry","Himawary","Sheero"],
    timing:{
        monday:"10AM",
        sunday:"8AM"
    },
    greet:function(){
        return "Hello" +this.name
    }
}
console.log(typeof(student))
console.log(student.name)
console.log(student.characters[1])
console.log(student.timing.monday)
console.log(student.timing.sunday)
console.log(student.greet())
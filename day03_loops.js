// LOOPS

// 1) FOR LOOP 
console.log("FOR LOOP")
for(let i=0; i <= 5; i++){
    console.log(i)
}
    
// 2) FOR OF LOOP
console.log("FOR OF LOOP")
const iterable = [0, 1, 2, 3, 4, 5]
for ( let a of iterable) {
    console.log(a)
}

const todo = [
    {
        id: 1,
        task: "meeting",
        isComplate: true
    },
    {
        id: 2,
        task: "shopping",
        isComplate: true
    },
    {
        id: 3,
        task: "doctor",
        isComplate: true
    },
]
console.log("Writing with for loop")
for(let i=0; i < todo.length; i++){
    console.log(todo[i])
}
for(let i=0; i < todo.length; i++){
    console.log(todo[i].id)
    console.log(todo[i].task)
    console.log(todo[i].isComplate)
}
console.log("Writing with for of loop")
for ( let a of todo) {
    console.log(a)
}

// 3) FOR EACH LOOP

const myArray = [1, 2, 3, 4]

myArray.forEach(function(eachItem){
    console.log(eachItem)
})

// arrow 
console.log("Arrow kullanarak ")
myArray.forEach(eachItem => console.log(eachItem))
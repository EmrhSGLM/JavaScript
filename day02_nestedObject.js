// nested object

/* 
fName : Ali          -> String
age : 25             -> Number
isEmployed:true      -> boolean
address :            -> Object
    street: 898 3th Ave
    city:  NYC
    state: New York
hobies  swimming, running, hunting    -> Array   
*/

const person = {
    fName : 'Ahmet',
    age : 21,
    isEmployed : true,
    address : {
        street : '898 3th Ave',
        city:  'NYC',
        state: 'New York'
    },
    hobies : ['swimming', 'running', 'hunting']
}

console.log(person)
console.log(person.fName)
console.log(person.address)
console.log(person.isEmployed)
console.log(person.address.city)
console.log(person.hobies)
console.log(person.hobies[0])
console.log(person.hobies[4]) // olmadigi icin ==> undefined verir
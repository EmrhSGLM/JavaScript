// OBJECT {}
// Objectler data kaydetmek icin kullanilir
// {  }  ile olusturulur

var fName = 'Can'
var lName = "Er"
var age = 25
var information = `${fName} ${lName} ${age}`
console.log(information)

// person object

var person = {
    fName: 'Can',
    lName : 'Er',
    age: 25,
    isEmployed : true
}
console.log(person)

console.log(typeof(person))  // object

// Bilgileri Cagirma
// 1==> .notation
console.log(person.fName)
console.log(typeof(person.fName)) // String
console.log(person.lName)
console.log(typeof(person.lName)) // String
console.log(person.age)
console.log(typeof(person.age)) // number

// 2==> [] notation 

console.log(person['fName'])
console.log(person['age'])


// String

var myName = "Hakan"
var myLesson = "JavaScript"

// Hakan knows JavaScript
var message = myName + " knows " + myLesson
console.log(message)
//console.log(myName + " knows " + myLesson) Bu sekilde de yazilabilir
//console.log(myName + ' knows ' + myLesson) Tek tirnak icinde deyazilabilir

// Hakan 'knows' JavaScript
var message1 = myName + " 'knows' " + myLesson
console.log(message1)
//console.log("Hakan 'knows' JavaScript") // --> hard code
//console.log(myName + ' \'knows\' ' + myLesson) // --> daha uygun

//BACKTICK ``
//String leri daha dinamik birlestirmek icin kullanilabilir
var message = `${myName} knows ${myLesson}`
console.log(message)



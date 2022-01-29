// Fonksiyonlar

function sum(){
    var num1 = 10
    var num2 = 20
    var num3 = 30
    var total = num1+num2+num3
    return total
}
console.log("Sayilarin toplami : "+sum())

function cikarma(){
    var num3 = 10
    var num4 = 20
    var fark = num4-num3
    return fark
}
console.log("Sayilarin farki : " + cikarma())

// Fonksiyon Tanimlama

function fonksiyonIsmi(parametre1, parametre2){
    return donusDegeri
}

// Parametresiz Fonksiyon
function greet(){
    console.log("Hi !!!")
}
greet()

// 2) Parametreli Fonksiyon
function greetPeople(nameOfPeople){
    console.log("Hi " + nameOfPeople)
}

greetPeople("Eda")
greetPeople("Emrah")
greetPeople(false)
greetPeople(null) 

greetPeople("Amine", "Eda") // Tek Parametreli fonksiyon oldugundan, 
                            // 2 parametreli fonksiyon olmadigi icin tek parametreli ye gider ve ilk parametreyi alir


// 3) Birden fazla parametreli fonksiyon

function information(location, price, rating){
    console.log(`location : ${location}.
     Price : ${price}.
     Rating : ${rating}`)
}
information("Eskil ", '2000', '5' )

//Fonksiyon cagirip yeni bir degiskende saklama

const mySum = sum() + 100
console.log(mySum)

// Fonksiyonu parametre ve return ile cagirma

function diff(num1, num2){
    return num1-num2
}
console.log(diff(250,50))
console.log(diff(500,50))
console.log(diff(250,50,500)) // 3 parametreli olmadigi icin 2 parametreli fonk gider

// Fonksiyonlari 2 sekilde tanimlayip cagirabiliyoruz
// 1--> Direk tanimlama ve cagirma 
// 2--> Fonksiyonu bir degisken ile tanimlayip cagirma

function square(num){
    return num*num
}

console.log('Karesi : ' + square(5))

const squareOfNumber = 'Karesi dynamic : ' + square(8)
console.log(squareOfNumber)

const squareOfNumber1 = function square(num){
    return num*num
}
console.log(squareOfNumber1(9))
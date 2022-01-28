// Fonksiyonlar

//  Parametresiz Fonksiyon

function greet(){
console.log("Hi !!!")
}
greet()

// 1 Parametreli Fonksiyon

function greetPeople(namePeople){
    console.log('Hi ' + namePeople)
}
greetPeople("Mustafa") // Hi Mustafa
greetPeople(true) // Hi true
greetPeople(20) //Hi 20
greetPeople(null) // Hi null
greetPeople("ali", "cemil") // Hi ali --> Ilk degeri alir ve konsola yazdirir
greetPeople() // Hi undefined

// 2 parametreli Fonksiyon
// Osman 52
// Eda 29
function nameOld(name, old){
    console.log(name + " " + old)
}
nameOld("Osman", 52)
nameOld("Eda",29)

// 3 Parametreli Fonksiyon
function information(location, price, rating){
    console.log(location+price+rating)
}

information("New York ",250 , " 10 stars")
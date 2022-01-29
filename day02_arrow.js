// Anonymous Function(isimsiz) 
//function (a, b, c){
//    return a+b+c
//}

// Uncaught SyntaxError: Function statements require a function name

var result = function (a, b, c){
    return a+b+c
}
console.log(result(1,2,3))

let info = function(fName, lName, age){
    console.log(fName+ ' ' + lName + ' ' + age)
    console.log(`Adı : ${fName} Soyadi : ${lName} Yas : ${age} `)
}

info("Amine","Saglam",5)

 // ARROW FUNCTIONS (2016 guncellenmesinden sonra uygulamaya girdi)

function sum(a) {
    return a + 100
}

console.log(sum(10))

// function kelimesini ve ismini sil
// parametre ve body arasina =>  bu isaret yazilir 
// return ve suslu parantez olmayacak
// () sil. EGER TEK PARAMETRE VAR ISE


var arrow = a =>  a + 100 // parantez (a) sadece tek eleman oldugunda kaldirilabilir
console.log(arrow(10))


var arrow1 = (a,b) => a+b
console.log(arrow1(10,20))

// Parametresiz Foksiyonlarda Arrow

// 1.Ex ==>  var a = 5 , b = 6

// Traditional Function
function sum(a,b){
    return a+b+100
}

// Arrow Functions
 var arrow2 = (a, b) => a+b
 console.log(arrow2(5,6))

 // 2.Ex ==> a=6 , b=7
 // Traditional Function
 function newSum(a,b) {
     return a+b+100
 }

 //Annoymous Function
 var newSum = function () {
    return a+b+100
}
console.log(newSum)

 // Arrow Function
 var arrow3 = (a, b) => a*b
 console.log(arrow3(6,7))


 // Prizma Hacim
 var prism1 = function (l, w, h){
     return l * w * h
 }
 console.log("Prizma Hacmi : " + (prism1(1,2,3)))

 var arrowPrism = (l, w, h) => l * w * h
 console.log("Prizma Hacmi Arrow : " + (arrowPrism(1,2,3)))

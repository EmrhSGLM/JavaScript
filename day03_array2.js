// ARRAY DATA EKLEME VE SILME

var friendList = ['Eda', 'Amine', 'Osman', 'Hakki']

console.log(friendList)
console.log(typeof(friendList))

// 1) push() : Array'in SONUNA data ekler

friendList.push("Ramazan")
console.log(friendList)

// 2) unshift() : Array'in BASINA data ekler

friendList.unshift("Fatih")
console.log(friendList)

// 3) pop() : Son dtata'yi siler

friendList.pop()
console.log(friendList)

// 4) shift() : Ilk data'yi siler

friendList.shift()
console.log(friendList)

var ages = [10, 20, 30, 40, 50, 30, 60, 30]

// 5) indexOf(item, from) --> Girilen degisken elemaninin index'ini verir
console.log(ages.indexOf(20))       // 1
console.log(ages.indexOf(50))       // 4

console.log(ages.indexOf(30,3))     // 5
// 30 rakami ikinci defa kacinci index'te var
// 3 => array dizisindeki 30 sayisinin ilk uzunluktaki yerini yazariz 
// Sonuc olarak bize 30 sayisinin tekrar ettigi ilk yerdeki index'ini verir

// return -1 eslesme yok demek
console.log(ages.indexOf(20, 3))   // -1 tekrarlanmadigi icin -1 verir
console.log(ages.indexOf(80))      // -1 elemam hic olmadigi zamanda -1 verir

// 6) lastIndexOf()  : 
console.log(ages.lastIndexOf(30)) // en son kacinci index'de gorulur

// 7) includes(item, starting index)
console.log(ages.includes(60)) // 60 sayisi array icinde var mi? ==> true
console.log(ages.includes(70)) // 70 sayisi array icinde var mi? ==> false

console.log(ages.includes(40, 3)) // 40 sayisi array icinde 3. index'de mi? ==> true
console.log(ages.includes(10, 2)) // 10 sayisi array icinde 2. index'de mi? ==> false

const isExist = ages.includes(40, 3)
console.log(isExist)

const isExist1 = ages.includes(80, 3)
console.log(isExist1)

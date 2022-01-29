// ARRAYS

//Array Olusturma Yontemleri
// 1.Yontem
var friendList = ['Eda', 'Amine', 'Osman', 'Hakki']

// 2.Yontem
var friendList1 = new Array('Eda', 'Amine', 'Osman', 'Hakki')

console.log(friendList)             //(4) ['Eda', 'Amine', 'Osman', 'Hakki']
console.log( friendList1)           // (4) ['Eda', 'Amine', 'Osman', 'Hakki']
console.log("1.Yontem : " + friendList)
console.log("2.Yontem : " + friendList1)
console.log(friendList[0])
console.log(friendList1[2])
console.log(friendList1[10]) // olmadigi icin undefined yazar

// Hakki ----> Veli olarak degistirin
friendList[3]='Veli'
console.log(friendList)

// Osman --> Mehmet olarak degistirin
friendList[2]='Mehmet'          // (4) ['Eda', 'Amine', 'Osman', 'Veli']
console.log(friendList)         // (4) ['Eda', 'Amine', 'Mehmet', 'Veli']

// Yeni Deger Ekleme
// Ozgur
friendList[4]='Ozgur'
console.log(friendList)             // (5) ['Eda', 'Amine', 'Mehmet', 'Veli', 'Ozgur']

friendList[7]='Fatih'
console.log(friendList)         //(8) ['Eda', 'Amine', 'Mehmet', 'Veli', 'Ozgur', empty × 2, 'Fatih'] 5 ve 6 bos

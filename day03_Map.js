// MAP
// Bir array den yararlanarak yeni array olusturmak icin kullanilir


var originalArray = [2, 4, 6, 8, 10]
console.log(originalArray)
console.log('Original Array => ' + originalArray)
function double(x) {
    return x*2
}

const newArray = originalArray.map(double)
console.log(newArray)
console.log('New Array => ' + newArray)

const newArray1 = originalArray.map(function double(x){
    return x*2
}
)

// filter()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// 10 dan buyuk sayilar

const filterNumbers = numbers.filter(eachNumber => eachNumber > 10)
console.log(filterNumbers)

// Cift Sayilar
let cift = numbers.filter(t => t%2==0)
console.log(cift)

// Tek Sayilar
let tek = numbers.filter(t => t%2 != 0)
console.log(tek)

// filter() arrays

var people = [
    {
        id: 1,
        name: 'Can',
        age: 28
    },
    {
        id: 2,
        name: 'Jane',
        age: 32
    },
    {
        id: 3,
        name: 'Peter',
        age: 55
    }
]

let young = people.filter(t => t.age < 35 )
console.log(young)

let old = people.filter(t => t.age > 30 )
console.log(old)
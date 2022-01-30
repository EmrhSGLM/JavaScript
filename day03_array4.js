// 10) concat() : Arrayleri birlestiririz

var drinks = ['coke', 'water', 'fanta', 'ayran']
var kebaps = ['adana', 'urfa', 'ciger', 'patlican']

var shoppingList = drinks.concat(kebaps)
console.log(shoppingList)

// 11) reverse(): ters cevirir
var numbers = [1, 2, 3, 4, 5, 6, -7, -8]
console.log("Orginal List => " + numbers)
numbers.reverse()
console.log("Reversed List => "+numbers)

// 12)= sort() : kucukten buyuge

numbers.sort()
console.log(numbers)

// buyukten kucuge ?
// sort + reverse

numbers.reverse()
console.log(numbers)
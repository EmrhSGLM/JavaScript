// 8) splice() : yeni data ekleyebiliyoruz, kaldirabiliyoruz, 
// mevcut data'yi degistirebiliyoruz.

const months = ['Jan', 'March','April', 'June']
console.log(months)

months.splice(1, 0, 'Feb')
// 1 -> Birinci index'e ekle
// 0 -> Herhangi bir seyi silme
// Feb -> Ekle
console.log(months)

months.splice(4, 1, 'May')
// 4 -> 4. index'e ekle
// 1 -> ekledikten sonra 1 tane sil
// May -> 4. index'e ekle
console.log(months)

months.splice(5, 0, 'June', 'July', 'August')
// 5-> 5. index'e ekle
// 5 -> herhangi bir sey silme
// 'June', 'July', 'August' -> Bunlari ekle
console.log(months)

months.splice(5, 3) // 5. index'ten basliyor(index dahil) (3) belirtilen kadar eleman siler
console.log(months)

// -1 _> son index
// -2 -> son 2 index

months.splice(-1)
console.log(months)

months.splice(-2)
console.log(months)

months.splice(2, 0, 'March','April','May' , 'June', 'July', 'August')
console.log(months)

// 9) slice(startIndex(dahil), (endIndex(haric))
console.log(months.slice(2))
// ilk 2 index'te ki elemanlari sil

console.log(months.slice(-3))
// -3 -> son 3 data'yi getir

console.log(months.slice(2, 5))
// 2. index dahil 5. index'e kadar ki data'yi getir

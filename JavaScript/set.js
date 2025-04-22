//! SET
//eşsiz değerleri tutmak için kullanılan bir veri yapısıdır. Arrayler gibi bir değer tutar fakat değerler tekrar etse bile onları sadece bir değer
//olarak kabul eder. Yani değer tekrarına izin vermeyen array yapısı diyebiliriz. map ile kullanımları aynıdır. birkaç küçük farklılıkları var sadece.

const isimler = new Set(); // tanımlama

isimler.add("Mehmet");  // ekleme add ile yapılır. map'te ekleme set ile yapılıyordu
isimler.add("Büşra");
isimler.add("Yasemin");
isimler.add("Faruk");

console.log(isimler.has("Mehmet")); // set içerisinde bu değer var mı?

for(let deger of isimler){ // for of döngüsü ile set değerlerini yazdırma
     console.log(deger);
}

let array = Array.from(isimler); //seti array'e dönüştürme
console.log(array);

let array2  = [1, 3, 7, "Mehmet", true]; // array'i set'e dönüştürme
const arraySet = new Set(array2);
console.log(arraySet);
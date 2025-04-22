//! MAP
// map bir veri yapısıdır. key ve value değerlerini birlikte tutar(veri ile alakalı bir key ve veriyi birlikte tutar).

const map = new Map(); // Array, map, object gibi nesneler const ile tanımlanır bellekteki yerleri sabit olsun diye.

map.set(1, "Adana");    // key ve value değerleri ekleme
map.set(2, "Adıyaman");
map.set(3, "Afyonkarahisar");
map.set(4, "Ağrı");
map.set(5, "Amasya");
map.set(6, "Ankara");
map.set(7, "Antalya");
map.set(8, "Artvin");

console.log(map.get(6)); // keyi 6 olan değeri getirir.

console.log(map.get(7)); // keyi 7 olan değeri getirir.


console.log(map.has(3)); // key var mı diye kontrol etme

map.delete(3); // 3. elemanı silme


for(let [key, value] of map){   // for of ile elemanların değerlerini alma   [key, value] of map kısmı ise destructing'tir.
     console.log(key , value);
}

console.log([...map.values()]); // mapteki tüm value'ları bir array olarak döner.

console.log([...map.keys()]); // mapteki tüm key'leri bir array olarak döner.

map.clear();  // Tüm map'i siler.


//map to array

const map2 = new Map();  // map2 oluşturuldu

map2.set(1, "Adana");
map2.set(2, "Adıyaman");
map2.set(3, "Afyonkarahisar");

const array = Array.from(map2);  //Array.from kullanılarak parametre olarak map2 atıldı. bu map2'yi array'e çevirir.
console.log(array); 


//array to map

const myArray = [   // iki boyutlu array varsa map'e çevrilebilir. yoksa çevrilemez.
     [1, "Adana"],
     [2, "Adıyaman"],
     [3, "Afyonkarahisar"],
]

const map3 = new Map(myArray); // map oluşturulurken parametre olarak iki boyutlu dizimizi gönderdik. Böylece key ve value mantığı ile map'e çevirdi.
console.log(map3);

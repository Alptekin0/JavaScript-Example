//! LOCALSTORAGE VE SESSIONSTORAGE

//kullanılan taraycının geliştiriciye sunduğu 5mb küçük bir veri depolama alanıdır. sessionStorage'de tutulan veriler
//Tarayıcı kapatılınca giderken localStorage'de tutulan veriler kalıcıdır. 
//Her iki depolama alanında da hassas bilgiler (TC, Şifre, Kredi Kartı bilgiler vb.) bilgiler tutulmamalıdır.
//Daha çok kullanıcı tercihleri(koyu tema, açık tema) vb. basit ama geliştirici işine yarar bilgiler tutulmalıdır.
//her iki web storage'in kullanımı tamamen aynıdır. bir key ve bir value alacak şekilde depolama tutulur.

//eleman ekleme
sessionStorage.setItem("1", "Ali");
sessionStorage.setItem("2", "Mehmet");
sessionStorage.setItem("3", "Cemal");
sessionStorage.setItem("4", "Mahmut");

//eleman getirme
let value = sessionStorage.getItem("2"); // ilgili elemanın key'ini vermek yeterli value değeri döner.
console.log(value);  // consol'a yazdırdık

//eleman silme
sessionStorage.removeItem("3"); // keyi vererek ilgili eleman silinir.

//tüm elemeanlar silmek
// sessionStorage.clear();

//Session ve Local storage depoladığı verileri hangi türde olursa olsun string olarak depolar ve string olarak geri döner.
//Array eklemek için Json.Stringfy metodu kullanılmalı Array döndürmek için JsonParse metodu ile çağırılmalıdır.

sessionStorage.setItem("5", JSON.stringify([1,2,3,4])); // [1,2,3,4] şeklinde bir arrayı keyi 5 olarak tanımladık.
let array = JSON.parse(sessionStorage.getItem("5")); // keyi 5 olanı çağırırken array şeklinde dönmesi için JSON.parse ile çağırdık
console.log(array); // consola yazdırdık

// localStorage ve seasionStorage kullanımları tamamen aynıdır. Tek fark sessionStorage'de tutulan veriler
//Tarayıcı kapatılınca giderken localStorage'de tutulan veriler kalıcıdır.
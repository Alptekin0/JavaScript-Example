//! TEMPLATE LİTERALS
//stringleri kolayca birleştirmek için kullanılan bir yapıdır. Önceden stringleri birleştirirken + işaretleri ile birleştirirdik
//Template Literals ile birlikte `` işaretleri arasına stringlerimizi yazıp dışardan gelen parametreleri  ${ }  yapısı içine yazarak daha net bir kod elde edebiliriz

let Ad = "Şeyma";
let Soyad = "Bulut";

console.log("ADI : " + Ad + " " + "SOYADI : " + Soyad);   // Stringleri birleştirirken artı operatörleri ile bu şekil birleştirme sağlardık.

console.log(`ADI : ${Ad} SOYADI : ${Soyad}`);     // Üstteki yapı ile aynı çıktıyı verir. hem daha basit hem daha anlaşılır yapıda olmasını sağlar.

//  Template literals işaret `` olan bu işaret ALTGR + İKİ KEZ NOKTALI VİRGÜL tuşlarına basılarak elde edilir.emplate literals çift tırnak arasına yazılmaz.

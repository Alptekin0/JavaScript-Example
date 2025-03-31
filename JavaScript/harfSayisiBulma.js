//! HARF SAYISI BULMA

//Girilen bir metnin içinde istenilen harf kaç kez geçiyor diye arama yapan algoritma.

let metin = prompt("Lütfen istediğiniz metini buraya giriniz : ");
let harf = prompt("Metin içinde kaç kez geçtiğini bulunmasını istediğiniz harfi giriniz : ");


function harfiBul(metin, harf) {
     let counter = 0;
     if (metin.length > 0) {

          for (let i = 0; i < metin.length; i++) {
               if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
                    counter++;
               }
          }
     }
     else {
          alert("Geçersiz metin");
     }
     return counter;
}
let sonuc = harfiBul(metin, harf);
alert(harf + " harfi cümleniz içinde " + sonuc + " kez geçmektedir.");
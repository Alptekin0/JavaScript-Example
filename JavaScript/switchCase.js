//! SWİTCH CASE HAFTANIN GÜNLERİ ÖRNEĞİ

// Switch case örnek kullanımı.

let istenilenGun;

istenilenGun = (prompt("Planınını görmek istediğiniz günü seçiniz : ")).toLowerCase();


switch (istenilenGun) {

     case "pazartesi":
          alert("Pazartesi planı getiriliyor ...");
          break;

     case "salı":
          alert("Salı planı getiriliyor ...");
          break;

     case "çarşamba":
          alert("Çarşamba planı getiriliyor ...");
          break;

     case "perşembe":
          alert("Perşembe planı getiriliyor ...");
          break;

     case "cuma":
          alert("Cuma planı getiriliyor ...");
          break;

     case "cumartesi":
          alert("Cumartesi planı getiriliyor ...");
          break;

     case "pazar":
          alert("Pazar planı getiriliyor ...");
          break;

     default:
          alert("Geçerli bir gün giriniz");
          break;

}
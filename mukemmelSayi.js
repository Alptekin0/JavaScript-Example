//! MÜKEMMEL SAYI UYGULAMASI

// BİR SAYININ KENDİSİ HARİÇ BÖLENLERİNİN TOPLAMI O SAYININ KENDİSİNE EŞİT İSE O SAYIYA MÜKEMMEL SAYI DENİR
// ÖRNEK : 6 --> 1,2,3(BÖLENLERİ) ---> 1 + 2 + 3 = 6    MÜKEMMEL SAYI

let sayi = Number(prompt("Mükemmel sayı olduğunu düşündüğünüz sayıyı giriniz : "))


function mukemmelSayi(sayi){

     let bolenlerToplami = 0;

     for(let i=1; i<=sayi/2; i++){
          if(sayi % i == 0){
               bolenlerToplami += i;
          }
     }

     return bolenlerToplami;
}

let sonuc = mukemmelSayi(sayi);

if(sayi == sonuc){
     alert("Girilen sayı mükemmel sayıdır");
}
else{
     alert("Girilen sayı mükemmel sayi değildir.");
}
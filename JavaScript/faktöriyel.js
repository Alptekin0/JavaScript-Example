//! FAKTÖRİYEL
 let sayi = Number(prompt("faktöriyelini bulmak istediğiniz sayıyı giriniz : "));
 let faktoriyel = 1;

 for(let i=sayi; i>1; i--){
      faktoriyel *= i;
 }

 console.log(faktoriyel);
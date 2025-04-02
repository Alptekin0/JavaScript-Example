//! BİNARY TO DECİMAL
// ikilik bir sayıyı onluk sayıyı çevirme
let sayi = prompt("binary sayıyı giriniz : ");
let kontrol = false;

function binaryToDecimal(sayi) {
     let decimal = 0;
     let counter = 0;
     for (let i = sayi.length - 1; i >= 0; i--) {
          if (sayi.charAt(i) == 1) {
               decimal += 2 ** counter;
               counter++;
          }
          else if(sayi.charAt(i) == 0) {
               counter++;
          }
          else{
               kontrol = true;
          }
     }

     return decimal;
}


let cevap = binaryToDecimal(sayi);

if (kontrol == true) {
     alert("YANLIŞ GİRDİ");
} 
else {
     alert(cevap);
}
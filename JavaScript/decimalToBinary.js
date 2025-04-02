//! DECİMAL TO BİNARY
//onluk bir sayıyı ikilik bir sayıya dönüştürme

let sayi = Number(prompt("Binary'e dönüştürmek istediğiniz sayıyı giriniz : "));


function decimalToBinary(number) {
     let binary = "";

     while (sayi > 0) {
          sayi = Math.floor(sayi);
          let temp = (sayi % 2).toString();
          binary = temp + binary;
          sayi = sayi / 2;
     }
     return binary;
}


alert(decimalToBinary(sayi));
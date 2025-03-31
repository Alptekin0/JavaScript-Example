//! ARMSTRONG SAYISI

// BİR SAYININ RAKAMLARINI KÜPLERİNİN TOPLAMI KENDİSİNİ VERİYOR İSE O ARMSTRONG SAYIDIR.
//ÖRNEK : 153 = 1*1*1 + 5*5*5 + 3*3*3

let sayi = Number(prompt("Armstrong sayısı olup olmadığını kontrol etmek istediğiniz sayıyı giriniz :"));
let temp = sayi;
let basamak , armstrong = 0;

while(Math.floor(temp)!=0){
     basamak = temp % 10;
     temp= temp / 10;
     armstrong += Math.floor(basamak) ** 3;
}

if(armstrong == sayi){
     alert(sayi+" bir armstong sayısıdır.");
}
else{
     alert(sayi+" bir armstrong sayı değildir.");
}
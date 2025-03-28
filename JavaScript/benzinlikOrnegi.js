let para, yakitTuru, yukleme, tutar;

yakitTuru = Number(prompt("Yüklenecek yakıt türünü giriniz :   \r\n 1. Dizel(24.53 TL) \r\n 2. Benzin(22.25 TL) \r\n 3.LPG(11.1 TL) "));

yukleme = Number(prompt("yukleme miktarını giriniz : "));

para = Number(prompt("para miktarını giriniz :"));


if(yakitTuru ==1){
    //dizel
    tutar = 24.53 * yukleme;
}
else if(yakitTuru == 2){
     //benzin
     tutar = 22.25 * yukleme;
}
else if (yakitTuru == 3){
     //LPG
     tutar = 11.1 * yukleme;
}
else{
     alert("dogru bir yakıt türü giriniz.");
}


if(para >= tutar){
     alert("yükleme başarılı. \r\n Para üstü = " +(para - tutar))
}
else{
     alert("para tutarı yetersiz.");
}
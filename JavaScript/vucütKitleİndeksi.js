let boy, kilo, vki;
//Girdiler
boy = Number(prompt("Boyunuzu giriniz (Tam Sayı olarak) : "));
kilo = Number(prompt("Kilonuzu giriniz : "));

//Girdi kontrolleri
if (isNaN(boy) || isNaN(kilo) || boy < 100) {
     alert("Boy ve kilo değerleri yanliş girildi");
}
else {

     //Hesaplama
     boy = boy / 100;
     vki = Math.ceil((kilo / (boy ** 2)));

     //Koşulara göre sonuçlar
     if (vki < 18.5) {
          alert("ideal kilo altındasınız. vucüt kitle indeksiniz : " + vki);
     }
     else if (vki >= 18.5 && vki < 24.9) {
          alert("Sağlıklı kilodasınız. vucüt kitle indeksiniz : " + vki);
     }
     else if (vki >= 25 && vki < 29.9) {
          alert("Fazladan kilonuz var. vucüt kitle indeksiniz : " + vki);
     }
     else if (vki >= 30 && vki < 39.9) {
          alert("Obez kilodasınız. vucüt kitle indeksiniz : " + vki);
     }
     else if (vki >= 40) {
          alert("Aşırı Obez (Morbid Obez) kilodaasınız. vucüt kitle indeksiniz : " + vki);
     }
}
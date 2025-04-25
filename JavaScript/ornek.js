//! MONEY KART ÖRNEĞİ

const bosluk = "\r\n";

const metin = "Money kartınız var mı?" + bosluk + "1- Evet" + bosluk + "2- Hayir";  

let moneyVarMi = prompt(metin);


//moneykart sınıfı

class moneyKart {   

     //kartı olanlar için indirim tutarı
     static indirimTutari = 0.15; // %15

     constructor(moneyVarMi) {
          this.moneyVarMi = moneyVarMi;
     }

     islem() {
          if (this.moneyVarMi == 1) {
               let yeniFiyat = this.moneyli();
               if (yeniFiyat > 10) {
                    alert("Moneyli olduğunuz için %15 indirim uygulandı" + bosluk + "Yeni Fiyat : " + yeniFiyat);
               }
               else {
                    alert("Yanlış değer girdiniz");
               }
          }
          else if (this.moneyVarMi == 2) {
               alert("Money kartınız olmadığı için indirim uygulanamadı.");
          }
          else {
               alert("Yanlıs deger girdiniz");
          }
     }

     moneyli() {
          let urunFiyati = prompt("Ürün fiyatını giriniz :");
          urunFiyati = urunFiyati - (urunFiyati * moneyKart.indirimTutari);
          return urunFiyati;
     }
}

// nesne oluşturma
const musteri = new moneyKart(moneyVarMi);
musteri.islem();

//! KİTAP BULMA UYGULAMASI


//kİTAPLARI 2 BOYUTLU DİZİ OLARAK TANIMLADIK
let kitaplar = [["Suç ve Ceza", "Sefiller", "Vadideki Zambak", "İlahi Komedya"],
["Notre Dame'ın Kamburu", "Romeo ve Juliet", "Genç Werther’in Acıları", "Gazap Üzümleri"],
["İki Şehrin Hikayesi", "Yeraltından Notlar", "Savaş ve Barış", "Üç Silahşörler"],
["Yabancı", "1984-Bin Dokuz Yüz Seksen Dört", "Dönüşüm", "Satranç"],
["Gulliver'in Gezileri", "80 Günde Devri Alem", "Fahrenheit 451", "Sherlock Holmes"],
["Aşk ve Gurur", "Fareler ve İnsanlar", "Yüzbaşının Kızı", "Robinson Crusoe"],
["Don Kişot", "Beyaz Diş", "Oblomov", "Tom Sawyer'ın Maceraları"],
["Rüzgâr Gibi Geçti", "Cesur Yeni Dünya", "Denizler Altında Yirmi Bin Fersah", "Küçük Prens"]
];


let arananKitap = prompt("Aramak istediğiniz kitabi yaziniz :");


function kitabiBul(kitaplar, arananKitap) {
     let bulunduMu = false;

     for (let satir = 0; satir < kitaplar.length; satir++) {
          for (let sutun = 0; sutun < kitaplar[satir].length; sutun++) {
               if (kitaplar[satir][sutun].toLowerCase().includes(arananKitap.toLowerCase())){
                    alert("Aradığınız kitap :  " + kitaplar[satir][sutun] + " " + (satir + 1) + ". satırda " + (sutun + 1) + ". sutundadır."); 
                    //satır ve sutunlar için 0. ibaresi kullanılmamıştır bu nedenle 1 den başlanmıştır.
                    bulunduMu = true;
               }
          }
     }

     if (bulunduMu == false) {
          alert("Aradığınız kriterlere uygun kitap bulanamamıştır.");
     }
}

kitabiBul(kitaplar, arananKitap);
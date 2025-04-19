//! KLAVVYE EVENTS

// keypress : sadece sayı ve tuşlara basınca tetiklenir.
// keyup : tüm tuşlarda geçerlidir. Ayrıca tuşa basıp elini çektikten sonra tetiklenir.
// keydown : tüm tuşlarda geçerlidir. tuşa bastığın an tetiklenir.

document.addEventListener("keydown",run);  // direk document'e event olarak keydown sayfa içinde tüm tuşlara basınca tetiklenen event atadık.

function run(event){   //Sayfa içinde herhangi bir tuşa basılınca çalıştı. basılan tuş parametre olarak alındı
     if(event.keyCode ==116){  //Basılan tuşun ascii kodu 116 olunca f5 tuşu
          event.preventDefault();  //Bu tuşun yaptığı defult işi engelle yani f5 tuşuna basınca sayfanın yenilenmesini engelledik.
     }
}


document.addEventListener("keydown", durdur);  //Sayfa(document) herhangi bir tuşa basılınca durdur metoduna yönlendir
let sayac = 0;

function durdur(event){  //Uzun süre space basınca başka sayfa yönlendir.

     if(event.key == " "){  //Basılan tuş space tuşu ise
          sayac++;   //Sayacı arttır
          if(sayac >"100"){  //Eğer tuşa belirli bir süre basılı tutulmuşsa bu sayacı 100'den büyük yapar. basılı tutma işi keyup'ta olmaz çünkü bıraktıktan sonra 1 kez basmış sayılacaktır.
               window.location.href="https://www.google.com"; //Space uzun süre basılınca google yönlendir. (Burda her türlü işlem yapılabilir.)
          }
     }
}

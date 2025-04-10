//! Load event
// Sayfa yüklenince oluşan eventtir.

document.addEventListener("DOMContentLoaded", load); // sayfa yüklendiğinde load adlı fonksiyouna git.

//sayfa başlığının harflerini sırasıyla yazan ve todo liste eklenen elemanları local storage'e ekleyen metod
function load() {
     let baslik = document.querySelector(".container").childNodes;  // başlık node olarak alındı
     baslik = baslik[1];
     let baslikArray = Array.from(document.querySelector(".container").childNodes[1].textContent); // array'e çevrildi
     document.querySelector(".container").childNodes[1].textContent = ""; // sayfada  başlığın olduğu kısım silindi. başlık kaldırıldı

     for (let i = 0; i < baslikArray.length; i++) {
          setTimeout(() => {  // her 200 ms başlığın bir harfini yaz
               let span = document.createElement("span");
               span.textContent = baslikArray[i];
               document.querySelector(".container").childNodes[1].appendChild(span);
          }, 200 * i);
     }

     for (let index = 0; index < localStorage.length; index++) { // todo liste eklenen görevleri localStorage'e ekleme.
          let element = localStorage.getItem(index);
          tiklandi(element);
     }
}
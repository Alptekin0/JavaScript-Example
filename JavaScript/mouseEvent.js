//! MOUSE EVENTS
// Sayfa içinde mouse hareketlerini yakalayan eventlardır. Temelde 4 tane mosue eventi vardır.
// click, dbclick, mouseenter, mouseleave

let elementButon = document.querySelector("#form2").querySelector(".button"); // form2 içindeki butonu seçtik

elementButon.addEventListener("mouseenter", run); // buton üstüne gelince 3run metodu çalışacak

let counter=0;

function run(event) {
     counter++;
     let yerDegis = Math.ceil(200 + Math.random() * 500); // random alarak butonun sağ ve sol hizada yeri değişecek

     if(counter%2 == 0){// eğer buton solda ise sağa gitsin sağda ise sola gitsin şeklinde koşulları koyduk.
          elementButon.style.marginLeft = yerDegis + "px";
     }
     else{
          elementButon.style.marginRight = yerDegis + "px";
     }
}
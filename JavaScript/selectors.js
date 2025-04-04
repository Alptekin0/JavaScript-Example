//! SELECTORS(SEÇİCİLER)

//Javascript'te temel olarak 5 tane seçici vardır. bunlar;
// getElementById, getElementByClassName, getElementByTagName, querySelector, querySelectorAll
//html sayfasındaki elemntlere kolayca ulaşmamızı ve üzerlerinde işlem yapmamızı sağlarlar.


let element;

element = document.getElementById("form2"); // form2 id'sine sahip elemEnti seçer.



element = document.getElementsByClassName("button"); // classı button olan elemenleri getirir.
element = Array.from(element);   // element değişkenini array(dizi) haline getirir.
element.forEach(function(buton) { // foreach ile diziyi yazdırdık.
     console.log(buton);
});

element = document.getElementsByTagName("form"); // tüm form etiketlerini getirir.
console.log(element);

element = document.querySelector(".input"); // class'ı input olan İLK elementleri getirir.(querySelector ve querySelectorAll'da seçiciler css'deki gibidir.)
console.log(element);   // querySelector sadece bir element seçer o nedenle birden fazla olan elemntlerde sadece ilkini getirir. hepsi gelsin istiyorsak querySelectorAll kullanılır.


element = document.querySelectorAll(".input"); // class'ı input olan TÜM elementleri getirir.
console.log(element);

element = document.querySelectorAll(".input")[1]; // class'ı input olan elementlerin ikincisini getir. querySelectorAll bir nodeList döndürür ve [] ile dönen elemanlar arasında seçim yapılabilir.
console.log(element);   



//Aynı zamanda yakalanan elementler üzerinde css özelliklerini değiştirmek istersek style özelliği kullanılabilir.

element = document.querySelector(".button"); // ilk butonu elementine ulaştık.

element.style.backgroundColor = "black";
element.style.color = "white";
element.style.fontWeight = "bold";
element.style.fontSize = "15px";   // bu şekilde css işlemleri seçilen element üzerinde yapılabilir ama en sağlıklısı css üzerinde yapmaktır.



//Seçilen elementler üzerinde parent-child ilişkisi kullanılarak gezilebilir.

element = document.querySelector(".input"); // ilk input elementini yakaladık.
element = element.nextElementSibling; // input'tan sonraki ilk kardeşini çağırdık.(button)
element = element.parentElement; // buton elementinin parentini aldık (form)
element = element.parentElement; // form'unda parentini aldık.(div)
element = element.firstElementChild; // div'in ilk çocuğunu aldık

console.log(element);
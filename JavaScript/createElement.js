//Element oluşturma

let butonEklenecekYer = document.querySelector(".button").parentElement; //butonu ekleyeceğimiz yer form1'in sonu
//let butonEklenecekYer = document.getElementsByTagName("form")[0]; // Bu şekilde de form elementi seçilebilir

let buton = document.createElement("button"); // todo ekleyin butonunun yanına bir sil butonu ekleyelim
//Buton Özellikleri
buton.textContent = "Sil";
buton.style.backgroundColor = "black";
buton.style.color = "white";
buton.style.width = "60px";
buton.style.height = "40px";
buton.style.borderRadius = "15px";
buton.style.display = "inline-block";

butonEklenecekYer.appendChild(buton);
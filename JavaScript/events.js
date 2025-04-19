//!EVENTS(OLAYLAR)

let element = document.querySelector("#form1").querySelector(".button"); // form1'in butonu seçildin

let veriSirasi; // verileri localStorage kaydetmek için sırasıyla artacak sayaç

// localStorage'de daha önceden veri varsa veri sırası ona göre devam edecektir.
if (localStorage.length != 0) {
     veriSirasi = localStorage.length;
}
else {
     veriSirasi = 0;
}

element.addEventListener("click", function () { // form1 butonuna click tetikliyicisi eklendi
     let yazi = document.querySelector("#form1 .input").value; // form1 input value
     localStorage.setItem(veriSirasi, yazi);
     veriSirasi++;
     tiklandi(yazi);
})


//yazılan yazı yapılacaklar listesine eklenecek. Eklenecek element js ile tasarlandı.
function tiklandi(yazi) {

     let ekleYer = document.querySelector("#form2 .input");  // form2'nin inputundan aşağısına element eklenecek. (Yapılacaklar listesine yazılan yazı liste olarak eklenecek)

     if (yazi.length >= 2) {  // yazı boş değilse ve 2 karakterin üstünde ise element oluşturulup eklendi

          //Element oluşturma
          let eklenecekElement = document.createElement("div");
          eklenecekElement.id = "todolar";
          eklenecekElement.innerHTML = yazi;
          eklenecekElement.style.backgroundColor = "aliceblue";
          eklenecekElement.style.width = "700px";
          eklenecekElement.style.height = "30px";
          eklenecekElement.style.color = "black";
          eklenecekElement.style.border = "2px, solid, black";
          eklenecekElement.style.display = "flex";
          eklenecekElement.style.alignItems = "center";
          eklenecekElement.style.justifyContent = "left";
          eklenecekElement.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
          eklenecekElement.style.marginLeft = "45px";
          eklenecekElement.style.marginTop = "15px";
          eklenecekElement.style.borderRadius = "10px";
          eklenecekElement.style.paddingLeft = "10px";

          //Oluşturulan Elementi sayfada ilgili yere ekleme.
          ekleYer.after(eklenecekElement);
          ekleYer.appendChild;

          document.querySelector("#form1").querySelector(".input").value = "";  // yapılacak aktivite eklendikden sonra input kutusu temizleniyor
     }
}

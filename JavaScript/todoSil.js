//eklenen todoları silmek ve her sildiğinde başlığın renk değiştirmesi
let buton = document.querySelector("#form2").querySelector(".button"); //sil butonu seçildi

buton.addEventListener("click", function () {  // click tetikliyicisi kullanıldı
     let todos = document.querySelectorAll("#form2 #todolar"); // todolar seçildi
     if (todos.length > 0) {
          let izin = confirm("Silmek istediğnize emin misin?");  // silmek için izin
          if (izin == true) {
               silVeRenkDegis(todos);  // izin true ise fonksiyona git
          }
     }
});

// TodoList'i silip sayfanın başlığının rengini değiştiren fonksiyon
function silVeRenkDegis(todos) {

     let baslikRenkDegis = document.querySelector(".container").childNodes; // node olarak seçildi
     baslikRenkDegis = baslikRenkDegis[1];  // başlık alındı.

     let x = Math.ceil(Math.random() * 255);  
     let y = Math.ceil(Math.random() * 255);
     let z = Math.ceil(Math.random() * 255);
     baslikRenkDegis.style.color = "rgb(" + x + "," + y + "," + z + ")";  // random değer verilen x, y ve z değerleri ile rastgele renk üretir.


     todos.forEach(function (sil) {  //todolar silindiği zaman renk başlık renk değiştiriyor.
          sil.remove();
     });
     localStorage.clear();  //todolar silindiği için todoları localstorage'den siliyoruz.
     veriSirasi = 0; // localstorage veri sırası sıfırlandı.
}
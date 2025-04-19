let input2 = document.querySelector("#form2 .input"); // yapılacaklar listesinin arama inputu seçildi
input2.addEventListener("keyup", arama);  // keyup event eklendi

//arama inputuna girilen değeri yapılacaklar listesinde arayan fonksiyon
function arama() {

     let input2Value = document.querySelector("#form2").querySelector(".input").value;
     let todos = document.querySelectorAll("#form2 #todolar");


     //aranan yazı yapılacaklar listesindeki uyumlu değil ise geçici süre gösterme
     for (let index = 0; index < todos.length; index++) {
          if (!(todos[index].innerHTML.toLowerCase().includes(input2Value.toLowerCase()))) {
               todos[index].style.visibility = "hidden";
          }
          else {
               todos[index].style.visibility = "visible";
          }

     }
}
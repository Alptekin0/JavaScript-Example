//bir textbox(input) üzerindeki işlemleri yakalamımızı sağlayan eventlardır.

//copy    : input içindeki değer kopyalınınca tetiklenir.
//paste   : inputa bir yapıştırma işlemi gerçekleşince tetiklenir.
//cut     : input içindeki değer kesilince tetiklenir.
//select  : input içindeki değer seçilince tetiklenir. (mouse ile çift tıklayınca veya mouse'u sürükleyince seçmek)
//focus   : input kutusuna tıklanınca tetiklenir.
//blur    : input kutusu tıklı iken başka yere tıklayıp input kutusundan çıkınca tetiklenir.


let input = document.querySelector("#form1").childNodes[1]; // form1 içindeki inputu seçtik

input.addEventListener("focus", run); // inputa tıklayınca event oluştur. run metodunu çalıştır.

function run() {
     console.log("input tiklandi");
}

input.addEventListener("copy", run2);

function run2() {
     alert("kopylama yapildi");
}

input.addEventListener("select", run3);

function run3() {
     alert("yazı seçilemez");
}
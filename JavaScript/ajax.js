//! AJAX(Http request)

// XMLHttpRequest bir server, restApi vb. veri çekilebilecek bir adrese istek atıp gerekli onaylardan sonra veri çekmeye, veri yazma, veri düzenleme vb. yarayan bir nesnedir.
// GET: veri çeker.    POST: veri gönderir.     PUT: var olan veriyi günceller.
// Gönderilen isteğin 2 tür durumu vardır.    1-istek hazırlık durumu(readyState)    2-sunucu cevabı(status)
// readyState 5 farklı durumda olabilir. ve bunlar 0-1-2-3-4 şeklindedir. 0 istek gönderilmedi 4 ise cevap geldi şeklinde her adımda ilerleme sağlar
// status ise sunucunun isteğe cevabı 200: başarılı  404: bulunamadı   500: sunucu taraflı skıntı 
// bu iki durumu kontrol ederek  readyState 4 ve status 200 olduktan sonra veri üzerinde işlemler yapılablir.

const istek = new XMLHttpRequest();  //XMLHttpRequest'ten bir nesne oluşturduk.

istek.open("GET", "https://jsonplaceholder.typicode.com/users");  // Get yani veri çekme isteğinde bulunduk ve veriyi çekeceğimiz url'i verdik.
istek.send();  // url'e veri çekme isteğinde bulunduk.

istek.addEventListener("readystatechange", veri);  // XMLHttpRequest 5 aşamadan oluşan bir durum değişimine sahiptir. ve durum 4 olursa veriyi çekmiştir.
                                                  // Burda her durum değiştiğinde veri adlı fonksiyonu çağırsın diye event ekledik.


function veri(){
     if(istek.readyState === 4 && istek.status === 200){  // 200 sunucunun bize verdiği cevaptır. 4 ise isteğin tamamlaanıp cevap alınabileceğini gösterir.
          console.log(JSON.parse(istek.responseText));  //responseText ise gelen veriyi tutan komuttur. istersek yazdırma istersek farklı işlemler yapabiliriz.
     }
}
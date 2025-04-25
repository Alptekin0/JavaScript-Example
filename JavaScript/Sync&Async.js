//! SYNC & ASYNC

//Javascript normalde senkron çalışan bir programlama dilidir. Kodlar yazıldıktan sonra derleyici onu yukardan aşağıya doğru derler ve çıktıyı sırasıyla verir
// Fakat bazi oluşumlar Javascript'te Asenkron şekilde çalışır. Bunun nedeni ise özellikle web uygulamalarında kod esnekliğini ve hızını artırmaktır.
//asenkron çalışmak bize zaman kazandırabilir fakat bazı dezavantajları da söz konusudur. Örneğin istenilen çıktıyı istediğimiz zaman gösterememek vb gibi

//Normal şartlarda aşağıdaki kodun çıktısı yukarıdan aşağı doğru Hello setTimeout devreye girdi World şeklinde olmalıdır. Fakat setTimeout metodu
//asenkron çalışan bir metoddur. Bekleme süresi boyunca alttaki kodları çalıştırır. Böylece setTimeout'un zamanlayıcısı geriye doğru sayarken
//Bir yandan da alttaki kodlar çalışır. Zamanlayıcı bitince setTimeout devreye girer ve işlevini yapar.
//İşte asenkron çalışma zaman maliyeti konusunda bize kazanç sağlasa da bazı yönlerden dezavantajı vardır.

console.log("Hello");

setTimeout(()=>{
     console.log("setTimeout devreye girdi");
},1000);

console.log("World");

//! FETCH APİ

//XMLHttpRequest'te alternatif olarak daha basit ve modern şekilde web sitelerinden veya sunucudan veri çekme, veri yazma, veri düzeltme işlemlerini yapan bir arayüzdür.
//XMLHttpRequst'e göre kullanımı daha basittir. Fetch Api'de bilinmesi gereken mühim bir bilgi ise promise döndürdüğüdür.
//o nedenle dönen veri .then ile karşılanır response oluşur bu response'da bize bir promise döndürür. onu da .then ile alırsak
//istediğimiz veriyi ordan alabiliriz.



fetch("https://jsonplaceholder.typicode.com/posts")   // fetch(url)
.then(cevap => cevap.json())                          // dönen cevabı json donustur. 
.then((data) => console.log(data))                    // json bir promise dönecek onu yakala ve içeriği yaz
.catch((err) => console.log(err))                     // hata olursa hatayı konsola yaz.
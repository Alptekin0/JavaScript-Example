//! ASYNC & AWAİT

//Asenkron işlemler için en gelişmiş ve en okunaklı yapıdır. Promise kadar karışık değil daha sade ve kod anlaşılırlığı yönünden çok daha iyi bir yapıdır.
//Fonksiyonun başına async yazılır genelde veri çekme, veri okuma, dosya işlemleri vb. yerlerde promise'a alternatif olarak kullanılır.
//Geriye promise dönen fonksiyonların başına await ile o satırı beklemesi gerektiğini bildirerek asenkronluk sorununu çözer. 


async function yazdir(){  // fonksiyonun başına async yazdık.
     const veri = await fetch("https://jsonplaceholder.typicode.com/comments");  // veri çekme işlemi ne kadar süreceği bilinmez ve promise dönüyor await ile bekle
     const posts = await veri.json();   // veri çekmeden dönen veriyi json yapısına çevir bu da promise döner bu nedenle await kullanılır.
     console.log(posts);   // burda veri ile ilgili tüm işlemler yapılabilir
}

yazdir();


//daha kısa şekilde yazılabilir

async function yazdir2() {
     const veri = await(await fetch("https://jsonplaceholder.typicode.com/comments")).json();   // veriyi çekme ve json'a çevirmeyi tek yerde yapabiliriz.
     console.log(veri); // burda veri ile ilgili tüm işlemler yapılabilir
}

yazdir2();

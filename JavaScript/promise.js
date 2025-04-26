//! PROMİSE

// Asenkron sorunlarını callback'e alternatif olarak çıkan daha modern bir nesnedir. Promise iki parametre alır. 1- resolve 2- reject
//eğer istenilen senaryo gerçekleşmisse resolve döndürürüz. olumsuz sonuçlanmışsa reject dondururuz.
//bunları ise metod dışında olumlu ise .then olumsuz ise .catch ile yakalarız.

let kosul = true;


function deneme(resolve, reject){

     if(kosul == true){
          resolve("basirili");
     }
     else{
          reject("basarisiz");
     }
}

const promise = new Promise(deneme);

promise.then(data =>{    // then ile gelen resolve'u yakalırız. Resolve'u data olarak parametre geçtik.
     console.log(data);  // resolve yazdırdık.
     return data;        //  data'yı return ettik eğer aşağıda tekrar data'yı kullanmak için then açarsak return ile oradan kullanbiliriz.
}).then((data)=>{        // then ile üstteki datayı yakaldık    
     console.log(data);   // yazdırdık.
})
.catch(err =>{           // promise'dan reject dönerse catch'e girer. err olarak parametre geçtik
     console.log(err);   // reject'i konsola yazdırdık
})
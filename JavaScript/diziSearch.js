//! DİZİ SEARCH
//verilen bir dizi üzerinde dönerek istenilen değer var mı diye kontrol etmek.

let dizi = ["Toyota", "Hyundai", "Bmw", "Chevrolet", "Mazda", "Audi", "New Holland", "Porsche", "Ferrari", "Tofas", "Renault"];

let arama = prompt("Aramak istediğiniz markayı giriniz : ");


function diziArama(arama, dizi) {

     let search = false;
     let index = 0;

     for (let i = 0; i < dizi.length; i++) {
          if (arama.toLowerCase() == dizi[i].toLowerCase()) {
               search = true;
               index = i;
          }
     }

     if (search == true) {
          alert("Aradığınız ürün mevcut. " + dizi[index]);
     }
     else {
          alert("Ürün bulunamadı. " + arama);
     }
}

diziArama(arama, dizi);

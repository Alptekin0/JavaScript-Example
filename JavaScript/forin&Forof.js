//! FOR İN VE FOR OF

// diziler ve dizler gibi veri ve index yapısındaki nesnelerin index ve verilerine kolayca erişmek için for in ve for of kullanılır.
// for in ---> index numaralarını döndürür.
// for of ---> verileri döndürür.


let dizi = ["elma", "armut", "ananas"]; 

for(let index in dizi){
     console.log(index);
}

for(let veriler of dizi){
     console.log(veriler);
}

// for in içinde dizi[index] yaparsak verileri. for of içinde dizi.indexOf(veriler) yaparsak indexleri almış oluruz.

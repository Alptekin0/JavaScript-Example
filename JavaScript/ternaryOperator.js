//TERNARY OPERATOR
//if else koşullarını daha kısa ve temiz yazmak icin tercih edilir. bazı durumlarda oldukca kolaylık sağlar.



// kullanımı bu şekildedir :  koşul ? ifade1 : ifade2;
//koşul → true ise ifade1 çalışır. 
//koşul → false ise ifade2 çalışır


// yas kontrolu
let yas = 20;
let mesaj = yas >= 18 ? "Reşit" : "Reşit değil";
console.log(mesaj); // "Reşit"


//fonksiyon icinde sayı tek veya cift kontrolu 
function kontrol(sayi) {
  return sayi % 2 === 0 ? "Çift" : "Tek";
}

console.log(kontrol(5)); // "Tek"
//! DESTRUCTİNG 

//Dizi ve objelerde kullanılan daha kolay bir şekilde dizi ve objeyi okumamızı sağlayan yapıdır.

// Normalde : 

let dizi = ["Kalem", "Kitap", "Defter", "Silgi", "Bilgisayar"];

let a,b,c,d,e;

a = dizi[0];
b = dizi[1];
c = dizi[2];
d = dizi[3];
e = dizi[4];

console.log(a+" "+b+" "+c+" "+d+" "+e);

// Destructing ile : 

let [x,y,z,w,p] = dizi;

console.log(x+" "+y+" "+z+" "+w+" "+p);

let colors = ["red", "green", "blue", "yellow"];

let [,color2 , , colorLast] = colors;  // virgüller ile eleman atlanarak alınabilir.

console.log(color2+" "+colorLast);


let fruits = ["banana", "apple", "cherry", "watermelon"];

let [BirinciMeyve,  ...kalanMeyveler] = fruits;  // ... koyarak kalan tüm kısım alınabilir..

console.log(BirinciMeyve+ " "+ kalanMeyveler);

//Normalde obje kullanımı : 

const person = {
     Ad : "Ahmet",
     Soyad : "Demirci",
     Meslek : "Manav"
};

let ad = person.Ad;
let soyad = person.Soyad;
let meslek = person.Meslek;

console.log(ad+" "+soyad+" "+meslek);

// Destructing ile obje 

let {Ad, Soyad, Meslek} = person; // değişken isimleri objedeki keyler ile birebir aynı olmalıdır ve değişken isimleri süslü parantez içinde tanımlanır.

console.log(ad+" "+soyad+" "+meslek);
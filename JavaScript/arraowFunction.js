//! ARROW FUNCTİON
//Şimdiye kadar tanımladığımız fonksiyonların daha basit daha işlevsel hali olan fonksiyon biçimidir.
//js'e es6 güncellemesi ile gelmiştir.

function carp(){ //eski tip fonksiyon
     return 3*5;
}

const carpim = () =>{ // Arrow Fonskiyon. Const ile bir değer oluşturulur. Burda carp adında değişkeni tanımladık. () =>{ } fonksiyon kısmı burası 
   return 3*5;      // sadece eski function'da function yazılırdı burda yazılmıyor. Fonksiyon parametre alacaksa yine parantezler içine yazılır.
}

carpim();
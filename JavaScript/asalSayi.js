//! ASAL SAYI BULMA
let sayi = 1;
let asalMi = true;

while(sayi<=100){
     for(let i=2; i<=(sayi/2); i++){
          if(sayi % i == 0 && sayi == 1){
               asalMi =false;
               break;
          }
     }
     if(asalMi == true){
          console.log(sayi);
     }
     sayi++;
     asalMi = true;
}
//! STATİC
//oluşturulan bir sınıfta static olarak bir metod, değişken veya blok oluşturulabilir. Bu static tanımlamalar
// direkt sınıf üzerinden çağrılır nesne tanımlamasına ihtiyaç duymaz
// static objeler sınıfa bağlıdır ve oluşturulan nesneler için ortak bir tanımdır.


class araba{

     static arabaSayisi =0;

     constructor(renk, model, yil, fiyat){
          this.renk = renk;
          this.model = model;
          this.yil = yil;
          this.fiyat = fiyat;
     }

     write = ()=>{
          console.log(`Model :${this.model}      YIL :${this.yil}      RENK :${this.renk}     FİYAT :${this.fiyat} `);
     }
}


araba.arabaSayisi++;  // static objeye direkt olarak eriştik nesne tanımlamadık.
console.log(araba.arabaSayisi);  // direk static değişkene ulaşıp yazdırdık

const audi = new araba("Beyaz", "Audi A3", "2016", "490.000 TL" );  // nesne oluşturduk
audi.write(); // oluşturduğumuz nesneyi yazdırdık

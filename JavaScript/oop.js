//! Nesneye Dayalı Programlama (OOP) : 

class ogrenci{   // ogrenci adında bir sınıf oluşturduk.

     constructor(ad , soyad , numara){  // sınıf çalışınca ilk olarak constructor devreye girer.
          this.ad = ad;
          this.soyad = soyad;
          this.numara = numara;
     }

     write = ()=>{  //sınıf içinde bir yazdırma işlemi yaptık.
          console.log(`ADI :${this.ad}    SOYADI :${this.soyad}    NUMARASI :${this.numara} `);
     }
}


const ogrenci1 = new ogrenci("Ali", "Siyah", 1317);   // sınıfımızdan bir ogrenci1 adında nesne türettiik. 
const ogrenci2 = new ogrenci("Mustafa", "Çiftçi", 980);   //ogrenci 2 nesnesi

// nesneler üzerinden yazdırma metodumuzu çağırdık.  ogrenci1 ve ogrenci2'nin vermiş olduğumuz bilgileri yazılacaktır. 
ogrenci1.write();  
ogrenci2.write();
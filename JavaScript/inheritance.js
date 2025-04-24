//! İNHERİTANCE (Miras Alma)

//Oluşturulan bir sınıfın diğer sınıflar tarafından kullanılmasına inheritance denir.
//Bu özellik her bolum için farklı sınıf açıp fakat her sınıfın kullanması gereken sabit değerleri bir sınıfta tanımlayıp ondan miras alması üzerine etkili biçimde kullanılır.

class calisanlar{  //calisanlar sınıfını oluşturduk

     constructor(TC, ad, soyad, TelNumarasi){  // constructor ile TC ad soyad ve telefon numarasını parametre olarak istedik
          this.TC = TC;
          this.ad = ad;
          this.soyad = soyad;
          this.TelNumarasi = TelNumarasi;
     }

     write(){  // gelen parametreleri yazdırma fonksiyonu oluşturduk
          console.log(`TC:${this.TC}     AD:${this.ad}         SOYAD:${this.soyad}        TELEFON NUMARISI:${this.TelNumarasi} `);
     }
}

class yoneticiler extends calisanlar{  // yoneticiler sınıfını oluşturduk. Bu sınıf calisanlar sınıfını miras aldı
                                      // içinde herhangi bir şey yapmamamıza rağmen calısanlar sınıfındaki tüm özellikleri kullanabiliyor.

}

class satisPersonelleri extends calisanlar{   // satis personelleri sınıfını tanımladık yine calisanlar sınıfını miras alıyor fakat başka parametreler tanımlamak istersek

     constructor(TC, ad, soyad, TelNumarasi, satisMiktari, prim){  // constructor'da miras aldığımız sınıf hariç satis miktarı ve prim tanımladık
          super(TC, ad, soyad, TelNumarasi);  // miras alınanlar super ile yazılır
          this.satisMiktari = satisMiktari;   // satis personellerine özel tanımladığımız değişkenler normal şekilde alınır ve yazdırılır.
          this.prim = prim;
     }
     // yazdırma
     write(){
          super.write();
          console.log(`SATİS MİKTARİ :${this.satisMiktari}    PRİM :${this.prim}`);
          
     }
}


// nesneleri oluşturma ve yazdırma kısmı
const yonetici1 = new yoneticiler(12312312, "Zeynep", "Bilir", 412131313);
const yonetici2 = new yoneticiler(43534534, "Bulut", "Öz", 98918828);

yonetici1.write();
yonetici2.write();


const satisPersoneli1 = new satisPersonelleri(12312312, "Bahadir", "Göz", 123123123, "45 ürün", 3750);
satisPersoneli1.write();

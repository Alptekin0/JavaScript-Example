//! BASİT ATM UYGULAMASI 

const bosluk = "\r\n";   // bir alt satıra geçmeyi her seferinde tekrar tanımlamamak için burda tanımladık

const metin = "1- Bakiye görüntüle"+bosluk+
              "2- Para Çekme"+bosluk+
              "3- Para Yatırma"+bosluk+
              "4- Çıkış"+bosluk+
               "Şuanki bakiyeniz : 3500 TL"+bosluk+
              "Yapmak istediğiniz işlemi giriniz :";


     let islem = Number(prompt(metin));

     let Bakiye = 3500;

     while(islem != 4){


          switch(islem){

               case 1:
                    alert("Bakiyeniz : "+Bakiye);
               break;
          
               case 2:
                    let cekimTutari;
                    cekimTutari = Number(prompt("Çekmek istediğiniz tutarı girinzi : "));
          
                    if(cekimTutari <= Bakiye){
                    Bakiye = Bakiye - cekimTutari;
                    alert("Çekim başarılı. Kalan tutarınız : "+ Bakiye);
                    }
                    else{
                         alert("Bakiye yetersiz");
                    }
          
               break;
          
               case 3:
                    let yatirilanTutar;
                    yatirilanTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz :"));
                    alert("Yatırılan tutar :"+yatirilanTutar + bosluk+"Toplam tutar : "+(yatirilanTutar+Bakiye));
                    Bakiye = yatirilanTutar + Bakiye;
          
               break;
          
               case 4:
                    alert("çıkış yapıldı.");
               break;
          
               default:
                    alert("Yanlış işlem seçimi yaptınız.");
          
               break;
          
          }
          islem = Number(prompt(metin));
     }
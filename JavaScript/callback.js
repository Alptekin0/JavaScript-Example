//! CALLBACK

//senkon ve asenkron sorunlarını önüne geçmek için Callback kullanılabilir. Biraz eski bir metoddur kod karmaşıklığını artırabilir bu nedenle çok tercih edilmez.
//isim ve soyisimi http isteği ile çeken bir kodumuz olsun. önce ismi çeksin sonra isme göre soyismi çeksin.
//http istekleri asenkron çalışan oluşumlardır. Bu nedenle isim ve soyisim çekme işi aynı anda çalışmaya başlar.
// bu bize hız konusunda avantaj sağlar fakat önce ismi çekmesi gerektiğini unutmamalıyız çünkü ona göre soyismi bulacağız.
//işte burda sağlıklı bir kod için önce soyisim gelme ihtimalini ortadan kaldırmalıyız. Bunu callback kullanarak yapabiliriz.

function isimGetir(soyisimGetir){
     // ismi getirmek için http istek kodları
     let isim = "Ali";  // web servisten geldiğini düşünelim
    soyisimGetir(isim); // parametre olarak gelen fonksiyonumuzu çağırıyoruz.

}

function soyisimGetir(isim){  // parametre olarak ismi alır. Çünkü isme göre soyismi bulacaktır.
     // soyismi getirmek için http istek kodları
     let soyisim = "Bakan";   // web servisten ada göre gelen soyad olduğunu düşünelim.
     console.log(isim , soyisim);
}

//Önce çalışmasını istediğimiz fonksiyonu çağırıyoruz. Çağırdığımız fonksiyona parametre olarak sonra çalışmasını istediğimiz fonksiyonu gönderiyoruz.
//önce çalışan fonksiyon işini yapıyor ve en sonda parametre olarak gönderdiğimiz fonksiyonu çağırıyoruz.
//Böylece ilk fonksiyonda işlem bittikten sonra diğer fonksiyon çağrısı geliyor ve fonksiyon çalışıyor.
// Callback kısaca bir fonksiyona diğer fonksiyonun parametre olarak gönderilip çağrılmasıdır.
//böylece http isteği yaparken eş zamanlı başlamalarını engellemiş ve Olası hataların önüne geçmiş oluyoruz.

isimGetir(soyisimGetir);
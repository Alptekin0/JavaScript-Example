//ELEMENT SİLME
//Silinecek eleman seçiciler ile seçilir ve silme işlemi yapılır. parent-child ilişkisi ile de silme işlemi gerçekleşebilir.

element = document.querySelector("#form2"); // form 2 seçildi
element.remove(); //kaldırıldı

element = document.querySelector(".container").childNodes;  // container'ı (kapsayıcı div) node olarak aldık.
element[3].remove(); // form1 containerin 4. elemanı element[3] diyerek kaldırdık.

//ELEMENT DEĞİŞTİRME
//yeni bir element oluşturup var olanın yerine koyabiliriz

let yeniElement = document.createElement("h3");  // yeni bir başlık elementi oluşturduk
yeniElement.innerHTML = "YENİ BASLIK";  // text'ine yani başlık yazdık
yeniElement.style.color = "red";  // rengini kırmızı yaptık

element = document.querySelector(".container"); // yer değiştirmek istediğimiz h2 elementine container üzerinden ulaşacağız

// h2 başlık ile oluşturduğumuz yeni başlığı yer değiştireceğiz. h2 container'ın 2. elemanı

element.replaceChild(yeniElement, element.childNodes[1]);//container elementini node'a çevirdik çünkü yer değiştirme metodu yer değiştireceğimiz elementi node istiyor.
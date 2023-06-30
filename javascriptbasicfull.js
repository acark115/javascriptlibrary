/*tutorial ve yardım için kaynaklar:
https://www.w3schools.com/js/
chat.openai.com
*/

//               DEĞİŞKENLER
var sayi = 20; // değişken tanımlama var yerine let const vb. yazılabilir
var sayi2 = 30;
var sayi3 = 40; 
alert("toplamları:" +(sayi1 + sayi2 + sayi3));//alert ekrana uyarı şeklinde yazdırır "toplamları:" ifadesi string değerdir 

var a ="javascript";
var b ="Programlama";
var c = "Dili";
alert(a + c + b);//string değerlerimiz topladık 

var x;//x değişkenini oluşturduk
x = 10;//x değişkenine değer atadık
var d = a * 2 + 10;//d değişkeni oluşturduk ve değerini a değişkeninin 2 katının 10 fazlası olarak belirttik
alert("b değişkenini değeri:" + b);

//                  ARRAYLAR   
//arraylar birden fazla değeri depolayabildiğimiz bir veri tipidir

var array = ["java","python","javascript","php"];//birden falza değeri tanımladık
alert(array[0]);//arrayda değerlerimiz erişmek için indexleri kullandık değerlerimizin indexlenmesi diğer dillerdeki gibi 0,1,2,3 gibi ilerliyor burada arrayi tanımlayıp hangi indexi istediğimizi"0" ı yazdık
alert(array[4]);//4. değerimiz olmadığı için undifined hatası verir
array[4] = "c++";//4 değerimiz yoktu hatırlarsanız ama artık olmayan 4. değerimizi ekledik javascriptte arraylara değer böyle ekleniyor
array.push("go");//bu şekildede arraya değer ekleyebiliriz
alert(array.lenght);//arrayın içindeki toplam değer sayısını yazdırdık

//                 FOR DÖNGÜSÜ
// ilk başta döngümüzü oluşturduk sonra döngü değişkeni oluşturduk sonra koşulumuz yazdık ve böylece döngü oluşturduk ve açılımı : döngü değişkenimiz sıfırdan başladı ve koşulumuz i 10 dan küçük olduğu sürece ve her dönügünü sonunda i mizi bir arttırdık bu döngü inin değeri 10 oluncaya kadar sürecektir
for (var i = 0; i < 10 ;  i++){
console.log("i değeri:" + i);//i değerini consola yazdırdık
}

//                 WHİLE DÖNGÜSÜ

var i = 0;
while (i < 100){
console.log("i değeri:" + i);
  i += 2// her döngünün sonunda i değeri  2 artıyor 
  // kod çalıştığında i değerleri 0 dan 100 e çift sayıların çıktısını alırız 
}

//                ARRAYLARIN YAZDIRMAK 

var sayilar = [32,35,40,57];  // arrayımız oluşturduk
alert(sayilar.lenght);// bu şekilde kaç tane değer olduğunu söyler 

// eğer çok faza değerin olduğu arrayımız varsa ve bu değerleri yazırmak istiyorsak bu kodu kullanırız
console.log("array elamanları:" );
for (var i = 0; i < sayilar.lenght;i++){
  console.log("eleman" + sayilar[i]);
}
// pratik yöntem: foreach sayıların üzerinde tek tek gezin demek ve foreach için fonksiyon lazımda ve yazdık function objesi for each döngüsü üzerinde her gezindiğinde sayi değişkenine eşitlicek  
sayilar.forEach(function(sayi){
console.log("eleman:" + sayi);
});

//              KOŞULLU DURUMLAR 

var a = 5;
var h = 6;
if(a == h){
console.log("esit");
}
// a ile h nin esit olup olmadığını kontrol ettik

if( a != h){
console.log("esit değil");
}
//a nın h ile eşit olmadığını kontrol ettik ! eşit değil işaretidir 

if( 2 == "2"){
  cosnole.log("esit");
} 
//burada eşit diyecektir ancak "2" string bir ifadedir bunu önlemek için 
if(2 === "2"){
  console.log("esit");
}
//burada çıktı vermeyecektir === işareti string değerlerle diğer tür değerleri kontrol eder 

if(10 == 20){
  console.log("eşit");
}else{
  console.log("esit değil");
}

if(2==2 && "murat"=="mehmet"){
  console.log("evet");
}else{
  console.log("hayır");
}
//&& biri bile yanlış çıksa hayır çıktısını verir || buda or operatörüdü genle sunucunun evet çıkması için en az birinin doğru olması gerekir
if( ! (3 < 4)){
  console.log("evet");
}
// parantez içindeki true ama dışardaki ! işareti onu false a çevirdi o yüzden çıktı alamadık

//           ELSEİF
var islem = 2 ;
if(islem == 1 ){
  console.log("islem 2");
}else if (islem == 3){
  console.log("islem 3");
}else{
  console.log("geçersiz işlem");
}

//                              SWİTCH CASE
var ı = 4;
switch(islem){
  case 1:
     console.log("işlem 1");
     break;
  case 2:
    console.log("işlem 2");
     break;
  case 3:
    console.log("işlem 3");
     break;
  default:
    console.log("geçersiz işlem");
}

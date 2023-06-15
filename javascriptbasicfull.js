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
  i += 2
}






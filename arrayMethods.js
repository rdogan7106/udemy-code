// Array Methods

const arrays = ['book','pencil','notebook'];
const arrays2 = new Array('Hello',345,new Date(),null,undefined,{x:1,y:2});
const city = ['Stockholm','Malmo','Halmstad','Mölndal','Helsinborg'];
const number =[123,5,13,45,56,76,12,23,34]


console.log(city[2]);
console.log(city.length) //Dizinin uzunlunu verir
console.log(Array.isArray(arrays)) //dizi olup olmadıgını kontrol eder
console.log(city.indexOf('Malmo')) // Verilen degerin index numarasını bulur.
city.push('Lund'); //Dizinin sonuna eleman ekler
console.log(city)
city.pop() //dizinin sonundaki elemanı siler 
city.unshift('Lund','Boden'); //Dizinin basına eleman ekler
city.shift(); //Dizinin basındaki eleman siler
console.log(arrays.slice(1,2)) //verilen indexden baslayarak diziyi parcalar
console.log(arrays.splice(1,3)) 
//console.log(arrays.splice(1,1,'school','class'))  //Splice da eleman ekleme ozelligi
console.log(city.reverse()) //dizi elemanlarını ters cevirir
console.log(city.concat(arrays2)) //dizileri birlestirir
console.log(city.sort()) //dizilerde sıralama yapar
console.log(number.sort()) //sayıları sıralarken ilk rakama gore yapar
console.log(number.sort(function(a,b){return a-b})) //CallBack fonksiyon ile sıralama
console.log(number.sort(function(a,b){return b-a})) //CallBack fonksiyon ile sıralama tersten 
let result = number.find(function(e){
    return (e>10) & (e<20)
})
console.log(result)
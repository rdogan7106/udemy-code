const names = 'Rahman';
const age = 31;
let result;
let result1;
const p = 'Hello there \t, how is it going?'
const p1 = 'Hello there, how is it going?'
const p2 = 'Hello there \n, how is it going?'

result = names.concat(' '+ age) //Birlestirme
result = names.indexOf('h') // Verilen degerin index numarasını bulur
result = names.lastIndexOf('a') //Sondan baslayarak verilen degerin index numarasını bulur
result = names.charAt(2); //index numarası  verilen degeri getirir.
result = names['2']; //CharAt ile aynı 
result = names.charAt(names.length - 1); //Son karakteri bulur
result = p1.substring(3) // verilen degerden sonraki karakterleri alır
result = p1.substring(3,5) // verilen baslangıc degerinden sonra ikinci sayı kadar deger alır
result = p1.substring(-3,5) // verilen baslangıc degerinden sonra ikinci sayı kadar deger alır
result = p1.substring(3,5) // verilen baslangıc degerinden sonra ikinci sayı kadar deger alır
result1= p1.slice(3,5) //SubString le benze ancak negatif deger alamaz
result = p1.split(' ');
result = p1.split(' ',4);
result = result[2];
result = p1.replace('Hello','Hi')
result = p1.includes('Hello');




//Output
console.log(p1);
console.log(p1.length) //uzunluk verir
console.log(p1.toLocaleLowerCase()) //Kucuk harfe cevirir
console.log(p1.toLocaleUpperCase()) // Buyuk harfe cevirir
console.log(result);
console.log(result1);
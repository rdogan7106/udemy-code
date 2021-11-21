const firstName = 'Rahman';
const lastName = "Dogan";
let val = firstName + " " +lastName;
const age = 31;
let hobies ="cinema, swim , fotball ,hokey";
console.log(val);
// String concatenation
val = 'Rahman';
val += ' Dogan';

val ='My Name '+ firstName +' My surname '+ lastName + ' My Age ' + age;

// String concat
val =firstName.concat(' ',lastName);

//String length
val =val.length;

// String UpperCase - LowerCase
val = val.toLocaleUpperCase();
val = val.toLocaleLowerCase();

val = val[0];
val = val[1];

val = val.indexOf('a');

// subString 
val = val.substring(0,2);

//slice
val = val.slice(0,5);
val = val.slice(4);

//string replace
val = val.replace('rahman','selim');
val = val.replace('rahman','selim')+' ';

//trim
val = val.trim(' ');


val = hobies.split(',');


console.log(val);
console.log(typeof(val));
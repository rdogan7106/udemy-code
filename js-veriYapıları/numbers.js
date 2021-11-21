let val ;
//val =10 ;
//val = Number('10')
//val = parseInt('10')
// val = parseFloat('10.5')
//val = parseInt('a10a') //NaN
//val =  isNaN('10');
//val =  isNaN('a10');
let num =10.123324;

val = num.toPrecision(5);

val =num.toFixed(2);

val = Math.PI();
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(2.4);
val = Math.ceil(2.6);
val = Math.floor(2.3);
val = Math.floor(2.9);
val = Math.sqrt(64);
val = Math.pow(2,3);
val = Math.abs(-100);
val = Math.min(2,3,4,123);
val = Math.max(243,41,2);
val = Math.random();
val = Math.random()*10;
val = Math.floor(Math.random()*10);
val = Math.ceil(Math.random()*10);
val = Math.floor(Math.random()*10 + 1);


console.log(val);
console.log(typeof(val));

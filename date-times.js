let d =new Date();
let birtday = new Date(1990,5,17);

// Set Methods
d.setFullYear(2021);
d.setMonth(11);
d.setDate(21);
d.setHours(20);
d.setSeconds(1);
d.getMinutes(12)

// Get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());
console.log(d.getMinutes);

console.log(d);
console.log(typeof(d));

console.log(d.getFullYear()-birtday.getFu8llYear());
console.log(d.getMonth()-birtday.getMonth());
console.log(d.getDate()-birtday.getDate());

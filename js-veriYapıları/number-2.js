let num = 15.3123123;
console.log(num.toPrecision(3));
console.log(num.toFixed(4));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.max(1,3,4,2145,213,123));
console.log(Math.min(1,3,4,2145,213,123));

/////////////////////

let min = 50;
let max =100;
console.log(Math.floor(min+Math.random()*(max-min)));

////////////////////
let salary = 3700;
let overTimeSalary = 10.3;
let overTime = 42;

let totalSalary = salary + overTime*overTimeSalary;
let lastSalary = totalSalary - totalSalary*0.25;
console.log(lastSalary.toFixed(4));

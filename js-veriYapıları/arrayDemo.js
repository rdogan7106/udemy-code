// Demo Array

let arr = ['BMW','Mercedes','Volvo','Mazda','Honda'];
// let arr2=   new Array('BMW','Mercedes','Volvo','Mazda','Honda');

console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(arr[arr.length-1]);

arr[4] = 'Renault';
console.log(arr);

arr.push('Toyata');
console.log(arr);

arr.unshift('Fiat');
console.log(arr);


arr.shift('Fiat');
arr.pop('Toyata')
console.log(arr);

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

let numbers =[1,4,5,11,523,4];
console.log(numbers.sort());

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;

}

console.log(numbers.sort(compare));

console.log(arr.indexOf('Volvo'));
console.log(arr.includes('Volvo'));

let str = 'Chevrolet,Dacia';
let arr2 = str.split(',');
console.log(arr2);

let arr3 = arr.concat(arr2);
console.log(arr3);

console.log(arr3.splice(6,2));

console.log(arr3.slice(6,8));

console.log(arr3);


let studentA =['Zehra','Dogan','2001'];
let studentB =['Selim','Dogan','2012'];
let studentC =['Kerem','Dogan','2021'];

let students = [studentA,studentB,studentC];
console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[2][1]);
console.log(students[1][2]);

console.log(students);





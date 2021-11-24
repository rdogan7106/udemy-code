//Scopes

// Global Scopes
let names = 'Zehra';
let age = 25;
function logName(){
    let names = 'Selim';
    let age = 1
    console.log('function scope' + names,age);
}
if(true){
    let age = 30;
    console.log('block scope' + names)
}
console.log(age)
logName();
console.log(names);

//Local Scope
// functions create their own scopes
// blocks do not create their own scopes
// Let and const block create scop in ES6

if(true){
    var model = 'Opel';
    let year = 2022;
    const color = 'white';
    console.log('block scope',model,year,color);
}

console.log(model);
// console.log(year);

var i = 1;
for(var i=0; i<10; i++){
    console.log('i :',i)
}
var i = 1;
for(let i=0; i<10; i++){
    console.log('i :',i)
}

<<<<<<< HEAD
// Function Declaretions
function sum(a,b){
    let c = a+b;
    return c;
}
console.log(sum(10,20));

// Function Expressions
const sum = function(a,b){
    if(typeof a === 'undefined'){ a  = 0; }
    if(typeof b === 'undefined'){ b  = 0; }
    let c = a + b;
    return c ;
}
console.log(sum(10,40));
console.log(sum(10)); //NaN
// ES6 Default Parameters
const sum = function(a = 0, b = 0){    
    let c = a + b;
    return c ;
}
console.log(sum(10)); 


function args(){
    console.log(arguments)
}
args(10,20,30);


function sumAll(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

=======
// Function Declaretions
function sum(a,b){
    let c = a+b;
    return c;
}
console.log(sum(10,20));

// Function Expressions
const sum = function(a,b){
    if(typeof a === 'undefined'){ a  = 0; }
    if(typeof b === 'undefined'){ b  = 0; }
    let c = a + b;
    return c ;
}
console.log(sum(10,40));
console.log(sum(10)); //NaN
// ES6 Default Parameters
const sum = function(a = 0, b = 0){    
    let c = a + b;
    return c ;
}
console.log(sum(10)); 


function args(){
    console.log(arguments)
}
args(10,20,30);


function sumAll(){
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

>>>>>>> 8e8a6f7bd8dee6a88212c6a69ca9005dcaeaa6c8
console.log(sumAll(10,23,44,56,76));
// rest Parameters

//ES5
function sum(){
    console.log(arguments)
}
sum(10,20,30)


function sum2(){
    let arr = Array.prototype.slice.call(arguments);
    let result = 0;
    arr.forEach(function(item) {
        result +=item;
        
    });
    return result;
}
console.log(sum2(10,20,30));

//ES6
function sumES6(...arr){
    let result = 0;
    arr.forEach(item =>result += item);
    return result
}
console.log(sumES6(10,20,30,49));

function isDriver(age,...years){
    years.forEach(year =>console.log(2021 - year >=age ))
}
isDriver(19,1990,2002,1982,2017)
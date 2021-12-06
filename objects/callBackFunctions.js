// CallBack Functions
let val;
function MultipleByTwo(a,b,c,callBack){
    let arr =[];
    if(callBack && typeof callBack ==='function'){ 
        for(let i=0; i<3; i++){
        arr[i] = callBack(arguments[i]*2)
        }
    }
    return arr
}
function addOne(a){
    return a+1;
}
function addTwo(a){
    return a+2;
}
function addThere(a){
    return a+3;
}

// for(let i=0; i<val.length;i++){
//     val[i] = addOne(val[i]);
// }



val = MultipleByTwo(3,5,45,addOne);
console.log(val)
val = MultipleByTwo(3,5,45,addTwo);
console.log(val)
val = MultipleByTwo(3,5,45,addThere);
console.log(val)
val =MultipleByTwo(23,45,123,function(a){
    return a+2
})
console.log(val)
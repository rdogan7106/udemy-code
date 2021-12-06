//String 

let str1 ='Rahman';
let str2 = new String('Rahman');
console.log(typeof str1)
console.log(typeof str2)

if(str1===str2){
    console.log('equal')
}
else{
    console.log('not equal')
}

if(str1==str2){
    console.log('equal')
}
else{
    console.log('not equal')
}
String.prototype.repeat = function(n){
    return new Array(n+1).join(this)
}
console.log('rahman '.repeat(3))
//Number
let num1 =10;
let num2 = new Number(10);

//Boolen 
let bool1 = true;
let bool2 = new Boolean(true)

// Object
let obj1={
    name: 'Rahman'
}
let obj2 = new Object({
    name:'Rahman'
})
 //Array
 let arr1 =['rahman','selim','zehra']
 let arr2 =new Array('rahman','selim','zehra');

 Array.prototype.remove =Array.prototype.remove || function(member){
     let index = this.indexOf(member)
     if(index > -1){
         this.slice(index,1)
     }
     return this;
 }
 console.log(arr2.remove('rahman'))
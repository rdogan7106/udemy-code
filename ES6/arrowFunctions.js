//Arrow Functions
let welcomeES5 = function(){
    console.log('hello ES5')
}
welcomeES5();
 let welcomeES6 = () =>{
     console.log('hello ES6')
 };
 welcomeES6();

 // with parameters
 let multipyES5 = function(x,y){
     return x*y
 }
 console.log(multipyES5(10,5));

 //
 // let multipyES6 = (x,y) =>{return x*y; }
 let multipyES6 = (x,y) =>x*y;
 console.log(multipyES6(10,5))

 // ES5 
 let splitES5 = function(text){
     return text.split(' ')
 }
console.log(splitES5('Rahman DOGAN'));

// ES6
let splitES6 = text => text.split(' ');
console.log(splitES6('Rahman DOGAN'));

//object Literals
//ES5
let getProductES5 = function(id,name){
    return{
        id:id,
        name:name
    }
}
console.log(getProductES5(1,'S8'));

//ES6
let getProductES6 = (id,name) =>({
    id:id,
    name:name
});
console.log(getProductES6(2,'S9'));

const phones =[
    {name:'IPhone 8',price:3000},
    {name:'IPhone 7',price:2000},
    {name:'IPhone 6',price:1000},
    {name:'IPhone 5',price:400},
];
// ES5
let pricesES5 = phones.map(function(phone){
    return phone;
});
console.log(pricesES5)

//ES6
let pricesES6 = phones.map(phones =>phones.price);
console.log(pricesES6)

//ES5
const arr =[12,4,45,1,56,87,2,6];
let eventES5 = arr.filter(function(a){
    return a%2 == 0; 
})
console.log(eventES5);

//ES6
let eventES6 = arr.filter(a => a%2 == 0 )
console.log(eventES6);
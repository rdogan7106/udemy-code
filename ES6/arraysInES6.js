// Arrays isn ES&
let boxes = document.querySelectorAll('.div1');

//ES5
let boxesES5 =Array.prototype.slice.call(boxes);
boxesES5.forEach(element => {
    element.style.backgroundColor='green'    
});


//ES6
Array.from(boxes).forEach(box =>{
    box.style.backgroundColor='gray'
});

// //ES5
// for(let i =0; i<boxesES5.lenght; i++){
//     if(boxesES5[i].className ==='blue'){
//         continue;
//     }
//     boxesES5[i].textContent = 'I am Changed';
//     boxesES5[i].style.backgroundColor = 'aqua';
// }
// console.log(boxesES5);

//ES6
let boxesES6 = Array.from(boxesES6);
for(let box of boxesES6){
    if(box.className =='div1 blue'){
        continue;
    }
    box.textContent ='I am Changed'
    box.style.backgroundColor = 'red';
}

let arr = Array.from('JavaScript');
console.log(arr);
const products = [
    {name:'Samsung S8',price:3000},
    {name:'Samsung S7',price:2000},
    {name:'Samsung S6',price: 1000},
]
console.log(Array.from(products,prd =>prd))
console.log(Array.from(products,prd =>prd.price))
console.log(Array.from(products,prd =>prd.name =='Samsung S8'));
console.log(products.find(prd =>prd.name ==='Samsung S8'));
console.log(products.filter(prd => prd.name === 'Samsung S8'));
console.log(products.findIndex(prd => prd.price ===2000));

let numbers = ['a','b','c'];
let entries = numbers.entries();
for(let i of entries){
    console.log(i);
}
let keys = numbers.keys();
for(let i of keys){
    console.log(i)
}
let values = numbers.values();
for(let i of values){
    console.log(i);
}
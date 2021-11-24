// Loops in Array & Object
let cars =['Bmw','Mercedes','Audi'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// for-in
for( let i in cars){
    console.log(`index : ${i} value :${cars[i]}`);
}
console.log(typeof cars);

//foreach

cars.forEach(function(item){
    console.log(item);
})

let people = [
    { firstName :'Zehra', lastName:'Dogan'},
    { firstName :'Selim', lastName:'Dogan'},
    { firstName :'Rahman', lastName:'Dogan'},
];
for(let i =0; i<people.length; i++){
    console.log(people[i].firstName);

}
for(let i in people){
    console.log(`index : ${i} value :${people[i].lastName}`);
}

people.forEach(function(item){
    console.log(item.firstName);
})

// map : returns an arrays
let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName;
})
console.log(val);

let number = [3,4,13,67,45];
let num = number.map(function(item){
    return item*item;
})
console.log(num)
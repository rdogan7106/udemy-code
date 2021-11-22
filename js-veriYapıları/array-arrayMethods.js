// Arrays

let names =['Zehra','Selim','Dogan'];

let years = [2016, 2022, 1990,1979];

let mix =['Rahman','Dogan',1990,null,undefined,['JavaScript,CSS,HTML']];
//get Array items
console.log(names[0]);
console.log(names[2]);

//set Array items
names[names.length] ='Ays';

// add item
years.push(1991);
years.unshift(2001);

// remove item
years.pop();  //last item remove
years.shift(); // first item remove

//indexof
console.log(names.indexOf('Selim'));

//reverse
names.reverse();

//sort
years.sort();

//concat
let val = years.concat(names);
console.log(val);

//Splice
names.splice(1,0,'Can');
names.splice(1,1,'Can');
names.splice(0,1);





function over18(year){
    let age = 2021-years;
    return age>=18;
}
console.log(over18(1990));

// find
let val = years.find(over18);
console.log(val);

//filter
let val = years.filter(over18);
console.log(val);






console.log(names.length);
console.log(names);
console.log(typeof names);




console.log(years);
console.log(mix);

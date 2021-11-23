//object literals
let person ={
    firstName:'Zehra',
    lastName :'Dogan',
    age :5,
    hoobies:['Cartoon','Play'],
    address :{city:'Malmo',
              country:'Sweden'              
             },
             getBirthYear:function(){
                return 2021-this.age; 
             }
        };

let val;
val = person.firstName;
console.log(val);

val = person.lastName;
console.log(val);

val = person.age;
console.log(val);

val = person['firstName'];

val = person.address.city;
console.log(val);

val = person.address.country;
console.log(val);

val =  person.hoobies[1];
console.log(val);

val =  person.hoobies[0];
console.log(val);

val = person.getBirthYear();



console.log(person);
console.log(typeof(person))

let people = [
            {firstName:'Zehra',lastName:'Dogan'},
            {firstName:'Selim',lastName:'Dogan'},
            {firstName:'Rahman',lastName:'Dogan'},
             ];
console.log(person[1].firstName);
console.log(person[0]);

for(let i = 0; i<people.length; i++ ){
    console.log([i]);
}

for(let i = 0; i<people.length; i++ ){
    console.log([i].firstName);
}
const fullName = 'Zehra Dogan';
const city = 'Malmo';
const yearOfBirth = 2016;

let val ;
val = 'My name is '+fullName +
        'I\'m' + (2021-yearOfBirth)+
        ' years old ' + 'and I live in '+ city; 
        
 console.log(val);   
 
 //ternary operator

 val = ` my name is ${fullName}  I'm ${(2021-yearOfBirth>=18)?'over 18':'under 18'} years old an I Live in ${city}`;
 console.log(val);
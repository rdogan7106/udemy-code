const firstName = 'Zehra';
const age = 19;
const isStudent = false;
const school = 'Univercity';

if(firstName === 'Zehra'){
    console.log('Hey Zehra');
}
if (age === 19){
    console.log('Your age 19')
}
if(isStudent){
    console.log('Hey Student')
}
else{
    console.log('You are not student');
}

if(age>=18){
    if((school==='Univercity')||(school==='highSchool')){
        console.log('ok')
    }
    else{
        console.log('Maybe')
    }
    
}
else{
    console.log('no')
};

if(age>0 && age<12){
    console.log(`${firstName} is a child`);
}
else if(age>=12 && age<18){
    console.log(`${firstName} is a teenager`);
}
else{
    console.log(`${firstName} is a adult`);
}

let id ='1231';
if(typeof id !=='undefined'){
    console.log('id: '+id)
}
else{
    console.log('no id')
}
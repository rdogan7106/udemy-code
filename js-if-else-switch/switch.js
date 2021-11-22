//switch statement
let category  ='phone';
switch(category){
    case 'phone':
        console.log('phone');
    break;

    case 'computer':
        console.log('computer');
    break; 
    
    default:
        console.log('wrong category')
};
let day;
switch(new Date().getDay()){
    case 0:
        day = Sunday;
     break   
    case 1:
        day = Monday;
     break   
    case 2:
        day = Tuesday;
     break   
    case 3:
        day = Wednesday;
     break   
    case 4:
        day = Thursday;
     break   
    case 5:
        day = Friday;
     break   
    case 6:
        day = Saturday;
     break   
};
console.log(`Today is ${day}`);


let day;
switch(new Date().getDay()){ 
    case 1:  
    case 2:   
    case 3:   
    case 4:           
    case 5:
        day ='workdays';
    break;     
       
    case 0:
    case 6:
        day = 'Weekend';
     break;
};
console.log(`Today is ${day}`);

const age = 19;
let firstName =  'Zehra';
switch(true){
    case(age > 0 &&age <12 ):
    console.log(`${firstName} is child`);
    break;

    case(age >= 12 &&age <18 ):
    console.log(`${firstName} is teenager`);
    break;

    case(age >= 18):
    console.log(`${firstName} is adult`);
    break;
    
}

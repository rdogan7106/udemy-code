//Immediate Functions

// function welcome(){
//     let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//     let today = new Date();
//     let message = `Welcome today is ${days[today.getDay()]}`;
//     return message;
// }

(function(name){
    let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let today = new Date();
    let message = `Welcome ${name} today is ${days[today.getDay()]}`;
    console.log(message)

})('zehra');
// (function(){

// }());


//console.log(welcome())
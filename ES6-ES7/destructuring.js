//Destructuring


//Destructuring Assigment 
let a,b,rest;
a = 10;
b = 20;
[a,b] = [10,20];
console.log(a)
console.log(b);
[a,b,...rest] = [10,20,30,40,50,60]
console.log(a)
console.log(b)
console.log(rest)

({a,b} = {a:10, b:20});
console.log(a);
console.log(b);
({a,b,...rest} = {a:10,b:20,c:30,d:40})
console.log(a);
console.log(b);
console.log(rest);


//Array Destructuring 

// const arrConfig = ['localhost','8080','900'];
//  let server = arrConfig[0];
//  let port = arrConfig[1];
//  let timeOut = arrConfig[2];
// console.log(server,port,timeOut);


//ES6
const [server,port,timeOut] = arrConfig;
console.log(server,port,timeOut);

//Object Destructuring
const objConfig = {
    server:'localhost',
    port: '8080',
    timeOut:'900'
};
// let server = objConfig.server;
// let port = objConfig.port;
// let timeOut = objConfig.timeOut;

const{server,port,timeOut} = objConfig;
console.log(server,port,timeOut);

let {timeOut :t} = objConfig;
console.log(t);
/////////////////
// const objConfig2 = {
//     server:'localhost',
//     port: '8080',
// };
// let {server,port,timeOut} = objConfig2
// console.log(server,port,timeOut);

const days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const[,,wed,,fri,,] = days;
console.log(wed,fri)
// // 1-)Global veriable naming conflicts
// //script.js
// let name = 'Zehra'
// //app.js
// let name = 'Zehra'

// // 2-)Encapsulation
// let counter ={
//     number :0,
//     increment :function () {
//         return ++this.number;        
//     },
//     decrement :function(){
//         return --this.number;
//     } 
// }
// console.log(counter.increment());
// console.log(counter.increment());
// counter.number = 10;
// console.log(counter.decrement());

// IIFE(Immediately Invoked Function Expressions)
//script.js
// (function(){
//     let name = 'Zehra'
//     console.log(name)
// })();
// //app.js
// (function(){
//     let name = 'Dogan'
//     console.log(name)
// })();

// (function(){
//     //private number
//     let number = 0;
//     let increment = function(){
//         return ++number;
//     }
//     console.log(increment());
//     console.log(increment());
//     return{
//         //public number
//     }
// })();
// console.log(number)
// console.log(increment());

// let Module = (function(){
//     //private number
//     let number = 0;
//     let increment = function(){
//         return ++number;
//     }
//     console.log(increment());
//     console.log(increment());
//     let decrement = function(){
//         return --number;
//     }
//     return{
//         //public number
//         increment,decrement
//     }
// })();
// console.log(Module.increment())

let Module = (function(){
    let privateMethod = function(){

    };
    return{
        publicMethod :function(){

        }
    }
})();
Module.publicMethod();
let a=10;
let b=a;
console.log(a)
console.log(b)

let obj1 ={
    name:'zehra',
    age:10
}
let obj2 = obj1;
obj1.age =12
console.log(obj1.age)
console.log(obj2.age)

let num = 50;
let account = {
    name:'rahman',
    accountNumber:12343
}
function update(a,b){
    a =100;
    b.accountNumber = 3245
}
update(num,account);
console.log(num)
console.log(account)

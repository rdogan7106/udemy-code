//Sub Classes 
//ES5 
function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName
}
PersonES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,userName){
    PersonES5.call(this,firstName,lastName);
    this.phone = phone;
    this.userName = userName;
}
CustomerES5.prototype = Object.create(PersonES5.prototype);

let customer  =  new CustomerES5('rahman','dogan',12345435,'rd')
console.log(customer.sayHi());
console.log(customer)

//ES6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}`
    }
}
class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName);
        this.phone = phone;
        this.userName = username; 
    }
    static getTotal(){
        return 1000;
    }
}
let customer1 = new CustomerES6('zehra','dogan',234245,'zd');
console.log(customer1.sayHi());
console.log(CustomerES6.getTotal());
console.log(customer1);
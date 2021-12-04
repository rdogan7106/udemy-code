// let person ={
//    name:'rahman',
//    yearOfBirth:1990,
//    job:'developer' 
// }
function Person(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job
    this.calculateAge = function(){
        return 2021 - this.yearOfBirth
    }
}
let rhm = new Person('rahman',1990,'student')
let zhr =new Person('Zehra',2016,'child')
console.log(zhr.yearOfBirth)
console.log(zhr.job)
console.log(zhr.name)
console.log(zhr.calculateAge())
console.log(rhm.calculateAge())

console.log("------------------------------------------")

let Person2 =  function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job
    this.calculateAge = function(){
        return 2021 - this.yearOfBirth
    }
}
let rhm1 = new Person2('rahman',1990,'student')
let zhr1 =new Person2('Zehra',2016,'child')
console.log(zhr1.yearOfBirth)
console.log(zhr1.job)
console.log(zhr1.name)
console.log(zhr1.calculateAge())
console.log(rhm1.calculateAge())

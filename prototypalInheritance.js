let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth =yearOfBirth;
    this.job =job;
}
Person.prototype.calculateAge=function(){
    return 2021 - this.yearOfBirth 
}
let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job)
    this.subject = subject
}
//Inherit Person prototype methods
Teacher.prototype = Object.create(Person.prototype)

//Set Teacher constructor
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function(){
    return 'hello my name is '+ this.name
}

console.log(Teacher.prototype.constructor)
let rahman =  new Teacher('rahman',1990,'teacher','computer science')


console.log(rahman)
console.log(rahman.calculateAge())
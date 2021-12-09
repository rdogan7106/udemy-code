// Classes

// ES5 
let PersonES5 = function(name,job,yearOfbirth){
    this.name = name;
    this.job = job;
    this.yearOfbirth = yearOfbirth
}
PersonES5.prototype.calculateAge = function(){
    2021 - this.yearOfbirth;
} 
let zehra =  new PersonES5('zehra','student',2016);
console.log(zehra.calculateAge());

//ES6

class PersonES6{
    constructor(name,job,yearOfbirth){
        this.name = name;
        this.job = job;
        this.yearOfbirth = yearOfbirth;
    }
    calculateAge(){
        return 2021 - this.yerOfbirth; 
    }
}
let zehra2 = new PersonES6('zehra','srudent',2015)
console.log(zehra2.calculateAge());
console.log(zehra2)
let Person =function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth
}
Person.prototype.getName = function(){
    return this.name
}
Person.prototype.lastName = 'Dogan';
let zehra = new Person('zehra',2016,'student');
let rahman = new Person('rahman',1990,'developer')
console.log(zehra)
console.log(zehra.calculateAge())
console.log(zehra.getName());
console.log("********************")
console.log(rahman)
console.log(rahman.calculateAge())
console.log(rahman.getName())
console.log(rahman.hasOwnProperty('name'));
console.log(rahman.hasOwnProperty('lastName'));
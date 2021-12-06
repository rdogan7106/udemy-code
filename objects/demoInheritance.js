//Person Constructor
function Person(name){
    this.name =name;
}
Person.prototype.Introduce = function(){
    console.log(`hello my name is ${this.name}`)
}
// Teacher Constructor
function Teacher (name,branch){
    Person.call(this,name);
    this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function(){
    console.log(`I teach ${this.branch}`);
}

// Student Constructor
function Student(name,number){
    Person.call(this,number);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function(){
    console.log(`my student number ${this.number} I'have already studied hard`)
}

//Director Constructor
function Director(name,branch){
    Teacher.call(this,name,branch);
}
Director.prototype = Object.create(Teacher.prototype);
Director.prototype.constructor = Director;
Director.prototype.shareTask = function(){
    console.log('I have alrady shared all task');
}
let person1  = new Person('zehra');
person1.Introduce();

let t1 = new Teacher('rahman','math');
t1.Introduce();


let s1 =new Student('selim','100')
s1.Introduce();
s1.study();
let d1  = new Director('Ays','turkish');
d1.Introduce();
d1.teach()
d1.shareTask()
let personProto = {
    calculateAge : function(){
        return 2021-this.yearofBirth;
    }
}
let zehra =Object.create(personProto);
zehra.name ='zehra';
zehra.yearofBirth = 2016;
zehra.job = 'student';

let rahman = Object.create(personProto,{
    name:{value:'rahman'},
    yearofBirth:{value:1990},
    job:{value:'developer'}

})



console.log(zehra.calculateAge());
console.log(rahman)
console.log(rahman.calculateAge());
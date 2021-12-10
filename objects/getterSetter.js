const person = {
    firstName:'Rahman',
    lastName:'Dogan',
    get fullName (){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
} 
person.fullName='Zehra Kızım';
console.log(person.fullName)

console.log("------------------------------------------")

const person2 = {
    firstName:'Rahman',
    lastName:'Dogan',
  } 

 Object.defineProperty(person2,'fullName',{
      get function() {
          return `${this.firstName} ${this.lastName}`          
      },
      set function(value) {
          const parts = value.split(' ');
          this.firstName = parts[0];
          this.lastName = parts[1];          
      }
  })

Object.defineProperty(person2,'age',{
      value : 50,
      writable:true,
  });
  person2.age = 55;
console.log(person2.age)
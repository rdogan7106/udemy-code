//Local Storage
let val;
//set Item
const firstName = localStorage.setItem('firstName','Rahman');
const lastName = localStorage.setItem('lastName','Dogan')
let hobies = ['Movie','Programing','football']

console.log(localStorage);

 //get Items
val  = localStorage.getItem('firstName')
val  = localStorage.getItem('lastName')
//remove Item
//localStorage.removeItem('firstName');
//localStorage.removeItem('lastName');

//clear Item
//localStorage.clear();

// set Array to storage
localStorage.setItem('hobies',JSON.stringify(hobies));
val = JSON.parse(localStorage.getItem('hobies'));

//Session Storage
const city = sessionStorage.setItem('city','Malmö');
const country = sessionStorage.setItem('country','Sweden');
console.log(sessionStorage);

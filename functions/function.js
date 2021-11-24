// Function

function calculateAge(birthYear){
    return  2021- birthYear;

}
let age = calculateAge(1987);
console.log(age);

function pension(birthYear, name){
    let age = calculateAge(birthYear);
    let pension = 65 - age;
    if(pension > 0){
        console.log(`${pension} Your retirement period has not expired ${name}`)
    } 
    else{
        console.log('You are pension')
    }
}
pension(1990,'Rahman');
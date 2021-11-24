// number guessing game

let number = Math.floor(Math.random()*10 + 1);
let right = 5;
let guess, counter = 0 ;
while(right >0 ){
    right--;
    counter++;
    guess = Number(prompt(' Please Enter Number'));
    if(number ==guess){
        console.log(`${counter}. : Congratulation!! You Know`);
        console.log(`  total point ${100-((counter-1)*20)}. `);
        break; 
    } 
    else if(number > guess){
        console.log('down');
    }
    else{
        console.log('up');
    }
    if(right == 0){
        console.log('Your guess is over');
    }
}



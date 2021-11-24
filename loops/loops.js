// Lopps

// For Loop
for(let i=0; i<= 10; i++ ){
    if(i == 3){
    console.log("My favorite Number");
    continue;
    }

    if(i == 9){
    console.log("It is enough");
    break;

    }
console.log(i);
}


// While loop
let i =0;
while(i<10){
    console.log(i)
    i++;
}

// do-While loop
let i = 0;
do{
    console.log(i);
    i++
}while(i<10)

let total = 0
for(let i = 30; i>0; i-- ){
    total += i;
}
console.log(total);

let total = 1
for(let i = 10; i>0; i-- ){
    if(i%2 == 0)
    total *= i;
}
console.log(total);

for(let i = 0; i<100; i++ ){
    for(let j = 0; j<100; j++){
        console.log(`i : ${i} j:${j}`);
    }
}

let val='\n';
for(let i = 0; i<100; i++ ){
    for(let j = 0; j<100; j++){
        val += '*';
    }
    val +='\n';
}
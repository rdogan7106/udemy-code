let traffic = new Date('05/11/2020');
traffic.setHours(0,0,0,0);
let trafficTime = Date.now() - traffic.getTime();

let trafficDay = Math.floor(trafficTime/(1000*60*60*24));

if(trafficDay <=365){
    console.log("First maintenance time")
}
else if(trafficDay > 365 && trafficDay<=365*2) {
    console.log("Second maintenance time")
}
else if(trafficDay > 365*2 && trafficDay<=365*3) {
    console.log("Third maintenance time")
}

else{
    console.log("unknown time")
}
console.log(trafficDay);


let result = prompt('who is there ?')
if(result =='cancel'){
    console.log('canceled')
}

else if(result =='admin'){
    console.log('welcome admin')
    let pass = prompt('enter your password');
    if(pass == 'cancel'){
        console.log('canceled');
    }
    else if(pass ='1234'){
        console.log('Welcome Admin');
    }
    else {
        console.log('Wrong Password');
    }
}
else {
    console.log('I don\'t konw you')
}

console.log(result);
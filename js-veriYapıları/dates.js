// Print day month year information of current date

let dt = new Date();
console.log(dt);
console.log(dt.getMonth()+1);
console.log(dt.getDate);
console.log(dt.getFullYear());


//A Date object containing date and time information
let dtA =  new Date('21/11/2021 20:13:20');
let dtB = new Date(2021,7,24,14,55,10);
console.log(dtA);
console.log(dtB);

//A date before 1/1/1990
let dtC = new Date('1/1/1990');
console.log(dtC);
let dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC)

//The elapsed time between two dates
let startDate = new Date('1/1/1990');
let finishDate = new Date('2/11/1993');
let miliSecond = finishDate-startDate;

let second = miliSecond/1000;
let minute = second/60;
let hour = minute/60;
let day = hour/24;

console.log("milisecond : "+miliSecond);
console.log("second : "+second);
console.log("minute : "+minute);
console.log("hour : "+hour);
console.log("day : "+day);

//How to calculate age?

let birtday = new Date('6/12/1992');
let ageDifMs = Date.now() -birtday.getTime();
let ageDate = new Date(ageDifMs);
console.log(ageDate.getFullYear()-1970);



// Mother's day, which is celebrated in the second week of May every year, what day will it be in 2022?

 let mothersDay = new Date();
mothersDay.setHours(0,0,0,0);
mothersDay.setUTCFullYear(2022);
mothersDay.setDate(1);
mothersDay.setMonth(4);


while(mothersDay.getDay()!=0){
    mothersDay.setDate(mothersDay.getDay()+1)

}
mothersDay.setDate(mothersDay.getDay()+7);
console.log("mothers Day :" + mothersDay)






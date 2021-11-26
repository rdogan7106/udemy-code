// Selecting Element

//** Single Element */
//document.getElementById('')
let val = document.getElementById('header');
 val = document.getElementById('header').id
 val = document.getElementById('header').className;

 val = document.getElementById('header');
 val = val.id;
 val = val.className;

val.style.fontSize='45px;'
val.style.color='green;';
val.style.fontWeight = 'bold';
val.style.display = 'none';

val = document.getElementById('header').innerText = 'my App'
val = document.getElementById('header').innerHTML = '<b> my App </b>'

//document.querySelector()
//id
let val = document.querySelector('#header');
//class (selects the first element it finds)
let val = document.querySelector('.header');
document.querySelector('li').style.color = 'blue';

//selects the last element it finds
document.querySelector('li:last-child').style.color = 'blue';

//selects the '2nd' element it finds
document.querySelector('li:nth-child(2)').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent="Hey";
//Deletes all classes, gives new value
document.querySelector('li').className = 'list-group-item';
//Adds new to class list
document.querySelector('li').classList.ad('list-group-item');

// ----------------------------------------------//
//** Multiple Element */
//class Name
//document.getElementByClassName()
let val;
val = document.getElementsByClassName('list-group');
val = document.getElementsByClassName('list-group')[0];
val = document.getElementsByClassName('list-group')[1];
val = document.getElementsByClassName('list-group')[2];

val = val[2];
val[1].style.color ='red'; 
val[1].style.fontSize ='25px'; 
val[1].textContent ='new Items'; 

for(let index=0; index<val.length;i++){
    console.log(val[i].style.color = 'red');
    console.log(val[i].textContent.color = 'new Color');
}

// document.getElementsByTagName()
val = document.getElementsByTagName('li');
val = document.getElementsByTagName('a');

let task = document.getElementById('task-list');
val = task.getElementsByTagName('a');


//document.querySelectorAll();
val = document.querySelectorAll('li');

val.forEach(function(item,index){
    item.textContent =`${index} - hello `; 
})

val = document.querySelectorAll('li:nth-child(odd)');
val.forEach( function(item){
    item.style.background = '#ccc';
})

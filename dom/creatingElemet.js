// Creating Elements

//create Element
const li = document.createElement('li');
//add Class
li.className = 'list-group-items list-group-item-secondary';
li.id = 'list';
//attribute
li.setAttribute('title','new Item');
li.setAttribute('data-id','5');

//text node
const text = document.createTextNode('new item');

li.appendChild(text);

const a = document.createElement('a');
a.setAttribute('href','#');
a.className = 'delete-item';
a.innerHTML = "<i class='fas fa-times'></i>"
// append a to li
li.appendChild(a);
//append li to ul
document.querySelector('#ul').appendChild(li);
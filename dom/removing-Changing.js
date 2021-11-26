const taskList = document.querySelector('#task-list');

//removing element
taskList.remove();
taskList.childNodes[0].remove();
taskList.childNodes[2].remove();
taskList.children[0].remove();
taskList.children[3].remove();
taskList.removeChild(taskList.children[1]);

//**removing Attribute */
taskList.children[0].removeAttribute('class');

for(let i=0; i<taskList.children.length; i++ ){
    taskList.children[i].removeAttribute('class');
}

//**Replacing Element */
const cardHeader = document.querySelector('.card-header');

// create Element 
const h2 = document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('New Title')); 
const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader);

//* Classes 
let val 
let link =  taskList.children[0].children[0];
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('new')
link.classList.remove('new')
// Attributes
val = link.getAttribute('class');
val = link.setAttribute('href','#rahmanDogan');
val = link.hasAttribute('data-val')

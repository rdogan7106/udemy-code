// variables
const form = document.querySelector('#addTaskForm');
const input = document.querySelector('#txtTaskName');
const deleteAllBtn = document.querySelector('#deleteAllTask');
const taskList = document.querySelector('#task-list');

//call event listeners
eventListeners();
function eventListeners(){
    //submit events
    form.addEventListener('submit',addNewItem);

    //delete an item
    taskList.addEventListener('click',deleteItem);
}
//add new ıtems
function addNewItem(e){
    if(input.value === ''){
        alert('add new item');
    }
    //create li
    const li = document.createElement('li');
    li.classList = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value))
    //create a
    const a =  document.createElement('a');
    a.classList.toggle('ms-auto')
    a.classList= 'delete-item ';
    a.setAttribute('href','#');
    a.innerHTML = 'x';
    // add a to li
    li.appendChild(a);
    // add li to ul
    taskList.appendChild(li);
    //clear input
    input.value= "";

    e.preventDefault();
}

// delete an item
function deleteItem(e){

}
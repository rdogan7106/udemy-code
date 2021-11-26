/**Reach objects that have already been created from the dome tree */
const triggerAddBtn = document.querySelector('#addTaskButton');
const deleteAllTask = document.querySelector('#deleteAll');
const addTaskDiv = document.querySelector('#addTask');

// add listener to button
triggerAddBtn.addEventListener('click',function(){  
    let taskText = document.querySelector('#taskInput');
    let taskInputText = document.createTextNode(taskText.value);          

    //check input field
    if(taskInputText.nodeValue !== ""){
    // Create elements to add    
    const div = document.createElement('div');    
    const title = document.createElement('p');
    const  button = document.createElement('button');

    //Place elements inside div
    div.appendChild(title);
    div.appendChild(button);

    //Give to div class properties
    div.classList.toggle('d-flex');
    div.classList.toggle('task-div');
    div.classList.toggle('my-3');
    div.classList.toggle('border-bottom');

    //Give to button class properties
    button.classList.toggle('btn')
    button.classList.toggle('text-light')
    button.classList.toggle('btn-danger')
    button.classList.toggle('ms-auto')
    button.classList.toggle('close')
    button.innerHTML = 'x'

    //Move elements to relevant fields
    title.appendChild(taskInputText);
    addTaskDiv.appendChild(div);
    //empty the input field
    taskText.value ="";
        //Add function to dynamic button
        button.addEventListener('click',function(){
        div.remove();
        })

    }
    else{
        alert('Your Task is empty.Please try again');
        }
});
//Function to delete all added
deleteAllTask.addEventListener('click',function(){
    addTaskDiv.innerHTML = "";
    
})






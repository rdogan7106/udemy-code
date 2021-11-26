//Mouse events
const btn = document.querySelector('#btn');
const ul = document.querySelector('#task-list');

btn.addEventListener('click',eventHandler);

//doubleClick
btn.addEventListener('dblclick',eventHandler);
//mouse down
btn.addEventListener('mousedown',eventHandler);
//mouse up
btn.addEventListener('mouseup',eventHandler);
//mouse enter
btn.addEventListener('mouseenter',eventHandler);
//mouse leave
btn.addEventListener('mouseleave',eventHandler);
//mouse over
btn.addEventListener('mouseover',eventHandler);
//mouse out
btn.addEventListener('mouseout',eventHandler);
//mouse move
btn.addEventListener('mousemove',eventHandler2);
//
const h1 = document.querySelector('h1');



function eventHandler(event){
    console.log(`event type : ${event.type}`)
}
function eventHandler(event){
    console.log(`event type : ${event.type}`);
    h1.textContent = `mouse X :${event.offsetX}`;
    h1.textContent = `mouse Y :${event.offsetY}`;
}


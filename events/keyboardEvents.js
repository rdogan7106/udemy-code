// Keyboard Event
const input = document.querySelector('#text-input');

const form = document.querySelector('#form');
const select = document.querySelector('#select');
input.addEventListener('keydown',eventHandler);
input.addEventListener('keydown',eventHandler);
input.addEventListener('keypress',eventHandler);
input.addEventListener('focus',eventHandler2);
input.addEventListener('blur',eventHandler3);
input.addEventListener('select',eventHandler3);
//input.addEventListener('cut',eventHandler3);
//input.addEventListener('paste',eventHandler3);

form.addEventListener('submit',eventHandler);
select.addEventListener('change',eventHandler)

function eventHandler(e){
    console.log('event type: ',e.type);
    console.log('key code : ',e.keyCode);
    console.log('value : ',e.target.value);
};
function eventHandler2(e){
   e.target.style.backgroundColor='green';
};
function eventHandler3(e){
   e.target.style.backgroundColor='red';
};
e.preventDefault();
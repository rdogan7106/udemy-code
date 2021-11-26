// event listeners
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
btn.addEventListener('click',function(){
    console.log('button clicked');
});

btn.addEventListener('click',btnClick)
btn2.addEventListener('click',btnClick)

function btnClick(){
    console.log('button clicked2');

}
function btnClick2(e){
    console.log('button clicked2');
    e.preventDefault(); //It prevents the function in the relevant part from working.
   
    let val;
    val = e;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;
    e.target;



}

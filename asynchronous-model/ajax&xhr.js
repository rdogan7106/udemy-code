//Asychronous JavaScript And XML => AJAX
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if( xhr.readyState === 4){ 
        if (xhr.status === 200){
        console.log(xhr.responseText);
      }else if(xhr.status){
          console.log('source not found')
      }
    }
}
xhr.open('GET','msg.txt',true);
xhr.send();

xhr.onprogress = function(){
    console.log('on progressing')
}
console.log('hello');

//xhr.open('GET','msg.txt',false);
// xhr.open('POST','msg.txt');
/**
 *  readyState
 *  0 : request not initialized
 *  1 : server connection established
 *  2 : request received
 *  3 : processing request
 *  4 : request finished and response is ready
 */

/**
 *  Status
 *  200 : 'OK'
 *  403 : 'Forbidden'
 *  404 : 'Not Found'  
 */
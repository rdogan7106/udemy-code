document.getElementById('myBtn').addEventListener('click',function(e) {
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let errors = document.getElementById('errors');  
    errors.innerHTML ="";  
    try {
        if(name.value.length === 0 ){
            throw new Error('name is required')
        }        
        if(name.value.length>20){
            throw new Error('name is too long')
        }
        if(age.value.length === 0){
            throw new Error('name is required')
        }
        if(isNaN(age.value)){
            throw new Error('age is not numeric')
        }
    } catch (err) {
        errors.innerHTML = err.message;
    }  
    finally{
        name.value ='';
        age.value ='';
    }
    e.preventDefault();
})
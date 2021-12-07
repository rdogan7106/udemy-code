//Reference Error
//TypeError
//SyntaxError
//URIError
let user ={
    name:'Rahman DOGAN'
}
try {
   console.log(user.name);
   if(!user.email)
    {
        throw new SyntaxError('User has no email');        
    }
    
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
    console.log(error instanceof TypeError);
    console.log(typeof e);
}
finally{
    console.log('finally block');
}
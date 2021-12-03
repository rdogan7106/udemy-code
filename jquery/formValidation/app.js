
function isEmail(email){
    let pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    return pattern.test(email)
}

$(function(){
    $('#btn').click(function(){
        let errorMessage="";
        $('#error').html ="";

        if($('#email').val()===""){
            errorMessage+=`<p>Email required</p>`
        }
        if(isEmail($('#email').val()===false)){
            errorMessage +=`<p>Email format is not true</p>`
        }
        if($.isNumeric($('#phone').val())===false){
            errorMessage+=`<p>Phone required</p>`
        }
        if($('#password').val()===""){
            errorMessage+=`<p>Password required</p>`
        }
        if($('#repassword').val()!==$('#password').val()){
            errorMessage+=`<p>Passwords not equals</p>`
        }

        if(errorMessage!==""){
            $('#error').html(errorMessage)

        }
    })
})
$(document).ready(function(){
    $('.control').change(function(){
        console.log('Change event has been ready')
        console.log($(this).val()); 
    })
})
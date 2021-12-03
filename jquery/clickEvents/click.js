$(document).ready(function(){
    console.log('document ready');
})
$(function(){
    console.log('document ready2')
})

$(document).ready(function(){
    $('#p1').click(function(){
        alert('p1 click event')
    })
})
$(document).ready(function(){
    $('.parag').click(function(){
        $(this).addClass('paragColor')
    })
})
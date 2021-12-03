$(document).ready(function(){
    $('#animate').click(function(){
        $('#box').animate({
            left:'250px',
            top:'150px',
            width:'100px',
            height:'250px'            
        },3000,
        function(){
            alert('animation finished')
        })
        $('#box').animate({
            fontSize:'30px',
        },3000)
    })    
})
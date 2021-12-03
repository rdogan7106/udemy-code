console.log($('h1').text());
console.log($('ul li').text());

$('h1').text('JavaScript');
console.log($('input').val());
//$('input').val("hey how are you");

function fullName(){
    let name = $('#name').val()
    let surname = $('#surname').val()
    //$('#name').addClass('highlight')
    $('#name').toggleClass('highlight')
    $('#surname ').removeClass('yellow')
    console.log('your fullName: '+name+" "+surname)
    $('img').attr('width','400')
    
}

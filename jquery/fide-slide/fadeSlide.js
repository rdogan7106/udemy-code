  $(document).ready(function(){
      $('#slideUp').click(function(){
          $('p').slideUp("slow")
      })
      $('#SlideDown').click(function(){
          $('p').slideDown(1000,function(){
            alert('paragraph showed')
          });
         
      })
      $('#toggle').click(function(){
          $('p').toggle('slow');
      })

  })
  $(document).ready(function(){
    $('#fadein').click(function(){
        $('p').fadeIn("slow")
    })
    $('#fadeto').click(function(){
        $('p').fadeTo("slow",0.7)
    })
    $('#fadeout').click(function(){
        $('p').fadeOut(1000,function(){
          alert('paragraph showed')
        });
       
    })
    $('#toggle2').click(function(){
        $('p').toggle('slow');
    })

})
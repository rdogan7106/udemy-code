  $(document).ready(function(){
      $('#hide').click(function(){
          $('p').hide(3000)
      })
      $('#show').click(function(){
          $('p').show(1000,function(){
            alert('paragraph showed')
          });
         
      })
      $('#toggle').click(function(){
          $('p').toggle('slow');
      })

  })
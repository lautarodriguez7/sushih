$(document).ready(function(){
    
    $('#entradas').click(function(){
      $('.menu-main').removeClass('first');   
      $('#entradas').addClass('first');
      $('.container-prod').hide();
      $('#container').fadeIn(2000);
    });

    $('#combinados').click(function(){
      $('.menu-main').removeClass('first');     
      $('#combinados').addClass('first');
      $('.container-prod').hide();
      $('#combinados2').addClass('container-prod');
      $('#combinados2').removeClass('not-container'); 
      $('#combinados2').fadeIn(2000);
    });

    $('#rolls').click(function(){
      $('.menu-main').removeClass('first');   
      $('#rolls').addClass('first');
    });

    $('#niguiris').click(function(){
      $('.menu-main').removeClass('first');   
      $('#niguiris').addClass('first');
    });

    $('#teiwoks').click(function(){
      $('.menu-main').removeClass('first');   
      $('#teiwoks').addClass('first');
    });

    $('#salads').click(function(){
      $('.menu-main').removeClass('first');   
      $('#salads').addClass('first');
    });

    $('#adicionals').click(function(){
      $('.menu-main').removeClass('first');   
      $('#adicionals').addClass('first');
    });

    $('#drinks').click(function(){
      $('.menu-main').removeClass('first');   
      $('#drinks').addClass('first');
    });
  });
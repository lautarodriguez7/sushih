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
      $('.container-prod').hide();
      $('#rolls2').addClass('container-prod');
      $('#rolls2').removeClass('not-container'); 
      $('#rolls2').fadeIn(2000);
    });

    $('#niguiris').click(function(){
      $('.menu-main').removeClass('first');   
      $('#niguiris').addClass('first');
      $('.container-prod').hide();
      $('#niguiris2').addClass('container-prod');
      $('#niguiris2').removeClass('not-container'); 
      $('#niguiris2').fadeIn(2000);
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
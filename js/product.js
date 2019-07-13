$(document).ready(function(){
    
    $('#entradas').click(function(){
      $('.menu-main').removeClass('first');     
      $('#entradas').addClass('first');
      $('.container-prod').hide();
      $('#container').fadeIn(1000);
    });

    $('#combinados').click(function(){
      $('.menu-main').removeClass('first');     
      $('#combinados').addClass('first');
      $('.container-prod').hide();
      $('#combinados2').addClass('container-prod');
      $('#combinados2').removeClass('not-container'); 
      $('#combinados2').fadeIn(1000);
    });

    $('#rolls').click(function(){
      $('.menu-main').removeClass('first');   
      $('#rolls').addClass('first');
      $('.container-prod').hide();
      $('#rolls2').addClass('container-prod');
      $('#rolls2').removeClass('not-container'); 
      $('#rolls2').fadeIn(1000);
    });

    $('#niguiris').click(function(){
      $('.menu-main').removeClass('first');   
      $('#niguiris').addClass('first');
      $('.container-prod').hide();
      $('#niguiris2').addClass('container-prod');
      $('#niguiris2').removeClass('not-container'); 
      $('#niguiris2').fadeIn(1000);
    });

    $('#teiwoks').click(function(){
      $('.menu-main').removeClass('first');   
      $('#teiwoks').addClass('first');
      $('.container-prod').hide();
      $('#teiwoks2').addClass('container-prod');
      $('#teiwoks2').removeClass('not-container'); 
      $('#teiwoks2').fadeIn(1000);
    });

    $('#salads').click(function(){
      $('.menu-main').removeClass('first');   
      $('#salads').addClass('first');
      $('.container-prod').hide();
      $('#salads2').addClass('container-prod');
      $('#salads2').removeClass('not-container'); 
      $('#salads2').fadeIn(1000);
    });

    $('#adicionals').click(function(){
      $('.menu-main').removeClass('first');   
      $('#adicionals').addClass('first');
      $('.container-prod').hide();
      $('#adicionals2').addClass('container-prod');
      $('#adicionals2').removeClass('not-container'); 
      $('#adicionals2').fadeIn(1000);
    });

    $('#drinks').click(function(){
      $('.menu-main').removeClass('first');   
      $('#drinks').addClass('first');
      $('.container-prod').hide();
      $('#drinks2').addClass('container-prod');
      $('#drinks2').removeClass('not-container'); 
      $('#drinks2').fadeIn(1000);
    });
  });
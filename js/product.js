$(document).ready(function(){
    
    $('#entradas').click(function(){
      $('#container').Toggle('slow');
    });

    $('#combinados').click(function(){
      $('.menu-main').removeClass('first');   
      $('#combinados').addClass('first');
    });
  });
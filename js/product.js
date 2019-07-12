$(document).ready(function(){
    
    $('#entradas').click(function(){
      $('.menu-main').removeClass('first');   
      $('#entradas').addClass('first');
    });

    $('#combinados').click(function(){
      $('.menu-main').removeClass('first');   
      $('#combinados').addClass('first');
    });
  });
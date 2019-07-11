$(document).ready(function(){
    
    $('#entradas').click(function(){
      $('#container').Toggle('slow');
    });

    $('#combinados').click(function(){
        $('#combinados').addClass('first');
    });
  });
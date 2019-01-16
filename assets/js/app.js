
$(document).ready(function(){

  $('.agregar').on('click', function(e){
    e.preventDefault();
    $('.compras').append($('.categoria__titulo').text());
  })
});

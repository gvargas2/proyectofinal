
$(document).ready(function(){
  $('.categorias').on('click', '.agregar', function(e){
    e.preventDefault();
    var compra = $(this).parent().find('.categoria__titulo').html();
  $('.compras').append(compra + '\n');
  });
  $('.finalizar_compra').on('click', function (e){
    e.preventDefault();
    $('.estado_solicitud').prepend('Ahora te llegará un correo con todos los datos para continuar con tu compra');
  });
  $('.social__like').on('click', function() {
    alert('Diste un like!');
  });
});

$( "#enviar" ).click(function() {
    var numero = parseInt($('#valor').val());
    var resultado = numero * (numero + 1) / 2;

    $('.respuestas').text(resultado)
  });
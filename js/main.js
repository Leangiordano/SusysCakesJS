$("body").prepend('<p class= "boton"> ┬íProducto Agregado al carrito!</p>');

$(".btn").click(() => {
$(".boton").fadeIn("fast", function(){
    $(".boton").fadeOut(1200);
})
})
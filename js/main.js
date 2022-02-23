$("body").prepend('<p class= "boton"> ¡Producto Agregado al carrito!</p>');

$(".btn").click(() => {
$(".boton").fadeIn("fast", function(){
    $(".boton").fadeOut(1200);
})
})
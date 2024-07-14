document.addEventListener('DOMContentLoaded', () => {
    const botonesCarrito = document.querySelectorAll('.producto button');

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });
});

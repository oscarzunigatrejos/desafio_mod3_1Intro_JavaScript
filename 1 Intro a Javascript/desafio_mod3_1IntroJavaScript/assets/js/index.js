precio = 400000;
total = 0;
cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

totalSpan = document.querySelector(".valor-total");
totalSpan.innerHTML = total;

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

function suma(){
    cantidad++;
    cantidadSpan.innerHTML = cantidad;

    total = precio * cantidad;
    totalSpan.innerHTML = total;
}

function resta(){
    if(cantidad>=1){
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
    
        total = precio * cantidad;
        totalSpan.innerHTML = total;
    }

}
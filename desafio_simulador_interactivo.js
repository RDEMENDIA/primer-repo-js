alert("Bienvenido a nuestro sitio, aqui podras encontrar: \n-Yerba \n-Mantecol \n-Dulce de leche \n-Alfajores")
let nombreProductoA = 'Yerba';
let stockProductoA = 10;
let precioProductoA = 65;

let nombreProductoB = 'Mantecol';
let stockProductoB = 8;
let precioProductoB = 30;

let nombreProductoC = 'Dulce de leche';
let stockProductoC = 3;
let precioProductoC = 80;

let nombreProductoD = 'Alfajores';
let stockProductoD = 10;
let precioProductoD = 30;


let cantidadComprada;
let nombreCompra;
let totalCompra;

function compra (stock, precio, nombre) {
    cantidadComprada = parseInt(prompt("Que cantidad de " + nombre + " quiere comprar?"));
        if(cantidadComprada <= stock) {
            stock -= cantidadComprada;
            totalCompra = cantidadComprada * precio;  
        }
        else {
            alert("no tenemos esa cantidad en stock")
        }
}

while ((nombreCompra != nombreProductoA) && (nombreCompra != nombreProductoB) && (nombreCompra != nombreProductoC) &&  (nombreCompra != nombreProductoD)){
    nombreCompra = prompt("Que producto desea comprar?");
    if(nombreCompra == nombreProductoA) {
        compra(stockProductoA, precioProductoA, nombreProductoA);
    }
    else if(nombreCompra == nombreProductoB) {
        compra(stockProductoB, precioProductoB, nombreProductoB);
    }
    else if(nombreCompra == nombreProductoC) {
        compra(stockProductoC, precioProductoC, nombreProductoC);
        
    }
    else if(nombreCompra == nombreProductoD) {
        compra(stockProductoD, precioProductoD, nombreProductoD);        
    }
    else {
        alert("Asegurese de escribir bien el nombre del producto");
    }
}

alert("se han agregado " + cantidadComprada + " " + nombreCompra + " a su carrito, por un total de $" +  totalCompra)
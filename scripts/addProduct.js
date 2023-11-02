import { inventario } from "./inventory.js";
import { mostrarInventario } from "./listProduct.js";
import { calculateTotal } from "./totalinventory.js";


export function agregarProducto() {
    
    const id = inventario.length + 1;  // Asignamos un nuevo ID
    const nombre = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (nombre && !isNaN(cantidad) && !isNaN(precio)) {
        const nuevoProducto = { id, nombre, cantidad, precio };
        inventario.push(nuevoProducto);
        alert("Producto agregado con éxito.");
        calculateTotal(); 
    } else {
        alert("Entrada inválida. No se ha agregado ningún producto.");
    }

    // Llamar a la función para generar y mostrar la tabla actualizada
    mostrarInventario();
}


// FUNCION AGREGAR PRODUCTO
/*añadir.addEventListener('click', ()=>{
    const id = inventario.length + 1;  // Asignamos un nuevo ID
    const nombre = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (nombre && !isNaN(cantidad) && !isNaN(precio)) {
        const nuevoProducto = { id, nombre, cantidad, precio };
        inventario.push(nuevoProducto);
        alert("Producto agregado con éxito.");
    } else {
        alert("Entrada inválida. No se ha agregado ningún producto.");
    }

    const tablaExistente = document.querySelector("table");
        if (tablaExistente) {
            tablaExistente.remove();
        }
    
});
*/
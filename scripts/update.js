// Importar los módulos necesarios para el funcionamiento de update.js
import { inventario } from "./inventory.js";
import { mostrarInventario } from "./listProduct.js";
import { agregarProducto } from "./addProduct.js";



export function aumentarCantidadEnInventario() {
    let i=0;
    while ( i < inventario.length) {    
        inventario[i].cantidad = Math.round(inventario[i].cantidad * 1.10);// Aumenta la cantidad en un 10%
        i++;
    }
    // Llamar a la función para generar y mostrar la tabla actualizada
    mostrarInventario();
}

// FUNCION ACTUALIZAR PRODUCTO PRIMERO HAY QUE MOSTRARLA OARA VER LOS QUE HAY

export function actualizarProducto() {
    const productoSeleccionado = prompt("Por favor, ingrese el nombre del producto que quieres actualizar:");
      
    const producto = inventario.find(item => item.nombre === productoSeleccionado);
  
    if (producto) {
      const nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");
      const nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad del producto:"));
      const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del producto:"));
    
      if (nuevoNombre && !isNaN(nuevaCantidad) && !isNaN(nuevoPrecio)) {
        producto.nombre = nuevoNombre;
        producto.cantidad = nuevaCantidad;
        producto.precio = nuevoPrecio;
  
        const filaProducto = document.getElementById(`fila-${producto.id}`);
        filaProducto.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad}</td>
          <td>${producto.precio}</td>
        `;
  
        alert("Producto actualizado con éxito.");
        mostrarInventario();
      } else {
        alert("Entrada inválida. No se ha actualizado.");
      }
    } else {
      alert('No podemos actualizar un producto no existente, entonces vamos a añadirlo a la tabla');
      agregarProducto();
      aumentarCantidadEnInventario();
    }
  }
  
  actualizar.addEventListener('click', actualizarProducto);
  
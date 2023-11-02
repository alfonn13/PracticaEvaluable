import { inventario } from "./inventory.js";
import { mostrarInventario } from "./listProduct.js";


export function eliminarProducto() {
    const nombreAEliminar = prompt("Por favor, ingrese el nombre del producto que desea eliminar:");
  
    const indexProductoAEliminar = inventario.findIndex(item => item.nombre.toLowerCase() === nombreAEliminar.toLowerCase());
  
    if (indexProductoAEliminar !== -1) {
        const productoEliminado = inventario.splice(indexProductoAEliminar, 1)[0];
        console.log(`Producto "${productoEliminado.nombre}" eliminado.`);
        mostrarInventario();
    } else {
        alert('Producto no encontrado. No se ha eliminado ningún producto.');
    }
  }
  

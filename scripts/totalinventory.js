// Importa el array 'inventario' desde el módulo 'inventory.js'
import { inventario } from "./inventory.js";

export const calculateTotal = () => {
    const totalDisplay = document.getElementById('totalDisplay');
    let totality=0;
  
    for(let i=0;i<inventario.length;i++){
        const producto = inventario[i];
        const productoTotal = producto.cantidad * producto.precio;
        totality += productoTotal;
    }
  
    totalDisplay.innerHTML = `<p>Total del inventario: ${totality} $</p>`;
}



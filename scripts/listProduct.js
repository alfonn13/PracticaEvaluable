// Importa el arreglo 'inventario' desde el módulo 'inventory.js'
import { inventario } from "./inventory.js";


const mostrar = document.getElementById('mostrar');

export function generarTabla() {

    const tablaExistente = document.querySelector("table");
        if (tablaExistente) {
            tablaExistente.remove();
        }
    
    const tabla = document.createElement("table");
    tabla.className = "tabla";
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          
        </tr>
      </thead>
      <tbody>

        ${inventario.map(item =>
              `<tr id="fila-${item.id}">
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio}</td>
                
              </tr>`
          )
          //.join para concatenar todos los items de los archivos
          .join("")}
      </tbody>`;

    return tabla;

}

export function mostrarInventario() {
    const tablaInventario = generarTabla();
    document.body.appendChild(tablaInventario);
}

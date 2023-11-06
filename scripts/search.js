import { inventario } from "./inventory.js";


export function buscarProducto() {
    const nombreBuscado = buscador.value.toLowerCase();
    let productoEncontrado = false;
  
    const tabla = document.createElement("table");
    tabla.classList.add("tabla");
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>`;
  
    for (let i = 0; i < inventario.length; i++) {
      const item = inventario[i];
      if (item.nombre.toLowerCase().includes(nombreBuscado)) {
        tabla.innerHTML += `
          <tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
          </tr>`;
        productoEncontrado = true;
      }
    }
  
    if (!productoEncontrado) {
      tabla.innerHTML = `<p>Producto no encontrado.</p>`;
    }
  
    // Eliminar tabla si la hay
    const tablaExistente = document.querySelector("table");
    if (tablaExistente) {
      tablaExistente.remove();
    }
  
    document.body.appendChild(tabla);
  }
  
 
  
const mostrar = document.getElementById('mostrar');
const buscar = document.getElementById('buscar');
const añadir = document.getElementById('añadir');
const actualizar = document.getElementById('actualizar');


const inventario = [

    {id:1, nombre: "Camiseta", cantidad:50, precio:15},
    {id:2, nombre: "Pantalones", cantidad:30, precio:30},
    {id:3, nombre: "Zapatos", cantidad:20, precio:50},

];

console.log(inventario);

//FUNCION GENERAR TABLA
function generarTabla() {
    const tabla = document.createElement("table");
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>

        ${inventario.map(item =>
              `<tr id="fila-${item.id}">
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>${item.precio}</td>
              </tr>`
          )
          //Concatena todos los items de los archivos
          .join("")}
      </tbody>`;

    return tabla;
  }


  mostrar.addEventListener('click', ()=>{
    const tablaInventario = generarTabla();
    document.body.appendChild(tablaInventario);

  });

  //FUNCION BUSCAR
  buscar.addEventListener('click', () => {
    const nombreBuscado = buscador.value.toLowerCase();
    let productoEncontrado = false;
  
    const tabla = document.createElement("table");
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
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
            <td>${item.id}</td>
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

    //Eliminar tabla si la hay
    const tablaExistente = document.querySelector("table");
        if (tablaExistente) {
            tablaExistente.remove();
        }

    document.body.appendChild(tabla);
})

// FUNCION AGREGAR PRODUCTO

añadir.addEventListener('click', ()=>{
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
});


// FUNCION ACTUALIZAR PRODUCTO (PROBLEMA CON EL INNER HTML DE ABAJO REALMENTE NO SE COMO HACER LA ACTUALIZAR DEPSUES DE INGRESAR LOS DATOS)

actualizar.addEventListener('click',()=>{
    const productoSeleccionado = prompt("Por favor, ingrese el nombre del producto que quieres actualizar:");
    
    const producto = inventario.find(item => item.nombre === productoSeleccionado);

        if (producto) {
            const nuevoNombre = prompt("Ingrese el nuevo nombre del producto:");
            const nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad del producto:"));
            const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del producto:"));
        
            if (nuevoNombre && !isNaN(nuevaCantidad) && !isNaN(nuevoPrecio) ) {
              producto.nombre = nuevoNombre;
              producto.cantidad = nuevaCantidad;
              producto.precio = nuevoPrecio;
            
            
                // Actualiza la tabla
                const filaProducto = document.getElementById(`fila-${producto.id}`);
                filaProducto.innerHTML = `
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                `;
            
                alert("Producto actualizado con éxito.");
            } else {
                alert("Entrada invalida. No se ha actualizado");
            }
        }else{
            alert("Producto no encontrado.");
        }
});


        
    


    
const mostrar = document.getElementById('mostrar');
const buscar = document.getElementById('buscar');
const añadir = document.getElementById('añadir');
const actualizar = document.getElementById('actualizar');
const total = document.getElementById('total');
const eliminar = document.getElementById('eliminar');


const inventario = [

    {id:1, nombre: "Camiseta", cantidad:50, precio:15},
    {id:2, nombre: "Pantalones", cantidad:30, precio:30},
    {id:3, nombre: "Zapatos", cantidad:20, precio:50},

];

console.log(inventario);

const calculateTotal = () => {
  const totalDisplay = document.getElementById('totalDisplay');
  let totality=0;

  for(let i=0;i<inventario.length;i++){
      const producto = inventario[i];
      const productoTotal = producto.cantidad * producto.precio;
      totality += productoTotal;
  }

  totalDisplay.innerHTML = `<p>Total del inventario: ${totality} $</p>`;
}

//FUNCION GENERAR TABLA
function generarTabla() {

    const tablaExistente = document.querySelector("table");
        if (tablaExistente) {
            tablaExistente.remove();
        }
    
    const tabla = document.createElement("table");
    tabla.className = "tabla";
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

function mostrarInventario() {
    const tablaInventario = generarTabla();
    document.body.appendChild(tablaInventario);
}

mostrar.addEventListener('click', mostrarInventario);

  //FUNCION BUSCAR
  buscar.addEventListener('click', () => {
    const nombreBuscado = buscador.value.toLowerCase();
    let productoEncontrado = false;
  
    const tabla = document.createElement("table");
    tabla.classList.add  ("tabla");
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
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
            <td> ${actualizar} </td>

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

function agregarProducto() {
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

añadir.addEventListener('click', () => {
    agregarProducto();
});

//Funcion aumentar cantidad en inventario
function aumentarCantidadEnInventario() {
    let i=0;
    while ( i < inventario.length) {    
        inventario[i].cantidad = Math.round(inventario[i].cantidad * 1.10);// Aumenta la cantidad en un 10%
        i++;
    }


    // Llamar a la función para generar y mostrar la tabla actualizada
    mostrarInventario();
}

// FUNCION ACTUALIZAR PRODUCTO PRIMERO HAY QUE MOSTRARLA OARA VER LOS QUE HAY

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
            
            
              generarTabla();

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
                alert("Entrada invalida. No se ha actualizado");
            }
        }else{
            alert('No podemos actualizar un producto no existente, entonces vamos a añadirlo a la tabla');
            agregarProducto();
            
            aumentarCantidadEnInventario();
        }
});

total.addEventListener("click" , calculateTotal);


eliminar.addEventListener("click", () => {
  const nombreAEliminar = prompt("Por favor, ingrese el nombre del producto que desea eliminar:");

  const indexProductoAEliminar = inventario.findIndex(item => item.nombre.toLowerCase() === nombreAEliminar.toLowerCase());

  if (indexProductoAEliminar !== -1) {
      const productoEliminado = inventario.splice(indexProductoAEliminar, 1)[0];
      console.log(`Producto "${productoEliminado.nombre}" eliminado.`);
      mostrarInventario();
  } else {
      alert('Producto no encontrado. No se ha eliminado ningún producto.');
  }
});


        
mostrarInventario();   



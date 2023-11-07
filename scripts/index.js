/*
Nombre: Alfonso Reviejo Valle
Github: https://github.com/alfonn13/PracticaEvaluable
*/

import {agregarProducto} from './addProduct.js';
import {eliminarProducto} from './delete.js';
import {mostrarInventario} from './listProduct.js';
import {toggleMenu, redirectToIndex} from './menu.js';
import {buscarProducto} from './search.js';
import {calculateTotal} from './totalinventory.js';
import {actualizarProducto} from './update.js';


const añadir = document.getElementById('añadir');
const eliminar = document.getElementById('eliminar');
const menuIcon = document.getElementById("menu-icon");
const logout = document.getElementById("log-out-link");
const buscar = document.getElementById('buscar');
const total = document.getElementById('total');
const actualizar = document.getElementById('actualizar');
const mostrar = document.getElementById('mostrar');

eliminar.addEventListener('click', eliminarProducto); 
document.addEventListener('DOMContentLoaded', mostrarInventario);  
menuIcon.addEventListener("click", toggleMenu);
logout.addEventListener("click", redirectToIndex);  
buscar.addEventListener('click', buscarProducto); 
total.addEventListener('click',calculateTotal);
actualizar.addEventListener('click', actualizarProducto); 
añadir.addEventListener('click', agregarProducto);
mostrar.addEventListener('click',mostrarInventario);







 



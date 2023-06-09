const express = require('express');
const routerProfesores = express.Router();
const profesoresController = require('../controller/profesoresController');
//Definimos las rutas y derivamos al controlador correspondiente
routerProfesores.get('/', profesoresController.obtenerProfesores);
routerProfesores.get('/:id_estudiante',profesoresController.obtenerProfesoresById);
routerProfesores.post('/', profesoresController.agregarProfesores);
routerProfesores.put('/:id_estudiante', profesoresController.actualizarProfesores);
routerProfesores.delete('/:id_estudiante', profesoresController.eliminarProfesores);
module.exports = routerProfesores;
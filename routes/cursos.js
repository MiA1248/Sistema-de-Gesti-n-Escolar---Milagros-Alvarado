const express = require('express');
const routerCursos = express.Router();
const cursosController = require('../controller/cursosController');
//Definimos las rutas y derivamos al controlador correspondiente
routerCursos.get('/', cursosController.obtenerCursos);
routerCursos.get('/:id_cursos', cursosController.obtenerCursosById);
routerCursos.post('/', cursosController.agregarCursos);
routerCursos.put('/:id_cursos', cursosController.actualizarCursos);
routerCursos.delete('/:id_cursos', cursosController.eliminarCursos);
module.exports = routerCursos;
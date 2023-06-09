const express = require('express');
const routerEstudiantes = express.Router();
const estudiantesController = require('../controller/estudiantesController');
//Definimos las rutas y derivamos al controlador correspondiente
routerEstudiantes.get('/', estudiantesController.obtenerEstudiantes);
routerEstudiantes.get('/:id_estudiante',estudiantesController.obtenerEstudiantesById);
routerEstudiantes.post('/', estudiantesController.agregarEstudiantes);
routerEstudiantes.put('/:id_estudiante', estudiantesController.actualizarEstudiantes);
routerEstudiantes.delete('/:id_estudiante', estudiantesController.eliminarEstudiantes);
module.exports = routerEstudiantes;
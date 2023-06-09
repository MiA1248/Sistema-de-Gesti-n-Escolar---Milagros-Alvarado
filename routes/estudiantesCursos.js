//routes 
const express = require('express');
const routerEstudiantesCursos = express.Router();
const estudiantesCursosController = require('../controller/estudiantesCursosController');

routerEstudiantesCursos.get('/estudiantes/:estudiante_id/cursos', estudiantesCursosController.obtenerCursosDeEstudiantes);
routerEstudiantesCursos.get('/cursos/:curso_id/estudiantes', estudiantesCursosController.obtenerEstudiantesDeCursos);
routerEstudiantesCursos.post('/cursos/:curso_id/estudiantes', estudiantesCursosController.agregarEstudianteACursos); //acá pide que pase el parametro del id curso pero yo lo agregue por medio del body para no generar confusion
routerEstudiantesCursos.delete('/cursos/:curso_id/estudiantes/:estudiante_id', estudiantesCursosController.eliminarEstudianteDeCursos);
module.exports = routerEstudiantesCursos;
// Cuando hablamos de la estructura de una ruta, nos referimos a cómo se organiza y se representa la información sobre los recursos 
// y sus relaciones en la URL. La estructura de la ruta puede reflejar la jerarquía y las relaciones entre los recursos,
//  lo cual ayuda a entender cómo interactuar con la API y acceder a la información deseada.
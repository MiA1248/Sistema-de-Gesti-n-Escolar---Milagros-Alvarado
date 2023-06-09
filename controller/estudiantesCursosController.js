//controllers
const estudiantesCursosModel = require('../models/estudiantesCursosModels');

exports.obtenerCursosDeEstudiantes = async (req, res) => {
  const estudiante_id = req.params.estudiante_id;

  try {
    const cursos = await estudiantesCursosModel.obtenerCursosDeEstudiantes(estudiante_id);

    res.status(200).json({
      success: true,
      message:'¡obtuviste el curso!',
      data: cursos
    });
  } catch (error) {
    console.log('Error al obtener los cursos del estudiante:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al obtener los cursos del estudiante',
    });
  }
};

exports.obtenerEstudiantesDeCursos = async (req, res) => {
  const curso_id = req.params.curso_id;
 try {
    const estudiantes = await estudiantesCursosModel.obtenerEstudiantesDeCursos(curso_id);

    res.status(200).json({
      success: true,
      message:'¡obtuviste el estuduante!',
      data: estudiantes
    });
  } catch (error) {
    console.error('Error al obtener los estudiantes del curso:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al obtener los estudiantes del curso',
    });
  }
};
 
exports.agregarEstudianteACursos = async (req, res) => {
  const curso_id = req.body.curso_id;
  const estudiante_id = req.body.estudiante_id;
 try {
    await estudiantesCursosModel.agregarEstudianteACursos(estudiante_id, curso_id);

    res.status(200).json({
      success: true,
      message: 'Estudiante agregado al curso con éxito',
    });
  } catch (error) {
    console.error('Error al agregar el estudiante al curso:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al agregar el estudiante al curso',
    });
  }
};
exports.eliminarEstudianteDeCursos = async (req, res) => {
  const estudiante_id = req.params.estudiante_id;
  const curso_id = req.params.curso_id;
    try {
    await estudiantesCursosModel.eliminarEstudianteDeCurso(estudiante_id, curso_id);
    res.status(200).json({
      success: true,
      message: 'Estudiante eliminado del curso con éxito',
    });
  } catch (error) {
    console.error('Error al eliminar el estudiante del curso:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al eliminar el estudiante del curso',
    });
  }
};

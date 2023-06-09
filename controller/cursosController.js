const cursoModel = require('./../models/cursosModels'); 
exports.obtenerCursos = async (req, res) => {
    try {
      const cursos = await cursoModel.obtenerCursos();
      res.json(cursos);
    } catch (error) {
      console.error('Error al obtener estudiante:', error);
        res.status(500).json({
          success: false,
          message: 'Hubo un error al obtener los datos',
        });
      }
  };
  exports.obtenerCursosById = async  (req, res) => {
    const id_cursos = req.params.id_cursos;
    try {
      const estudiante = await cursoModel.obtenerCursosById(id_cursos);
  
      if (!estudiante) {
        return res.status(404).json({ 
          success: false,
          message: 'curso no encontrado' 
        });
      }
      
      res.status(200).json({ 
        success: true,
        data: estudiante
      });
    } catch (error) {
      console.error('Error al obtener curso:', error);
      res.status(500).json({ 
        success: false,
        message: 'Ocurrió un error al obtener curso' 
      });
    }
  };
  exports.agregarCursos = async (req, res) => {
    const datoscurso = req.body;
    try {
      const cursoIngresado = await cursoModel.agregarCursos(datoscurso);
      if (cursoIngresado === 0) {
        res.status(407).json({
          success: false,
          message: 'No se logró insertar el curso en la base de datos'
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: '¡Agregaste un nuevo curso!',
        data: datoscurso
      });
  
    } catch (error) {
      console.error('Error al agregar curso:', error);
      res.status(500).json({
        success: false,
        message: 'Hubo un error al obtener los datos'
      });
    }
  };
exports.actualizarCursos = async (req, res) => {
  const id_cursos = req.params.id_cursos;
  const datosCurso = req.body;
  try {
    const CursoActualizado = await cursoModel.actualizarCursos(id_cursos, datosCurso);
    if (CursoActualizado.affectedRows === 0) {
      return res.status(500).json({
        success: false,
        message: 'Curso no encontrado'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Curso actualizado con éxito',
      data: datosCurso
    });
  } catch (error) {
    console.error('Error al actualizar curso:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al actualizar el curso'
    });
  }
};
exports.eliminarCursos = async (req, res) => {
  const id_cursos = req.params.id_cursos;
  try {
    const resultado = await cursoModel.eliminarCursos(id_cursos);

    if (resultado === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Curso no encontrado' 
      });
    }
    res.status(200).json({ 
      success: true,
      message: 'Curso eliminado con éxito',
      data:resultado
    });
  } catch (error) {
    console.error('Error al eliminar curso:', error);
    res.status(500).json({ 
      success: false,
      message: 'Ocurrió un error al eliminar el curso' 
    });
  }
};  
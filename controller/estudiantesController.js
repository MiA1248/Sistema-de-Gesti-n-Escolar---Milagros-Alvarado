const estudianteModel = require('./../models/estudiantesModels'); 
exports.obtenerEstudiantes = async (req, res) => {
    try {
      const estudiantes = await estudianteModel.obtenerEstudiantes();
      res.json(estudiantes);
    } catch (error) {
      console.error('Error al obtener estudiante:', error);
        res.status(500).json({
          success: false,
          message: 'Hubo un error al obtener los datos',
        });
      }
  };
  exports.obtenerEstudiantesById = async  (req, res) => {
    const id_estudiante = req.params.id_estudiante;
    try {
      const estudiante = await estudianteModel.obtenerEstudiantesById(id_estudiante);
  
      if (!estudiante) {
        return res.status(404).json({ 
          success: false,
          message: 'Estudiante no encontrado' 
        });
      }
      
      res.status(200).json({ 
        success: true,
        data: estudiante
      });
    } catch (error) {
      console.error('Error al obtener estudiante:', error);
      res.status(500).json({ 
        success: false,
        message: 'Ocurrió un error al obtener estudiante' 
      });
    }
  };
  exports.agregarEstudiantes = async (req, res) => {
    const datosEstudiante = req.body;
    try {
    const estudianteIngresado = await estudianteModel.agregarEstudiantes(datosEstudiante);
     if(estudianteIngresado === 0){
      res.status(407).json({
          success:false,
          message:'No se logro insertar el estudiante en la base de datos'});
  }
     res.status(200).json({
      success:true,
      message:'¡agregaste un nuevo estudiante!',
      data: datosEstudiante
  });

} catch (error) {
  console.error('Error al agregar estudiante:', error);
  res.status(500).json({
      success:false,
      message: 'Hubo un error al obtener los datos'});
}
};
exports.actualizarEstudiantes = async (req, res) => {
  const id_estudiante = req.params.id_estudiante;
  const datosEstudiante = req.body;
  try {
    const estudianteActualizado = await estudianteModel.actualizarEstudiantes(id_estudiante, datosEstudiante);
    if (CursoActualizado === null) {
      return res.status(404).json({
        success: false,
        message: 'Curso no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Estudiante actualizado con éxito',
      data:estudianteActualizado
    });
  } catch (error) {
    console.error('Error al actualizar estudiante:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al actualizar el estudiante'
    });
  }
};
exports.eliminarEstudiantes = async (req, res) => {
  const id_estudiante = req.params.id_estudiante;
  try {
    const resultado = await estudianteModel.eliminarEstudiantes(id_estudiante);

    if (resultado === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Estudiante no encontrado' 
      });
    }
    
    res.status(200).json({ 
      success: true,
      message: 'Estudiante eliminado con éxito',
      data:resultado
    });
  } catch (error) {
    console.error('Error al eliminar estudiante:', error);
    res.status(500).json({ 
      success: false,
      message: 'Ocurrió un error al eliminar el estudiante' 
    });
  }
};
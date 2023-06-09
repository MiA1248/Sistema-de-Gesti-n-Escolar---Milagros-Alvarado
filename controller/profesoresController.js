// profesor.nombre_profesor, profesor.especialidad_profesor, profesor.email_profesor
const profesoresModel = require('./../models/profesoresModels'); 
exports.obtenerProfesores = async (req, res) => {
    try {
      const profesores = await profesoresModel.obtenerProfesores();
      res.json(profesores);
    } catch (error) {
      console.error('Error al obtener profesores:', error);
        res.status(500).json({
          success: false,
          message: 'Hubo un error al obtener los datos',
        });
      }
  };
  exports.obtenerProfesoresById = async  (req, res) => {
    const id_profesor = req.params.id_profesor;
    try {
      const profesor = await profesoresModel.obtenerProfesoresById(id_profesor);
  
      if (!profesor) {
        return res.status(404).json({ 
          success: false,
          message: 'profesor no encontrado' 
        });
      }
      
      res.status(200).json({ 
        success: true,
        data:profesor
      });
    } catch (error) {
      console.error('Error al obtener profesor:', error);
      res.status(500).json({ 
        success: false,
        message: 'Ocurrió un error al obtener profesor' 
      });
    }
  };
  exports.agregarProfesores = async (req, res) => {
    const datosprofesor = req.body;
    try {
    const profesorIngresado = await profesoresModel.agregarProfesores(datosprofesor);
    if (profesorIngresado.affectedRows < 1) {
      res.status(407).json({
        success: false,
        message: 'No se logró insertar el profesor en la base de datos'
      });
    } else {
      res.status(200).json({
        success: true,
        message: '¡Agregaste un nuevo profesor!',
        data: datosprofesor
      });
    }

} catch (error) {
  console.error('Error al agregar profesor:', error);
  res.status(500).json({
      success:false,
      message: 'Hubo un error al obtener los datos'});
}
};
exports.actualizarProfesores = async (req, res) => {
  const id_profesor = req.params.id_profesor;
  const datosProfesor = req.body;
  try {
    const profesorActualizado = await estudianteModel.actualizarProfesores(id_profesor, datosProfesor);
    if (profesorActualizado.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Profesor no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Profesor actualizado con éxito',
      data:profesorActualizado
    });
  } catch (error) {
    console.error('Error al actualizar profesor:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al actualizar el profesor'
    });
  }
};
exports.eliminarProfesores = async (req, res) => {
  const id_profesor = req.params.id_profesor;
  try {
    const resultado = await profesoresModel.eliminarProfesores(id_profesor);

    if (resultado === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Profesor no encontrado' 
      });
    }
    
    res.status(200).json({ 
      success: true,
      message: 'Profesor eliminado con éxito',
      data:resultado
    });
  } catch (error) {
    console.error('Error al eliminar profesor:', error);
    res.status(500).json({ 
      success: false,
      message: 'Ocurrió un error al eliminar el profesor' 
    });
  }
};
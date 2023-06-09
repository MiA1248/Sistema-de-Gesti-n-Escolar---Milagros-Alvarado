//id_profesor	nombre_profesor	especialidad_profesor	email_profesor	

const db = require('./../config/db');

  exports.obtenerProfesores = async () => {
  const [rows, fields]= await db.execute('SELECT * FROM profesores');
  console.log(rows);
  return rows;
  }
  exports.obtenerProfesoresById = async (id_profesor) => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id_profesor = ?', [id_profesor]);
    console.log();
    return rows[0];
  };
  
  exports.agregarProfesores = async (profesor) => {
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre_profesor, especialidad_profesor, email_profesor) VALUES (?, ?, ?)', [profesor.nombre_profesor, profesor.especialidad_profesor, profesor.email_profesor]);
    return rows;
  };
  exports.actualizarProfesores = async (id_profesor, datosProfesor) => {
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre_profesor = ?, especialidad_profesor = ?, email_profesor = ? WHERE id_profesor = ?', [datosProfesor.nombre_profesor, datosProfesor.especialidad_profesor, datosProfesor.email_profesor, id_profesor]);
    console.log(rows);
    return rows;
  };
  exports.eliminarProfesores = async (id_profesor) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id_profesor = ?', [id_profesor]);
    console.log(rows);
    return rows;
  };
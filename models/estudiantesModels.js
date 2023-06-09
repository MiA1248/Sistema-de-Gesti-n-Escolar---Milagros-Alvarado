const db = require('./../config/db');

  exports.obtenerEstudiantes = async () => {
  const [rows, fields]= await db.execute('SELECT * FROM estudiantes');
  console.log(rows);
  return rows;
  }
  exports.obtenerEstudiantesById = async (id_estudiante) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id_estudiante = ?', [id_estudiante]);
    console.log();
    return rows[0];
  };
  
  exports.agregarEstudiantes = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre_estudiante, edad_estudiante, grado_estudiante) VALUES (?, ?, ?)', [estudiante.nombre_estudiante, estudiante.edad_estudiante, estudiante.grado_estudiante]);
    console.log(rows);
    return rows;
  };
  exports.actualizarEstudiantes = async (id_estudiante, datosEstudiante) => {
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre_estudiante = ?, edad_estudiante = ?, grado_estudiante = ? WHERE id_estudiante = ?', [datosEstudiante.nombre_estudiante, datosEstudiante.edad_estudiante, datosEstudiante.grado_estudiante, id_estudiante]);
    console.log(rows);
    return rows;
  };
  exports.eliminarEstudiantes = async (id_estudiante) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id_estudiante = ?', [id_estudiante]);
    console.log(rows);
    return rows;
  };
  






//los modelos se ocupan de las operaciones de acceso a datos.

//el código que se encuentra en el modelo se encarga de realizar operaciones relacionadas con las bases de datos y la lógica de negocio asociada a esos datos. Esto incluye consultas, 
//inserciones, actualizaciones y eliminaciones de datos en la base de datos.

// Además de las operaciones de base de datos, el modelo también puede contener la lógica necesaria para realizar validaciones, 
// cálculos y transformaciones de datos antes de ser almacenados o presentados a la aplicación.

// El modelo actúa como una interfaz entre la capa de datos y las otras partes de la aplicación, 
// como los controladores y las vistas. Proporciona métodos y funciones que permiten acceder y 
// manipular los datos de manera coherente y consistente.

//Esto permite una mayor modularidad y reutilización de código, 
//ya que los modelos pueden ser utilizados por diferentes controladores para realizar operaciones similares en la base de datos. 
//Además, si en el futuro se requiere cambiar la forma en que se accede a los datos (por ejemplo, 
//cambiar de una base de datos relacional a una base de datos NoSQL), solo se necesitaría modificar los modelos, 
//sin afectar la lógica de los controladores.
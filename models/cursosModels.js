const db = require('./../config/db');

  exports.obtenerCursos = async () => {
  const [rows, fields]= await db.execute('SELECT * FROM cursos');
  console.log(rows);
  return rows;
  }
  exports.obtenerCursosById = async (id_cursos) => {
    const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE id_cursos = ?', [id_cursos]);
    return rows[0];
  };
  exports.agregarCursos = async (curso) => {
      const [rows, fields] = await db.execute('INSERT INTO cursos (nombre_curso, descripcion_curso) VALUES (?, ?)', [curso.nombre_curso, curso.descripcion_curso]);
      console.log(rows);
      return rows;
    }
  exports.actualizarCursos = async (id_cursos, datosCurso) => {
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre_curso = ?, descripcion_curso = ? WHERE id_cursos = ?', [datosCurso.nombre_curso, datosCurso.descripcion_curso, id_cursos]);
    return rows;
  };
  exports.eliminarCursos = async (id_cursos) => {
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id_cursos = ?', [id_cursos]);
    console.log(rows);
    return rows;
  };
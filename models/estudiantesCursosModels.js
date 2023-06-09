//models 
const db = require('../config/db');

exports.obtenerCursosDeEstudiantes = async (estudiante_id) => {
  const [rows, fields] = await db.execute(`
    SELECT cursos.*
    FROM estudiantes_cursos
    JOIN cursos ON estudiantes_cursos.curso_id = cursos.id_cursos
    WHERE estudiantes_cursos.estudiante_id = ?`,[estudiante_id]
  );
  return rows;
};

exports.obtenerEstudiantesDeCursos = async (curso_id) => {
  const [rows, fields] = await db.execute(`
    SELECT estudiantes.*
    FROM estudiantes_cursos
    JOIN estudiantes ON estudiantes_cursos.estudiante_id = estudiantes.id_estudiante
    WHERE estudiantes_cursos.curso_id = ?`,[curso_id]
  );
  return rows;
};
exports.agregarEstudianteACursos = async (estudiante_id, curso_id) => {
  const [rows, fields] = await db.execute('INSERT INTO estudiantes_cursos (estudiante_id, curso_id) VALUES (?, ?)', [estudiante_id, curso_id]);
  return rows;
};

exports.eliminarEstudianteDeCurso = async (estudiante_id, curso_id) => {
  const [rows, fields] = await db.execute('DELETE FROM estudiantes_cursos WHERE estudiante_id = ? AND curso_id = ?', [estudiante_id, curso_id]);
  return rows;
};

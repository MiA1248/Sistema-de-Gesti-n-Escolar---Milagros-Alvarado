Documentación de:Sistema de gestión escolar 

1.Instalación
Luego de clonar este repositorio en tu máquina local, asegurate de ejecutar npm install en tu consola para instalar todas las dependencias necesarias.
2.Configuración
2.1-Crea una base de datos en tu servidor MySQL con las siguientes tablas y campos: 
Tabla "estudiantes" con los campos: id_estudiante (entero, clave primaria), nombre (cadena de texto), edad (entero) y grado (cadena de texto). 
Tabla "profesores" con los campos: id_profesor (entero, clave primaria), nombre (cadena de texto), especialidad (cadena de texto) y email (cadena de texto). 
Tabla "cursos" con los campos: id_cursos (entero, clave primaria), nombre (cadena de texto) y descripcion (cadena de texto).
Tabla "estudiantes_cursos" para establecer la relación entre estudiantes y cursos. Esta tabla debe tener los campos: estudiante_id (entero, 
clave foránea a la tabla "estudiantes") y curso_id (entero, clave foránea a la tabla "cursos").

2.2-Renombrar el archivo.env.example como .env.
En el archivo .env, actualiza las variables de entorno relacionadas con la conexión a la base de datos con los valores correspondientes. 
Teniendo en cuenta que si su base de datos no tiene una contraseña asignada, llenar el espacio con comillas vacías(‘’).
3.Ejecución
Ejecuta el siguiente comando para iniciar el servidor:
node app.js
El servidor estará disponible en http://localhost:3000. , si ese puerto está ocupado probar con el puerto 3001 u otro disponible
A continuación, se detallan las rutas disponibles en la aplicación:

Obtener todos los cursos de un estudiante:

Estudiantes:
Obtener todos los estudiantes:
Método: GET
URL: http://localhost:puerto/api/estudiantes/
Obtener un estudiante por su ID:
Método: GET
URL: http://localhost:puerto/api/estudiantes/:id_estudiante
Ejemplo: http://localhost/api/estudiantes/1
Agregar un estudiante:
Método: POST
URL: http://localhost:puerto/api/estudiantes/
body (JSON):
{"nombre_estudiante":"Milagros Alvarado",
"edad_estudiante":"24",
"grado_estudiante":"segudo año"
}
Actualizar un estudiante por su ID:

Método: PUT
URL: http://localhost:puerto/api/estudiantes/:id_estudiante
Ejemplo: http://localhost/api/estudiantes/1
Cuerpo (JSON):
{ 
"nombre_estudiante":"Milagros Micaela Alvarado",
"edad_estudiante":"24",
"grado_estudiante":"segudo año"
}
Eliminar un estudiante por su ID:
Método: DELETE
URL: http://localhost:puerto/api/estudiantes/:id_estudiante
Ejemplo: http://localhost/api/estudiantes/1
Cursos:
Obtener todos los cursos:
Método: GET
URL: http://localhost:puerto/api/cursos/
Obtener un curso por su ID:
Método: GET
URL: http://localhost:puerto/api/cursos/:id_curso
Ejemplo: http://localhost/api/cursos/1
Agregar un curso:
Método: POST
URL: http://localhost/api/cursos/
body(JSON):
{
  "nombre_curso": "Laboratorio I",
  "descripcion_curso": "Curso completo "
}
}

Actualizar un curso por su ID:
Método: PUT
URL: http://localhost:puerto/api/cursos/:id_curso
Ejemplo: http://localhost/api/cursos/1
body (JSON):
{
 "nombre_curso": "Laboratorio I",
  "descripcion_curso": "Curso completo para hacer prácticas de distintas tecnologías"
}
{
Eliminar un curso por su ID:
Método: DELETE
URL: http://localhost:puerto/api/cursos/:id_curso
Ejemplo: http://localhost/api/cursos/1

Profesores:
Obtener todos los profesores:
Método: GET
URL: http://localhost:puerto/api/profesores/
Obtener un profesor por su ID:
Método: GET
URL: http://localhost:puerto/api/profesores/:id_profesor
Ejemplo: http://localhost/api/profesores/1
Agregar un profesor:
Método: POST
URL: http://localhost/api/profesores/
body (JSON):
{ 
   "nombre_profesor":"Fernando Jara",
   "especialidad_profesor":"Matematicas",
    "email_profesor":"fejar@gmail.com"
}
{

Actualizar un profesor por su ID:
Método: PUT
URL: http://localhost:puerto/api/profesores/:id_profesor
Ejemplo: http://localhost/api/profesores/1
Cuerpo (JSON):
{"nombre_profesor":"Fernando Jara",
    "especialidad_profesor":"Matematicas",
    "email_profesor":"ferjara@gmail.com"
}
Eliminar un profesor por su ID:
Método: DELETE
URL: http://localhost:puerto/api/profesores/:id_profesor
Ejemplo: http://localhost/api/profesores/1
EstudiantesCursos:
Obtener todos los cursos de un estudiante:
Método: GET
URL: http://localhost:puerto/api/estudiantesCursos/estudiantes/:estudiante_id/cursos
Ejemplo: http://localhost:3000/api/estudiantesCursos/estudiantes/1/cursos
Obtener todos los estudiantes de un curso:
Método: GET
URL: http://localhost:puerto/api/estudiantesCursos/cursos/:curso_id/estudiantes
Ejemplo: http://localhost/api/estudiantesCursos/cursos/1/estudiantes
Agregar un estudiante a un curso:
Método: POST
URL: http://localhost:puerto/api/estudiantesCursos/cursos/:curso_id/estudiantes
Ejemplo: http://localhost/api/estudiantesCursos/cursos/4/estudiantes
Body (JSON):
{
"estudiante_id":2,
"curso_id":3

}

Eliminar un estudiante de un curso:
Método: DELETE
URL: http://localhost:puerto/api/estudiantesCursos/cursos/:curso_id/estudiantes/:estudiante_id
Ejemplo: http://localhost:3002/api/estudiantesCursos/cursos/1/estudiantes/1


Manejo de Errores
En caso de errores, la aplicación responderá con un mensaje de error adecuado y el código de estado correspondiente.

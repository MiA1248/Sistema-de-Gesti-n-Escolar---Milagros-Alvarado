
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const routerEstudiantes = require('../routes/estudiantes');
const routerCursos = require('../routes/cursos');
const routerProfesores = require('../routes/profesores');
const routerEstudiantesCursos = require('../routes/estudiantesCursos');

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    routes(){
         this.app.use('/api/estudiantes', routerEstudiantes);
         this.app.use('/api/cursos',routerCursos);
         this.app.use('/api/profesores',routerProfesores);
         this.app.use('/api/estudiantesCursos',routerEstudiantesCursos);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen(){
        const port = 3002;
        this.app.listen(port, ()=>{
            console.log(`Servidor corriendo en el puerto ${port}`);
        })
    }

}

module.exports = Server;
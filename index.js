const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 8000;
const path = require('path');

app.listen('8000', () => console.log("corriendo en puerto", port));

//configuracion de ejs
app.set('views', './views');
app.set('view engine', 'ejs');

//configuracion de archivos estaticos


app.use(express.static('./views'));
app.use(express.static('./styles'));
app.use(express.static('./images'));


//endpoint de login
app.get('/', (req, res) => {
    res.render('index');
    //console.log("Tener un usuario en el sistema");
})

//endpoints de empleados
app.get('/empleados/EditarEmpleado', (req, res) => {
    res.render('empleados/EditarEmpleado');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la secion empleados");
    console.log("Debe haber por lo menos un registro");
})
app.get('/empleados/RegistrarEmpleado', (req, res) => {
    res.render('empleados/RegistrarEmpleado');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la secion empleados");
})
//endpoints de examenes
app.get('/examenes/EditarTipoExamen', (req, res) => {
    res.render('examenes/EditarTipoExamen');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la secion tipos de examenes");
})
app.get('/examenes/RegistrarTipoExamen', (req, res) => {
    res.render('examenes/RegistrarTipoExamen');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la secion tipos de examenes");
    console.log("Debe haber por lo menos un registro");
})
//endpoints de medicos

app.get('/medicos/RegistrarMedico', (req, res) => {
    res.render('medicos/RegistrarMedico');
    console.log("Debe iniciar sesion como administrador o secretaria");
    console.log("haber ingresado a la seccion medicos");

})
app.get('/medicos/EditarMedico', (req, res) => {
    res.render('medicos/EditarMedico');
    console.log("Debe iniciar sesion como administrador o secretaria");
    console.log("haber ingresado a la seccion medicos");
    console.log("Debe haber por lo menos un registro");
})

//endpoints de muestra

app.get('/muestras/EditarTipoMuestra', (req, res) => {
    res.render('muestras/EditarTipoMuestra');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la seccion tipo de muestra");
    console.log("Debe haber por lo menos un registro");
})
app.get('/muestras/RegistrarTipoMuestra', (req, res) => {
    res.render('muestras/RegistrarTipoMuestra');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la seccion tipo de muestra");
})

//endpoints de pacientes

app.get('/pacientes/GestionPaciente', (req, res) => {
    res.render('pacientes/GestionPaciente');
    console.log("Debe iniciar sesion como administrador o secretaria");
    console.log("haber ingresado a la seccion paciente");
})
//endpoints de usuarios

app.get('/usuarios/RegistrarUsuario', (req, res) => {
    res.render('usuarios/RegistrarUsuario');
    console.log("Debe iniciar sesion como administrador");
    console.log("haber ingresado a la seccion paciente");
})

//endpoints de consulta
app.get('/consultas/Gestionconsulta', (req, res) => {
    res.render('consultas/Gestionconsulta');
    console.log("Debe iniciar sesion como secretaria");
    console.log("haber ingresado a la secion consulta");
    console.log("Debe haber por lo menos un registro de paciente");
    console.log("Debe haber por lo menos un registro de muestra");
    console.log("Debe haber por lo menos un registro de tipo de examen");
})










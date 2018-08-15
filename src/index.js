//iniciar servidor node js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();


//Settings()
app.set('port',process.env.PORT || 3000); //toma el puerto que te da la nube o defecto 3000

//Middlewares(funciones antes de llegar a las rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes(rutas o urls )
app.use('/api/tasks',require('./routes/task.routes.js'))


//Static Files (donde iran mis archivos estaticos, html css js)
app.use(express.static(path.join(__dirname, 'public'))); //mi carpeta static esta aca express, al darle esto al navegador busca el html y lo pinta, donde va react


//Starting the server

app.listen(app.get('port'),()=>{
  //cuando inicie el servidor que ejecute esto
console.log(`Server on port  ${app.get('port')}`)
});

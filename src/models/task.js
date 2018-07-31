// diseniar el esquema de los datos, como van a lucir las tareas

const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
  //como van a lucir mis datos, guardo en constante para reutilizar
  title:{type:String , required:true},
  description:{type:String , required:true},
});

module.exports =  mongoose.model('Task',TaskSchema); //model le doy el la estructura del esquema que defini, como van a lucir los datos

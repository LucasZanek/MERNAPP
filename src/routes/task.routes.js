//definir operaciones a traves de las url que le voy a dar al servidor, una url para que cree, otra para editar etc

const express = require('express');
const router = express.Router();
const Task = require('../models/task');

//enviar
router.get('/', async(req,res) =>{
  const tasks = await Task.find(); //voy a hacer consulta a db, CUANDO TERMINE , Agarra resultados y guarda en constante
  console.log(tasks)
  res.json(tasks) // respondo al navegador ( tareas )
});

router.get('/:id',async(req,res) =>{
const task =  await Task.findById(reques.params.id);
res.json(task);
})

//obtener y guardar
router.post('/', async(req,res)=>{
  //obtengo datos
  const {title,description} = req.body; //obtengo estos datos
  const task = new Task({
    title,
    description
    //pongo esos datos en titulo y descripcion, todavia no almacene en mongo
  })
  await task.save();
  console.log(task) // muestro tarea guardada
  res.json({status:'Task saved'}) // respondo al navegador como recibido
});


//Actualizar tareas
router.put('/:id',async(req,res)=>{
  const {title,description} = req.body; //obtengo los datos titulo y descripcion del request
  const newTask = {title,description} //a la nueva tarea asigno los datos obtenidos
   await Task.findByIdAndUpdate(req.params.id , newTask) // le doy a la funcion el id del request, y la nueva tarea a remplazar
   console.log(req.params.id);
   res.json({status:'Task Updated'});
})


//Eliminar tareas

router.delete('/:id',async(req,res)=>{
  await Task.findByIdAndRemove(req.params.id);
  res.json({status:'Task Deleted'});
})

module.exports = router;

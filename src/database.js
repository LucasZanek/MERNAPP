//conectar a la base data y luego usar en index.js

const mongoose = require ('mongoose');
const URI = 'mongodb://localhost/mern-stack'

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));


module.exports  = mongoose;

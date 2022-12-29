const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentario = new Schema({
    nombre: String,
    comentario: String,
     
})

module.exports = mongoose.model('comentario', comentario);
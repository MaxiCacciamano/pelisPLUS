const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    nombre:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    estado:{type:String, required:true},
    code:{type:String, required:true, default:"UNVERIFIED"},
     
})

module.exports = mongoose.model('User', user);
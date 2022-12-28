const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieRated = new Schema({
    title: String,
    overview:String,
    release_date:Date,
    generos:[{genres:String}],
    vote_average:String,
    popularity:Number,
    poster_path:String,
     
})

module.exports = mongoose.model('movieRated', movieRated);
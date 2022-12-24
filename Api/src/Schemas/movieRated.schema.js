const mongose = require('mongose');
const Schema = mongose.Schema;

const movieRated = new Schema({
    title: String,
    overview:String,
    release_date:Date,
    generos:[{genres:String}],
    vote_average:String,
    popularity:Number,
    poster_path:String,
     
})

module.exports = mongose.model('movieRated', movieRated);
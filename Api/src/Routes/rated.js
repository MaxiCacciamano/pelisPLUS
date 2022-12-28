const {Router} = require('express');
const {getmovieRated} = require('../Controls/movieRatedControler')
// const movieRatedController = require('../Controls/movieRatedControler')

const route = Router();

route.get('/o', (req,res)=>{
    res.send("movies-2")
})


module.exports = route;
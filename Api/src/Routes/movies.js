const {Router} = require('express');
const {moviesAll, movieId ,getmovieRated} = require('../Controls/movieRatedControler')
// const movieRatedController = require('../Controls/movieRatedControler')

const route = Router();

route.get('/', moviesAll)
route.get('/:id', movieId)


module.exports = route;
const {Router} = require('express');
const {moviesAll, movieId, recomendadas, detailmrecomended ,getmovieRated} = require('../Controls/movieRatedControler')
// const movieRatedController = require('../Controls/movieRatedControler')

const route = Router();

route.get('/', moviesAll)
route.get('/r', recomendadas)
route.get('/:id ', movieId)
route.get('/:id', detailmrecomended)


module.exports = route;
const {Router} = require('express');
const movieRatedController = require('../Controls/movieRatedControler')

const route = Router();

route.get('/movies', movieRatedController)

module.exports = route;
const {Router} = require('express');
const {singUp} = require('../Controls/userControler');
const route = Router();

route.post('/signup',singUp)

module.exports = route;
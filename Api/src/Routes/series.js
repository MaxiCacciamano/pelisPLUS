const {Router} = require('express');
const route = Router();

route.get('/', (req,res)=>{
    res.send("series")
})


module.exports = route;
const {Router} = require('express');
const {readdirSync} = require('fs')

const route = Router();

const files =  readdirSync(__dirname,)
console.log(files)

files.forEach((e)=>{
    route.use(require('../moviseRated' + e))
})



module.exports=route

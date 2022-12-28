const {Router} = require('express');
const {readdirSync} = require('fs')

const route = Router();

const files =  readdirSync(__dirname,)//dirname=rutas
console.log(files)

// route.use('/movies', require('./movies'))
files.forEach((file)=>{
    //  route.use(require('./moviesrRated' + e))
    const remove = removeExtension(file)
     if(remove !== "index") route.use(`/${remove}`, require(`./${remove}`))
    // console.log(file)
    // console.log(remove)
})

function removeExtension(file) {
   return file.split(".")[0]
}


module.exports=route

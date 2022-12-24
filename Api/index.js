const {app} = require('./app')
const PORT = process.env.PORT || 3001;  
const mongoose = require("mongoose");

app.listen(PORT, async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`listening at ${PORT}, ya estoy escuchando`);
    }
    catch(err){
        console.log(err,"error al levantar el servidor");
    }
  });
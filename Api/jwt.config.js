const jwt = require('jsonwebtoken')

const  getToken= (payload)=>{
    return jwt.sign({
        data:payload
    },/*palabra secreta*/ 'SECRET',{expiresIn:'1h'/*en cuanto teimpo va a exiprar ek token*/})
}

const getTokenData = (token)=>{
    let data = null;
    jwt.verify(token, 'SECRET', (err,decoded)=>{
        if(err){
            console.log("Error al obtener la data del token")
        }
        data= decoded
    })
    return data
}

module.exports  = {
    getToken,
    getTokenData
}
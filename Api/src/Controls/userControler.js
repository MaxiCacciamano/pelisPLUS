const axios  = require('axios')
const user = require('../Schemas/user.schema')
const {v4: uuidv4} = require('uuid')
const { getToken, getTokenData } = require('../../jwt.config')

const singUp = async(req,res)=>{
    try{

        //hacer midleware

        //obtener la data del usuario

        const {name, email} = req.body


        //verificar que el usuario no exista la
        let user = user.findOne({email: email}) || null

        if(user !== null){
            return res.json({
                success:false,
                msg:"Usuario ya existe"
            })
        }

        //generar el codigo
        const code = uuidv4();

        //crear un nuevo usuario
        user =  new user({name, email, code})

        //generar un token
        const token=getToken({email,code})

        //obtener un templaate
        

        //enviar email
    }
    catch(err){
        console.log(err,"soy el error de registro de ususario")
        return res.json({
            success: false,
            msg: 'Error al registrar usuario'
        })
    }
}

const signin =async(req,res)=>{

}

module.exports={
    
}
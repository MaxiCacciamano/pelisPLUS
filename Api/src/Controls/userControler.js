const axios  = require('axios')
const User = require('../Schemas/user.schema')
const {v4: uuidv4} = require('uuid')
const { getToken, getTokenData } = require('../../jwt.config')
const { getTamplet, sendEmail } = require('../../mail.config')

const singUp = async(req,res)=>{
    try{

        //hacer midleware

        //obtener la data del usuario

        const {nombre, email} = req.body


        //verificar que el usuario no exista la
        let user = await User.findOne({email}) || null

        if(user !== null){
            return res.json({
                success:false,
                msg:"Usuario ya existe"
            })
        }

        //generar el codigo
        const code = uuidv4();

        //crear un nuevo usuario
        user =  new User({nombre, email, code})

        //generar un token
        const token=getToken({email,code})

        //obtener un templaate
        const template = getTamplet(nombre, token);

        //enviar email
        await sendEmail(email, /*titulo del correo*/'Email de PlisPlus', template);
        await user.save(); //guardamos el usuario
        res.json({
            success: true,
            msg:'Registrado con exito'
        })
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
    singUp
}
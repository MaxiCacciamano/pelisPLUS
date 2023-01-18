require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls:{
        rejectUnauthorized: false
    },
    secure: true, // true for 465, false for other ports
    auth: {
      user:process.env.USER, // generated ethereal user
      pass:process.env.PASS, // generated ethereal password
    },
  });

  const sendEmail = async(email, subject, html)=>{
    try{
     // send mail with defined transport object
         await transporter.sendMail({
          from: `PelisPlus <${process.env.USER}>`, // sender address
          to: email, // list of receivers
          subject , // Subject line
          text: "Bienvenidos a PelisPlus", // plain text body
          html, // html body
       });
    }
    catch(err){
        console.log("algo no va bien con el email",err)
    }
  }

  const getTamplet=(name, token)=>{
    return`
    <head>
      <link rel="stylesheet" href="./style.css">
    </head>
    <div id="email___content">
      <img src="https://i.imgru.com/eboNR82.png" alt="">
      <h2>Bienvenido ${name}</h2>
      <h3>Este es un correo de prueba de la pagina desarrollada por Maximilaino Cacciamano, la cual demuestra sus habilidades con las siguientes skills</h3>
      <h3>Entra a la pagina y descubrilas </h3>
      <h3>Para confirmar tu cuenta, ingresa al siguiente enlace</h3>
      <a href="http://localhost:3000/api/user/confirm/${token}">Confirmar</a>
    </div>
    `
  }

  module.exports={
    sendEmail,
    getTamplet

  }
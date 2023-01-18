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
          from: `Pagina <${process.env.USER}>`, // sender address
          to: email, // list of receivers
          subject , // Subject line
          text: "PelisPlus", // plain text body
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
      <h2>Bienvenidos ${name}</h2>
      <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
      <a href="http://localhost:3000/api/user/confirm/${token}">Confirmar</a>
    </div>
    `
  }

  module.exports={
    sendEmail,
    getTamplet

  }
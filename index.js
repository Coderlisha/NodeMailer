// const http = require("http");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marathelisha@gmail.com',
    pass: 'whrxmooyxmywmqeo'
  }
});

var mailOptions = {
  from: 'marathelisha@gmail.com',
  to: 'lishamarathe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
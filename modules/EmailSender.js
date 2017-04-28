'use strict';
var nodemailer = require('nodemailer');

module.exports =
{
  sendEmail: function(address, subject, message)
  {
    var transporter = nodemailer.createTransport(
      {
      service: 'Gmail',
      auth:
      {
        user: 'gmail.successinstylebot@gmail.com',
        pass: '53aeeced9b16cba7cc049fedf104f4d969470d2c'
      }
    });

    console.log('created');
    transporter.sendMail(
      {
          from: 'successinstylebot@gmail.com',
          to: address,
          subject: subject,
          text: message
      }, (error, info) =>
    {
      if (error)
      {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }
};

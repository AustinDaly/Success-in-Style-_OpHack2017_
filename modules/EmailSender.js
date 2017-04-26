'use strict';
var nodemailer = require('nodemailer');

module.exports =
{
  sendEmail: function(address, subject, message)
  {
    let transporter = nodemailer.createTransport(
      {
      service: 'gmail',
      auth:
      {
        user: 'successinstylebot@gmail.com',
        pass: '53aeeced9b16cba7cc049fedf104f4d969470d2c'
      }
    });

    let mailOptions =
    {
      from: 'Success In Style <successinstylebot@gmail.com>',
      to: address,
      subject: subject,
      text: message
    }

    transporter.sendMail(mailOptions, (error, info) =>
    {
      if (error)
      {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    })
  }
};

const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {

  var transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ee22896b31efc1",
      pass: "7cb5bad3492ba3"
    }
  });
    // const transporter = nodeMailer.createTransport({
    //     host: process.env.SMPT_HOST,
    //     port: process.env.SMPT_PORT,
    //     auth: {
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_PASSWORD
    //     },
    //     service: process.env.SMPT_SERVICE,

    // });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions);
};
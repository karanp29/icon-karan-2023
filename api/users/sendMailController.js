const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

const sendMail = (req, res) => {
  const { usr_email , usr_event_name } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass:  process.env.SMTP_PWD
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "neopolitan",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: `Hello, ${usr_email}`,
      intro: "You Have successfully register for event",
      table: {
        data: [
          {
            Event: usr_event_name,
            Time: "Oct 25, 2023",
            Location: "Amphitheatre",
          },
        ],
      },
      outro: "Looking forward to see in event",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.SMTP_FROM,
    to: usr_email,
    subject: "ICON 2023 - Registration Successfull",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        success : 1,
        msg: "Message sent",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // res.status(201).json("getBill Successfully...!");
};


module.exports = sendMail;

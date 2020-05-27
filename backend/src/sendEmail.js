import nodemailer from "nodemailer";

export const sendMailController = (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  sendMail(email, message)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(email, message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "",
      pass: "",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${email}" <foo@example.com>`, // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    text: message,
  });
}

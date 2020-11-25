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

async function sendMail(email, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  });

  let info = await transporter.sendMail({
    from: `"${email}" <foo@example.com>`,
    to: "",
    subject: "Hello",
    text: message,
  });
}

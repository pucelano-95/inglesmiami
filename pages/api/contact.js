export default function sendEmail(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.NEXT_PUBLIC_API_BASE_URL
  );
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: req.body.email,
    to: process.env.TO_EMAIL,
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.name,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).send({
        message: err,
      });
      return;
    }
    res.send({
      data: "success",
    });
  });
}

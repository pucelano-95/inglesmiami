import { API_MESSAGE_SUCCESS } from "@/utils/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      console.error(err);
      res.status(500).send({
        message: err,
      });
      return;
    }
    res.send({
      data: API_MESSAGE_SUCCESS,
    });
  });
}

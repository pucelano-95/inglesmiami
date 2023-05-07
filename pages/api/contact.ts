import { API_MESSAGE_SUCCESS } from "@/utils/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nodemailer = require("nodemailer");
  const transport =
    process.env.NODE_ENV == "development"
      ? {
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        }
      : {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USERNAME,
            clientId: process.env.EMAIL_CLIENT_ID,
            clientSecret: process.env.EMAIL_CLIENT_SECRET,
            refreshToken: process.env.EMAIL_CLIENT_REFRESH_TOKEN,
          },
        };
  const transporter = nodemailer.createTransport(transport);

  const mailData = {
    from: req.body.email,
    to: process.env.TO_EMAIL,
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.name,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      res.status(500).send({
        message: err,
      });
      res.end();
      return;
    }
    res.send({
      data: API_MESSAGE_SUCCESS,
    });
    res.end();
  });
}

import { API_MESSAGE_SUCCESS, PARAMETER_STORE_PREFIX } from "@/utils/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { GetParametersCommand } from "@aws-sdk/client-ssm";
import ssmClient from "@/aws/ssmClient.js";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parameterNames: string[] = [];
  if (process.env.NODE_ENV == "production") {
    parameterNames.push(`${PARAMETER_STORE_PREFIX}/EMAIL_CLIENT_SECRET`);
  } else {
    parameterNames.push(`${PARAMETER_STORE_PREFIX}/EMAIL_PASSWORD`);
  }

  const command = new GetParametersCommand({
    Names: parameterNames,
    WithDecryption: true,
  });

  // Send the command to the SSM client to retrieve the parameters
  const response = await ssmClient.send(command);
  console.log("response:", response);
  // // Get the values of the parameters from the response
  // const parameterValues = response.Parameters.reduce((acc, param) => {
  //   acc[param.Name] = param.Value;
  //   return acc;
  // }, {});

  const nodemailer = require("nodemailer");
  const transport =
    process.env.NODE_ENV == "development"
      ? {
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: response,
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
            clientSecret: response,
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
      console.log(err, err.stack);
      res.status(500).send({
        message: err,
      });
      res.end();
      return;
    }
    res.status(200).send({
      data: API_MESSAGE_SUCCESS,
    });
    res.end();
  });
}

const client = require("./client");

const contactBaseUrl = "/api";

const sendEmail = (data) => {
  const url = `${contactBaseUrl}/contact`;
  return client.post(url, data);
};

module.exports = sendEmail;

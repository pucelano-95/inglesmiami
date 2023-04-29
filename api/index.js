const client = require("./client");
const sendEmail = require("./contact");

module.exports = {
  contact: {
    client,
    sendEmail,
  },
};

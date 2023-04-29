const axios = require("axios");

const client = axios.create({});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    const { status, statusText, data } = error.response;
    return (
      Promise.reject <
      ErrorResponse >
      {
        message: statusText,
        status,
        data,
      }
    );
  }
);

module.exports = client;

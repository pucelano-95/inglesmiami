const axios = require("axios");

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

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

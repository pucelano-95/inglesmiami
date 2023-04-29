import client from "./client";

const contactBaseUrl = "/api";

export const sendEmail = (data: any) => {
  const url = `${contactBaseUrl}/contact`;
  return client.post(url, data);
};

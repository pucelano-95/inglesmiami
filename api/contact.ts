import { DataContactEmail } from "@/store/reducers";
import client from "./client";

const contactBaseUrl = "/api";

export const sendEmail = (data: DataContactEmail) => {
  const url = `${contactBaseUrl}/contact`;
  return client.post(url, data);
};

import axios, { AxiosInstance, AxiosResponse } from "axios";

interface ErrorResponse {
  message: string;
  status?: number;
  data?: any;
}

const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

client.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    const { status, statusText, data } = error.response;
    return Promise.reject<ErrorResponse>({
      message: statusText,
      status,
      data,
    });
  }
);

export default client;

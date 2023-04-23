import { DataContactEmail } from "@/store/reducers";

export type Api = {
  contact: {
    sendEmail: (data: DataContactEmail) => Promise<any>;
  };
};
export * as contact from "./contact";

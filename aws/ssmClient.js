import { SSMClient } from "@aws-sdk/client-ssm";
const ssmClient = new SSMClient({
  region: process.env.AWS_REGION,
});

if (process.env.NODE_ENV == "development") {
  ssmClient.config.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
}
export default ssmClient;

const validMessage = ({ message }: { message: string }) => message;
const validEmail = ({ email }: { email: string }) => email;
const validSubject = ({ subject }: { subject: string }) => subject;
const validName = ({ name }: { name: string }) => name;

export const keyToObjectValidate = (formValue: any) => {
  const formFunction: Array<(value: any) => any> = [];
  for (let key in formValue) {
    switch (key) {
      case "message":
        formFunction.push(validMessage);
        break;
      case "email":
        formFunction.push(validEmail);
        break;
      case "name":
        formFunction.push(validName);
        break;
      case "subject":
        formFunction.push(validSubject);
        break;
      default:
        break;
    }
  }
  return formFunction;
};

export const MESSAGE_SUCCESS = "Email enviado satisfactoriamente! Nos pondremos en contacto cuanto antes";
export const MESSAGE_ERROR = "Disculpa, ha habido un error enviando el email. Por favor contacta con support@inglesmiami.com para que podamos ayudarte";

export const API_MESSAGE_SUCCESS = "success";
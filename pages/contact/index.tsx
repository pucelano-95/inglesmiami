import Layout from "@/components/layout/layout";
import Form from "@/components/shared/form";
import FormButton from "@/components/shared/formButton";
import FormField from "@/components/shared/formField";
import { FormValues } from "@/hooks/useForm";
import * as api from "../../api";
import { useState } from "react";
import Image from "next/image";
import {
  API_MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
} from "@/utils/utils";
import Link from "next/link";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await api.contact.sendEmail(values);
      if (response.data === API_MESSAGE_SUCCESS) {
        setMessage(MESSAGE_SUCCESS);
      } else {
        setMessage(MESSAGE_ERROR);
      }
    } catch (error) {
      setMessage(MESSAGE_ERROR);
    }
  };

  return (
    <Layout>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center mt-5">
          Contactanos
        </h2>
        <p className="text-center w-responsive mx-auto mb-4">
          ¿Tienes alguna pregunta? Por favor contactanos a través de este
          formulario. Nuestro equipo te contactará lo más rapido que nos sea
          posible.
        </p>
        {!message && (
          <div className="row">
            <Form
              initialValue={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              onSubmit={handleSubmit}
            >
              <FormField
                type="text"
                name="name"
                label="Tu nombre"
                placeholder="Alejandro"
                autofocus
                autocomplete
                required
              />
              <FormField
                type="email"
                name="email"
                label="Tu email"
                placeholder="alejandro@gmail.com"
                autocomplete
                required
              />
              <FormField
                type="text"
                name="subject"
                label="Asunto"
                placeholder="Clases"
                required
              />
              <FormField
                type="textarea"
                name="message"
                label="Tu mensaje"
                placeholder="Tu mensaje"
                rows={3}
                required
              />
              <FormButton type="submit" variant="primary">
                Send
              </FormButton>
            </Form>
            <div className="col-md-5 col-lg-4">
              <ul className="list-unstyled mb-0">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="16"
                    height="16"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <p>Miami, USA</p>
                </li>

                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <p>305-397-5349</p>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="16"
                    height="16"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p>ralph.barrero@inglesmiami.com</p>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                  >
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                  </svg>
                  <Link href="https://calendly.com/ralph-barrero-inglesmiami/clases" target="_blank" rel="noopener noreferrer">
                    <p>Reserva una clase con calendly pinchando aqui</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {message && (
          <p className="text-center w-responsive mx-auto mb-4">
            {message}
            {message == MESSAGE_SUCCESS ? (
              <Image
                src="/teach-you-yoda.gif"
                alt="yoda"
                width={1000}
                height={500}
              />
            ) : (
              <Image
                src="/oop-i-am-sorry.jpeg"
                alt="sorry"
                width={1000}
                height={500}
              />
            )}
          </p>
        )}
      </section>
    </Layout>
  );
}

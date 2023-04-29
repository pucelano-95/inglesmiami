import Layout from "@/components/layout/layout";
import Form from "@/components/shared/form";
import FormButton from "@/components/shared/formButton";
import FormField from "@/components/shared/formField";
import { FormValues } from "@/hooks/useForm";
import * as api from "../../api";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await api.contact.sendEmail(values);
      if (response.data === "success") {
        setMessage(
          "Email enviado satisfactoriamente! Nos pondremos en contacto cuanto antes."
        );
      } else {
        setMessage(
          "Disculpa, ha habido un error enviando el email. Por favor contacta con support@inglesmiami.com para que podamos ayudarte."
        );
      }
    } catch (error) {
      setMessage(
        "Disculpa, ha habido un error enviando el email. Por favor contacta con support@inglesmiami.com para que podamos ayudarte."
      );
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
                  <i className="fas">&#xf3c5;</i>
                  <p>Miami, USA</p>
                </li>

                <li>
                  <i className="fas">&#xf095;</i>
                  <p>305-397-5349</p>
                </li>

                <li>
                  <i className="fas">&#xf0e0;</i>
                  <p>ralph.barrero@inglesmiami.com</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {message && (
          <p className="text-center w-responsive mx-auto mb-4">
            {message}{" "}
            <Image
              src="/teach-you-yoda.gif"
              alt="gif"
              width={1000}
              height={500}
            />
          </p>
        )}
      </section>
    </Layout>
  );
}

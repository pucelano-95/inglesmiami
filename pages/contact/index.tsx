import Layout from "@/components/layout/layout";
import Form from "@/components/shared/form";
import FormButton from "@/components/shared/formButton";
import FormField from "@/components/shared/formField";
import { FormValues } from "@/hooks/useForm";
import { sendEmailAction } from "@/store/actions";
import { useDispatch } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const handleSubmit = (email: FormValues) => {
    dispatch(sendEmailAction(email));
  };

  return (
    <Layout>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center mt-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-4">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within hours to help you.
        </p>

        <div className="row">
          <Form
            className="col-md-9"
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
              label="Your name"
              placeholder="Alejandro"
              autofocus
              autocomplete
            />
            <FormField
              type="email"
              name="email"
              label="Your email address"
              placeholder="alejandro@gmail.com"
              autocomplete
            />
            <FormField
              type="text"
              name="subject"
              label="Subject"
              placeholder="Classes"
            />
            <FormField
              type="textarea"
              name="message"
              label="Your message"
              rows={3}
            />
            <FormButton type="submit" variant="primary">
              Send
            </FormButton>
          </Form>
          <div className="col-md-3 text-center">
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
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/layout";

export default function Privacy() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal">Política de privacidad</h1>
      <p className="fs-5 text-dark">
        En {process.env.NEXT_PUBLIC_TITLE}, nos tomamos tu privacidad en serio.
        Entendemos que tu información personal es importante y nos comprometemos
        a protegerla. Cuando utilizas nuestro sitio web para reservar una clase
        recopilamos solo la información necesaria para proporcionar nuestros
        servicios. Esto incluye tu nombre y dirección de correo electrónico. No
        compartimos ni vendemos tu información personal a terceros. Utilizamos
        tu información solo con fines de proporcionar nuestras clases de inglés
        y comunicarnos contigo sobre nuestros servicios. Utilizamos medidas de
        seguridad de estándar de la industria para proteger tu información
        personal, y revisamos y actualizamos regularmente nuestros protocolos de
        seguridad para garantizar el más alto nivel de protección. Si tienes
        alguna pregunta o inquietud sobre nuestra Política de privacidad, no
        dudes en contactarnos a través de{" "}
        <a href="mailto:privacy@inglesmiami.com">privacy@inglesmiami.com</a>.
        Haremos nuestro mejor esfuerzo para ayudarte y proporcionarte cualquier
        información que puedas necesitar. Gracias por elegir{" "}
        {process.env.NEXT_PUBLIC_TITLE} como tu compañero de aprendizaje de
        inglés. Nos comprometemos a proteger tu privacidad y brindarte la mejor
        experiencia de usuario posible.
      </p>
    </Layout>
  );
}

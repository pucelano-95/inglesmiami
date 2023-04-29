import Image from "next/image";
import Layout from "@/components/layout/layout";

export default function Team() {
  return (
    <Layout>
      <div className="p-5 mx-auto text-center" id="team">
        <h1 className="display-4 fw-normal">Ralph Barrero</h1>
        <Image
          src="/ralph.jpeg"
          alt="ralph"
          width={500}
          height={250}
          className="img-fluid"
        />
        <p className="fs-5 text-muted">
          Más de 20 años de amplia experiencia como profesor, traductor y
          director en instituciones de idiomas de gran reputación en China, EE.
          UU. y México, con un enfoque en el coaching de inglés comercial y el
          aprendizaje de idiomas en línea. Soy un maestro y gerente entusiasta y
          empático con una inclinación por alentar y motivar a los estudiantes
          de inglés para que logren sus objetivos de aprendizaje deseados y, por
          lo tanto, mejoren su calidad de vida a través del conducto del idioma.
          Soy un jugador de equipo y puedo llevarme bien con personas de todas
          las nacionalidades y orígenes diversos.
        </p>
      </div>
    </Layout>
  );
}

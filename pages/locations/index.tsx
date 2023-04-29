import Layout from "@/components/layout/layout";

export default function Locations() {
  return (
    <Layout>
      <div className="pricing-header p-5 mx-auto text-center">
        <h1 className="display-4 fw-normal">Ubicaciones</h1>
        <p className="fs-5 text-muted">
          ¡Nos enorgullece estar ubicados en el soleado Miami, Florida! Nuestra
          sede se encuentra en el corazón de Miami, donde nuestro equipo trabaja
          arduamente para brindar la mejor experiencia posible de enseñanza de
          inglés a nuestros estudiantes. Ya sea que seas un residente local o
          estés visitando desde otra ciudad, te invitamos a venir y visitar
          nuestra hermosa ciudad y aprovechar nuestras clases de inglés. Además
          de nuestra ubicación principal en Miami, también ofrecemos clases en
          línea para aquellos que no pueden asistir en persona. Nuestras clases
          en línea permiten a los estudiantes de todo el mundo aprender inglés
          desde la comodidad de sus propios hogares, al tiempo que reciben la
          misma educación de alta calidad por la que somos conocidos. Gracias
          por elegir {process.env.NEXT_PUBLIC_TITLE} como tu compañero de
          aprendizaje de inglés. Esperamos poder atenderte y ayudarte a alcanzar
          tus objetivos de aprendizaje del idioma.
        </p>
      </div>
    </Layout>
  );
}

import Layout from "@/components/layout/layout";

export default function About() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal">Acerca de nosotros</h1>
      <p className="fs-5 text-dark">
        Bienvenidos a {process.env.NEXT_PUBLIC_TITLE}, somos una compañía
        dedicada a enseñar inglés a personas de habla hispana de América Latina
        en Miami. Llevamos más de 30 años de experiencia apoyando a individuos,
        migrantes y empresas, lograr sus metas profesionales, académicas y
        personales, atreves del idioma. En estos 30 años en Norte América,
        Latino América y Asia, hemos aprendido que el aprendizaje del idioma
        debe ser CONVERSACIONAL y accesible para toda persona que quiera
        superarse. Nuestra misión es empoderar a nuestros alumnos a desarrollar
        su potencial máxima, convirtiéndonos en líder mundial en servicios del
        idioma. Nuestro método es 100% conversacional y el contenido de las
        sesiones se adapta, y crece, según tanto sus necesidades, como a los
        cambios sociales. Nuestras lecciones son una mezcla perfecta de
        profesionalismo con diversión, utilizando grupos pequeños, que se
        adaptan a cualquier presupuesto.
      </p>
    </Layout>
  );
}

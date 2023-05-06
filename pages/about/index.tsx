import Layout from "@/components/layout/layout";

export default function About() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal">Acerca de nosotros</h1>
      <p className="fs-5 text-dark">
        Bienvenidos a {process.env.NEXT_PUBLIC_TITLE}, somos una compañía
        dedicada a enseñar inglés a personas de habla hispana de América Latina
        en Miami. Nuestra misión es ayudar a nuestros estudiantes a alcanzar sus
        metas de aprendizaje del idioma inglés, ofreciéndoles una experiencia de
        aprendizaje única y personalizada. En InglesMiami, creemos que el
        aprendizaje del idioma inglés es fundamental en el mundo globalizado
        actual y es por eso que nos dedicamos a proporcionar un ambiente de
        aprendizaje enriquecedor para nuestros estudiantes. Nuestro equipo de
        profesionales altamente capacitados y experimentados está comprometido
        en ayudar a nuestros estudiantes a mejorar su nivel de inglés y alcanzar
        la fluidez deseada. Además de nuestras clases presenciales, también
        ofrecemos cursos en línea que permiten a nuestros estudiantes acceder a
        nuestro contenido de alta calidad desde cualquier parte del mundo. Nos
        aseguramos de que nuestros cursos en línea tengan la misma calidad y
        atención al detalle que nuestras clases presenciales, y estamos
        constantemente buscando formas innovadoras de mejorar nuestro método de
        enseñanza. En {process.env.NEXT_PUBLIC_TITLE}, nos enorgullece ayudar a
        nuestros estudiantes a alcanzar sus metas de aprendizaje de inglés y
        estamos comprometidos en brindarles la mejor experiencia educativa
        posible. Contáctanos hoy para obtener más información sobre nuestros
        cursos y cómo podemos ayudarte a mejorar tu inglés.
      </p>
    </Layout>
  );
}

import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function Classes() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="display-4 fw-normal delauney-font">
            Clases de ingles en Miami
          </h1>
          <h2 className="lead">
            Aprende inglés con nuestros profesionales certificados
          </h2>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2>Clases Disponibles</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image
                  src="/conversacion.jpeg"
                  className="card-Image-top img-fluid"
                  alt="Clase de conversación"
                  width={500}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Clase de Conversación</h5>
                  <p className="card-text">
                    Mejora tu fluidez y confianza hablando en inglés con
                    nuestros profesores nativos.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image
                  src="/gramatica.webp"
                  className="card-Image-top img-fluid"
                  alt="Clase de gramatica"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Clase de Gramática</h5>
                  <p className="card-text">
                    Domina las reglas gramaticales del inglés y mejora tu
                    precisión en la escritura.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <Image
                  src="/examen.jpeg"
                  className="card-Image-top img-fluid"
                  alt="Preparacion de exámenes"
                  width={400}
                  height={400}
                  style={{ width: "120%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Preparación de Exámenes</h5>
                  <p className="card-text">
                    Prepárate para los exámenes de certificación de inglés con
                    nuestras clases especializadas.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

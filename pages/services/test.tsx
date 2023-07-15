import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal delauney-font">
        ¿Quieres saber tu nivel de ingles?
      </h1>
      <Image
        src="/people_thinking.jpeg"
        alt="people thinking"
        width={400}
        height={400}
        className="img-fluid"
        style={{ width: "40%", height: "auto" }}
      />
      <p className="my-4 fs-5 text-dark">
        ¿Estás buscando demostrar tu habilidad para hablar inglés a posibles
        empleadores, universidades o agencias gubernamentales? ¡Nuestro examen
        de nivel de inglés es una excelente manera de hacerlo! Puedes mostrar
        tus habilidades lingüísticas en lectura, escritura, comprensión auditiva
        y expresión oral con nuestro examen. Además, nuestro examen es
        reconocido en todo el mundo, por lo que puedes tomarlo desde cualquier
        lugar del mundo. No dejes que las dificultades del idioma te detengan.
        ¡Toma nuestro examen de nivel de inglés hoy y abre numerosas
        oportunidades!
      </p>
      <Link className="w-100 btn btn-lg btn-outline-primary" href="/booking">
        Reserva una clase con nosotros
      </Link>
    </Layout>
  );
}

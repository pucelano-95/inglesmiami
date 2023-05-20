import Layout from "@/components/layout/layout";
import Image from "next/image";
import Calendly from "@/components/shared/calendly";

export default function Test() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal">
        ¿Quieres saber tu nivel de inglés?
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
        Puedes reservar una clase con nosotros aqui mismo!
      </p>
      <Calendly />
    </Layout>
  );
}

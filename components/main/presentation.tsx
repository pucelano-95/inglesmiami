import Image from "next/image";

export default function Presentation() {
  return (
    <div className="pricing-header p-5 mx-auto text-center" id="pricing">
      <h1
        className="magic-effect my-5 ml-0 text-center"
        data-text={process.env.NEXT_PUBLIC_TITLE}
      ></h1>
      <p className="fs-5 text-muted">
        Conectando personas, empoderando la comunicacion
      </p>
      <Image
        src="/classes.jpeg"
        alt="classes"
        width={400}
        height={300}
        className="float-left mx-3 px-3"
      />
      <Image
        src="/VIP.jpeg"
        alt="VIP"
        width={400}
        height={300}
        className="float-right mx-3 px-3"
      />
    </div>
  );
}

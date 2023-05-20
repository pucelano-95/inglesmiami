import Image from "next/image";

export default function Presentation() {
  return (
    <div className="p-5 mx-auto text-center">
      <Image
        src="/inglesmiamilogo.png"
        alt="inglesmiamilogo"
        width={400}
        height={400}
        className="img-fluid"
        style={{ width: "80%", height: "auto" }}
      />
      <p className="fs-5 text-dark">
        Conectando personas, empoderando la comunicacion
      </p>
    </div>
  );
}

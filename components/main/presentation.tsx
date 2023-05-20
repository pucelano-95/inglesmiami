import Image from "next/image";

export default function Presentation() {
  return (
    <div className="text-center bg-image background-image">
      <Image
        src="/inglesmiamilogo.png"
        alt="inglesmiamilogo"
        width={400}
        height={400}
        className="img-fluid"
        style={{ width: "40%", height: "auto" }}
      />
      <h1 className="fs-100 text-white">
        Conectando personas, empoderando la comunicacion
      </h1>
    </div>
  );
}

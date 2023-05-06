export default function Presentation() {
  return (
    <div className="p-5 mx-auto text-center">
      <h1
        className="magic-effect my-5 ml-0 text-center"
        data-text={process.env.NEXT_PUBLIC_TITLE}
      ></h1>
      <p className="fs-5 text-dark">
        Conectando personas, empoderando la comunicacion
      </p>
    </div>
  );
}

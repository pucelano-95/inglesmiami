import Image from "next/image";

export default function Pricing() {
  return (
    <div className="pricing-header p-5 mx-auto text-center" id="pricing">
      <Image
        src="/inglesmiamilogo.svg"
        alt="inglesmiamilogo"
        width={1000}
        height={500}
        className="img-fluid"
      />
      <p className="fs-5 text-muted">
        If you are not prepared to speak about “controversial” topics in a
        respectful manner, this may not be the program for you.
      </p>
    </div>
  );
}

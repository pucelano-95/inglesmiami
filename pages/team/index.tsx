import Image from "next/image";
import Layout from "@/components/layout/layout";

export default function Team() {
  return (
    <Layout>
      <div className="p-5 mx-auto text-center" id="team">
        <h1 className="display-4 fw-normal">Ralph Barrero</h1>
        <Image
          src="/ralph.jpeg"
          alt="ralph"
          width={500}
          height={250}
          className="img-fluid"
        />
        <p className="fs-5 text-muted">
          Over 20 years of wide-ranging experience as teacher, translator, and
          director at highly reputable Language institutions across China,
          U.S.A. and Mexico with a focus on Business English Coaching and online
          language learning. I am an enthusiastic, empathetic teacher and
          manager with a penchant for encouraging and motivating English
          language students to accomplish their desired learning objectives,
          thereby, improving their quality of life through the conduit of
          language. I am a team-player and able to get along well with people
          from all nationalities and diverse backgrounds.
        </p>
      </div>
    </Layout>
  );
}

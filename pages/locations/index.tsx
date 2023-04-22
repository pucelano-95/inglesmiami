import Layout from "@/components/layout/layout";

export default function Locations() {
  return (
    <Layout>
      <div className="pricing-header p-5 mx-auto text-center">
        <h1 className="display-4 fw-normal">Locations</h1>
        <p className="fs-5 text-muted">
          We are proud to be based in sunny Miami, Florida! Our headquarters are
          located in the heart of Miami, where our team works hard to provide
          the best possible English teaching experience to our students. Whether
          you're a local resident or visiting from out of town, we invite you to
          come and visit our beautiful city and take advantage of our English
          language classes. In addition to our main location in Miami, we also
          offer online classes for those who are unable to attend in person. Our
          online classes allow students from all over the world to learn English
          from the comfort of their own homes, while still receiving the same
          high-quality education that we are known for. Thank you for choosing
          {process.env.NEXT_PUBLIC_TITLE} as your English language learning
          partner. We look forward to serving you and helping you achieve your
          language learning goals.
        </p>
      </div>
    </Layout>
  );
}

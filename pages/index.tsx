import Layout from "@/components/layout/layout";
import Pricing from "@/components/main/pricing";
import Services from "@/components/main/services";

export default function Home() {
  return (
    <Layout>
      <Pricing />
      <Services />
    </Layout>
  );
}

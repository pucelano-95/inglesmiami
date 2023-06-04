import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Presentation from "@/components/main/presentation";

export default function Home() {
  return (
    <>
      <Header title={process.env.NEXT_PUBLIC_TITLE} className="delauney-font" />
      <Presentation />
      <Footer className="bg-darker delauney-font" />
    </>
  );
}

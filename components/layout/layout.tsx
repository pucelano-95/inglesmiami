import Footer from "./footer";
import Header from "./header";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
  return (
    <div className="container my-2 py-4">
      <Header title={process.env.NEXT_PUBLIC_TITLE} />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}

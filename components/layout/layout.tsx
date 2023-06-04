import Footer from "./footer";
import Header from "./header";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default function Layout({ children, className = "" }: Props) {
  return (
    <div className="bg-darker">
      <div className={`container mt-2 py-4 ${className}`}>
        <Header
          title={process.env.NEXT_PUBLIC_TITLE}
          className="delauney-font"
        />
        <main className="container">{children}</main>
      </div>
      <Footer className="delauney-font" />
    </div>
  );
}

import Link from "next/link";
import Layout from "@/components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout className="p-5 mx-auto text-center">
      <div className="container">
        <div className="row">
          <div className="col text-center py-5">
            <h1 className="display-1">
              4<span className="text-danger">0</span>4
            </h1>
            <p className="lead">¡Oye! Parece que esta página no existe.</p>
            <p>
              Puedes volver al <Link href="/">inicio</Link> o intentarlo de
              nuevo más tarde.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

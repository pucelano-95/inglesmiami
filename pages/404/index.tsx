import Link from "next/link";
import Layout from "@/components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout className="p-5 mx-auto text-center">
      <div className="container">
        <div className="row">
          <div className="col text-center py-5">
            <h1 className="display-1 delauney-font">
              4<span className="text-danger">0</span>4
            </h1>
            <h2 className="lead">¡Oye! Parece que esta página no existe.</h2>
            <h2>
              Puedes volver al <Link href="/">inicio</Link> o intentarlo de
              nuevo más tarde.
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

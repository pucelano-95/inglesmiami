import Layout from "@/components/layout/layout";
import Link from "next/link";

export default function Services() {
  return (
    <Layout>
      <div
        className="mt-5 pt-5 row row-cols-1 row-cols-md-3 mb-3 text-center"
        id="services"
      >
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Grupo</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $10<small className="text-muted fw-light">/hora</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Grupos de 5-8 personas</li>
              </ul>
              <Link
                className="w-100 btn btn-lg btn-outline-primary"
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Semi privado</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $20<small className="text-muted fw-light">/hora</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Grupos de 2-4 personas</li>
              </ul>
              <Link
                className="w-100 btn btn-lg btn-outline-primary"
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">VIP</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $30<small className="text-muted fw-light">/hora</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Clase privada en persona u online</li>
              </ul>
              <Link
                className="w-100 btn btn-lg btn-outline-primary"
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

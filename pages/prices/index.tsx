import Layout from "@/components/layout/layout";
import Link from "next/link";

export default function Prices() {
  return (
    <Layout>
      <h1 className="display-4 fw-normal text-center delauney-font">Precios</h1>
      <div className="mt-5 row row-cols-1 row-cols-md-2 mb-2 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Semi privado</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $20<small className="text-dark fw-light">/sesión</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Grupos de 2-4 personas</li>
              </ul>
              <Link
                className="w-100 btn btn-lg btn-outline-primary"
                href="/booking"
              >
                Reserva una clase con nosotros
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
                $50<small className="text-dark fw-light">/sesión</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Clase privada en persona u online</li>
              </ul>
              <Link
                className="w-100 btn btn-lg btn-outline-primary"
                href="/contact"
              >
                Si estás interesado en un toque más personal, contáctanos!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

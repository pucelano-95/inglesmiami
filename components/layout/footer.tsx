import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">
            {"© " +
              new Date().getFullYear() +
              " " +
              process.env.NEXT_PUBLIC_TITLE}
          </small>
        </div>
        <div className="col-6 col-md">
          <h5>Acerca</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                href="/team"
              >
                Equipo
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                href="/locations"
              >
                Localización
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                href="/privacy"
              >
                Privacidad
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="link-secondary text-decoration-none"
                href="/terms"
              >
                Términos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

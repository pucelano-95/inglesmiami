import Link from "next/link";

type Props = {
  title: string | undefined;
  className?: string;
};

export default function Header({ title, className = "" }: Props) {
  return (
    <header
      className={`d-flex flex-wrap justify-content-center py-3 mb-4 ${className}`}
    >
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-turquoise mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" href="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/about">
                  Acerca de nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn dropdown-toggle text-dark"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  Servicios
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link
                    className="dropdown-item nav-link text-dark"
                    href="/services/test"
                  >
                    Prueba de nivel
                  </Link>
                  <Link
                    className="dropdown-item nav-link text-dark"
                    href="/services/classes"
                  >
                    Clases
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/prices">
                  Precios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/contact">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/booking">
                  Reserva
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

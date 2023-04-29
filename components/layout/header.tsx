import Link from "next/link";

type Props = {
  title: string | undefined;
};

export default function Header({ title }: Props) {
  return (
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
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/services">
                Precios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/contact">
                Contacto
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-dark" href="/login">
                Log in
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

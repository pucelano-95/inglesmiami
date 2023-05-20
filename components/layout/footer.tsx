import Link from "next/link";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-4 border-top">
      <p className="col-md-4 mb-0 text-dark">
        {"© " + new Date().getFullYear() + " " + process.env.NEXT_PUBLIC_TITLE}
      </p>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/locations">
            Localización
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/privacy">
            Privacidad
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/terms">
            Términos
          </Link>
        </li>
      </ul>
    </footer>
  );
}

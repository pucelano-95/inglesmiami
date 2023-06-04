import Link from "next/link";

type Props = {
  className?: string;
};

export default function Footer({ className = "" }: Props) {
  return (
    <footer
      className={`footer px-2 d-flex justify-content-between align-items-center ${className}`}
    >
      <p className="col-md-4 text-dark flex-grow-1">
        {"© " + new Date().getFullYear() + " " + process.env.NEXT_PUBLIC_TITLE}
      </p>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/locations">
            Localizacion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/privacy">
            Privacidad
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-dark" href="/terms">
            Terminos
          </Link>
        </li>
      </ul>
    </footer>
  );
}

import { Link, useLocation } from "react-router";
import links from "../../mocks/links.json";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg px-xl-5 py-4 ${styles.navbar}`}>
      <div className="container-fluid">
        <h1>
          <img src="/images/logo-posit.svg" alt="logo positivus" />
        </h1>
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
          <ul className="navbar-nav ms-auto me-5 me-md-2 mb-2 mb-lg-0 d-flex gap-4 gap-md-2 align-items-center">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.id} className="nav-item align-self-start px-2">
                  <Link
                    to={link.to}
                    className={`${
                      isActive ? "nav-link active px-2" : "nav-link px-2"
                    } text-decoration-none text-dark ${styles.link}`}
                    aria-current="page"
                    href="#"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <Link className="btn btn-outline-dark p-3">Request a quote</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

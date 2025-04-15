import styles from "./Rodape.module.css";

import { Link } from "react-router-dom";
import links from "../../mocks/links.json";
import infos from "../../mocks/infos.json";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Rodape() {
  return (
    <section
      className={`text-center py-5 mt-5 px-3 ${styles.container}`}
      style={{ backgroundColor: "var(--chumbo)" }}
    >
      <div className="border-bottom pb-4 mb-4 mx-3">
        <div className="d-lg-flex align-items-center justify-content-lg-around">
          <img src="/images/positivus-var2.svg" alt="logo positivus" />
          <nav className="d-flex flex-column pt-4 flex-lg-row p-lg-0 gap-lg-3">
            {links.map((link) => (
              <Link
                className="text-decoration-none text-white fs-5 fs-lg-3"
                to={link.link}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="d-flex align-items-center d-none d-lg-block">
            <a
              className="text-black bg-white p-2 ms-3 rounded-5"
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              className="text-black bg-white p-2 ms-3 rounded-5"
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              className="text-black bg-white p-2 ms-3 rounded-5"
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </nav>
        </div>
        <div className="row px-lg-5 pt-lg-4 justify-content-between">
          <div className="text-white py-4 text-lg-start col-lg-4">
            <h3
              className="d-inline rounded-3 px-2"
              style={{
                backgroundColor: "var(--verde)",
                color: "var(--chumbo)",
              }}
            >
              Contact Us
            </h3>
            <div className="pt-3">
              {infos.map((info) => (
                <h5 key={info.id}>{info.texto}</h5>
              ))}
            </div>
          </div>
          <form
            className="px-4 py-5 rounded-5 mb-4 col-lg-7"
            style={{ backgroundColor: "var(--chumbo-claro)" }}
          >
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                style={{ backgroundColor: "var(--chumbo-claro)" }}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label className="text-white" for="floatingInput">
                Email address
              </label>
            </div>
            <button className={`btn border-0 p-3 w-100 fs-5 ${styles.botao}`}>
              Subscribe to news
            </button>
          </form>
        </div>
        <nav className="d-flex align-items-center justify-content-center gap-4 d-lg-none">
          <a
            className="text-black bg-white p-2 rounded-5"
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            className="text-black bg-white p-2 rounded-5"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            className="text-black bg-white p-2 rounded-5"
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={25} />
          </a>
        </nav>
      </div>
      <div className="text-white d-lg-flex gap-2 ps-5">
        <p className="m-0">
          <i class="bi bi-c-circle" /> 2023 Positivus. All Rights Reserved.
        </p>
        <p className="m-0">Privacy Policy</p>
      </div>
    </section>
  );
}

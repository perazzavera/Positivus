import { Link } from "react-router";
import infos from "../../../../mocks/cases.json";
import styles from "./Case.module.css";

export default function Case() {
  return (
    <section className="pt-5 mt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start gap-3">
        <h2
          className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
          style={{ backgroundColor: "var(--verde)" }}
        >
          Case Studies
        </h2>
        <h4
          className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </h4>
      </div>
      {/* Carrossel do Bootstrap */}
      <div
        id="carouselExample"
        className="carousel slide d-lg-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner p-4">
          {infos.map((info, index) => (
            <div
              key={info.id}
              className={`carousel-item rounded-5 ${
                index === 0 ? "active" : ""
              }`}
              style={{
                backgroundColor: "var(--chumbo)",
                height: "280px",
              }}
            >
              <div className="px-3 py-4 mx-3 text-white d-flex flex-column justify-content-between h-100">
                <h4>{info.texto}</h4>
                <Link
                  className="text-decoration-none d-flex align-items-center gap-3 pt-4"
                  style={{ color: "var(--verde)" }}
                >
                  <p className="m-0 fs-5 fw-medium">Learn More</p>
                  <img
                    className={styles.imagem}
                    src="/images/flecha-verde.svg"
                    alt="icone flecha"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Controles do carrossel */}
        <button
          className="carousel-control-prev d-none"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        className="d-none d-lg-flex p-5 text-white gap-5 rounded-5 mt-4"
        style={{ backgroundColor: "var(--chumbo)" }}
      >
        {infos.map((info, index) => (
          <div
            className="d-flex flex-column justify-content-between"
            key={info.id}
            style={{
              // Adicionando uma borda lateral à div do meio
              borderLeft:
                index === Math.floor(infos.length / 2)
                  ? "3px solid var(--branco)"
                  : "none",
              borderRight:
                index === Math.floor(infos.length / 2)
                  ? "3px solid var(--branco)"
                  : "none",
              paddingLeft:
                index === Math.floor(infos.length / 2) ? "50px" : "0",
              paddingRight:
                index === Math.floor(infos.length / 2) ? "50px" : "0",
            }}
          >
            <h4>{info.texto}</h4>
            <Link
              to="/case-studies"
              className="text-decoration-none d-flex align-items-center gap-3 pt-4"
              style={{ color: "var(--verde)" }}
            >
              <p className="m-0 fs-5 fw-medium">Learn More</p>
              <img
                className={styles.imagem}
                src="/images/flecha-verde.svg"
                alt="icone flecha"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

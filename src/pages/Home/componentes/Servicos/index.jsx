import { Link } from "react-router";
import servicos from "../../../../mocks/servicos.json";
import styles from "./Servicos.module.css";

export default function Servicos() {
  return (
    <section className="pt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start gap-3">
        <h2
          className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
          style={{ backgroundColor: "var(--verde)" }}
        >
          Services
        </h2>
        <h4
          className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
        >
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </h4>
      </div>
      <div className="pt-4">
        <div className="row g-4 gx-4">
          {servicos.map((servico, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div
                className={`${styles.borda} py-5 px-4 rounded-5 h-100 px-lg-5 d-lg-flex flex-column justify-content-between`}
                style={{
                  backgroundColor:
                    servico.corDeFundo === "cinza"
                      ? "var(--cinza-claro)"
                      : servico.corDeFundo === "verde"
                      ? "var(--verde)"
                      : servico.corDeFundo === "chumbo"
                      ? "var(--chumbo)"
                      : "",
                }}
              >
                <h3 className="d-flex flex-column align-items-start">
                  <span
                    className="d-inline rounded-3 px-2"
                    style={{
                      backgroundColor:
                        servico.corSpan === "verde"
                          ? "var(--verde)"
                          : servico.corSpan === "branco"
                          ? "var(--branco)"
                          : "",
                    }}
                  >
                    {servico.titulo.span1}
                  </span>
                  <span
                    className="d-inline rounded-3 px-2"
                    style={{
                      backgroundColor:
                        servico.corSpan === "verde"
                          ? "var(--verde)"
                          : servico.corSpan === "branco"
                          ? "var(--branco)"
                          : "",
                    }}
                  >
                    {servico.titulo.span2}
                  </span>
                </h3>
                <div className="d-flex justify-content-between pt-3">
                  <Link className={styles.link} to={servico.link}>
                    <img
                      className={styles.imagem}
                      src={servico.imagemFlecha}
                      alt="icone flecha"
                    />
                    <p
                      className="m-0 d-none d-xl-block"
                      style={{
                        color: `${
                          servico.corLink === "branco" ? "var(--branco)" : ""
                        }`,
                      }}
                    >
                      Learn More
                    </p>
                  </Link>
                  <img src={servico.imagem} alt="illustration" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="p-4 mt-5 rounded-5 border border-secondary row position-relative mx-1 p-lg-5"
          style={{ backgroundColor: "var(--cinza-claro)" }}
        >
          <div className="col-lg-6">
            <h3 className="text-dark">Let’s make things happen</h3>
            <p className="py-3">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Link to="/contact" className="btn btn-dark p-3 w-100 d-lg-inline">
              Get your free proposal
            </Link>
          </div>
          <div className="d-none d-lg-block">
            <img
              className={styles.imagemContato}
              src="/images/img-service.svg"
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

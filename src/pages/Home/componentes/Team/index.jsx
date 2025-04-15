import { Link } from "react-router-dom";
import pessoas from "../../../../mocks/team.json";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className="pt-5 mt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start gap-3 pb-lg-4">
        <h2
          className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
          style={{ backgroundColor: "var(--verde)" }}
        >
          Team
        </h2>
        <h4
          className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
        >
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </h4>
      </div>

      <div className="m-0 p-0">
        <div className="pb-4">
          <div className="row justify-content-center mx-auto gap-4 w-100">
            {pessoas.map((pessoa) => (
              <div
                key={pessoa.id}
                className={`col-12 col-lg-5 p-4 rounded-5 ${styles.card}`}
                style={{
                  border: "1px solid var(--chumbo)",
                  borderBottom: "7px solid var(--chumbo)",
                }}
              >
                <div className="d-flex align-items-end position-relative border-bottom border-secondary pb-4 mb-4 gap-4">
                  <img src={pessoa.imagem} alt={pessoa.nome} />
                  <span>
                    <h4 className="m-0">{pessoa.nome}</h4>
                    <p className="m-0">{pessoa.cargo}</p>
                  </span>
                  <a
                    className="position-absolute top-0 end-0"
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pessoa.linkedin} alt="icone linkedin" />
                  </a>
                </div>
                <div>
                  <p>{pessoa.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-lg-end">
        <Link
          to="/team"
          className={`btn btn-dark text-center p-3 w-100 text-center ${styles.link}`}
        >
          See All Team
        </Link>
      </div>
    </section>
  );
}

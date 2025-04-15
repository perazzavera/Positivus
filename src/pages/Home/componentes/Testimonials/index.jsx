import React from "react";
import depoimentos from "../../../../mocks/depoimentos.json";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="pt-5 mt-5">
      <div className="">
        <div className="d-flex flex-wrap align-items-center mb-2">
          <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start pb-lg-4  gap-3">
            <h2
              className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
              style={{ backgroundColor: "var(--verde)" }}
            >
              Testimonials
            </h2>
            <h4
              className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
            >
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </h4>
          </div>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide bg-dark text-white rounded-5 py-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner px-4 position-relative">
            {depoimentos.map((depoimento, i) => (
              <div
                key={depoimento.id}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className={`p-2 ${styles.card}`}>
                  <h6
                    style={{ border: "1px solid var(--verde)" }}
                    className="mb-4 p-4 rounded-5 position-relative"
                  >
                    {depoimento.texto}
                    <img
                      className={styles.seta}
                      src="/images/seta-baloon.png"
                      alt="seta"
                    />
                  </h6>
                  <div className="ps-5 pt-2 mx-lg-5">
                    <h5 className="m-0" style={{ color: "var(--verde)" }}>
                      {depoimento.autor}
                    </h5>
                    <p>{depoimento.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <img
              className="position-absolute"
              src="/images/Arrow left.svg"
              alt="Anterior"
              style={{ width: "26px", left: "50%", bottom: "4.5%" }}
            />
            <span className="visually-hidden">Anterior</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <img
              className="position-absolute"
              src="/images/Arrow right.svg"
              alt="Próximo"
              style={{ width: "26px", right: "50%", bottom: "4.5%" }}
            />
            <span className="visually-hidden">Proximo</span>
          </button>

          <div className="carousel-indicators mt-4 gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

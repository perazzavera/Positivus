import { useState } from "react";
import works from "../../../../mocks/works.json";
import styles from "./Working.module.css";

export default function Working() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pt-5 mt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start gap-3">
        <h2
          className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
          style={{ backgroundColor: "var(--verde)" }}
        >
          Our Working
        </h2>
        <h2
          className={` d-inline rounded-3 px-2 d-lg-flex align-items-center ${styles.titulo}`}
          style={{ backgroundColor: "var(--verde)" }}
        >
          Process
        </h2>
        <h4
          className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </h4>
      </div>

      <div
        className="accordion d-flex flex-column gap-2 pt-4 w-100"
        id="accordionExample"
      >
        {works.map((work) => (
          <div
            key={work.id}
            className={`accordion-item ${styles.acordion}`}
            style={{
              border: "1px solid var(--chumbo)",
              borderRadius: "40px",
              borderBottom: "7px solid var(--chumbo)",
            }}
          >
            <h2 className="accordion-header rounded-5">
              <button
                className={`accordion-button ${
                  activeItem === work.id ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleItem(work.id)}
              >
                {work.titulo}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                activeItem === work.id ? "show" : ""
              }`}
            >
              <div className="accordion-body m-lg-auto d-lg-flex align-items-center">
                <h5 className="m-0">{work.texto}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

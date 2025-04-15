import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section className="pt-5 mt-5">
      <div className="d-flex flex-column flex-lg-row align-items-center align-self-lg-start gap-3 pb-lg-4">
        <h2
          className="d-inline rounded-3 px-2 d-lg-flex align-items-center"
          style={{ backgroundColor: "var(--verde)" }}
        >
          Contact Us
        </h2>
        <h4
          className={`${styles.subtitulo} d-lg-block px-1 text-center text-lg-start`}
        >
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </h4>
      </div>
      <div className="d-flex justify-content-center">
        <form
          className="px-4 py-5 rounded-5 row position-relative px-lg-5 w-100"
          style={{ backgroundColor: "var(--cinza-claro)" }}
        >
          <div className="col-lg-8 col-12">
            <div className="d-flex justify-content-between justify-content-lg-start gap-4">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault1"
                  checked
                />
                <label className="form-check-label ps-2" for="radioDefault1">
                  Say Hi
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault1"
                />
                <label className="form-check-label ps-2" for="radioDefault1">
                  Get a Quote
                </label>
              </div>
            </div>

            <div className="pt-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "150px" }}
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4 ">
            <img
              className="position-absolute"
              src="/images/imagem-contato.svg"
              alt="illustration"
              style={{
                height: "450px",
                transform: "translate(50%, 50%)",
                top: "-35%",
                left: "65%",
                width: "400px",
              }}
            />
          </div>
          <div>
            <button className="btn btn-dark p-3 px-5 mt-4 d-none d-lg-block">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="px-4 w-100">
        <button className="btn btn-dark p-3 w-100 mt-4 d-lg-none">
          Send Message
        </button>
      </div>
    </section>
  );
}

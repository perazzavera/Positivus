import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className="">
      {/* Layout mobile */}
      <div className="row">
        <div className="col-12 col-lg-5 d-lg-flex flex-lg-column my-lg-auto">
          <h1 className={`${styles.titulo} text-black pb-4 pb-lg-2`}>
            Navigating the digital landscape for success
          </h1>
          <h4 className="text-center py-4 py-lg-3 d-none d-lg-block text-lg-start">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </h4>
          <Link
            to="/contact"
            className="btn btn-dark p-3 w-100 d-none d-lg-block"
            style={{ maxWidth: "max-content" }}
          >
            Book a consultation
          </Link>
        </div>
        <div className="col-12 col-lg-7">
          <img
            className="w-100"
            src="/images/banner-inicio.svg"
            alt="illustration"
          />
        </div>
        <div className="col-12 d-lg-none">
          <h4 className="text-center py-4">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </h4>
          <Link to="/contact" className="btn btn-dark p-3 w-100">
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

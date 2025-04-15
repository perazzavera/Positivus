import marcas from "../../../../mocks/marcas.json";
import styles from "./Marcas.module.css";

export default function Marcas() {
  return (
    <>
      <div className={` overflow-hidden py-4 ${styles.slider1}`}>
        <ul className={`${styles.track1}  d-flex m-0 p-0 list-unstyled`}>
          {marcas.map((marca) => (
            <li key={marca.id} className={`${styles.item1} mx-4 flex-shrink-0`}>
              <img src={marca.src} alt={marca.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className={` overflow-hidden py-4 d-lg-none ${styles.slider2}`}>
        <ul className={`${styles.track2}  d-flex m-0 p-0 list-unstyled`}>
          {marcas.map((marca) => (
            <li key={marca.id} className={`${styles.item2} mx-4 flex-shrink-0`}>
              <img src={marca.src} alt={marca.alt} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

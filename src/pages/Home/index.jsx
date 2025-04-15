import Case from "./componentes/Case";
import Contato from "./componentes/Contato";
import Hero from "./componentes/Hero";
import Marcas from "./componentes/Marcas";
import Servicos from "./componentes/Servicos";
import Team from "./componentes/Team";
import Testimonials from "./componentes/Testimonials";
import Working from "./componentes/Working";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <Marcas />
        <Servicos />
        <Case />
        <Working />
        <Team />
        <Testimonials />
        <Contato />
      </main>
    </>
  );
}

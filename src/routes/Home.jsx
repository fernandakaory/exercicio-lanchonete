import HamburgerDaCasa from "../img/hamburgerDaCasa.jpg";
import "./estilos/home.css";

export default function Home() {
  return (
    <main>
      <h2 id="tituloHome">MAIS VENDIDO</h2>
      <section>
        <div id="ibm">
          <img src={HamburgerDaCasa} alt="Imagem hamburger" width="100%" />
        </div>

        <div id="content">
          <h3>Hamburger da Casa</h3>
          <p>
            Hamburger de carne (240 gramas), cebola roxa, queijo cheddar,
            alface, tomate,maionese e molho especial da casa.
          </p>
          <p id="preco">R$ 24,90</p>
        </div>
      </section>
    </main>
  );
}

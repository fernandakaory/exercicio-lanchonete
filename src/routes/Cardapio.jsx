import "./estilos/cardapio.css";
import hamburger1 from '../img/hamburger1.jpeg'
import hamburger2 from '../img/hamburger2.jpeg'
import hamburger3 from '../img/hamburger3.jpeg'
import hamburger4 from '../img/hamburger4.jpeg'
import hamburger5 from '../img/hamburger5.jpeg'

export default function Cardapio() {
  return (
    <main>
      <h3 id="tituloCardapio">Cardápio</h3>

      <div>
        <table>
          <thead>
            <tr>
              <th>IMAGEM</th>
              <th>NOME</th>
              <th>INGREDIENTES</th>
              <th>PREÇO</th>
            </tr>
          </thead>
          <tbody>
            <tr className="item-1">
              <td><img src={hamburger1} alt="Hamburger 1" /></td>
              <td>Nome do hamburger</td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur recusandae quisquam expedita, porro vitae temporibus, aperiam minus fugit in unde neque quasi impedit nemo quos.</td>
              <td>R$ 24,90</td>
            </tr>

            <tr className="item-2">
            <td><img src={hamburger2} alt="Hamburger 2" /></td>
              <td>Nome do hamburger</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident animi aperiam consequatur, ullam, hic reprehenderit est natus molestiae sint numquam blanditiis tempora error alias?</td>
              <td>R$ 24,90</td>
            </tr>

            <tr className="item-3">
            <td><img src={hamburger3} alt="Hamburger 3" /></td>
              <td>Nome do hamburger</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos saepe accusamus architecto mollitia beatae possimus voluptatum excepturi aut molestiae, quidem magni odit ab voluptates!</td>
              <td>R$ 24,90</td>
            </tr>

            <tr className="item-4">
            <td><img src={hamburger4} alt="Hamburger 4" /></td>
              <td>Nome do hamburger</td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sint quibusdam eos officiis. Tempora quos ea laudantium voluptatem. Blanditiis veniam autem molestiae explicabo libero maxime.</td>
              <td>R$ 24,90</td>
            </tr>

            <tr className="item-5">
            <td><img src={hamburger5} alt="Hamburger 5" /></td>
              <td>Nome do hamburger</td>
              <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eaque quia ducimus dolore, quis odit recusandae in, officia magnam quidem aperiam dolorum minus! Cum, et iure esse est omnis cupiditate!</td>
              <td>R$ 24,90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}> Produtos sujeitos à disponibilidade </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}

import { Link } from "react-router-dom";
import { StyledCabecalho } from "./styled";
import BurgerLogo from "../img/hamburger.png";

export default function Cabecalho() {
  return (
    <StyledCabecalho>
        <nav>
          <div>
            <img src={BurgerLogo} alt="Logo de hamburger" />
            <h1>Lanchess</h1>
          </div>

          <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/cardapio"><li>CARDÁPIO</li></Link> 
            <a href="#"><li>LOJAS</li></a>
            <a href="#"><li>ATENDIMENTO</li></a>
          </ul>
        </nav>
        <p>Comprar aqui é sempre uma escolha inteligênte!</p>
    </StyledCabecalho>
  );
}

import { StyledRodape } from "./styled";
import facebookLogo from "../img/facebook.png"
import instagramLogo from "../img/instagram.png"
import twitterLogo from "../img/twitter.png"

export default function Rodape() {
  return (
      <StyledRodape>
        <div className="rodape__informacoes">
          <p>Av. Paulista, 1106 - 7º andar - São Paulo - SP</p>
          <p>(11)99999-9999 | (11)4444-4444</p>
        </div>

        <div className="rodape__links">
            <a href="#"><img src={instagramLogo} alt="Logo do Instagram" /></a>
            <a href="#"><img src={facebookLogo} alt="Logo do Facebook" /></a>
            <a href="#"><img src={twitterLogo} alt="Logo do Twitter" /></a>
        </div>
      </StyledRodape>
  );
}

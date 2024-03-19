import ImgConteudo from "../../assets/hamburguerCont.png";
import ImgMini from "../../assets/miniHam.png"
import Casquinha from "../../assets/casquinha.png"
import batata from "../../assets/batata.png"
import * as S from './conteudo_style';

export default function Conteudo() {
  return (
    <main>
      <S.ConteudoContainer>
        <div className="conteudo-container">
          <div className="img-container">
            <img src={ImgConteudo} alt="" />
          </div>
          <div className="texto-container">
            <h1>BATEU AQUELA <br></br> #FOME DE MÉQUI?</h1>
          </div>
        </div>
        <ul className="img-itens">
          <li><img src={ImgMini} alt="" /></li>
          <li><img src={batata} alt="" /></li>
          <li><img src={Casquinha} alt="" /></li>
        </ul>
      </S.ConteudoContainer>

    <S.ConteudoSection>
      <section>

      </section>
      </S.ConteudoSection>
    </main>
  );
}

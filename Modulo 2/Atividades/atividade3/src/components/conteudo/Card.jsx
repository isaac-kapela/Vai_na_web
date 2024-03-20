
import PropTypes from 'prop-types';
import * as S from "./conteudo_style";

function Card({ imagem, texto }) {
  return (
    <S.Card>
      <div className='corBranca'>
      <img src={imagem} alt="img" />
      
      <h2>{texto}</h2>
      <button>Clique aqui</button>
      </div>
    </S.Card>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};

export default Card;

const Elemento_do_tabuleiro = document.getElementById('quadro');
const Jogador1 = { dados: Array(9).fill(0) };
const Jogador2 = { dados: Array(9).fill(0) };
let Jogador_atual = Jogador1;

function renderizar() {
    Elemento_do_tabuleiro.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const celula = document.createElement('div');
    celula.classList.add('celula');
    celula.textContent = Jogador_atual.dados[i];
    celula.onclick = () => colocarDados(i);
    Elemento_do_tabuleiro.appendChild(celula);
  }
}
//valor_dos_dados

function lancar_dados() {
  const valor_dos_dados = Math.floor(Math.random() * 6) + 1;
  Jogador_atual.dados = Array(9).fill(valor_dos_dados);
  renderizar();
}

function colocarDados(column) {
    Jogador_atual.dados[column]++;

  const adversario = Jogador_atual === Jogador1 ? Jogador2 : Jogador1;
  adversario.dados = adversario.dados.map((value, index) => (index % 3 === column % 3 ? 0 : value));

  renderizar();

  if (Jogador_atual.dados.every(value => value > 0)) {
    alert(`Jogador ${Jogador_atual === Jogador1 ? 1 : 2} ganhou!`);
    reinciar();
  } else {
    Jogador_atual = Jogador_atual === Jogador1 ? Jogador2 : Jogador1;
  }
}

function reinciar() {
    Jogador1.dados = Array(9).fill(0);
    Jogador2.dados = Array(9).fill(0);
    Jogador_atual = Jogador1;
    renderizar();
}

renderizar();

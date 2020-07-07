class Cenario {
  constructor(imagens, velocidade) {
    this.imagens = imagens;
    this.velocidade = velocidade;
    this.indexImagemAtual = 0;
    this.indexImagemFutura = 0;
    this.x1 = 0;
    this.x2 = width;
    this.trocaCenario = false;
    this.trocaCenarioFuturo = false;
  }

  exibe() {
    image(this.imagens[this.indexImagemAtual], this.x1, 0, width, height);
    image(this.imagens[this.indexImagemFutura], this.x2, 0, width, height);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    if (pontuacao.pontos > 0 && pontuacao.pontos.toFixed(2) % fita.configuracoes.pontuacaoNecessariaTrocaCenario === 0) {
      this.trocaCenario = true;
    }

    if (this.x1 < -width) {
      if (this.trocaCenario) {
        if (this.indexImagemAtual < this.imagens.length - 1) {
          this.indexImagemAtual += 1;
        } else {
          this.indexImagemAtual = 0;
        }        
        this.trocaCenarioFuturo = true;
        this.trocaCenario = false;
      }
      this.x1 = width;
    }

    if (this.x2 < -width) {
        if (this.trocaCenarioFuturo) {
          if (this.indexImagemFutura < this.imagens.length - 1) {
            this.indexImagemFutura += 1;
          } else {
            this.indexImagemFutura = 0;
          }
          this.trocaCenarioFuturo = false;
        }
      this.x2 = width;
    }
  }
}

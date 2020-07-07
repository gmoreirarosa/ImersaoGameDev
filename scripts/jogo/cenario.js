class Cenario {
  constructor(imagens, velocidade) {
    this.imagens = imagens;
    this.velocidade = velocidade;
    this.indexImagemAtual = 0;
    this.x1 = 0;
    this.x2 = width;
    this.aplicarEfeitoTrocaCenario = false;
    this.deveTrocarCenario = false;
    this.contadorEfeitoTrocaCenario = 0;
  }

  exibe() {
    image(this.imagens[this.indexImagemAtual], this.x1, 0, width, height);
    image(this.imagens[this.indexImagemAtual], this.x2, 0, width, height);

    if (this.aplicarEfeitoTrocaCenario) {
      this.aplicarEfeitoTransacaoCenario();
    }
  }

  aplicarEfeitoTransacaoCenario() {    
    this.aplicarEfeitoTrocaCenario = true;
    if (frameCount % 2 === 0) {
      this.imagens[this.indexImagemAtual].filter(INVERT);
      this.contadorEfeitoTrocaCenario += 1;
    }
  }

  encerrarEfeitoTransacaoCenario() {
    this.aplicarEfeitoTrocaCenario = false;
    if (this.contadorEfeitoTrocaCenario % 2 !== 0) {
      this.imagens[this.indexImagemAtual].filter(INVERT);
    }
    this.contadorEfeitoTrocaCenario = 0;
  }

  proximoNivel() {
    this.aplicarEfeitoTransacaoCenario();
    setTimeout(() => {
      this.deveTrocarCenario = false;
      this.encerrarEfeitoTransacaoCenario();
      if (this.indexImagemAtual < this.imagens.length - 1) {
        this.indexImagemAtual += 1;
      } else {
        this.indexImagemAtual = 0;
      }
    }, 400);
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;    
    
    if (pontuacao.pontos > 0 && pontuacao.pontos.toFixed(2) % fita.configuracoes.pontuacaoNecessariaTrocaCenario === 0) {
      this.deveTrocarCenario = true;
    }

    if (this.x1 < -width) {
      if (this.deveTrocarCenario) {
        this.proximoNivel();
      }
      this.x1 = width;
    }

    if (this.x2 < -width) {
      if (this.deveTrocarCenario) {
        this.proximoNivel();
      }
      this.x2 = width;
    }
  }
}

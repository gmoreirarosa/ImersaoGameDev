class Personagem extends Animacao {
  constructor(
    imagem,
    posicaoX,
    posicaoY,
    larguraPersonagem,
    alturaPersonagem,
    alturaSprite,
    larguraSprite,
    qtdColunasSpritesPersonagem,
    qtdLinhasSpritesPersonagem
  ) {
    super(
      imagem,
      posicaoX,
      posicaoY,
      larguraPersonagem,
      alturaPersonagem,
      alturaSprite,
      larguraSprite,
      qtdColunasSpritesPersonagem,
      qtdLinhasSpritesPersonagem
    );
    this.posicaoYInicial = this.posicaoY;
    this.velocidadeX = width / 100;
    this.velocidadePulo = 0;
    this.alturaPulo = 50;
    this.gravidade = 6;
    this.pulos = 0;
    this.qtdMaxPulos = 2;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < this.qtdMaxPulos) {
      this.velocidadePulo = -this.alturaPulo;
      somPulo.play();
      this.pulos++;
    }
  }

  andaPraFrente() {
    if (this.posicaoX < width - this.larguraPersonagem) {
      this.posicaoX += this.velocidadeX;
    }
  }

  andaPraTras() {
    if (this.posicaoX > 0) {
      this.posicaoX -= this.velocidadeX;
    }
  }

  aplicaGravidade() {
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if (this.posicaoY > this.posicaoYInicial) {
      this.posicaoY = this.posicaoYInicial;
      this.pulos = 0;
    }
  }

  ativarInvencibilidade() {
    this.invencivel = true;
    this.piscar();
    setTimeout(() => {
      this.invencivel = false;
      this.pararPiscar();
    }, 2000);
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }

    const precisao = 0.7;
    const colidiu = collideRectCircle(
      this.posicaoX,
      this.posicaoY,
      this.larguraPersonagem,
      this.alturaPersonagem,
      inimigo.posicaoX + inimigo.larguraPersonagem / 2 + 15,
      inimigo.posicaoY + inimigo.alturaPersonagem / 2,
      inimigo.larguraPersonagem * precisao
    );

    return colidiu;
  }
}

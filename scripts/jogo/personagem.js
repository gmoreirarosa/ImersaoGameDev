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

    setTimeout(() => {
      this.invencivel = false;
    }, 2000);
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }

    const precisao = 0.7;
    const colidiu = collideRectRect(
      this.posicaoX,
      this.posicaoY,
      this.larguraPersonagem * precisao,
      this.alturaPersonagem * precisao,
      inimigo.posicaoX,
      inimigo.posicaoY,
      inimigo.larguraPersonagem * precisao,
      inimigo.alturaPersonagem * precisao
    );

    return colidiu;
  }
}

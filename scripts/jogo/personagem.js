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
    this.alturaPulo = 30;
    this.gravidade = 3;
  }

  pula() {
    this.velocidadePulo = -this.alturaPulo;
  }

  aplicaGravidade() {
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if (this.posicaoY > this.posicaoYInicial) {
      this.posicaoY = this.posicaoYInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7;
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

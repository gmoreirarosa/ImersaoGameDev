class Inimigo extends Animacao {
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

    this.velocidade = 5;
  }

  move() {
    this.posicaoX = this.posicaoX - this.velocidade;
  }

  reaparece() {
    this.posicaoX = width;
  }

  setarVelocidade(velocidade) {
    this.velocidade = velocidade;
  }

  visivel() {
    return this.posicaoX < -this.larguraPersonagem;
  }
}

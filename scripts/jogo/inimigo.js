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
  }

  move(velocidade) {
    this.posicaoX -= velocidade;

    if (this.posicaoX < -this.larguraPersonagem) {
      this.posicaoX = width;
    }
  }
}

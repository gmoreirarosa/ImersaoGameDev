class Animacao {
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
    this.imagem = imagem;
    this.posicaoX= posicaoX;
    this.posicaoY = posicaoY;
    this.larguraPersonagem = larguraPersonagem;
    this.alturaPersonagem = alturaPersonagem;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.qtdColunasSpritesPersonagem = qtdColunasSpritesPersonagem;
    this.qtdLinhasSpritesPersonagem = qtdLinhasSpritesPersonagem;
    this.colunaAtualSprite = 0;
    this.linhaAtualSprite = 0;
  }

  exibe() {
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.larguraPersonagem,
      this.alturaPersonagem,
      this.colunaAtualSprite * this.alturaSprite,
      this.linhaAtualSprite * this.larguraSprite,
      this.alturaSprite,
      this.larguraSprite
    );
    
    this.anima();
  }

  anima() {
    this.colunaAtualSprite += 1;

    if (this.colunaAtualSprite >= this.qtdColunasSpritesPersonagem) {
      this.colunaAtualSprite = 0;
      this.linhaAtualSprite += 1;
    }

    if (this.linhaAtualSprite >= this.qtdLinhasSpritesPersonagem) {
        this.linhaAtualSprite = 0;
    }
  }

}

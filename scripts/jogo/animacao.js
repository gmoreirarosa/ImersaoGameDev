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
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
    this.larguraPersonagem = larguraPersonagem;
    this.alturaPersonagem = alturaPersonagem;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.qtdColunasSpritesPersonagem = qtdColunasSpritesPersonagem;
    this.qtdLinhasSpritesPersonagem = qtdLinhasSpritesPersonagem;
    this.colunaAtualSprite = 0;
    this.linhaAtualSprite = 0;
    this.estaPiscando = false;
    this.contadorPiscagem = 0;
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

  piscar() {
    this.estaPiscando = true;
    if (frameCount % 2 === 0) {
      this.imagem.filter(INVERT);
      this.contadorPiscagem += 1;
    }
  }

  pararPiscar() {
    this.estaPiscando = false;
    if (this.contadorPiscagem % 2 !== 0) {
      this.imagem.filter(INVERT);
      this.contadorPiscagem = 0;
    }
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

    if (this.estaPiscando) {
      this.piscar();
    }
  }
}

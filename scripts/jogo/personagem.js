class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.larguraPersonagem = 110;
    this.alturaPersonagem = 135;
    this.alturaImagemPersonagem = 220;
    this.larguraImagemPersonagem = 270;
    this.numAlturaLarguraFramesPersonagem = 4;
    this.alturaFrameAtual = 0;
    this.larguraFrameAtual = 0;
  }

  exibe() {
    image(
      this.imagem,
      0,
      height - this.alturaPersonagem,
      this.larguraPersonagem,
      this.alturaPersonagem,
      this.alturaFrameAtual * this.alturaImagemPersonagem,
      this.larguraFrameAtual * this.larguraImagemPersonagem,
      this.alturaImagemPersonagem,
      this.larguraImagemPersonagem
    );
    
    this.anima();
  }

  anima() {
    this.alturaFrameAtual += 1;

    if (this.alturaFrameAtual >= this.numAlturaLarguraFramesPersonagem) {
      this.alturaFrameAtual = 0;
      this.larguraFrameAtual += 1;
    }

    if (this.larguraFrameAtual >= this.numAlturaLarguraFramesPersonagem) {
        this.larguraFrameAtual = 0;
    }
  }
}

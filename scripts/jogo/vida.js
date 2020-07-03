class Vida {
  constructor(qtdMaxima, qtdInicial) {
    this.qtdMaxima = qtdMaxima;
    this.qtdInicial = qtdInicial;
    this.qtdAtual = qtdInicial;

    this.posicaoX = 20;
    this.posicaoY = 20;
    this.largura = 25;
    this.altura = 25;
  }

  exibe() {
    for (let i = 0; i < this.qtdAtual; i++) {
      const margem = i * 10;
      const posicao = this.posicaoX * (i + 1);

      image(
        imagemVida,
        posicao + margem,
        this.posicaoY,
        this.largura,
        this.altura
      );
    }
  }

  recuperarVida() {
    if (this.qtdAtual < this.qtdMaxima) {
      this.qtdAtual++;
    }
  }

  perderVida() {
    this.qtdAtual -= 1;
  }
}

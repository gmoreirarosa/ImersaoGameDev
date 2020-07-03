class TelaInicial {
  constructor() {
    this.cenario;
    this.gerenciadorBotao;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);    
    this.botaoJogar = new GerenciadorBotao("Jogar", width / 2, height / 7 * 5, this._onClickBotaoJogar);
    this.cenario = new Cenario(imagemTelaInicial, 0);
  }

  draw() {
    this.cenario.exibe();
    this._titulo();    
    this.botaoJogar.draw();
  }

  _titulo() {
    textFont(fontTelaInicial);
    textAlign(CENTER);
    textSize(100);
    text("As aventuras de", width / 2, height / 4);
    textSize(150);
    text("Hipsta", width / 2, height / 4 + 100);
  }

  _onClickBotaoJogar() {
    cenaAtual = "jogo";
  }

}

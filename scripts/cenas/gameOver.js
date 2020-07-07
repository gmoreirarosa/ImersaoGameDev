class GameOver {
  constructor() {
    this.cenario;
    this.botaoVoltar;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    this.cenario = new Cenario(imagensCenarios, 0);
  }

  draw() {
    this.cenario.exibe();
    image(imagemGameOver, width / 2 - 200, height / 3);
    this._titulo();
  }

  _titulo() {
    fill("#FFF");
    textFont(fontTelaInicial);
    textAlign(CENTER);
    textSize(40);
    text(`Seu score foi de ${parseInt(pontuacao.pontos)} pontos`,width / 2,height / 3 + 180);
  }
}

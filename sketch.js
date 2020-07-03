function setup() {
  telaInicial = new TelaInicial();
  telaInicial.setup();
  jogo = new Jogo();
  jogo.setup();
  gameOver = new GameOver();
  gameOver.setup();
  frameRate(40);
  cenas = {
    telaInicial,
    jogo,
    gameOver
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

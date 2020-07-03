function setup() {
  telaInicial = new TelaInicial();
  telaInicial.setup();
  jogo = new Jogo();
  jogo.setup();
  frameRate(40);
  cenas = {
    telaInicial,
    jogo,
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

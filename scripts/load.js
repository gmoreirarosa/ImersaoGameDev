function preload() {
  imagemTelaInicial = loadImage("./imagens/assets/telaInicial.png");
  imagemCenario = loadImage("./imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigoGotinha = loadImage("./imagens/inimigos/gotinha.png");
  imagemInimigoGotinhaVoadora = loadImage("./imagens/inimigos/gotinha-voadora.png");
  imagemInimigoTroll = loadImage("./imagens/inimigos/troll.png");
  imagemGameOver = loadImage("./imagens/assets/game-over.png");
  imagemVida = loadImage("./imagens/assets/coracao.png");
  somAmbiente = loadSound("./sons/trilha_jogo.mp3");
  somPulo = loadSound("./sons/som_pulo.mp3");
  fontTelaInicial = loadFont("./imagens/assets/fonteTelaInicial.otf");
  fita = loadJSON('fita/fita.json');
}

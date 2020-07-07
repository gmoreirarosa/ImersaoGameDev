function preload() {
  imagemTelaInicial = loadImage("./imagens/assets/telaInicial.png");
  imagensCenarios = [
    loadImage("./imagens/cenario/floresta_nv1.png"),
    loadImage("./imagens/cenario/floresta_nv2.png"),
    loadImage("./imagens/cenario/floresta_nv3.png"),
    loadImage("./imagens/cenario/floresta_nv4.png"),
  ];
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigoGotinha = loadImage("./imagens/inimigos/gotinha.png");
  imagemInimigoGotinhaVoadora = loadImage("./imagens/inimigos/gotinha-voadora.png");
  imagemInimigoTroll = loadImage("./imagens/inimigos/troll.png");
  imagemGameOver = loadImage("./imagens/assets/game-over.png");
  imagemVida = loadImage("./imagens/assets/coracao.png");
  somAmbiente = loadSound("./sons/trilha_jogo.mp3");
  somPulo = loadSound("./sons/som_pulo.mp3");
  somColisao = loadSound("./sons/som_colisao.mp3");
  fontTelaInicial = loadFont("./imagens/assets/fonteTelaInicial.otf");
  fita = loadJSON("fita/fita.json");
}

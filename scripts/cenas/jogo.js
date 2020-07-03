class Jogo {
  constructor() {
    this.cenario;
    this.personagem;
    this.vida;
    this.inimigos = [];
    this.inimigoAtual;
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    this.cenario = new Cenario(imagemCenario, 3);
    this.vida = new Vida(
      fita.configuracoes.qtdVidaMaxima,
      fita.configuracoes.qtdVidaInicial
    );
    pontuacao = new Pontuacao();

    this.personagem = new Personagem(
      imagemPersonagem,
      0,
      height - 135 - 30,
      110,
      135,
      220,
      270,
      4,
      4
    );
    const inimigoGotinha = new Inimigo(
      imagemInimigoGotinha,
      width,
      height - 52 - 30,
      52,
      52,
      104,
      104,
      4,
      7
    );
    const inimigoGotinhaVoadora = new Inimigo(
      imagemInimigoGotinhaVoadora,
      width,
      height - 52 - 200,
      100,
      75,
      200,
      150,
      3,
      5
    );
    const inimigoTroll = new Inimigo(
      imagemInimigoTroll,
      width,
      height - 200,
      200,
      200,
      400,
      400,
      5,
      5
    );

    this.inimigos.push(inimigoGotinha);
    this.inimigos.push(inimigoGotinhaVoadora);
    this.inimigos.push(inimigoTroll);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      this.personagem.pula();
    }
  }

  draw() {
    if (keyIsDown(LEFT_ARROW)) this.personagem.andaPraTras();
    if (keyIsDown(RIGHT_ARROW)) this.personagem.andaPraFrente();

    this.cenario.exibe();
    this.cenario.move();

    this.vida.exibe();
    pontuacao.exibe();
    pontuacao.adicionarPontos(0.1);
    
    if (pontuacao.pontos.toFixed(2) % fita.configuracoes.pontuacaoNecessariaGanharVida === 0) {
      this.vida.recuperarVida();
    }

    this.personagem.exibe();
    this.personagem.aplicaGravidade();

    this.inimigoAtual = this.inimigos[this.mapa[this.indice].inimigo];
    this.inimigoAtual.setarVelocidade(this.mapa[this.indice].velocidade);
    this.inimigoAtual.exibe();
    this.inimigoAtual.move();

    if (this.inimigoAtual.visivel()) {
      this.indice += 1;
      this.inimigoAtual.reaparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (this.personagem.estaColidindo(this.inimigoAtual)) {
      this.vida.perderVida();
      somColisao.play();
      this.personagem.ativarInvencibilidade();
      if (this.vida.qtdAtual === 0) {
        cenaAtual = "gameOver";
      }
    }
  }
}

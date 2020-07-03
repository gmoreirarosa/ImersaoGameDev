class Jogo {
  constructor() {
    this.cenario;
    this.pontuacao;
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
    this.pontuacao = new Pontuacao();
    this.vida = new Vida(fita.configuracoes.qtdVidaMaxima,fita.configuracoes.qtdVidaInicial);

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
      somPulo.play();
    }
  }

  draw() {
    this.cenario.exibe();
    this.cenario.move();

    this.vida.exibe();
    this.pontuacao.exibe();
    this.pontuacao.adicionarPontos(0.1);

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
      this.personagem.ativarInvencibilidade();
      if (this.vida.qtdAtual === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}

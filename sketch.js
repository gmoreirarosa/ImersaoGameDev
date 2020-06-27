let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let personagem;
let inimigo;
let somAmbiente;
let somPulo;

function preload() {
  imagemCenario = loadImage("./imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  imagemInimigo = loadImage("./imagens/inimigos/gotinha.png");
  somAmbiente = loadSound("./sons/trilha_jogo.mp3");
  somPulo = loadSound("./sons/som_pulo.mp3");
}

function keyPressed() {
  if (key === "ArrowUp") {
    personagem.pula();
    somPulo.play();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(
    imagemPersonagem,
    0,
    height - 135,
    110,
    135,
    220,
    270,
    4,
    4
  );
  inimigo = new Inimigo(
    imagemInimigo,
    width,
    height - 52,
    52,
    52,
    104,
    104,
    4,
    7
  );
  frameRate(40);
  //somAmbiente.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move(10);

  if (personagem.estaColidindo(inimigo)) {
    noLoop();
  }
}

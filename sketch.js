let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somAmbiente;

function preload() {
  imagemCenario = loadImage("./imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./imagens/personagem/correndo.png");
  somAmbiente = loadSound("./sons/trilha_jogo.mp3");
  frameRate(40);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  //somAmbiente.loop();  
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

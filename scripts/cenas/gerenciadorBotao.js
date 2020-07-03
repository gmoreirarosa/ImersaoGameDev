class GerenciadorBotao {
  constructor(texto, posicaoX, posicaoY, onClick) {
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
    this.botao = createButton(texto);
    this.botao.addClass("botao-tela-inicial");
    this.onClick = onClick;
  }

  draw() {
    this.botao.position(this.posicaoX, this.posicaoY);
    this.botao.center("horizontal");
    this.botao.mousePressed(() => {
      this.onClick();
      this.botao.remove();  
    });
  }
}

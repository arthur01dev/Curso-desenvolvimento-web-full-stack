const ePaisagem = (largura, altura) =>
  largura > altura
    ? true + " Imagem esta no modo paisagem"
    : false + " Imagem esta no modo retrato";

console.log(ePaisagem(1800, 2000));
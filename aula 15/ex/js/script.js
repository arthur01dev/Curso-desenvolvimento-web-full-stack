const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.querySelector('#numero-titulo');
const raizQuadrada = document.querySelector('#raiz-quadrada');
const numInteiro = document.querySelector('#num-inteiro');
const inteiro = document.querySelector('#inteiro');
const nan = document.querySelector('#nan');
const baixo = document.querySelector('#baixo');
const cima = document.querySelector('#cima');
const decimais = document.querySelector('#decimais');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = Math.sqrt(numero);
numInteiro.innerHTML = numero;
inteiro.innerHTML = Number.isInteger(numero);
nan.innerHTML = Number.isNaN(numero);
baixo.innerHTML = Math.floor(numero);
cima.innerHTML = Math.ceil(numero);
decimais.innerHTML = Number(numero.toFixed(2));

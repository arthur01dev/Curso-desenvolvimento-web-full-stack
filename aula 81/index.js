const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor > 100 || valor < 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]--;
  }
}

const car = new Carro("Porsche 911");
 
/////////////////////////////////////////////////////////

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Arthur', 'Rodrigues');
p1.nomeCompleto = 'Arthur Rodrigues de Souza';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
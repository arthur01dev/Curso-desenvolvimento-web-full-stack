class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  comer() {
    console.log(`${this.nome} esta comendo...`);
  }

  beber() {
    console.log(`${this.nome} esta bebendo...`);
  }

  falar() {
    console.log(`${this.nome} esta falando...`);
  }
}

const p1 = new Pessoa("Arthur", "Rodrigues", 21);
const p2 = new Pessoa("josemar", "Silva", 42);
const p3 = new Pessoa("Laura", "Santos", 23);

console.log(p1);
console.log(p2);
console.log(p3);

//////////////////////////////////////////////////////////
// mesma função porem com utilizando função construtora:

function Pessoa2(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa2.prototype.comer = function () {
  console.log(`${this.nome} esta comendo...`);
};

Pessoa2.prototype.beber = function () {
  console.log(`${this.nome} esta bebendo...`);
};

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} esta falando...`);
};

const p4 = new Pessoa2("Gabriel", "Rodrigues", 18);

console.log(p4);

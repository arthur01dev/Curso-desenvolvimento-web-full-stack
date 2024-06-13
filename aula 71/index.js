// defineProperty | defineProperties

//           defineProperty

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: true, // configurável
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}

///////////////////////////////////////////////////////////////////

//           defineProperties

function Produto2(nome, preco, estoque) {
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
    estoque: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
  });
}

const p2 = new Produto2("Juliete x-metal", 2000, 5);
console.log(Object.keys(p2));

for (let chave in p2) {
  console.log(chave);
}

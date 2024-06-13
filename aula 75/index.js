function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Juliete x-metal', 2400);
p1.aumento(100)
p1.desconto(50)
//console.log(p1)

const p2 = {
    nome: 'Mars Jordan',
    preco: 10000
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(50);
p2.aumento(100);
//console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 99
    },
    tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 42
    },
  });
  
  p3.aumento(10);
  console.log(p3);
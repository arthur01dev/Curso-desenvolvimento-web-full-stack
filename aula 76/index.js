// Prodruto -> aumento, desconto
// Camiseta, Caneca

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

/////////////////////////////////////////////////////////////

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){ // sobrescrevi o aumento
    this.preco = this.preco + (this.preco * (percentual / 100));
}

Camiseta.prototype.desconto = function(percentual){ // sobrescrevi o desconto
    this.preco = this.preco - (this.preco * (percentual / 100));
}

/////////////////////////////////////////////////////////////

function Caneca(nome, preco, cor, material, estoque) {
    Camiseta.call(this, nome, preco, cor);
    this.material =  material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number1') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

/////////////////////////////////////////////////////////////

const produto = new Produto('Tenis', 700);
//produto.desconto(200);
//produto.aumento(50);
console.log(produto)

const camiseta = new Camiseta('Moletom', 400, 'Azul');
//camiseta.desconto(50);
//camiseta.aumento(200);
console.log(camiseta)

const caneca = new Caneca('Copo Stanley', 300, 'Branco', 'Aluminio/Termico', 100);
//caneca.desconto(200);
//caneca.aumento(100);
console.log(caneca.estoque)
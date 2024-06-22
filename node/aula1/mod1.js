const nome = 'Arthur';
const sobrenome = 'Rodrigues';

const falaNome = () => nome + ' ' + sobrenome;

//  Podemos fazer assim:

//  module.exports.nome = nome;
//  module.exports.sobrenome = sobrenome;
//  module.exports.falaNome = falaNome;

//  ou assim:

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

/////////////////////////////////////////////

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

exports.Pessoa = Pessoa;
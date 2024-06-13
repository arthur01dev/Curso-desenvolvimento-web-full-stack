
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  
    fala() { ///////////////////////////////////////////////// ###### uma função dentro de um objeto é chamado de metodo ####
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();

//////////////////////////////////////////////////////////////

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Arthur', 'Rodrigues', 21);
const pessoa2 = criaPessoa('Getulio', 'Rodrigues', 57);
const pessoa3 = criaPessoa('Manuela', 'Rodrigues', 12);
const pessoa4 = criaPessoa('Gabriel', 'Rodrigues', 17);
const pessoa5 = criaPessoa('Laura', 'Santos', 21);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
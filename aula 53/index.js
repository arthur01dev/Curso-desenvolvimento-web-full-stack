// Global
function retornaFuncao(nome) {
    return function(sobrenome) {
      return nome + ' ' + sobrenome;
    };
  }
  
  const funcao = retornaFuncao('Luiz');
  const funcao2 = retornaFuncao('João');
  console.dir(funcao);
  console.dir(funcao2);
  
  console.log(funcao('Miranda'), funcao2('Oliveira'));
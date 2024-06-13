/*
Object.values => retorna o valor da propriedade do objeto 
Object.entries => retorna a chave do objeto e o valor 
Object.getOwnPropertyDescriptor(o, 'prop') => mostra as propriedades da chave do objeto
Object.assign(des, any) => faz copia do objeto 
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
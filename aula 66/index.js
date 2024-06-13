// Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroDosNumeros = numeros.map((valor) => valor * 2);
// console.log(numeros, dobroDosNumeros)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map((obj) => obj.nome);
console.log(pessoas, nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map((obj) => obj.idade);
console.log(pessoas, idades);

// Adicione uma chave id em cada objeto (id)
const addKeyID = pessoas.map((obj) => {
  const newArray = { ...obj };
  newArray.id = generationRandomCode();
  return newArray;
});

function generationRandomCode() {
  let code = " ";
  const length = 4;

  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10);
  }

  return code;
}

console.log(pessoas, addKeyID);

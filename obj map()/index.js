const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

// const novasPessoas = {};
// for (let pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

concole.log(novasPessoas.get(2));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

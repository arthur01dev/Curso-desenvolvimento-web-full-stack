//  Importando da pasta raiz:

//  const multiplicacao = require('./mod');

//  console.log(multiplicacao(2, 2));

/////////////////////////////////////////////////

//  Importando function da pasta D

//  const Cachorro = require('./B/C/D/mod');

//  const dog1 = new Cachorro('jorginho');

//  dog1.latir();

/////////////////////////////////////////////////

//  Importando function da pasta D para a Z e depois para app.js

//  const Cachorro = require('./Z/mod2');

//  const dog1 = new Cachorro('bolt');

//  dog1.latir();

/////////////////////////////////////////////////

//  console.log(__filename); //=> __filename é o nome do arquivo atual.
//  console.log(__dirname); //=> __dirname é o nome da pasta atual.

const path = require('path');

console.log(__dirname);
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
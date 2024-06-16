const path = require('path')
const {Pessoa, falaNome} = require('./mod1');

const p1 = new Pessoa('Arthur', 'Rodrigues');

console.log(falaNome());
console.log(p1);
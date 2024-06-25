const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

//  const pessoas = [
//      { nome: 'João' },
//      { nome: 'Arthur' },
//      { nome: 'Laura' },
//      { nome: 'Gabriel' }
//  ];
//  
//  const json = JSON.stringify(pessoas, '', 2);
//  
//  escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

lerArquivo(caminhoArquivo);
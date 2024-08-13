const express = require('express');
const app = express();

//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (requisição, resposta) => {// Faz um Get do nosso formulario 
    resposta.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (reqição, resposta) => {// Cria a resposta para nosso fomulario respondido a cima 
    resposta.send('Recebi o formulario');
})

app.get('/contato', (requisição, resposta) => {
    resposta.send('Obrigado por entrar em contato com a gente.');

});

 app.listen(3000, () => {// Cria um servidor local 
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});

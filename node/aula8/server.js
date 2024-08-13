const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        Sobreome do cliente: <input type="text" name="sobrenome">
        <button>Enviar Formulário</button>
        </form>
        `);
});

app.get('/testes/:idUsuarios?/:parametro?', (requisicao, resposta) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    //
    console.log(requisicao.params);
    console.log(requisicao.query);
    resposta.send(requisicao.query.Nome);
})

app.post('/', (requisicao, resposta) => {
    console.log(requisicao.body);
    resposta.send(`Oque você me enviou foi: ${requisicao.body.nome} ${requisicao.body.sobrenome}`);
})

app.listen(3300, () => {
    console.log('Acessar http://localhost:3300');
    console.log('Servidor executando na porta 3300');
});

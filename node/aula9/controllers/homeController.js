exports.paginaInicial = (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        Sobreome do cliente: <input type="text" name="sobrenome">
        <button>Enviar Formulário</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST');
}
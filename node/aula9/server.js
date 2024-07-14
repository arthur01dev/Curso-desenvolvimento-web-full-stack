const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);



app.listen(3300, () => {
    console.log('Acessar http://localhost:3300');
    console.log('Servidor executando na porta 3300');
});

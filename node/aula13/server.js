const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//  Nossos Proprios middleware
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);



app.listen(3300, () => {
    console.log('Acessar http://localhost:3300');
    console.log('Servidor executando na porta 3300');
});

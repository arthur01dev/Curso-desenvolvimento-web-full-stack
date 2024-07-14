const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
const deliveryController = require('./controllers/deliveryController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// Rota de delivery
route.get('/delivery', deliveryController.paginaDeDelivery)

module.exports = route;
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const deliveryController = require('./src/controllers/deliveryController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

// Rota de delivery
route.get('/delivery', deliveryController.paginaDeDelivery)

module.exports = route;
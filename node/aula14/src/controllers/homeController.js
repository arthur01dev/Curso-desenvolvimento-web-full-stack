const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outra coisa qualquer',
//     descrição: 'Outra descrição'
// })
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(err => console.log(err))

exports.paginaInicial = (req, res) => {
    console.log('Respondendo o cliente')
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}
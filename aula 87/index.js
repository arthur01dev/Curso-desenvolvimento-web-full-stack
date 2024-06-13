function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    })
}

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache'); //resolve
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

// Pomise.all  Promise.race  Promise.resolve  Promise.reject

/*
const promises = [
    //'primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    //'outro valor'
];
*/

/* Promise.all(promises)
     .then((valor) => {
         console.log(valor);
     })
     .catch(e => {
         console.log('Error: ', e)
     })
*/

/* Promise.race(promises)
     .then((valor) => {
         console.log(valor);
     })
     .catch(e => {
        console.log('Error: ', e)
     })
*/

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('Error: ', e))
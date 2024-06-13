// arguments que sustenta todos os agumentos enviadoa.

function funcao(a, b, c) {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/////////////////////////////////////////

const conta = (...args) => {
    console.log(args);
  };
  conta('+', 1, 20, 30, 40, 50);
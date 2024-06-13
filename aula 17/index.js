
function soma(x, y, z) {
    const resultado = (x+y)/z;
    return resultado
}

console.log(soma(10, 20, 2));

////////////////////////////////

function saudacao(name) {
  console.log(`Hello ${name}!`)
}

saudacao('Arthur');

////////////////////////////////

const raiz = (x) => {
    return x ** 0.5
}

console.log(raiz(100))
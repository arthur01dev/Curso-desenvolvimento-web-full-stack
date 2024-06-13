function maiorNumero(a, b) {
    // if (a > b) {
    //     return a + ` é maior que ${b}.`;
    // } else {
    //     return b + ` é maior que ${a}.`;
    // }
    return a > b ? a + ` é maior que ${b}.` : b + ` é maior que ${a}.`;
}

const resultado = maiorNumero(500, 250);

console.log(resultado);

//////////////////////////////////////////////////////////////////////////////

const returnMiorNumero = (a, b) => a > b ? a + ` é maior que ${b}.` : b + ` é maior que ${a}.`;

console.log(returnMiorNumero(1131, 671));


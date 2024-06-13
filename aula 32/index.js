/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiro, segundo, terceiro, ...restoDoArray] = numeros;
console.log(primeiro, segundo, terceiro, ...restoDoArray) */

// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// const [,,[,,nove]] = numeros; 
// console.log(nove);
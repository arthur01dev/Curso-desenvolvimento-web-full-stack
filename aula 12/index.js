let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// um dos jeitos de fazer:

// const variavelA = varB;
// const variavelB = varC;
// const variavelC = varA;
// console.log(variavelA, variavelB, variavelC)

// jeito mais moderno de fazer:

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
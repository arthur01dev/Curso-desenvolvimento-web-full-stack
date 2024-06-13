export const nome = 'Arthur';
export const sobrenome = 'Rodrigues';
export const idade = 21;

export /*default*/ function soma(x, y) {
    return x + y;
}

// Uma maneira de exportar -> 'export { nome as nome2, sobrenome, idade, soma };'

// Para exportar uma variavel default -> 'export ( nome as defalt );' assim o nome se torna defalt
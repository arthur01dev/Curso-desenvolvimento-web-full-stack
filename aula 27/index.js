// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// if  (pontuacaoUSuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

///////////////////////////////////////////////////////////////////////////////////////

const userIdade = 18
const temPermisao = userIdade >= 18 ? 'Tem Permisao' : 'Não tem permisao';

console.log(temPermisao);
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*
    form.onsubmit = (evento) => {
        evento.preventDefault();
        alert(1)
        console.log('foi enviado')
    }
    */

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        
        let cadastro = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value
        }

        pessoas.push(cadastro);

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${idade.value}, ${peso.value}</p>`
    })
}
meuEscopo();
function relogio() {

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    };

    function iniciarRelogio() {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    };

    function pausarRelogio() {
        clearInterval(timer);
        relogio.classList.add('pausado');
    };

    function zerarRelogio() {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
    };

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) return iniciarRelogio();
        if (el.classList.contains('pausar')) return pausarRelogio();
        if (el.classList.contains('zerar')) return zerarRelogio();
    })
}

relogio();
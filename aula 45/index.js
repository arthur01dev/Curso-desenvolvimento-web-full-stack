function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pr-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date('2024-01-20 10:46:12');
    const hora = retornaHora('data');
    console.log(hora);
} catch(e) {
    //Tratar error
    //console.log(e)
} finally {
    console.log('Tenha um bom dia!!!')
}


function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('a e b precisam ser números ');
    }

    return a + b;
}

try{
    console.log(soma(4, 55))
    console.log(soma(4, "5"))
} catch(e){
    console.log(e)
    console.log ('error não conhecido, por favor relogue')
}
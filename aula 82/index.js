class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`O ${this.nome} esta ligado!`);
            return;
        }

        this.ligado = true;
    }

    desligado() {
        if (!this.ligado) {
            console.log(`O ${this.nome} esta desligado!`);
            return;
        }

        this.ligado = false;
    }
}

const d1 = new Dispositivo('geladeira');

///////////////////////////

class Iphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

    tirarFoto() {
        if (this.ligado) {
            return console.log(`O ${this.nome} ${this.modelo} ${this.cor} tirou uma foto`);
        } else {
            console.log(`O ${this.nome} ${this.modelo} ${this.cor} esta desligado impossivel tirar foto`);
        }
    }
}

const i1 = new Iphone('iphone', 'vermelho', '15 pro max');

///////////////////////////

class Tablet extends Dispositivo {
    constructor(nome, temWifi) {
      super(nome);
      this.temWifi = temWifi;
    }
  
    ligar() {
      console.log('Olha, você alterou o método ligar.');
    }
  
    falaOi() {
      console.log('Oi');
    }
}

const t1 = new Tablet('Ipad', true);
t1.ligar()
t1.ligar()
console.log(t1)
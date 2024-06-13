function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.mostraSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    return this.mostraSaldo();
};

Conta.prototype.mostraSaldo = function () {
    console.log(`Ag/c.: ${this.agencia}/${this.conta}` + ` Saldo: ${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.mostraSaldo();
};

const CC1 = new ContaCorrente(12, 222, 200, 50);

console.log(CC1.sacar(250))
console.log(CC1.depositar(40))

function ContaPoupaca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupaca.prototype = Object.create(Conta.prototype);
ContaPoupaca.prototype.constructor = ContaPoupaca;

const CP1 = new ContaPoupaca(12, 222, 200);

console.log(CP1.sacar(250))
console.log(CP1.depositar(40))
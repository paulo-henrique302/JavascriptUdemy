// SUPERCLASS

function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        this.verSaldo()
        return
    }
    this.saldo -= valor
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agencia ${this.agencia} | Conta ${this.conta}`)
    console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta('0001', '6415353-3', 379.27)
conta1.depositar(21.27)
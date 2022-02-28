// métodos criados na classse já sao automaticamente linkados ao Prototype da classe, nao sendo necessária a alteração manual.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} ${this.sobrenome}: oi!`)
    }
}

const p1 = new Pessoa('Jose', 'Datena')
console.log(p1)
p1.falar()

// Realizando a mesma função com Funções Construtoras

console.log("**************")

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} ${this.sobrenome}: oi!`)
}

const p2 = new Pessoa2('Jose', 'Datena')
console.log(p2)
p2.falar()

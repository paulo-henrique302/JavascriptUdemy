function Pessoa(nome, sobr) {
    this.nome = nome
    this.sobrenome = sobr
    this.nomeC = () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('Jose', 'Alfandega')
const data = new Date()

console.dir(p1)
console.dir(data)

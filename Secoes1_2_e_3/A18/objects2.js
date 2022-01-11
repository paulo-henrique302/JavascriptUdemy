const pessoa = {
    nome: "Pedro",
    sobrenome: "José",
    idade: 26,

    fala () {
        console.log(`Olá, sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos!`)
    },
    
    incrementaIdade() {
        ++this.idade
    }

}

pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()

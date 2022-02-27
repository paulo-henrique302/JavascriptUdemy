const falar = { 
    falar() {
    console.log(`${this.nome} está falando`)
    }
}

const andar = { 
    andar() {
    console.log(`${this.nome} esta ANDANDO`)
    }
}

const nome = { 
    nome() {
    console.log(`${this.nome} ${this.sobrenome}`)
    }
}

const pessoaPrototype = Object.assign({}, falar, andar, nome)

function criaPessoa(nome, sobrenome) {
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa('Juao', 'Paulo')
console.log(p1.__proto__)
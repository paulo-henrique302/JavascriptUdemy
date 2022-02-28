class Eletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true
    }
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false
    }
}

const d1 = new Eletronico("Transistor")

class Smartphone extends Eletronico {
    constructor(nome, cor) {
        super(nome) // equivalente a Object.call! -> chama o construtor da Classe-Pai = Superclasse.
        this.cor = cor
    }
}

class Tablet extends Eletronico {
    constructor(nome, tela) {
        super(nome)
        this.tela = tela
    }
    ligar() {
        console.log('Esse ligar é diferente.')
    }
    caneta() {
        console.log('Não se esqueça de utilizar a S-Pen')
    }
}

const s1 = new Smartphone("S20-FE", 'Azul')
const t1 = new Tablet('Galaxy Tab', 10)

t1.ligar()
t1.caneta()
console.log(s1)
console.log(t1)
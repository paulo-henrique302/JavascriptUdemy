const _velocidade = Symbol()

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor > 100 || valor < 0) return
        if(valor <= 100) this[_velocidade] = valor
    }
    
    get velocidade() {
        return this[_velocidade]
    }

    alecerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade] ++
    }

    frear() {
        if(this[_velocidade] < 0) return
        this[_velocidade] --
    }
}

const c1 = new Carro('Fusca')
c1.alecerar()

console.log(c1.velocidade)
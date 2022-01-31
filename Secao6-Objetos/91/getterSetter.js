function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoquePrivado,
        set: valor => {
            if (typeof valor !== 'number') {
                throw new TypeError('Deve ser numerico')
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor
        }
    }
}

const p2 = criaProduto('lapis')
console.log(p2)



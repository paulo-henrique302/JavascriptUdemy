function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false, // valor não pode ser alterado
        configurable: false
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    })

}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
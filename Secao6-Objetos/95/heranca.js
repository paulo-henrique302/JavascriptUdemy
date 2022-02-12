function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(percent) {
    this.preco += this.preco*(percent/100)
}

Produto.prototype.desconto = function(percent) {
    this.preco -= this.preco*(percent/100)
}


function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
// criar novo objeto para que mudanças no Produto.prototype não impliquem em alterações no Camiseta.prototype -> Object.create()
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(valor) {
    this.preco += valor
}

// Caneca:
// cria um objeto vazio, aponta o this para ele e o retorna.
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
           estoque = valor
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const cup = new Caneca('batman', 49.90, 'cerâmica', 100)

console.log(cup)
cup.estoque = 98
console.log(cup.estoque)
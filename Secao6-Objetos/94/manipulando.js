function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= this.preco*(percentual/100)
}

Produto.prototype.aumento = function(percentual) {
    this.preco += this.preco*(percentual/100)
}

const p1 = new Produto('mouse', 1000)

// Objeto literal
const p2 = {
    nome: 'caneca',
    preco: 55
}

Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype)
p3.nome = 'lapiseira Bauducco'
p3.preco = 199.73

p3.desconto(50)

console.log(p3.preco)
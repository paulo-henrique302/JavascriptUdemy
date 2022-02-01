// const produto = {nome: 'coisa', preco: 1.8}

// Object.freeze(produto)

// const outro = Object.assign({}, produto, {material: 'porcelana'}) // copia o que está em produto para o objeto vazio {}, e adiciona o que está em {material: porcelana}

// console.log(outro)

const produto = {
    nome: 'produto',
    preco: 1.7
}

Object.defineProperty(produto, 'nome', {
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

for(let [chave, valor] of Object.entries(produto)) {
    console.log(`${chave} -> ${valor}`)
}


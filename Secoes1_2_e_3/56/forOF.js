const nomes = ['joao', 'pedro', 'maria']

const obj = {
    nome: 'andré',
    idade: 25
}

for(let elemento of nomes) {
    console.log(elemento)
}

console.log('***********')

nomes.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
})

for(let chave in obj) { // Object é iterável somente com for in!
    console.log(chave)
}

// RESUMO

// for in -> índices
// for of -> elementos(valor em si)
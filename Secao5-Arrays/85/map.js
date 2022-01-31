const n = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const nDobro = n.map(valor => 2*valor)
// console.log(nDobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const apenasNome = pessoas.map(obj => obj.nome)
console.log(apenasNome)

const nomeRem = pessoas.map(obj => {
    delete obj.nome
    return obj
})

console.log(nomeRem)

const addID = pessoas.map(obj => {
    obj.ID = 0
    return obj
})

console.log(addID)
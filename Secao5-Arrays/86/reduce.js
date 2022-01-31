const n = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const total = n.reduce(function(acumulador, valor) {
//     acumulador += valor
//     return acumulador
// })
// console.log(total)

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    // acumulador incia com o pessoas[0] e o valor com pessoas[1]
    if(acumulador.idade > valor.idade) return acumulador
    return valor // return valor fará com que o acumulador passe a ser o valor! -> é feita a "troca" caso o valor seja maior que o até então acumulador.
})

console.log(maisVelha)
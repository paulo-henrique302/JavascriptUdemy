const n = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// filter requer o retorno de um boolean
// const filtrados = n.filter( valor => valor > 10 )
// console.log(filtrados)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const seteLetras = pessoas.filter(elem => elem.nome.length >= 7)
console.log(seteLetras)

const maisCinq = pessoas.filter(obj => obj.idade >= 50)
console.log(maisCinq)

const termA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(termA)
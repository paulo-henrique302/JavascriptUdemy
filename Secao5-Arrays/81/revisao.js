// const nomes = new Array('nome1', 'nome2','nome3') -> equivalente!
const nomes = ['hildegart', 'nome1', 'nome2', 'nome3', 'josefino']
// const novo = [...nomes] // spread operator -> criará uma cópia do array original, mas agora independente. Ou seja, suas modificações não impactam o array copiado original.
// novo.push('josefino') // adiciona ao final
// novo.unshift('hildegart') // adiciona no começo e atualiza os índices.
// console.log(novo)

const novo = nomes.slice(0, 4) // índice 0 ao 3 = hildegart, n1, n2, n3
console.log(novo)

const nome = 'Luiz Otavio Miranda'
const nomeArray = nome.split(' ')

console.log(nomeArray)

const nomeA = ['Josue', 'Silva', 'Ramsés']
const nomeStr = nomeA.join(' ')

console.log(nomeStr)





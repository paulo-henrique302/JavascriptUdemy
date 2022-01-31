//             -5    -4    -3    -2    -1
//              0     1     2     3     4
const nomes = ['n1', 'n2', 'n3', 'n4', 'n5']
// equivalente a pop() :
// const splc = nomes.splice(4, 1) // remove elemento de index 4, e somente ele (1)
// OBS -> ela retorna o array removido!

// const splc = nomes.splice(-1, 1) // remove os (2) a partir de index 3

// PARA INSERIR ELEMENTOS NO LUGAR DE OUTROS:
// splice(posição, qtdRemovida, quemEntraNoLugar[posicao])
// remove 1 elemento que está em 3 e coloca 'substituto' no lugar dele!
// const splc = nomes.splice(3, 1, 'Substituto')

//Simulando pop()
// nomes.splice(-1, 1)

// Shift()
// nomes.splice(0, 1)

// Unshift()
// nomes.splice(0, 0, 'unshifted')

// Push()
nomes.splice(nomes.length, 0, 'pushed1', 'pushed2')

console.log(nomes)
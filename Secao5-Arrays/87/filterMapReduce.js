const n = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Retornar a soma do dobro de todos os pares.
// 1. Filtrar os pares
// 2. Dobrar os valores
// 3. Reduzir (somar tudo)

const n2 = n.filter(valor => valor%2===0).map(valor=> 2*valor).reduce((acumulador, valor) => acumulador+=valor, 0)

console.log(n2)

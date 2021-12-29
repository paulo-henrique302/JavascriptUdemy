// false || true -> retorna sempre o true

let valorFalse = false

console.log(false || valorFalse || undefined || null || 'Nome Completo')

let primeiro = 'azul vem primeiro'
let segundo = 'vermelho vem primeiro'

console.log(primeiro || segundo) // sempre o OR retorna o PRIMEIRO valor true encontrado.

console.log(false || 0 || undefined || null) // sempre o último false é retornado quando há somente FALSY's
const userPoints = 1000

const userLevel = userPoints >= 1000 ? 'VIP user' : 'Common user' // < sentença > ? se verdadeiro : se falso

// exemplo semelhante utilizando operadores lógicos

const userColor = null
const standartColor = userColor || 'Preto' // " || " seleciona o primeiro "true" que aparecer. como null é considerado como false, "Preto" será selecionado.

console.log(userLevel, standartColor)
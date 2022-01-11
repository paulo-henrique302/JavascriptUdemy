const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiro, segundo, ...restante] = nums // serão atribuídos nums[0] e nums[1]

// "..." -> rest operador = atribuir todos os demais items;
// "..." -> spread operator = distribuir os items

console.log(primeiro, segundo)
console.log(restante)

const [um, ,tres, ,cinco, , sete] = nums // deixar espaços vazios fará a engine pular essas casas.

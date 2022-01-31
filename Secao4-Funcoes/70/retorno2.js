function criaMultiplicador(multiplicador) {

    return function(n) {
        return n * multiplicador
    }
}
// criaMultiplicador retorna uma nova função de acordo com o multiplicador escolhido!

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(5))
console.log(triplica(5))
console.log(quadruplica(5))
// function f(){
//     let total = 0
//     for(let argumento of arguments) {
//         total += argumento
//     }
//     console.log(total)
// }
// f(1, 434, 1000)

function conta(operador, acumulador, ...numeros) {
    for(let num of numeros) {
        if(operador==='+') acumulador+=num
        if(operador==='-') acumulador-=num
        if(operador==='/') acumulador/=num
        if(operador==='*') acumulador*=num
    }
    console.log(acumulador)
}

conta('+', 0, 1,2,3,4,5,6,7)
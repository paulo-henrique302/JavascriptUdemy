function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto // retorna a FUNÇÃO falaResto(), que pode ser invocada com parêntesis
}

const olaMundo = falaFrase('Olá') // sequência: falaFrase recebe 'olá', e retorna a falaResto. Agora olaMundo passa a ser a função falaResto, então pode ser invocada com olaMundo()

console.log(olaMundo('mundo!'))

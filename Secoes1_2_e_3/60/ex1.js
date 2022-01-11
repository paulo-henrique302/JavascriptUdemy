// recebe 2 numeros e retorna o maior

function max(n1, n2) {
    if(n1 === n2) return 'Sao iguais'
    return n1 > n2 ? n1: n2
}

const max2 = (n1, n2) => {
    return n1 > n2 ? n1: n2
}

const max3 = (n1, n2) => n1 > n2 ? n1 : n2


console.log(max3(1, 121))
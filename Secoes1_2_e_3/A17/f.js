function raizUm(num) { // função clássica
    return num**0.5
}

const raizDois = function(num) { // função anônima
    return num**0.5
}

const raizTres = (n) => n**0.5 // arrow function -> return implícito quando há apenas 1 linha de código

console.log(raizUm(4), raizDois(9), raizTres(16))
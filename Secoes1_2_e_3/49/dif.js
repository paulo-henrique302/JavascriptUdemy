let nome = 'nome'
var nome2 = 'nome2'

if (true) {
    let nome = 'letIF' // 
    var nome2 = 'varIF' // REDECLARADA 
    console.log(nome, nome2)
}

console.log(nome, nome2) 

// HOISTING -> variáveis criadas com var são elevadas ao início do código, como uma pré-declaração com valor inicial undefined.

console.log(variavel) // geraria erro, porém como na linha 16 ela foi declarada com var, a engine a inicializou na forma => var variavel;

var variavel = 10;
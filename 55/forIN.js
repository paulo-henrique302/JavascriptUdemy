const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Jordano',
    idade: 26
}

for (let chave in pessoas) {
    console.log(chave, pessoas[chave])
}

console.log(pessoas['idade'])
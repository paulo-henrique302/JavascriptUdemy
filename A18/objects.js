function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    } // retorna um objeto 
}

const pessoaUm = criaPessoa("joao", "kepler", 56)
console.log(pessoaUm.nome, pessoaUm.sobrenome, pessoaUm.idade)

// quando os atributos têm o mesmo nome dos parâmetros:

function criaPessoa2(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}
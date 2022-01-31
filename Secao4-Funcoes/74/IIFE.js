(function(idade, peso, altura) {
    const sobrenome = 'Miranda'
    
    function cria(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(cria('Luiz'))
    }
    falaNome()
    console.log(idade, peso, altura)

})(30, 80, 1.8)
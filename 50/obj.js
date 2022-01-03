const pessoa = {
    nome: "Luiz",
    sobrenome: "miranda",
    idade: 30,
    endereco: {
        rua: 'Av Paulista',
        numero: 320
    }
}

// const {nome} = pessoa extrai de pessoa o atributo 'nome' e o envie a uma constante 'nome'

// caso a variavel nao exista é possível definir um valor padrão

// const {altura = 1.70} = pessoa

// const {endereco: {rua: street, numero}} = pessoa

const {nome, ...resto} = pessoa
console.log(resto)
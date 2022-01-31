// funções construtoras // fábrica (factory) retornam objetos
// exemplo com a função hipotética criaPessoa:
// factory -> criaPessoa()
// construtora -> new Pessoa()    [ letra maiuscula + new ]

function Pessoa(nome, idade) {
    // atributos privados -> nao sao levados ao objeto; servem apenas para auxilio.
    const ID = 123
    this.metodoInterno = () => 1+5

    this.nome = nome // this pois já se subentende a criacao do objeto
    this.idade = idade
    this.metodo = () => console.log(`${this.nome} tem ${this.idade} anos`)
}

const p1 = new Pessoa('Pedro', 26)

p1.metodo()
console.log(p1.metodoInterno())
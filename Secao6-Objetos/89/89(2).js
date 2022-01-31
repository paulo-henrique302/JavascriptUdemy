// Factory functions 

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Mauricio')
// console.log(p1.nomeCompleto)

// Constructor functions 

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this)
    // return this (implícito)
}

const p1 = new Pessoa('Luiz', 'Miranda')
console.log(p1)

// COMPORTAMENTO do "new" 
// new cria um objeto vazio {} e atrela o this a ele.
// no escopo da função, define this.nome ({}.nome) e this.sobrenome ({}.sobrenome)
// em seguida, 'new' faz com que a engine retorne o próprio this ({})
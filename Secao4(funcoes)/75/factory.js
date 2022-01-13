// Factory function()
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift() // shift() remove o primeiro elemento do array e o retorna para this.nome
            this.sobrenome = valor.join(' ') // join() mescla os elementos do array em uma string, separados por ' '
        },

        fala(assunto) {
            return `${this.nome} diz ${assunto}`
        },
        altura,
        peso,
        // GETTER
        get imc() {
            return (this.peso/(this.altura**2)).toFixed(2)
        }
    }
}

const p1 = criaPessoa('Junior', 'Delgado', 1.97, 129)

console.log(p1.imc) // get faz o método IMC se comportar como atributo. ao invocá-lo assim haverá a sua execução() e o retorno do valor como se fosse um atributo qualquer.

p1.nomeCompleto = 'Maria Andrade Silveira'
console.log(p1.nomeCompleto)
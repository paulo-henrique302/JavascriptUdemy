const p = new Object()
p.nome = 'n1'
p.idade = 23

p.falar = function() {
    console.log(this.nome)
}
p.getNasc = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(p.getNasc())

for(let chave in p) {
    console.log(chave)
}
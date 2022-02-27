const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

const novasPessoas = new Map()

for(const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)
console.log(novasPessoas.get(2))

// a iteração retorna um array.
for(const pessoa of novasPessoas) {
    console.log(pessoa)
}
let nome = 'Luiz'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Otavio'
    falaNome() // se "lembra" do local onde originalmente foi declarada (escopo global) então buscará o 'nome' mais próximo -> Luiz.
}

usaFalaNome()
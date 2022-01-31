const pessoas = []
pessoas.push({nome: 'pedro'})

function genObject(nome, sobrenome, peso, altura) {
    return {
        nome, sobrenome, peso, altura
    }
}

function showArray(object) {
    const paragrafo = document.querySelector('.content')
    paragrafo.innerHTML += `<p>${object.nome} ${object.sobrenome} ${object.peso} ${object.altura}</p>`
}

function addToArray() {
    const form = document.querySelector(".form")
    let cont = 0;

    let nome = form.querySelector('.nome')
    let sobrenome = form.querySelector('.sobrenome')
    let peso = form.querySelector('.peso')
    let altura = form.querySelector('.altura')

    function recebeEventoForm(evento) {
        evento.preventDefault()
        console.log("deu sub")

        const obj = genObject(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push(obj)
        cont++
        console.log(pessoas[cont])
        showArray(obj)
    }

    form.addEventListener('submit', recebeEventoForm)
}

addToArray()


function displayIMC(imc, peso, altura) {

    const resultDiv = document.querySelector(".result")
    let resultadoIMC = ''

    if(Number.isNaN(imc) == true) {

        if (Number.isNaN(peso) === true) {  // peso inválido
        
            resultDiv.innerHTML = `<p style="background-color: rgb(255, 110, 110)">Peso inválido</p>`
        }

        if (Number.isNaN(altura) == true) {
            resultDiv.innerHTML = `<p style="background-color: rgb(255, 110, 110)">Altura inválida</p>`
        }

    } else {

        if(imc < 18.5) {
            resultadoIMC = 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 24.9){
            resultadoIMC = 'Peso normal'
        } else if(imc >= 25 && imc < 29.9) {
            resultadoIMC = 'Sobrepeso'
        } else if(imc >= 30 && imc < 34.9) {
            resultadoIMC = 'Obesidade grau 1'
        } else if(imc >= 35 && imc < 39.9) {
            resultadoIMC = 'Obesidade grau 2'
        } else {
            resultadoIMC = 'Obesidade grau 3'
        }

        resultDiv.innerHTML = `<p style="background-color: rgb(67, 253, 67)"> Seu IMC é ${imc} ( ${resultadoIMC} )</p>`
    }

}

function extractFromForm() {

    const form = document.querySelector(".main-form")

    form.addEventListener('submit', receiveEvent)

    function receiveEvent(event) { // previne o auto-reload da página após o submit

        event.preventDefault()

        // dados coletados apenas no instante do click em submit, evitando a coleta de dados ainda não digitados (campos vazios)
        let peso = form.querySelector("#input-peso")
        let altura = form.querySelector("#input-altura")

        peso = Number(peso.value)
        altura = Number(altura.value)

        let imc = Number((peso / (altura ** 2)).toFixed(1))

        displayIMC(imc, peso, altura)

    }
}

extractFromForm()



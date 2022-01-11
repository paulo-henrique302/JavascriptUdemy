// capturar evento de submit do form
const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {

    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso') // target = elemnt clicado
    const inputAltura = e.target.querySelector('#altura') 
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) { // !false = true; NaN é false!
        setResult('Peso inválido', false)
        return;
    }
    if (!altura) { // !false = true; NaN é false!
        setResult('Altura inválida', false)
        return;
    }

    const imc = getIMC(peso, altura)
    const imcLevel = getLevel(imc)

    const msg = `Seu IMC é ${imc} - ${imcLevel}`
    
    setResult(msg, true)

})

//não há problema declarar depois pois o javascript faz o hoisting de todas as functions, então não haverá problema de declará-la depois de ser invocada

function getLevel(imc) {
    
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return level[5]

    if(imc >= 34.9) return level[4]
     
    if(imc >= 29.9) return level[3]
    
    if(imc >= 24.9) return level[2]
    
    if(imc >= 18.5) return level[1]

    if(imc < 18.5) return level[0]

}

function getIMC (peso, altura) {
    return (peso/(altura**2)).toFixed(2)
}



function createP() {
    const p = document.createElement('p')
    return p
}

function setResult(msg, isValid) {
    
    const resDiv = document.querySelector('#resultado')
    resDiv.innerHTML = '' // zera o html da div para adicionar o <p> seguinte:
    
    // usando a API do DOM para manipular o html com js:

    const p = createP() // <p> existe na memória

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resDiv.appendChild(p)

}
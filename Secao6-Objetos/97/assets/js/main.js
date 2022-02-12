// Validador de CPF 

function extractInput() {
    const inputArea = document.querySelector('#input-cpf')
    getClick(inputArea)
}

const getClick = inputQuery => {

    document.addEventListener('click', evnt => {
        
        evnt.preventDefault() // prevent auto-reload
        const element = evnt.target

        if(element.classList.contains('btn-validar')) { 
            validador(inputQuery.value) 
        }
    })
}

function validador(inputCPF) {
    
    let validationResult = false
    
    

    showResult(validationResult)

}

const showResult = result => {

    const resultArea = document.querySelector(".validation-area")

    result === true ? resultArea.innerHTML = `<p style="background-color: rgb(67, 253, 67)">CPF validado com sucesso</p>` : resultArea.innerHTML = `<p style="background-color: rgb(255, 110, 110)">CPF inválido</p>`
}

extractInput()
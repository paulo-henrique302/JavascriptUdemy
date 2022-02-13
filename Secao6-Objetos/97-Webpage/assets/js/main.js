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
            // validador(inputQuery.value)
            const cpf = new Validador(inputQuery.value)
            cpf.cleanCPF()
            cpf.validateCPF()
            cpf.showResult(cpf.validationResult)
        }
    })
}

function Validador(pureCPF) {
    
    this.validationResult
    this.pureCPF = pureCPF

}

Validador.prototype.cleanCPF = function() {
    let cleanCPF = this.pureCPF.replace(/\D+/g, '')
    this.CPFArray = Array.from(cleanCPF)
    this.CPFArraySliced = this.CPFArray.slice(0, -2)
}

Validador.prototype.showResult = function(result) {
    const resultArea = document.querySelector(".validation-area")

    result === true ? resultArea.innerHTML = `<p style="background-color: rgb(67, 253, 67)">CPF validado com sucesso</p>` : resultArea.innerHTML = `<p style="background-color: rgb(255, 110, 110)">CPF inválido</p>`
}

Validador.prototype.finalCompare = function(cpfArray, cpfArraySliced) {

    console.log(cpfArray)
    console.log(cpfArraySliced)

    for(let i=0; i<11; i++) {
        if(cpfArraySliced[i] !== cpfArray[i]) return false
    }
    return true
}   

Validador.prototype.validateCPF = function() {
    
    let firstCount = 10, lastCount = 11
    
    const total = this.CPFArray.reduce((ac, number) => {

        // somente os 9 primeiros digitos!
        if(firstCount === 1 || firstCount === 0 ) return ac
        ac += firstCount * Number(number)
        --firstCount
        return ac

    }, 0)

    let firstDig = 11 - (total % 11)
    this.CPFArraySliced.push(firstDig > 9 ? '0' : String(firstDig))

    // validação do segundo dígito

    const total2 = this.CPFArray.reduce((ac, number) => {

        // somente os 10 primeiros digitos!
        if(lastCount === 1 || lastCount === 0 ) return ac
        ac += lastCount * Number(number)
        --lastCount
        return ac

    }, 0)
    
    let lastDig = 11 - (total2 % 11)

    this.CPFArraySliced.push(lastDig > 9 ? '0' : String(lastDig))


    this.finalCompare(this.CPFArray, this.CPFArraySliced) ? this.validationResult = true : this.validationResult = false

    alert(this.validationResult)

}


extractInput()
function Calculadora() {
    
    this.display = document.querySelector('.display')
    
    this.inicia = () => {
        this.capturaClicks()
        this.capturaEnter()
    }

    this.numDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = (this.display.value).slice(0, -1)

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
        if(e.key === 'Enter') this.realizaConta()
        if(e.keyCode === 67) this.clear()
        }
        )
    }

    this.realizaConta = () => {

        const operacao = this.display.value

        try {
            const result = eval(this.display.value)
            
            if(!result) {
                alert("Operação inválida")
                return
            }

            this.display.value = result

        } catch {
            alert("Operação inválida!")
        }

    }
    
    this.capturaClicks = () => {

        document.addEventListener('click', e => {
            const el = e.target
            if(el.classList.contains('btn-num')) this.numDisplay(el)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.realizaConta()
        })
    }

}

const calc = new Calculadora()
calc.inicia()

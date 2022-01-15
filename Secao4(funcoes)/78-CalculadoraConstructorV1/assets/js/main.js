// all made with arrow functions to avoid 'this' referencing the wrong target,
// since arrows preserve this to point only to the parent object.

function Calculadora() {

    this.display = document.querySelector('.display')
    
    this.inicia = () => {
        this.cliqueBotoes()
    }

    this.btnParaDisplay = (num) => {
        this.display.value += num
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.clearDisplay = () => {this.display.value = ''}

    this.realizaConta = () => {
        
        let conta = this.display.value
        
        try {
            conta = eval(conta)

            if(!conta) {
                alert('Operação inválida!')
                return
            }

            this.display.value = conta

        } catch {
            alert("Operação inválida!")
            return
        }
    }

    this.cliqueBotoes = () => {

        document.addEventListener('click', (e) => {
            const elemento = e.target

            if(elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText)
            }
            if(elemento.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if(elemento.classList.contains('btn-del')) {
                this.apagaUm()
            }
            if(elemento.classList.contains('btn-eq')) {
                this.realizaConta()
            }
            
        })
    } 
}

const calc = new Calculadora()
calc.inicia()

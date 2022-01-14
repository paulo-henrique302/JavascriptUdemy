function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes()
        },
    
        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {

            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert("Operação inválida")
                    return
                }

                this.display.value = conta

            }catch(e) {
                alert("Operação inválida")
                return
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {

                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if( el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            }.bind(this)) // bind o 'this' de cliqueBotoes para o objeto, permitindo acessar o objeto.btnParaDisplay, pois this.btnParaDisplay só existe dentro do objeto, e não dentro da função clique()
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
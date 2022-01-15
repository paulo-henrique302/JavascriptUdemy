function Calculadora() {

    this.display = document.querySelector('.display')
    
    this.inicia = function() {
        this.cliqueBotoes()
    }

    this.btnParaDisplay = function(num) {
        this.display.value += num
    }

    this.cliqueBotoes = () => {

        document.addEventListener('click', function(e) {
            const elemento = e.target

            if(elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText)
            }
        
        }.bind(this))
    } 
}

const calc = new Calculadora()
calc.inicia()

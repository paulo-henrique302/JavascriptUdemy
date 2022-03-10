class ValidaForm {
    constructor() {
        this.form = document.querySelector('.form-area')
        this.events()
    }
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const valid = this.isValid(e)
    }

    isValid(e) {
        let valid = true
        
        for(let errorTxt of this.form.querySelectorAll('.error-text')) {
            errorTxt.remove()
        }

        for(let input of this.form.querySelectorAll('.validar')) {

            const label = input.previousElementSibling.innerText

            // se VAZIO (false) -> !vazio = TRUE
            if(!input.value) {
                this.createError(input, `O campo "${label.slice(0, -1)}" não pode estar vazio.`)
                valid = false
            }
        }
    }

    createError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
    
}

const valida = new ValidaForm()
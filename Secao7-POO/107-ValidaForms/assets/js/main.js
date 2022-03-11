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
        const valid = this.isValid()
        const validPasswords = this.validPassword()

        if(valid && validPasswords) {
            alert('Formulário enviado!')
            this.form.submit()
        }
    }

    validPassword() {
        let valid = true

        const senha = this.form.querySelector('.senha')
        const repetirSenha = this.form.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid = false
            this.createError(senha, 'Senha e repetir senha precisam ser iguais')
            this.createError(repetirSenha, 'Senha e repetir senha precisam ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }

    isValid() {
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
            if(input.classList.contains('cpf')) {
                if(!this.validateCPF(input)) valid = false
            }
            if(input.classList.contains('usuario')) {
                if(!this.validateUser(input)) valid = false
            }
            valid = true
        }
        return valid
    }

    validateUser(field) {
        const user = field.value
        let valid = true

        if(user.length < 3 || user.length > 12) {
            this.createError(field, `Usuário deverá ter entre 3 e 12 caracteres`)
            valid = false
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Usuário só poderá conter letras e/ou números')
        }
    }


    createError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }

    validateCPF(field) {
        const cpf = new ValidaCPF(field.value)
        if(!cpf.valida()) {
            this.createError(field, 'CPF inválido')
            return false
        }
        return true
    }
    
}

const valida = new ValidaForm()
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    valida() {
        
    }
}

const cpf = new ValidaCPF('070.987.720-03')
console.log(cpf.valida())
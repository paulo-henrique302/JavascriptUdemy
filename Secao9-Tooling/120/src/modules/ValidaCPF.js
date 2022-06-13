export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.eSequencia()) return false
        this.geraNovoCpf()
        
        return this.novoCPF === this.cpfLimpo

    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf() {
        // sem os dígitos
        const cpfSemDig = this.cpfLimpo.slice(0, -2)
        const dig1 = ValidaCPF.geraDigito(cpfSemDig)
        const dig2 = ValidaCPF.geraDigito(cpfSemDig + dig1)
        this.novoCPF = cpfSemDig + dig1 + dig2
    }

    //  o método geraDigito(cpf) N.Ã.O. utiliza a palavra this, logo não é restrito à instância. Logo pode ser static!

    static geraDigito(cpfSemDig) {
        let total = 0
        let reverso = cpfSemDig.length + 1
        
        for(let stringNum of cpfSemDig) {
            total += reverso * Number(stringNum)
            reverso -- 
        } 
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
}

console.log('Success import')


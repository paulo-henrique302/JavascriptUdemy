import ValidaCPF from './ValidaCPF'

export default class GeraCPF {

    rand(min=100000000, max=999999999) {
        return String(Math.floor(Math.random()* (max-min) + min))
    }

    formatado(cpf) {
        return (
        cpf.slice(0,3) + '.' + 
        cpf.slice(3,6) + '.' + 
        cpf.slice(6,9) + '-' + 
        cpf.slice(9,11)
        )
    }

    geraNovoCpf() {
        const cpfSemDig = this.rand()
        const dig1 = ValidaCPF.geraDigito(cpfSemDig)
        const dig2 = ValidaCPF.geraDigito(cpfSemDig+dig1)
        const novoCPF = cpfSemDig + dig1 + dig2
        return this.formatado(novoCPF)
    }

}
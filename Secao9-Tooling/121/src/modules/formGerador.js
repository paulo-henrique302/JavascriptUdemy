import geraSenha from './gerador'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caract')
const addNumeros = document.querySelector('.add-num')
const maiusculas = document.querySelector('.check-maiusc')
const minusculas = document.querySelector('.check-minusc')
const simbolos = document.querySelector('.check-simb')
const botao = document.querySelector('.btn-gerar')

export default () => {
    botao.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    return geraSenha(
        qtdCaracteres.value,
        maiusculas.checked,
        minusculas.checked,
        addNumeros.checked,
        simbolos.checked
    ) || "Nada selecionado"

}
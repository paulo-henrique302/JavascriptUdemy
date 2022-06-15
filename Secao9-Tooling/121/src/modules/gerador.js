const rand = (min, max) => Math.floor(Math.random() *(max-min) + min)

const symbols = ['!','#','$','%','&','(',')','*', '+','-','?', '@','{', '}', '~']

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String(rand(1, 10))
const geraSimbolo = () => symbols[rand(0, symbols.length)]

export default function geraSenha(qtd, maisc, minusc, num, simb) {
    const senhaArray = []
    qtd = Number(qtd)
    
    for(let i=0; i< qtd; i++) {
        if (maisc) senhaArray.push(geraMaiuscula())
        if (minusc) senhaArray.push(geraMinuscula())
        if (num) senhaArray.push(geraNumero())
        if (simb) senhaArray.push(geraSimbolo()) 
    }
    return senhaArray.join('').slice(0, qtd)
}

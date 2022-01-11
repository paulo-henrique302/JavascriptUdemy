const print = function(text) {
    console.log(text)
}

function execFunc(func) {
    func('Hello World')
}

execFunc(print) // functions são First-class Objects -> podem ser enviadas como argumento de outras funções

const obj = {
    falar: function() { // declarção clássica
        console.log('falando...')
    },
    saudacao() { // declaração moderna
        console.log('Olá, seja bem-vindo...')
    }

}

obj.falar()
obj.saudacao()
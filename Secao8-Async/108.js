function rand(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function espera(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

espera("frase 1", rand(1000, 3000))
    .then(resposta => {
        console.log(resposta)
        return espera('frase 2', rand(1000,3000))
    })
    .then(resposta => {
        console.log(resposta)
        return espera(10, rand(1000, 3000))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(e=> {
        console.log('ERRO: ', e)
    })

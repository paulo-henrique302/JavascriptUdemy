function rand(min, max) {
    return Math.floor(Math.random()*(max-min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                 reject('BAD VALUE')
                 return
                }
            resolve(msg)
        }, tempo);
    })
}

// const promises = [
    
//     espera('Promise 1', rand(1000, 3000)),
//     espera('Promise 2', rand(1000, 4000)),
//     espera('Promise 3', rand(1000, 5000)),
//     espera(1000, rand(1000, 1100)),
    
// ]

function baixaPag() {
    const cache = true
    if(cache) {
        return Promise.reject('Pág em cache')
    } else {
        return espera("Baixado", rand(500, 1000))
    }
}

baixaPag()
    .then(dadosPag => {console.log(dadosPag)})
    .catch(erro => {console.log(erro)})
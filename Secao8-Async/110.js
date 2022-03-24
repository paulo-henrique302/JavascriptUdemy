// async e await

function rand(min=1, max=5) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random()*(max-min)+min)
}


function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject("ERRO -> Diferente de string")
                return
            }
            resolve(msg)
            return
        }, tempo);
    })
}

async function executa() {
    try {
        const fase1 = await espera('Fase 1', rand())
        console.log(fase1)
        const fase2 = await espera('Fase 2', rand())
        console.log(fase2)
        const fase3 = await espera('Fase 3', rand())
        console.log(fase3)
    }
    catch(error) {
        console.log(error)
    }
}

executa()
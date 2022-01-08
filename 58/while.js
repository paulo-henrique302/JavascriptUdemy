function random(min, max) {
    return Math.floor(Math.random()* (max-min) + min)
}

const min = 1
const max = 50
let rand = 10

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

do {
    rand = random(min, max) // primeiro o do while executa e depois checa
   // rand=10-> printa '10': do while obrigatoriamente executa depois checa
    console.log(rand)
} while(rand !== 10)

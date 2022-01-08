const n = []

for(let i = 1; i<= 10; i++) {
    n.push(i)
}

for(let numero of n) {

    if(numero===2) continue // pula para a próx
    if(numero === 5) continue 

    if (numero === 7) {
        console.log('7 encontrado. Encerrando')    
        break 
    }

    console.log(numero)

}
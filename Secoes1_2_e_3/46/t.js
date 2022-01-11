const tresHoras = 60 * 60 * 3 * 1000 // 60min x 60 seg x 3 h x 1000 ms
const data = new Date(0 + tresHoras) // marco-zero do Unix = Timestamp Unix = 01/01/1970; soma-se 3h pois estamos em GMT-3
console.log(data.toString()) // 01/01/1970

const newDate = new Date(2022, 3, 20, 15, 14, 27, 500) // 20/04/2022 às 15h 14min 27s 500ms
console.log(newDate.toString())

const stringDate = new Date('2022-04-20 15:14:27')
console.log('Dia ', stringDate.getDate())
console.log('Mês ', stringDate.getMonth()+1) // mês começa do zero
console.log('Ano ', stringDate.getFullYear())
console.log('Hora ', stringDate.getHours())
console.log('Minuto ', stringDate.getMinutes())
console.log('Dia da semana ', stringDate.getDay()) // domingo = zero, sábado = 6

// Datas podem ser salvas apenas como milésimos de segundos contados após o timestamp Unix

console.log(Date.now()) // 1641063482323 = 01/01/2022 15h58min

const agora = new Date(1641063482323)

console.log(`Data de hoje: ${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`)


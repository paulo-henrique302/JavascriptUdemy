const data = new Date()
let diaSemana = data.getDay()


function getWeekDay(diaSemana) {
    let diaTexto;
    switch(diaSemana) {
        case 0:
            diaTexto = 'Domingo'
            return diaTexto
        case 1:
            diaTexto = 'Segunda'
            return diaTexto
        case 2:
            diaTexto = 'Terça'
            return diaTexto
        case 3:
            diaTexto = 'Quarta'
            return diaTexto
        case 4:
            diaTexto = 'Quinta'
            return diaTexto
        case 5:
            diaTexto = 'Sexta'
            return diaTexto
        case 6:
            diaTexto = 'Sábado'
            return diaTexto

            default:
            diaTexto = 'Erro'
    }
    return diaTexto
}

const weekDayText = getWeekDay(diaSemana)

console.log(weekDayText)
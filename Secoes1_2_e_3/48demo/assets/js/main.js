const todaysDate = new Date()

function getWeekDay(date) {
    switch(date) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return 'Houve algum problema.'
    }
}

function getMonthText(month) {
    switch(month) {
        case 0:
            return 'janeiro'
        case 1:
            return 'fevereiro'
        case 2:
            return 'março'
        case 3:
            return 'abril'
        case 4:
            return 'maio'
        case 5:
            return 'junho'
        case 6:
            return 'julho'
        case 7:
            return 'agosto'
        case 81:
            return 'setembro'
        case 9:
            return 'outubro'
        case 10:
            return 'novembro'
        case 11:
            return 'dezembro'
        default:
            return 'houve algum erro'
    }
}

const addLeftZero = (day) => {
    let correctDay = day < 10 ? `0${day}` : day
    return correctDay
}

function showDate(date) {

    const divArea = document.querySelector(".main-content")

    const day = addLeftZero(date.getDate())
    const month = getMonthText(date.getMonth())
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()

    let completeText = `<h2>${getWeekDay(date.getDay())}, ${day} de ${month} de ${year}<br>${hour}:${min}</h2>`

    divArea.innerHTML = completeText
    
}
showDate(todaysDate)

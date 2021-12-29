function detect() {
    const form = document.querySelector(".form")
  
    // form.onsubmit = (evento) => {
    //     console.log(evento)
    //     evento.preventDefault()
    //     alert(1)
    // } 

    function recebeEventoForm(evento) {
        evento.preventDefault()
        console.log('não foi envia')
    }

    form.addEventListener('submit', recebeEventoForm)

}

detect()

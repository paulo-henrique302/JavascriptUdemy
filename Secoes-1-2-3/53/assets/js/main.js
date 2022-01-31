const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

function addToHTML() {
    const mainDiv = document.querySelector('div')
    
    for(let i=0; i < elementos.length; i++) {
        mainDiv.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].texto}>`
    }
}

// const a = document.querySelector('div')

// a.innerHTML += `<${elementos[0].tag}>${elementos[0].texto}</${elementos[0].tag}>`

addToHTML()
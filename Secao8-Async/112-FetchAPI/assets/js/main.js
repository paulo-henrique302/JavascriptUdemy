// const request = obj => {
//     return new Promise((resolve, reject) => {
//         // xhr <=> Xml Http Request
//         const xhr = new XMLHttpRequest()
//         //      'GET'/'POST'  'URL'  'ASYNC?'
//         xhr.open(obj.method, obj.url, true)
//         xhr.send()

//         xhr.addEventListener('load', (e) => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }

document.addEventListener('click', e=> {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPag(el)
    }
})

async function carregaPag(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)

        if(response.status !== 200) throw new Error('Erro - DIFERENTE DE 200')

        const html = await response.text()
        carregaResultado(html) 
        
    } catch (e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}


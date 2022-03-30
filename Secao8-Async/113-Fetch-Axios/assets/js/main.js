// O método fetch () tem um argumento obrigatório, o caminho para o recurso que deseja obter
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => loadOnScreen(json))

axios('pessoas.json')
    .then(resposta => loadOnScreen(resposta.data))

function loadOnScreen(json) {
    
    const table = document.createElement('table')

    for(pessoa of json) {
        
        const tr = document.createElement('tr')
        let td1 = document.createElement('td')

        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        table.appendChild(tr)
    }

    const result = document.querySelector('.resultado')
    result.appendChild(table)

}
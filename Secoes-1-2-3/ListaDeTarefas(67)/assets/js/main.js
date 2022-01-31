const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    return document.createElement('li')
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return // não exececuta caso o input esteja vazio.
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus() // js irá inserir o foco no <input>
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Clique para apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return // não exececuta caso o input esteja vazio.
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const elemento = e.target
   
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // trim remove ultimo espaço sobrando
        listaTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDetarefas = JSON.parse(tarefas)

    for(let tarefa of listaDetarefas) {
        criaTarefa(tarefa)
    }

}

adicionaTarefasSalvas()
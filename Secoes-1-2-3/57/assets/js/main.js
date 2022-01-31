const divParagrafos = document.querySelector('.paragrafos')
const nodeListPTags = divParagrafos.querySelectorAll('p')

const bodyStyles = getComputedStyle(document.body)
const bodyBackgroundColor = bodyStyles.backgroundColor

for(let paragrafo of nodeListPTags) {
    paragrafo.style.backgroundColor = bodyBackgroundColor
    paragrafo.style.color = '#FFFF'
}
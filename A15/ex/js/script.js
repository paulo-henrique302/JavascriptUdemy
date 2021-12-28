const numero = Number(prompt("Digite um número"))
const numTitulo = document.getElementById("numero-titulo")
let texto = document.getElementById("texto")

numTitulo.innerHTML = numero
texto.innerHTML = ''
texto.innerHTML += `<p>Raíz quadrada: ${numero **0.5} </p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(Number.parseFloat(numero))} </p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`

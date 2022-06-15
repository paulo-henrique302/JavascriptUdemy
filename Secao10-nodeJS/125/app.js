// console.log(__filename) nome do arquivo atual
// console.log(__dirname) nome da pasta atual
// ambos são os caminhos absolutos
const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))
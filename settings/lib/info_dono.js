const fs = require('fs')
const colors = require('colors')
const dono = (prefix, NickDono, numerodono_ofc, NomeDoBot, pushname, sender) => {
return `Opa meu mano ${pushname}!*
*Meu dono é o ’${NickDono}   segue abaixo o número dele caso vc queria trocar uma ideia com ele🫠*

wa.me/${numerodono_ofc}
`}

exports.dono = dono
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
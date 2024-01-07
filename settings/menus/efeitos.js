const fs = require('fs')
const colors = require('colors')
const efeitosimg = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {
 
return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐃𝐄-𝐄𝐅𝐄𝐈𝐓𝐎𝐒✰⃟⃟き
┃│             *${tempo}*
┃│✰ ⋟ *BOT:* *${NomeDoBot}*
┃│✰ ⋟ *GRUPO:* *${groupNome}*
┃│✰ ⋟ *DATA:* *${data1}*
┃│✰ ⋟ *HORA:* *${hora1}*
┃│✰ ⋟ *MEMBROS:* *${somembros.length}*
┃│✰ ⋟ *ADMINS:* *${groupAdmins.length}*
┃│✰ ⋟ *TOTAL:* *${puxarInfo.participants.length} PARTICIPANTES*
╭┤✰ ⋟ *USUÁRIO:* *${pushname}*
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤✰ ⋟ ${prefix}Comunismo (marcar)-(img)
┃│✰ ⋟ ${prefix}Bolsonaro (marcar)-(img)
┃│✰ ⋟ ${prefix}Bnw (marcar)-(img)
┃│✰ ⋟ ${prefix}Beautiful (marcar)-(img)
┃│✰ ⋟ ${prefix}Blur (marcar)-(img)
┃│✰ ⋟ ${prefix}Affect (marcar)-(img)
┃│✰ ⋟ ${prefix}Del (marcar)-(img)
┃│✰ ⋟ ${prefix}Circle (marcar)-(img)
┃│✰ ⋟ ${prefix}Beautiful (marcar)-(img)
┃│✰ ⋟ ${prefix}Dither (marcar)-(img)
┃│✰ ⋟ ${prefix}Facepalm (marcar)-(img)
┃│✰ ⋟ ${prefix}Invert (marcar)-(img)
┃│✰ ⋟ ${prefix}Lgbt (marcar)-(img)
┃│✰ ⋟ ${prefix}Magik (marcar)-(img)
┃│✰ ⋟ ${prefix}Rotate (marcar)-(img)
┃│✰ ⋟ ${prefix}Rip (marcar)-(img)
┃│✰ ⋟ ${prefix}Jail (marcar)-(img)
┃│✰ ⋟ ${prefix}Trash (marcar)-(img)
┃│✰ ⋟ ${prefix}Pixelate (marcar)-(img)
┃│✰ ⋟ ${prefix}Sepia (marcar)-(img)
┃│✰ ⋟ ${prefix}Wanted (marcar)-(img) 
┃│✰ ⋟ ${prefix}Wasted (marcar)-(img) 
┃│✰ ⋟ ${prefix}Animeia (marcar)-(img)
┃│✰ ⋟ ${prefix}Zombieia (marcar)-(img)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.efeitosimg = efeitosimg
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
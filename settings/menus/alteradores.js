const fs = require('fs')
const colors = require('colors')
const alteradores = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {


return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒✰⃟⃟き
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
╭┤き⃟✰𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐕𝐈𝐃𝐄𝐎✰⃟⃟き
┃│✰ ⋟ ${prefix}Videolento (marca)
┃│✰ ⋟ ${prefix}Videorapido (marca)
┃│✰ ⋟ ${prefix}Videocontrario (marca)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐋𝐓𝐄𝐑𝐀𝐑-𝐀𝐔𝐃𝐈𝐎✰⃟⃟き
┃│✰ ⋟ ${prefix}Audiolento (marca)
┃│✰ ⋟ ${prefix}Audiorapido (marca)
┃│✰ ⋟ ${prefix}Grave (marca)
┃│✰ ⋟ ${prefix}Grave2 (marca)
┃│✰ ⋟ ${prefix}Esquilo (marca)
┃│✰ ⋟ ${prefix}Estourar (marca)
┃│✰ ⋟ ${prefix}Bass (marca)
┃│✰ ⋟ ${prefix}Bass2 (marca)
┃│✰ ⋟ ${prefix}Vozmenino (marca)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.alteradores = alteradores
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
const fs = require('fs')
const colors = require('colors')
const menu18 = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {

return`

╭═══════════════════ ⪩
╰╮き⃟🔞𝐌𝐄𝐍𝐔 18🔞⃟⃟き
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
╭┤🔞 ⋟ ${prefix}Pornvid
┃│🔞 ⋟ ${prefix}Only2
┃│🔞 ⋟ ${prefix}Only3
┃│🔞 ⋟ ${prefix}Only4
┃│🔞 ⋟ ${prefix}Only5
┃│🔞 ⋟ ${prefix}Only6
┃│🔞 ⋟ ${prefix}Only7
┃│🔞 ⋟ ${prefix}Only8
┃│🔞 ⋟ ${prefix}Only9
┃│🔞 ⋟ ${prefix}Only10
┃│🔞 ⋟ ${prefix}Only11
┃│🔞 ⋟ ${prefix}Only12
┃│🔞 ⋟ ${prefix}Plaq1 ( texto )
┃│🔞 ⋟ ${prefix}Plaq2 ( texto )
┃│🔞 ⋟ ${prefix}Plaq3 ( texto )
┃│🔞 ⋟ ${prefix}Plaq4 ( texto )
┃│🔞 ⋟ ${prefix}Plaq5 ( texto )
┃│🔞 ⋟ ${prefix}Plaq6 ( texto )
┃│🔞 ⋟ ${prefix}Plaq7 ( texto )
┃│🔞 ⋟ ${prefix}Png1
┃│🔞 ⋟ ${prefix}Png2
┃│🔞 ⋟ ${prefix}Png3
┃│🔞 ⋟ ${prefix}Png4
┃│🔞 ⋟ ${prefix}Png5
┃│🔞 ⋟ ${prefix}Png6
┃│🔞 ⋟ ${prefix}Png7
┃│🔞 ⋟ ${prefix}Png8
┃│🔞 ⋟ ${prefix}Png9
┃│🔞 ⋟ ${prefix}Png10
┃│🔞 ⋟ ${prefix}Png11
┃│🔞 ⋟ ${prefix}Png12
┃│🔞 ⋟ ${prefix}Png13
┃│🔞 ⋟ ${prefix}Png14
┃│🔞 ⋟ ${prefix}Png15
┃│🔞 ⋟ ${prefix}Png16
┃│🔞 ⋟ ${prefix}Png17
┃│🔞 ⋟ ${prefix}Png18
┃│🔞 ⋟ ${prefix}Png19
┃│🔞 ⋟ ${prefix}Png20
┃│🔞 ⋟ ${prefix}Png21
┃│🔞 ⋟ ${prefix}Png22
┃│🔞 ⋟ ${prefix}Png23
┃│🔞 ⋟ ${prefix}Png12
┃│🔞 ⋟ ${prefix}Png24
┃│🔞 ⋟ ${prefix}Png25
┃│🔞 ⋟ ${prefix}Png26
┃│🔞 ⋟ ${prefix}Png27
┃│🔞 ⋟ ${prefix}Png28
┃│🔞 ⋟ ${prefix}Png28
┃│🔞 ⋟ ${prefix}Png29
┃│🔞 ⋟ ${prefix}Png30
┃│🔞 ⋟ ${prefix}Png31
┃│🔞 ⋟ ${prefix}Png32
┃│🔞 ⋟ ${prefix}Png33
┃│🔞 ⋟ ${prefix}Png34
┃╰══ ⪨
╰═══════════════════ ⪨ 

`}

exports.menu18 = menu18;
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})

const fs = require('fs')
const colors = require('colors')
const menu2 = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {

return`

╭═══════════════════ ⪩
╰╮き⃟✰🔞𝐌𝐄𝐍𝐔2🔞✰⃟⃟き
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
╰═══════════════════ ⪩
╭═══════════════════ ⪩
┃│き⃟✰🔞𝐌𝐄𝐍𝐔 𝐇𝐄𝐍𝐓𝐀𝐈 𝟐🔞✰⃟⃟き
╰╦══════════════════ ⪨
╭┤✰ ⋟ ${prefix}loli
┃│✰ ⋟ ${prefix}trap
┃│✰ ⋟ ${prefix}ass
┃│✰ ⋟ ${prefix}ahegao
┃│✰ ⋟ ${prefix}bdsm
┃│✰ ⋟ ${prefix}cuckold
┃│✰ ⋟ ${prefix}cum
┃│✰ ⋟ ${prefix}ero
┃│✰ ⋟ ${prefix}femdom
┃│✰ ⋟ ${prefix}foot
┃│✰ ⋟ ${prefix}gangbang
┃│✰ ⋟ ${prefix}ganbganb
┃│✰ ⋟ ${prefix}glasses
┃│✰ ⋟ ${prefix}nekos
┃│✰ ⋟ ${prefix}neko2
┃│✰ ⋟ ${prefix}jahy
┃│✰ ⋟ ${prefix}masturbation
┃│✰ ⋟ ${prefix}orgy
┃│✰ ⋟ ${prefix}panties
┃│✰ ⋟ ${prefix}pussy
┃│✰ ⋟ ${prefix}boobs
┃│✰ ⋟ ${prefix}tentacles
┃│✰ ⋟ ${prefix}thighs
┃│✰ ⋟ ${prefix}yuri
┃│✰ ⋟ ${prefix}zettai
┃│✰ ⋟ ${prefix}kasedaiki
╰═══════════════════ ⪩
╭═══════════════════ ⪩
┃│き⃟✰🔞𝐌𝐄𝐍𝐔 𝐕𝐀𝐙𝐀𝐃𝐎𝐒🔞✰⃟⃟き
╰╦══════════════════ ⪨
┃│✰ ⋟ ${prefix}amador
┃│✰ ⋟ ${prefix}onlyfans
┃│✰ ⋟ ${prefix}porno
┃│✰ ⋟ ${prefix}egrilvideo
┃│✰ ⋟ ${prefix}aline
┃│✰ ⋟ ${prefix}alifox
┃│✰ ⋟ ${prefix}alycai
┃│✰ ⋟ ${prefix}amichan
┃│✰ ⋟ ${prefix}aninha
┃│✰ ⋟ ${prefix}baby
┃│✰ ⋟ ${prefix}belle
┃│✰ ⋟ ${prefix}brenda
┃│✰ ⋟ ${prefix}cami
┃│✰ ⋟ ${prefix}clowniac
┃│✰ ⋟ ${prefix}galvao
┃│✰ ⋟ ${prefix}giovanna
┃│✰ ⋟ ${prefix}isadora
┃│✰ ⋟ ${prefix}isa
┃│✰ ⋟ ${prefix}lay
┃│✰ ⋟ ${prefix}leticia
┃│✰ ⋟ ${prefix}marina
┃│✰ ⋟ ${prefix}maru
┃│✰ ⋟ ${prefix}princesa
┃│✰ ⋟ ${prefix}meadinha
┃│✰ ⋟ ${prefix}nath
┃│✰ ⋟ ${prefix}nega
┃│✰ ⋟ ${prefix}polonesa
┃│✰ ⋟ ${prefix}pornofot
┃│✰ ⋟ ${prefix}rute
┃│✰ ⋟ ${prefix}vita
┃│✰ ⋟ ${prefix}carnie
┃│✰ ⋟ ${prefix}egril
┃│✰ ⋟ ${prefix}neter
┃╰══ ⪨
╰═══════════════════ ⪨ 

`}

exports.menu2 = menu2;
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
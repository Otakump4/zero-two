const fs = require('fs')
const colors = require('colors')
const menuhentai = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {

return`

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔 𝐇𝐄𝐍𝐓𝐀𝐈✰⃟⃟き
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
╭┤✰ ⋟ ${prefix}Ass2
┃│✰ ⋟ ${prefix}Ahegao2
┃│✰ ⋟ ${prefix}Bdsm2
┃│✰ ⋟ ${prefix}Blowjob
┃│✰ ⋟ ${prefix}Blowjob2
┃│✰ ⋟ ${prefix}Blowjob3
┃│✰ ⋟ ${prefix}Cuckold2
┃│✰ ⋟ ${prefix}Cum2
┃│✰ ⋟ ${prefix}Ero2
┃│✰ ⋟ ${prefix}Femdom2
┃│✰ ⋟ ${prefix}Foot2
┃│✰ ⋟ ${prefix}Gangbang2
┃│✰ ⋟ ${prefix}Glasses2
┃│✰ ⋟ ${prefix}Hentai
┃│✰ ⋟ ${prefix}Hentai2
┃│✰ ⋟ ${prefix}Hentai3
┃│✰ ⋟ ${prefix}Hentai4
┃│✰ ⋟ ${prefix}Hentaigay
┃│✰ ⋟ ${prefix}Jahy2
┃│✰ ⋟ ${prefix}Lolis2
┃│✰ ⋟ ${prefix}Hentaimanga
┃│✰ ⋟ ${prefix}Hentaimanga2
┃│✰ ⋟ ${prefix}Masturbation
┃│✰ ⋟ ${prefix}Nsfwlolis2
┃│✰ ⋟ ${prefix}Nsfwneko2
┃│✰ ⋟ ${prefix}Orgy2
┃│✰ ⋟ ${prefix}Panties2
┃│✰ ⋟ ${prefix}Pussy2
┃│✰ ⋟ ${prefix}Shotas2
┃│✰ ⋟ ${prefix}Tentacles2
┃│✰ ⋟ ${prefix}Thighsw
┃│✰ ⋟ ${prefix}Zettaie
┃│✰ ⋟ ${prefix}Naruto
┃│✰ ⋟ ${prefix}Konosuba
┃│✰ ⋟ ${prefix}Jujutsukaisen
┃│✰ ⋟ ${prefix}Lesbian
┃│✰ ⋟ ${prefix}Yuri
┃│✰ ⋟ ${prefix}Milf
┃│✰ ⋟ ${prefix}Dragonmaid
┃│✰ ⋟ ${prefix}Azurlane
┃│✰ ⋟ ${prefix}Rezero
┃│✰ ⋟ ${prefix}Overlord
┃│✰ ⋟ ${prefix}Blackclover
┃│✰ ⋟ ${prefix}Dbz
┃│✰ ⋟ ${prefix}Tezt
┃│✰ ⋟ ${prefix}Peshub
┃│✰ ⋟ ${prefix}Hentai-cosplay
┃│✰ ⋟ ${prefix}Hentai-cosplay2
┃╰══ ⪨
╰═══════════════════ ⪨ 

`}

exports.menuhentai = menuhentai;
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})

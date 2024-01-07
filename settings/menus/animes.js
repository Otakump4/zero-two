const fs = require('fs')
const colors = require('colors')
const menuanimes = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {

return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐃𝐄-𝐀𝐍𝐈𝐌𝐄𝐒✰⃟⃟き
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
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐄𝐃𝐈𝐓𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Editanime -random
┃│✰ ⋟ ${prefix}Editanime -bleach
┃│✰ ⋟ ${prefix}Editanime -chainsaw
┃│✰ ⋟ ${prefix}Editanime -dragonball
┃│✰ ⋟ ${prefix}Editanime -kimetsu
┃│✰ ⋟ ${prefix}Editanime -jujutsu
┃│✰ ⋟ ${prefix}Editanime -naruto
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐍𝐈𝐌𝐄𝐒-𝐈𝐌𝐀𝐆𝐄𝐌✰⃟⃟き
┃│✰ ⋟ ${prefix}Animeimage -cosplay
┃│✰ ⋟ ${prefix}Animeimage -waifu
┃│✰ ⋟ ${prefix}Animeimage -loli
┃│✰ ⋟ ${prefix}Animeimage -shota
┃│✰ ⋟ ${prefix}Animeimage -shinomiya
┃│✰ ⋟ ${prefix}Animeimage -yotsuba
┃│✰ ⋟ ${prefix}Animeimage -yumeko
┃│✰ ⋟ ${prefix}Animeimage -tejina
┃│✰ ⋟ ${prefix}Animeimage -chiho
┃│✰ ⋟ ${prefix}Animeimage -kaori
┃│✰ ⋟ ${prefix}Animeimage -boruto
┃│✰ ⋟ ${prefix}Animeimage -shizuka
┃│✰ ⋟ ${prefix}Animeimage -kaga
┃│✰ ⋟ ${prefix}Animeimage -kotori
┃│✰ ⋟ ${prefix}Animeimage -mikasa
┃│✰ ⋟ ${prefix}Animeimage -akiyama
┃│✰ ⋟ ${prefix}Animeimage -gremory
┃│✰ ⋟ ${prefix}Animeimage -izuku
┃│✰ ⋟ ${prefix}Animeimage -shina
┃│✰ ⋟ ${prefix}Animeimage -shinka
┃│✰ ⋟ ${prefix}Animeimage -yuri
┃│✰ ⋟ ${prefix}Animeimage -eba
┃│✰ ⋟ ${prefix}Animeimage -erza
┃│✰ ⋟ ${prefix}Animeimage -elaina
┃│✰ ⋟ ${prefix}Animeimage -hinata
┃│✰ ⋟ ${prefix}Animeimage -naruto
┃│✰ ⋟ ${prefix}Animeimage -minato
┃│✰ ⋟ ${prefix}Animeimage -sagari
┃│✰ ⋟ ${prefix}Animeimage -nezuko
┃│✰ ⋟ ${prefix}Animeimage -rize
┃│✰ ⋟ ${prefix}Animeimage -anna
┃│✰ ⋟ ${prefix}Animeimage -deidara
┃│✰ ⋟ ${prefix}Animeimage -asuna
┃│✰ ⋟ ${prefix}Animeimage -ayuzawa
┃│✰ ⋟ ${prefix}Animeimage -emilia
┃│✰ ⋟ ${prefix}Animeimage -chitoge
┃│✰ ⋟ ${prefix}Animeimage -hestia
┃│✰ ⋟ ${prefix}Animeimage -inori
┃│✰ ⋟ ${prefix}Animeimage -itachi
┃│✰ ⋟ ${prefix}Animeimage -madara
┃│✰ ⋟ ${prefix}Animeimage -sakura
┃│✰ ⋟ ${prefix}Animeimage -sasuke
┃│✰ ⋟ ${prefix}Animeimage -tsunade
┃│✰ ⋟ ${prefix}Animeimage -onepiece
┃│✰ ⋟ ${prefix}Animeimage -mobil
┃│✰ ⋟ ${prefix}Animeimage -montor
┃│✰ ⋟ ${prefix}Animeimage -keneki
┃│✰ ⋟ ${prefix}Animeimage -megumin
┃│✰ ⋟ ${prefix}Animeimage -toukachan
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.menuanimes = menuanimes
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
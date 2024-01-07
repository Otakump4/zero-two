const fs = require('fs')
const colors = require('colors')
const menualeatorio = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => { 

return`

╭═══════════════════ ⪩
╰╮き⃟😵‍💫 𝐌𝐄𝐍𝐔 𝐀𝐋𝐄𝐀𝐓Ó𝐑𝐈𝐎 😵‍💫⃟⃟き
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
╭┤💫 ⋟ ${prefix}Editaleatoria
┃┤💫 ⋟ ${prefix}Memes
┃┤💫 ⋟ ${prefix}Memesvid
┃┤💫 ⋟ ${prefix}Memes1
┃┤💫 ⋟ ${prefix}Memes2
┃┤💫 ⋟ ${prefix}Shitpost
┃┤💫 ⋟ ${prefix}Shitpost2
┃┤💫 ⋟ ${prefix}Fotoperfil
┃┤💫 ⋟ ${prefix}Fotoperfil2
┃┤💫 ⋟ ${prefix}Fotoperfil3
┃┤💫 ⋟ ${prefix}Fotoperfil4
┃┤💫 ⋟ ${prefix}Wallpaperamarelo
┃┤💫 ⋟ ${prefix}Wallpaperanimes
┃┤💫 ⋟ ${prefix}Wallpaperazul
┃┤💫 ⋟ ${prefix}Wallpaperazulclaro
┃┤💫 ⋟ ${prefix}Wallpaperciano
┃┤💫 ⋟ ${prefix}Wallpapercinza
┃┤💫 ⋟ ${prefix}Wallpaperdark
┃┤💫 ⋟ ${prefix}Wallpaperlaranja
┃┤💫 ⋟ ${prefix}Wallpaperlarnja
┃┤💫 ⋟ ${prefix}Wallpapermarrom
┃┤💫 ⋟ ${prefix}Wallpaperosa
┃┤💫 ⋟ ${prefix}Wallpaperoxo
┃┤💫 ⋟ ${prefix}Wallpaperpreto
┃┤💫 ⋟ ${prefix}Wallpapers4k
┃┤💫 ⋟ ${prefix}Wallpapersbranco
┃┤💫 ⋟ ${prefix}Wallpapersmulti
┃┤💫 ⋟ ${prefix}Wallpaperverde
┃┤💫 ⋟ ${prefix}Wallpapervermelho
┃┤💫 ⋟ ${prefix}Packsticker
┃┤💫 ⋟ ${prefix}Packstickeramor
┃┤💫 ⋟ ${prefix}Packstickeranime
┃┤💫 ⋟ ${prefix}Packstickeranimais
┃┤💫 ⋟ ${prefix}Packstickebbs
┃┤💫 ⋟ ${prefix}Packstickedesenho
┃┤💫 ⋟ ${prefix}Packstickeremoji
┃┤💫 ⋟ ${prefix}Packstickegarotas
┃┤💫 ⋟ ${prefix}Packstickermemes
┃┤💫 ⋟ ${prefix}Packstickergta
┃┤💫 ⋟ ${prefix}Stickeralet
┃┤💫 ⋟ ${prefix}Stickeralet2
┃┤💫 ⋟ ${prefix}Stickeralet3
┃┤💫 ⋟ ${prefix}Uzui
┃┤💫 ⋟ ${prefix}Tokito
┃┤💫 ⋟ ${prefix}Tomioka
┃┤💫 ⋟ ${prefix}Tanjiro
┃┤💫 ⋟ ${prefix}Tamayo
┃┤💫 ⋟ ${prefix}Sanemi
┃┤💫 ⋟ ${prefix}Obanai
┃┤💫 ⋟ ${prefix}Nezuko
┃┤💫 ⋟ ${prefix}Muzan
┃┤💫 ⋟ ${prefix}Mitsuri
┃┤💫 ⋟ ${prefix}Kyojuro
┃┤💫 ⋟ ${prefix}Kokushibou
┃┤💫 ⋟ ${prefix}Kanao
┃┤💫 ⋟ ${prefix}Inosuke
┃┤💫 ⋟ ${prefix}Gyutaro
┃┤💫 ⋟ ${prefix}Gyomei
┃┤💫 ⋟ ${prefix}Gyenia
┃┤💫 ⋟ ${prefix}Enmu
┃┤💫 ⋟ ${prefix}Douma
┃┤💫 ⋟ ${prefix}Daki
┃┤💫 ⋟ ${prefix}Aoi
┃┤💫 ⋟ ${prefix}Akaza
┃┤💫 ⋟ ${prefix}Wallpapersatanic
┃┤💫 ⋟ ${prefix}Wallpaperspace
┃┤💫 ⋟ ${prefix}Wallpapercouple
┃┤💫 ⋟ ${prefix}Wallpapertecnologico 
┃┤💫 ⋟ ${prefix}Wallpaperpubg
┃┤💫 ⋟ ${prefix}Wallpapergame
┃┤💫 ⋟ ${prefix}Wallpaperaesthetic
┃┤💫 ⋟ ${prefix}Wallpaperaesthetic2
┃┤💫 ⋟ ${prefix}Wallpaperanime
┃┤💫 ⋟ ${prefix}Wallpaperanime2
┃┤💫 ⋟ ${prefix}Cosplay
┃┤💫 ⋟ ${prefix}Metadinha
┃┤💫 ⋟ ${prefix}Metadinha2
┃╰══ ⪨
╰═══════════════════ ⪨ 

`}

exports.menualeatorio = menualeatorio;
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
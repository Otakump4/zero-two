const fs = require('fs')
const colors = require('colors')
const menupremium = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => { 


return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌✰⃟⃟き
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
╭┤✰ ⋟ ${prefix}Destrava
┃│✰ ⋟ ${prefix}Destrava2
┃│✰ ⋟ ${prefix}Desban1 (Método Desban)
┃│✰ ⋟ ${prefix}Desban2 (Método Desban)
┃│✰ ⋟ ${prefix}Desban3 (Método Desban)
┃│✰ ⋟ ${prefix}Desban4 (Método Desban)
┃│✰ ⋟ ${prefix}Desban5 (Método Desban)
┃│✰ ⋟ ${prefix}Menos1
┃│✰ ⋟ ${prefix}Mtdban
┃│✰ ⋟ ${prefix}Mtddesban
┃│✰ ⋟ ${prefix}Mtddesban2
┃│✰ ⋟ ${prefix}Mtddesban3
┃│✰ ⋟ ${prefix}Txt-desativar10
┃│✰ ⋟ ${prefix}Txt-desativar9
┃│✰ ⋟ ${prefix}Txt-desativar8
┃│✰ ⋟ ${prefix}Txt-desativar7
┃│✰ ⋟ ${prefix}Txt-desativar6
┃│✰ ⋟ ${prefix}Txt-desativar5
┃│✰ ⋟ ${prefix}Txt-desativar4
┃│✰ ⋟ ${prefix}Txt-desativar3
┃│✰ ⋟ ${prefix}Txt-desativar2
┃│✰ ⋟ ${prefix}Txt-desativar1
┃│✰ ⋟ ${prefix}Txt-desban1
┃│✰ ⋟ ${prefix}Txt-desban2
┃│✰ ⋟ ${prefix}Txt-desban3
┃│✰ ⋟ ${prefix}Txt-desban4
┃│✰ ⋟ ${prefix}Txt-desban5
┃│✰ ⋟ ${prefix}Txt-sair-1-1
┃│✰ ⋟ ${prefix}Txt-sair-1-2
┃│✰ ⋟ ${prefix}Mtdhack (Método Hacker)
┃│✰ ⋟ ${prefix}Mtdanoni (Método Esconder IP)
┃│✰ ⋟ ${prefix}Hackandro (Método Hacker)
┃│✰ ⋟ ${prefix}Ddd (DDD)
┃│✰ ⋟ ${prefix}Deepfake
┃│✰ ⋟ ${prefix}GerarCPF
┃│✰ ⋟ ${prefix}Geraremail
┃│✰ ⋟ ${prefix}Gerartelefone
┃│✰ ⋟ ${prefix}Golpef (Golpe Falso)
┃│✰ ⋟ ${prefix}Gerarhbo
┃│✰ ⋟ ${prefix}Gerardisney
┃│✰ ⋟ ${prefix}PremiumList
┃│✰ ⋟ ${prefix}Tinyurl (Link)
┃│✰ ⋟ ${prefix}Cuttly (Link)
┃│✰ ⋟ ${prefix}Criarsite (Tutorial)
┃│✰ ⋟ ${prefix}Bug2 (Arquivo doc bugado)
┃│✰ ⋟ ${prefix}Bitly (Link)
┃│✰ ⋟ ${prefix}Bibliahack (E-Book) 
┃│✰ ⋟ ${prefix}Celular (Nome)
┃│✰ ⋟ ${prefix}Formatocel
┃│✰ ⋟ ${prefix}Scep (Número)
┃│✰ ⋟ ${prefix}Cotacao (Moeda)
┃│✰ ⋟ ${prefix}Sip (Número)
┃│✰ ⋟ ${prefix}Igstalk (@usuário)
┃│✰ ⋟ ${prefix}Instase (Método Seguidores)
┃│✰ ⋟ ${prefix}Virada (Esquema Virada)
┃│✰ ⋟ ${prefix}Zizop ( Clash )
┃│✰ ⋟ ${prefix}Bruxin ( Clash )
┃│✰ ⋟ ${prefix}Roubarpag (link)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Nome (Nome da pessoa)
┃│✰ ⋟ ${prefix}Cpf (Número do cpf tudo junto)
┃│✰ ⋟ ${prefix}Cpf1 (Número do cpf tudo junto)
┃│✰ ⋟ ${prefix}Cpf2 (Número do cpf tudo junto)
┃│✰ ⋟ ${prefix}Cpf3 (Número do cpf tudo junto)
┃│✰ ⋟ ${prefix}Cns
┃│✰ ⋟ ${prefix}Cepall
┃│✰ ⋟ ${prefix}Cnpj1
┃│✰ ⋟ ${prefix}Tel1 (Número do telefone sem 55)
┃│✰ ⋟ ${prefix}Placa1 (Placa)
┃│✰ ⋟ ${prefix}Placa2 (Placa)
┃│✰ ⋟ ${prefix}Placa3 (Placa)
┃│✰ ⋟ ${prefix}Placa4 (Placa)
┃│✰ ⋟ ${prefix}Ip (puxa localização)
╰╦══════════════════ ⪨
╭┤き⃟✰𝐀𝐏𝐊𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌✰⃟⃟き
┃│✰ ⋟ ${prefix}Pobreflix (app de streaming mod)
┃│✰ ⋟ ${prefix}+Doramas (app de streaming coreano)
┃│✰ ⋟ ${prefix}AnimesBrasil (app de streaming animes)
┃│✰ ⋟ ${prefix}Crunchyroll (app de streaming animes mod)
┃│✰ ⋟ ${prefix}Damas (jogo de damas)
┃│✰ ⋟ ${prefix}DoramasLove (app de streaming coreano)
┃│✰ ⋟ ${prefix}GirlWallpapers (app de wallpapers)
┃│✰ ⋟ ${prefix}Gomoku (jogo chinês)
┃│✰ ⋟ ${prefix}HappyMod (app de baixar mods)
┃│✰ ⋟ ${prefix}Hbo (app de streaming HBO+)
┃│✰ ⋟ ${prefix}JapanWallpaper (app de wallpapers)
┃│✰ ⋟ ${prefix}Mflix (app de streaming mod)
┃│✰ ⋟ ${prefix}Pixellplay (app de streaming mod)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.menupremium = menupremium
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
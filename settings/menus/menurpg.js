const fs = require('fs')
const colors = require('colors')
const menurpg = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => { 

return`

╭═══════════════════ ⪩
╰╮き⃟🕹️𝐌𝐄𝐍𝐔 𝐑𝐏𝐆 🕹️⃟⃟き
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
╭┤🕹️ ⋟ ${prefix}Loja
┃┤🕹️ ⋟ ${prefix}Banco
┃┤🕹️ ⋟ ${prefix}Trabalhar
┃┤🕹️ ⋟ ${prefix}Deposita
┃┤🕹️ ⋟ ${prefix}Depoall
┃┤🕹️ ⋟ ${prefix}Saqueall
┃┤🕹️ ⋟ ${prefix}Assaltar
┃┤🕹️ ⋟ ${prefix}Minerardima
┃┤🕹️ ⋟ ${prefix}Minerios
┃┤🕹️ ⋟ ${prefix}Dima
┃┤🕹️ ⋟ ${prefix}Cariciargato
┃┤🕹️ ⋟ ${prefix}Gato
┃┤🕹️ ⋟ ${prefix}Petgato
┃┤🕹️ ⋟ ${prefix}Compragato
┃┤🕹️ ⋟ ${prefix}Comidagato
┃┤🕹️ ⋟ ${prefix}Porcao
┃┤🕹️ ⋟ ${prefix}Top
┃┤🕹️ ⋟ ${prefix}Luta-z
┃┤🕹️ ⋟ ${prefix}Checkhacker
┃┤🕹️ ⋟ ${prefix}Addsaldo
┃┤🕹️ ⋟ ${prefix}Fuguete
┃┤🕹️ ⋟ ${prefix}Namorar
┃┤🕹️ ⋟ ${prefix}Minhadupla
┃┤🕹️ ⋟ ${prefix}Cancelarpedido
┃┤🕹️ ⋟ ${prefix}Prender
┃┤🕹️ ⋟ ${prefix}Treinar
┃┤🕹️ ⋟ ${prefix}Luta
┃┤🕹️ ⋟ ${prefix}Miss
┃┤🕹️ ⋟ ${prefix}Me
┃┤🕹️ ⋟ ${prefix}Level2
┃┤🕹️ ⋟ ${prefix}Equipar-Picareta
┃┤🕹️ ⋟ ${prefix}Desequipar-Picareta
┃┤🕹️ ⋟ ${prefix}Delgf
┃┤🕹️ ⋟ ${prefix}Listacodigos
┃┤🕹️ ⋟ ${prefix}Gerargf
┃┤🕹️ ⋟ ${prefix}Resgatargf
┃┤🕹️ ⋟ ${prefix}Lojas
┃┤🕹️ ⋟ ${prefix}Lojadecavalos
┃┤🕹️ ⋟ ${prefix}Lojadegalos
┃┤🕹️ ⋟ ${prefix}Comprarcavalo
┃┤🕹️ ⋟ ${prefix}Vendercavalo
┃┤🕹️ ⋟ ${prefix}Venderestabulo
┃┤🕹️ ⋟ ${prefix}Avaliarestabulo
┃┤🕹️ ⋟ ${prefix}Comprarestabulo
┃┤🕹️ ⋟ ${prefix}Estabulo
┃┤🕹️ ⋟ ${prefix}Setcavalo
┃┤🕹️ ⋟ ${prefix}Upcavalo
┃┤🕹️ ⋟ ${prefix}Comprarsela
┃┤🕹️ ⋟ ${prefix}Cdcv3
┃┤🕹️ ⋟ ${prefix}Atadura
┃┤🕹️ ⋟ ${prefix}Cavalo
┃┤🕹️ ⋟ ${prefix}Picareta
┃┤🕹️ ⋟ ${prefix}Cartao
┃┤🕹️ ⋟ ${prefix}Hero
┃┤🕹️ ⋟ ${prefix}Pornovid
┃┤🕹️ ⋟ ${prefix}Roupadetrabalho
┃┤🕹️ ⋟ ${prefix}Capacete
┃┤🕹️ ⋟ ${prefix}Sapatos
┃┤🕹️ ⋟ ${prefix}Calça
┃┤🕹️ ⋟ ${prefix}Palitor
┃┤🕹️ ⋟ ${prefix}Pc
┃┤🕹️ ⋟ ${prefix}Cmdinheiro
┃┤🕹️ ⋟ ${prefix}Dima
┃┤🕹️ ⋟ ${prefix}Prender
┃┤🕹️ ⋟ ${prefix}Addmedalhao
┃┤🕹️ ⋟ ${prefix}Checkpro
┃┤🕹️ ⋟ ${prefix}Adddivida
┃┤🕹️ ⋟ ${prefix}Codelist
┃╰══ ⪨
╰═══════════════════ ⪨ 

`}

exports.menurpg = menurpg;
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
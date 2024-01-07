const fs = require('fs')
const colors = require('colors')
const brincadeiras = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {


return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒✰⃟⃟き
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
╭┤き⃟✰𝐉𝐎𝐆𝐎𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Jogodavelha (@Marcar) 
┃│✰ ⋟ ${prefix}Anagrama (1/0)
┃│✰ ⋟ ${prefix}Gartic (1/0)
┃│✰ ⋟ ${prefix}Whatmusic (1/0)
┃│✰ ⋟ ${prefix}Quizanimal (1/0)
┃│✰ ⋟ ${prefix}Enigma (1/0)
┃│✰ ⋟ ${prefix}R-forca (Letra)
┃│✰ ⋟ ${prefix}Resetforca (Resetar)
┃│✰ ⋟ ${prefix}Jogodaforca (Iniciar)
┃│✰ ⋟ ${prefix}Vab (Você prefere?)
┃│✰ ⋟ ${prefix}Eununca (Eu nunca, eu já)
┃│✰ ⋟ ${prefix}Ppt (Pedra/Papel/Tesoura) 
┃│✰ ⋟ ${prefix}Cassino
┃│✰ ⋟ ${prefix}Dado
┃│✰ ⋟ ${prefix}Dado2
┃│✰ ⋟ ${prefix}Apostar (Valor)
┃│✰ ⋟ ${prefix}Pix
┃│✰ ⋟ ${prefix}Transferir (marca @/valor)
┃│✰ ⋟ ${prefix}Pescar
┃│✰ ⋟ ${prefix}Batalhar
┃│✰ ⋟ ${prefix}Abraçar (marca @)
┃│✰ ⋟ ${prefix}Vergonha
┃│✰ ⋟ ${prefix}Churrasco
┃│✰ ⋟ ${prefix}Steal (marca (@))
┃│✰ ⋟ ${prefix}1xbcbets (Valor)
┃│✰ ⋟ ${prefix}Hackear (marca (@))
┃│✰ ⋟ ${prefix}Minerar
┃│✰ ⋟ ${prefix}Mina (coordenada(s))
┃│✰ ⋟ ${prefix}Minado (dificuldade)
┃│✰ ⋟ ${prefix}Minareset (resetar)
┃│✰ ⋟ ${prefix}Mineshelp (info)
┃│✰ ⋟ ${prefix}Minatips (dicas)
┃│✰ ⋟ ${prefix}Akinator (iniciar jogo)
┃│✰ ⋟ ${prefix}Resetaki (resetar akinator)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒✰⃟⃟き
┃│✰ ⋟ ${prefix}Gadometro 
┃│✰ ⋟ ${prefix}Gay (marca (@))
┃│✰ ⋟ ${prefix}Feio (marca (@))
┃│✰ ⋟ ${prefix}Frioecalculista
┃│✰ ⋟ ${prefix}Corno (marca (@))
┃│✰ ⋟ ${prefix}Vesgo (marca (@))
┃│✰ ⋟ ${prefix}Bebado (marca (@))
┃│✰ ⋟ ${prefix}Gostoso (marca (@))
┃│✰ ⋟ ${prefix}Gostosa (marca (@))
┃│✰ ⋟ ${prefix}Beijo (marca (@))
┃│✰ ⋟ ${prefix}Matar (marca (@))
┃│✰ ⋟ ${prefix}Tapa (marca (@))
┃│✰ ⋟ ${prefix}Chute (marca (@))
┃│✰ ⋟ ${prefix}Seboso (marca (@))
┃│✰ ⋟ ${prefix}Sebosa (marca (@))
┃│✰ ⋟ ${prefix}Dogolpe (marca (@))   
┃│✰ ⋟ ${prefix}Desafio
┃│✰ ⋟ ${prefix}Nazista (marca (@))
┃│✰ ⋟ ${prefix}Chance (fale algo) 
┃│✰ ⋟ ${prefix}Surubao (Quantidade) 
┃│✰ ⋟ ${prefix}Casal (Casal do grupo)
┃│✰ ⋟ ${prefix}Quando (Perguntar)
┃│✰ ⋟ ${prefix}Mencionar (fale algo)
┃│✰ ⋟ ${prefix}Death (Nome)
┃│✰ ⋟ ${prefix}Morte2
┃│✰ ⋟ ${prefix}Roleta
┃│✰ ⋟ ${prefix}Lolichan (marca (@))   
┃│✰ ⋟ ${prefix}Fofinha (marca (@))   
┃│✰ ⋟ ${prefix}Fofinho (marca (@))   
┃│✰ ⋟ ${prefix}Fofa (marca (@))   
┃│✰ ⋟ ${prefix}Fofo (marca (@))   
┃│✰ ⋟ ${prefix}Magro (marca (@))   
┃│✰ ⋟ ${prefix}Magra (marca (@))   
┃│✰ ⋟ ${prefix}Gordo (marca (@))   
┃│✰ ⋟ ${prefix}Gorda (marca (@))   
┃│✰ ⋟ ${prefix}Velho (marca (@))   
┃│✰ ⋟ ${prefix}Nãobinario (marca (@))   
┃│✰ ⋟ ${prefix}Hetero (marca (@))   
┃│✰ ⋟ ${prefix}Trans (marca (@))   
┃│✰ ⋟ ${prefix}Lesbica (marca (@))   
┃│✰ ⋟ ${prefix}Pan (marca (@))   
┃│✰ ⋟ ${prefix}Bi (marca (@))   
┃│✰ ⋟ ${prefix}Lgbt+ (marca (@))   
┃│✰ ⋟ ${prefix}Animal (marca (@))   
┃│✰ ⋟ ${prefix}Cachorro (marca (@))   
┃│✰ ⋟ ${prefix}Cadela (marca (@))   
┃│✰ ⋟ ${prefix}Prostituta (marca (@))   
┃│✰ ⋟ ${prefix}Prostituto (marca (@))   
┃│✰ ⋟ ${prefix}Mendiga (marca (@))   
┃│✰ ⋟ ${prefix}Mendigo (marca (@))   
┃│✰ ⋟ ${prefix}Branca (marca (@))   
┃│✰ ⋟ ${prefix}Branco (marca (@))   
┃│✰ ⋟ ${prefix}Chata (marca (@))   
┃│✰ ⋟ ${prefix}Chato (marca (@))   
┃│✰ ⋟ ${prefix}Rica (marca (@))   
┃│✰ ⋟ ${prefix}Rico (marca (@))   
┃│✰ ⋟ ${prefix}Macaco (marca (@))   
┃│✰ ⋟ ${prefix}Macaca (marca (@))   
┃│✰ ⋟ ${prefix}Mamaca (marca (@))   
┃│✰ ⋟ ${prefix}Mamaco (marca (@))   
┃│✰ ⋟ ${prefix}Anarquico (marca (@))   
┃│✰ ⋟ ${prefix}Comunista (marca (@))   
┃│✰ ⋟ ${prefix}Amarela (marca (@))   
┃│✰ ⋟ ${prefix}Amarelo (marca (@))   
┃│✰ ⋟ ${prefix}Puto (marca (@))   
┃│✰ ⋟ ${prefix}Puta (marca (@))   
┃│✰ ⋟ ${prefix}Corna (marca (@))   
┃│✰ ⋟ ${prefix}Linda (marca (@))   
┃│✰ ⋟ ${prefix}Gata (marca (@))   
┃│✰ ⋟ ${prefix}Gatinha (marca (@))   
┃│✰ ⋟ ${prefix}Gatinho (marca (@))   
┃│✰ ⋟ ${prefix}Depressivo (marca (@))   
┃│✰ ⋟ ${prefix}Depressiva (marca (@))   
┃│✰ ⋟ ${prefix}Preguiçoso (marca (@))   
┃│✰ ⋟ ${prefix}Luxuoso (marca (@))   
┃│✰ ⋟ ${prefix}Luxuosa (marca (@))   
┃│✰ ⋟ ${prefix}Guloso (marca (@))   
┃│✰ ⋟ ${prefix}Gulosa (marca (@))   
┃│✰ ⋟ ${prefix}Safado (marca (@))   
┃│✰ ⋟ ${prefix}Branca (marca (@))   
┃│✰ ⋟ ${prefix}Branco (marca (@))   
┃│✰ ⋟ ${prefix}Preta (marca (@))   
┃│✰ ⋟ ${prefix}Preto (marca (@))   
┃│✰ ⋟ ${prefix}Gasosa (marca (@))   
┃│✰ ⋟ ${prefix}Gasoso (marca (@))   
┃│✰ ⋟ ${prefix}Puta (marca (@))   
┃│✰ ⋟ ${prefix}Puto (marca (@))   
┃│✰ ⋟ ${prefix}Feia (marca (@))
┃│✰ ⋟ ${prefix}Caracoroa
┃│✰ ⋟ ${prefix}Comecu (marca (@))
┃│✰ ⋟ ${prefix}Gf (marca (@))
┃│✰ ⋟ ${prefix}Dar (marca (@))
┃│✰ ⋟ ${prefix}Arma (ex: SPAS12)
┃╰══ ⪨
╰╦══════════════════ ⪨
╭┤き⃟✰𝐓𝐎𝐏 𝟓 - 𝐑𝐀𝐍𝐊✰⃟⃟き
┃│✰ ⋟ ${prefix}Rankgay (5 gays)
┃│✰ ⋟ ${prefix}Rankgado (5 gados)
┃│✰ ⋟ ${prefix}Rankcorno (5 cornos)
┃│✰ ⋟ ${prefix}Rankgostoso (5 gostosos)
┃│✰ ⋟ ${prefix}Rankgostosa (5 gostosas)
┃│✰ ⋟ ${prefix}Ranknazista (5 nazistas)
┃│✰ ⋟ ${prefix}Rankotakus (5 otakus)
┃│✰ ⋟ ${prefix}Rankpau (5 pauzudos)
┃│✰ ⋟ ${prefix}Rankopunheteiros (5 punheteiros)
┃│✰ ⋟ ${prefix}Rankghost (5 ghost's)
┃│✰ ⋟ ${prefix}Rankfiel (5 fiéis)
┃│✰ ⋟ ${prefix}Rankputas (5 mais putas do grupo)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.brincadeiras = brincadeiras
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
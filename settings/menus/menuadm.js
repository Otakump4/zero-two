const fs = require('fs')
const colors = require('colors')
const menuadm = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => { 
 

	return `
	
╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔 - 𝐀𝐃𝐌𝐈𝐍𝐒✰⃟⃟き
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
╭┤✰ ⋟ ${prefix}Antiimg (1/0)
┃│✰ ⋟ ${prefix}Antivideo (1/0)
┃│✰ ⋟ ${prefix}Antiaudio (1/0)
┃│✰ ⋟ ${prefix}Antisticker (1/0)
┃│✰ ⋟ ${prefix}Antiloc (1/0)
┃│✰ ⋟ ${prefix}Anticontato (1/0)
┃│✰ ⋟ ${prefix}Antidoc (1/0)
┃│✰ ⋟ ${prefix}Antilinkgp (1/0)
┃│✰ ⋟ ${prefix}Antilinkhard (1/0)
┃│✰ ⋟ ${prefix}Antifake (1/0)
┃│✰ ⋟ ${prefix}Antinotas (1/0)
┃│✰ ⋟ ${prefix}Anticatalogo (1/0)
┃│✰ ⋟ ${prefix}Antipalavrao (1/0)
┃│✰ ⋟ ${prefix}Limitecaracteres (1/0)
┃│✰ ⋟ ${prefix}Bemvindo (1/0)
┃│✰ ⋟ ${prefix}Bemvindo2 (1/0)
┃│✰ ⋟ ${prefix}Simih (1/0)
┃│✰ ⋟ ${prefix}Simih2 (1/0)
┃│✰ ⋟ ${prefix}Autosticker (1/0)
┃│✰ ⋟ ${prefix}Autorepo (1/0)
┃│✰ ⋟ ${prefix}Autoreact (1/0)
┃│✰ ⋟ ${prefix}Leveling (1/0)
┃│✰ ⋟ ${prefix}Modonsfw (1/0)
┃│✰ ⋟ ${prefix}Odelete (1/0)
┃│✰ ⋟ ${prefix}x9visuunica (1/0)
┃│✰ ⋟ ${prefix}x9 (1/0)
┃│✰ ⋟ ${prefix}Legenda_imagem (Texto)
┃│✰ ⋟ ${prefix}Legenda_video (Texto)
┃│✰ ⋟ ${prefix}Legenda_estrangeiro (Texto)
┃│✰ ⋟ ${prefix}Legendabv (Texto)
┃│✰ ⋟ ${prefix}Legendasaiu (Texto)
┃│✰ ⋟ ${prefix}Legendabv2 (Texto)
┃│✰ ⋟ ${prefix}Legendasaiu2 (Texto)
┃│✰ ⋟ ${prefix}So_adm
┃│✰ ⋟ ${prefix}Requestgp -list
┃│✰ ⋟ ${prefix}Requestgp -a numero
┃│✰ ⋟ ${prefix}Requestgp -r numero
┃│✰ ⋟ ${prefix}Fechar-gp
┃│✰ ⋟ ${prefix}Listanegra (Número)
┃│✰ ⋟ ${prefix}Tirardalista (Número)
┃│✰ ⋟ ${prefix}ListanegraG (Número)
┃│✰ ⋟ ${prefix}TirardalistaG (Número)
┃│✰ ⋟ ${prefix}Multiprefixo (1/0)
┃│✰ ⋟ ${prefix}Add_prefixo
┃│✰ ⋟ ${prefix}Tirar_prefixo
┃│✰ ⋟ ${prefix}Banghost
┃│✰ ⋟ ${prefix}Mute (@mencionar)
┃│✰ ⋟ ${prefix}Desmute (@mencionar)
┃│✰ ⋟ ${prefix}Add 5511.. (Para-adicionar) 
┃│✰ ⋟ ${prefix}Reviver (Responder-mensagem)
┃│✰ ⋟ ${prefix}Kick [@] (Para-remover) 
┃│✰ ⋟ ${prefix}Ban (Responder-mensagem)
┃│✰ ⋟ ${prefix}Banfake (bani todos os fakes)
┃│✰ ⋟ ${prefix}Promover [@] (Ser-admin)
┃│✰ ⋟ ${prefix}Rebaixar [@] (Rebaixar-adm)
┃│✰ ⋟ ${prefix}Changegroup (all/adms)
┃│✰ ⋟ ${prefix}Rmphotogp (Remover ft do gp)
┃│✰ ⋟ ${prefix}Ephemeral [1/0] (Msg-temp)
┃│✰ ⋟ ${prefix}Descgp (Texto)
┃│✰ ⋟ ${prefix}Nomegp (Nome)
┃│✰ ⋟ ${prefix}Totag (Mencionar algo)
┃│✰ ⋟ ${prefix}Grupo (f/a)
┃│✰ ⋟ ${prefix}Status
┃│✰ ⋟ ${prefix}Limpar (texto-invisível-gp)
┃│✰ ⋟ ${prefix}Atividades (DO-GRUPO)
┃│✰ ⋟ ${prefix}Linkgp
┃│✰ ⋟ ${prefix}Grupoinfo
┃│✰ ⋟ ${prefix}Blockcmdgp (cmd)
┃│✰ ⋟ ${prefix}Unblockcmdgp (cmd)
┃│✰ ⋟ ${prefix}Listbcmdgp
┃│✰ ⋟ ${prefix}Hidetag (txt) (marcação)
┃│✰ ⋟ ${prefix}Marcar (marca tds do gp)
┃│✰ ⋟ ${prefix}Marcar2 (Marca-tds-wa.me)
┃│✰ ⋟ ${prefix}Anagrama (1/0)
┃│✰ ⋟ ${prefix}Antipalavra (1/0)
┃│✰ ⋟ ${prefix}Criartabela (Escreva-algo)
┃│✰ ⋟ ${prefix}Tabelagp (Veja a tabela)
┃│✰ ⋟ ${prefix}Fechargp (fecha 1m/1m abre )
┃│✰ ⋟ ${prefix}Roletarussa (jogos do ban aleatório)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.menuadm = menuadm
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
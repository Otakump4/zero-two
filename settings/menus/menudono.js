const fs = require('fs')
const colors = require('colors')
const menudono = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {

return `

╭═══════════════════ ⪩
╰╮き⃟✰𝐌𝐄𝐍𝐔 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎✰⃟⃟き
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
╭┤✰ ⋟ ${prefix}Bangp
┃│✰ ⋟ ${prefix}Unbangp
┃│✰ ⋟ ${prefix}Fotomenu (Marcar-img) 
┃│✰ ⋟ ${prefix}Cmdpremlist
┃│✰ ⋟ ${prefix}Addcmdprem (cmd)
┃│✰ ⋟ ${prefix}Delcmdprem (cmd)
┃│✰ ⋟ ${prefix}Fundobemvindo (marcar-img)
┃│✰ ⋟ ${prefix}Fundosaiu (marcar-img)
┃│✰ ⋟ ${prefix}Serpremium
┃│✰ ⋟ ${prefix}Listagp
┃│✰ ⋟ ${prefix}Antipalavrão (1/0)
┃│✰ ⋟ ${prefix}Antiligar (1/0)
┃│✰ ⋟ ${prefix}Modoaluguel (1/0)
┃│✰ ⋟ ${prefix}Fazertm (Texto)
┃│✰ ⋟ ${prefix}Rgtm
┃│✰ ⋟ ${prefix}Tirardatm
┃│✰ ⋟ ${prefix}Listatm
┃│✰ ⋟ ${prefix}Infocmd_add (cmd/texto) 
┃│✰ ⋟ ${prefix}Infocmd_del (cmd) 
┃│✰ ⋟ ${prefix}Visualizarmsg
┃│✰ ⋟ ${prefix}Botoff (Funcionalidade do bot)
┃│✰ ⋟ ${prefix}Boton (Funcionalidade do bot)
┃│✰ ⋟ ${prefix}Verificado-global (Selos)
┃│✰ ⋟ ${prefix}Audio-menu (Audio do menu)
┃│✰ ⋟ ${prefix}Addpalavra (palavrão)
┃│✰ ⋟ ${prefix}Delpalavra (palavrão)
┃│✰ ⋟ ${prefix}Ativo
┃│✰ ⋟ ${prefix}Rmpalavra_forca (palavra)
┃│✰ ⋟ ${prefix}Addpalavras_forca (titulo|tema|dica)
┃│✰ ⋟ ${prefix}Listbcmdglobal - Lista de cmd block global.
┃│✰ ⋟ ${prefix}Blockcmdg (comando) - Bloquear comando.
┃│✰ ⋟ ${prefix}Unblockcmdg (comando) - Desbloquear comando.
┃│✰ ⋟ ${prefix}Ausente (fale-oq-faz)
┃│✰ ⋟ ${prefix}Delpremium @(marca)
┃│✰ ⋟ ${prefix}Addpremium @(marca)
┃│✰ ⋟ ${prefix}Privphotobot (all/cntt/ngm)
┃│✰ ⋟ ${prefix}Privaddgroup (all/cntt/ngm)
┃│✰ ⋟ ${prefix}Descriçãogp (digite-algo)
┃│✰ ⋟ ${prefix}Block [@] (bloq de usar cmds) 
┃│✰ ⋟ ${prefix}Unblock [@] (desbloquear) 
┃│✰ ⋟ ${prefix}Setprefix (prefixo-novo)
┃│✰ ⋟ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
┃│✰ ⋟ ${prefix}Addlevel (quantidade)
┃│✰ ⋟ ${prefix}Tirarlevel (quantidade)
┃│✰ ⋟ ${prefix}Addxp (quantidade)
┃│✰ ⋟ ${prefix}Tirarxp (quantidade)
┃│✰ ⋟ ${prefix}Blocklevellist
┃│✰ ⋟ ${prefix}Blocklevel (@marcar)
┃│✰ ⋟ ${prefix}Unblocklevel (@marcar)
┃│✰ ⋟ ${prefix}Rmlevel (@marcar)
┃╰══ ⪨
╰═══════════════════ ⪨

`}

exports.menudono = menudono
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
const fs = require('fs')
const colors = require('colors')
const bot = (prefix, tempo, NomeDoBot, pushname, sender) => {
return `👤 Olá, ${tempo} ${pushname}, eu sou a *✦『𝒁𝑬𝑹𝑶 𝑻𝑾𝑶』✦*!
• Aqui está um breve tutorial de algumas das minhas funções:
–
• Para divertir seu grupo, use: *${prefix}brincadeiras* e saiba todos meus jogos.
–
• Para fazer figurinhas, use *${prefix}sticker* marcando um(a) foto ou vídeo.
—
• Para renomear o pacote ou roubar uma figurinha, ou seja, colocar autor e pacote de forma personalizada, use o comando: *${prefix}rename pacote/autor*
–
• Baixar fotos/vídeos de redes sociais como *Instagram, Tiktok ou Twitter, etc...* É fácil! Veja o tutorial abaixo:
       • Baixar mídias do instagram: *${prefix}igdl [link do post/reel]*
        • Para baixar vídeos do tiktok, use:  *${prefix}tiktok [link do vídeo]*, caso seja imagens use: *${prefix}tiktokimg [link]*
        • Baixar publicações do Twitter, use: *${prefix}twtdl [link do post]*
        • Ainda tenho um comando que realiza download's de 5 redes sociais ao mesmo tempo, seriam elas: *Twitter, Facebook, Instagram, Threads e Tiktok*. para realizar seu pedido, use: *${prefix}multidl [link do post]*
–
• Também realizo download de músicas do *YouTube e SoundCloud*. Veja:
         • Baixar áudios em mp3 ou doc e vídeos do YouTube: *${prefix}play*, *${prefix}playvid*, *${prefix}playdoc*.
         • Realize download de um mix de um artista, usando: *${prefix}playmix [cantor]*
         • Para baixar músicas em mp3 no SoundCloud, use: *${prefix}scdl [link]*
–
Pronto, aqui foi um tutorial básico de como usar o bot. 
• Para ver todas as minhas funções de forma detalhada, use: *${prefix}menu*

`}

exports.bot = bot
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
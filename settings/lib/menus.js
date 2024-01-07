const fs = require('fs')
const colors = require('colors')
const menu = (prefix, pushname, NomeDoBot, groupNome, somembros, groupAdmins, puxarInfo, tempo, data, sender) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​*╔═══════❖•ೋ° °ೋ•❖═══════╗*
╰╮き⃟✰𝐈𝐍𝐅𝐎-𝐁𝐎𝐓/𝐔𝐒𝐄𝐑❈⃟き
┃│             *${tempo}*
┃│✰ ⋟ *BOT:* *${NomeDoBot}*
┃│✰ ⋟ *GRUPO:* *${groupNome}*
┃│✰ ⋟ *DATA:* *${data1}*
┃│✰ ⋟ *HORA:* *${hora1}*
┃│✰ ⋟ *MEMBROS:* *${somembros.length}*
┃│✰ ⋟ *ADMINS:* *${groupAdmins.length}*
┃│✰ ⋟ *TOTAL:* *${puxarInfo.participants.length} PARTICIPANTES*
╭┤✰ ⋟ *USUÁRIO:* *${pushname}*
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒-𝐌𝐄𝐍𝐔𝐒✰⃟⃟き
┃│🤴 ⋟ ${prefix}Menudono
┃│🥂 ⋟ ${prefix}Menuadm
┃│💫 ⋟ ${prefix}Menupremium
┃│🩸 ⋟ ${prefix}Efeitosimg
┃│💥 ⋟ ${prefix}Logos
┃│🥳 ⋟ ${prefix}Brincadeiras
┃│🤩 ⋟ ${prefix}Animes
┃│😈 ⋟ ${prefix}MenuHentai
┃│🔞 ⋟ ${prefix}Menu18
┃│😯 ⋟ ${prefix}Menualeatorio 
┃┤🥵 ⋟ ${prefix}Menu2
┃│🕹️ ⋟ ${prefix}Menurpg
┃┤💫 ⋟ ${prefix}Alteradores
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐂𝐌𝐃𝐒-𝐃𝐄-𝐌𝐄𝐌𝐁𝐑𝐎✰⃟⃟き
┃│⁉️ ⋟ ${prefix}Infobot (Informações)
┃│⁉️ ⋟ ${prefix}Idiomas (Gtts)
┃│⁉️ ⋟ ${prefix}Carteira (Saldo disponível)
┃│⁉️ ⋟ ${prefix}Bug (Questione/Erros) 
┃│⁉️ ⋟ ${prefix}Infodono (Info do dono)
┃│⁉️ ⋟ ${prefix}Criador
┃│⁉️ ⋟ ${prefix}Sugestao (Dica/Sugestão)
┃│⁉️ ⋟ ${prefix}Avalie (O quanto é bom) 
┃│⁉️ ⋟ ${prefix}Infocmd (Comando) 
┃│⁉️ ⋟ ${prefix}Infobemvindo
┃│⁉️ ⋟ ${prefix}Infowhatsb
┃│⁉️ ⋟ ${prefix}Infofigu
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐂𝐌𝐃𝐒-𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐎𝐒✰⃟⃟き
┃│⚡ ⋟ ${prefix}Ping (Velocidade/Up) 
┃┤👾 ⋟ ${prefix}Configurar-bot
┃│👀 ⋟ ${prefix}Atividade (do Grupo)
┃│🌟 ⋟ ${prefix}Rankativo
┃│🔥 ⋟ ${prefix}Checkativo (@Marcar)
┃│🥇 ⋟ ${prefix}Ranklevel (do Grupo) 
┃│💬 ⋟ ${prefix}Wame
┃│💸 ⋟ ${prefix}Alugar
┃│💸 ⋟ ${prefix}Chavepix
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒✰⃟⃟き
┃│🔊 ⋟ ${prefix}Play (Nome)
┃│🔊 ⋟ ${prefix}Play2 (Nome)
┃│📱 ⋟ ${prefix}Playvid (Nome)
┃│📱 ⋟ ${prefix}Playvid2 (Nome)
┃│📥 ⋟ ${prefix}Playdoc (Nome)
┃│📥 ⋟ ${prefix}Playdoc2 (Nome)
┃│🎶 ⋟ ${prefix}Playmix (Nome)
┃│🔊 ⋟ ${prefix}Ytmp3 (Link)
┃│📱 ⋟ ${prefix}Ytmp4 (Link)
┃│🎧 ⋟ ${prefix}Shazam (Mencionar-aud)
┃│🎵 ⋟ ${prefix}Audiomeme (Nome)
┃│📱 ⋟ ${prefix}Tiktok (Link) 
┃│🔊 ⋟ ${prefix}Tiktokaudio (Link)
┃│📱 ⋟ ${prefix}Tiktokimg (Link)
┃│📱 ⋟ ${prefix}Instagram (Link) 
┃│🔊 ⋟ ${prefix}Instaaudio (Link) 
┃│📱 ⋟ ${prefix}Instastory (@Usuário) 
┃│📱 ⋟ ${prefix}Instareels (Link)
┃│📀 ⋟ ${prefix}Threads (Link)
┃│📱 ⋟ ${prefix}Twitter (Link)
┃│🎶 ⋟ ${prefix}Multidl (Link)
┃│🎧 ⋟ ${prefix}Deezer (Nome) 
┃│🎧 ⋟ ${prefix}Soundcloud (Link)
┃│📱 ⋟ ${prefix}Kwaivideo (Link) 
┃│💻 ⋟ ${prefix}Mediafire (Link)
┃│💻 ⋟ ${prefix}Googledrive (Link)
┃│💻 ⋟ ${prefix}Capcutmodel (Link)
┃│📱 ⋟ ${prefix}Imgpralink (Marcar-img)
┃│📱 ⋟ ${prefix}Videopralink (Marcar-vid)
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒✰⃟き
┃│🔍 ⋟ ${prefix}Nerding (Nome) 
┃│🔍 ⋟ ${prefix}Pensador (Nome) 
┃│🔍 ⋟ ${prefix}Nasa (Ex: 19-10-2007)
┃│🔍 ⋟ ${prefix}Clima (Cidade)
┃│🔍 ⋟ ${prefix}Book (Nome do Livro)
┃│🔍 ⋟ ${prefix}Movie (Nome do Filme)
┃│🔍 ⋟ ${prefix}Movie2 (Nome do Filme)
┃│🔍 ⋟ ${prefix}Imdb (Nome do Filme)
┃│🔍 ⋟ ${prefix}Imdbinfo (Link do Filme)
┃│🔍 ⋟ ${prefix}Animetv (Nome do Anime)
┃│🔍 ⋟ ${prefix}Recentes (lista de ep de animes recentes)
┃│🔍 ⋟ ${prefix}Serie (Nome da Série)
┃│🔍 ⋟ ${prefix}Lyrics (Música) 
┃│🔍 ⋟ ${prefix}Lyrics2 (Música) 
┃│🔍 ⋟ ${prefix}Playstore (Nome) 
┃│🔍 ⋟ ${prefix}Aptoide (Nome)
┃│🔍 ⋟ ${prefix}Uptodown (Nome)
┃│🔍 ⋟ ${prefix}Receita (Nome)
┃│🔍 ⋟ ${prefix}Signo (Signo) 
┃│🔍 ⋟ ${prefix}Amazon (Nome) 
┃│🔍 ⋟ ${prefix}Googlesrc (Nome)
┃│🔍 ⋟ ${prefix}Memedroid
┃│🔍 ⋟ ${prefix}iFunnyvideo
┃│🔍 ⋟ ${prefix}Wikipedia (Nome) 
┃│🔍 ⋟ ${prefix}Pinterest (Nome) 
┃│🔍 ⋟ ${prefix}Gimage (Nome) 
┃│🔍 ⋟ ${prefix}Dicionario (Palavra) 
┃│🔍 ⋟ ${prefix}Ytplaylist (Link)
┃│🔍 ⋟ ${prefix}Ytsearch (Nome)
┃│🔍 ⋟ ${prefix}Games (Nome)
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀 (𝐈𝐀)✰⃟き
┃│🤖 ⋟ ${prefix}Corretor (Texto)
┃│🤖 ⋟ ${prefix}Bard (Pergunta)
┃│🤖 ⋟ ${prefix}Gpt (Texto)
┃│🤖 ⋟ ${prefix}Gpt-4 (Texto)
┃│🤖 ⋟ ${prefix}Gptvoz (Texto)
┃│🤖 ⋟ ${prefix}Youai (Texto)
┃│🤖 ⋟ ${prefix}Blackai (Texto)
┃│🤖 ⋟ ${prefix}Redacao (Tema)
┃│🤖 ⋟ ${prefix}Summerize (Texto)
┃│🤖 ⋟ ${prefix}Imagine (Texto)
┃│🤖 ⋟ ${prefix}Photoleap (Texto)
┃│🤖 ⋟ ${prefix}Totext (Audio)
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐍𝐎𝐓𝐈𝐂𝐈𝐀𝐒/𝐉𝐎𝐑𝐍𝐀𝐋✰⃟⃟き
┃│💬 ⋟ ${prefix}Getnoticias (Tema)
┃│💬 ⋟ ${prefix}Cnnbrasil (Notícias)
┃│💬 ⋟ ${prefix}Globo (Notícias)
┃│💬 ⋟ ${prefix}Poder360 (Notícias)
┃│💬 ⋟ ${prefix}Uol (Notícias)
┃│💬 ⋟ ${prefix}Jovempan (Notícias)
┃│💬 ⋟ ${prefix}Esportenews (Notícias)
┃│💬 ⋟ ${prefix}Proximojogo (Time)
┃│💬 ⋟ ${prefix}Meutime (Time)
┃│💬 ⋟ ${prefix}Noticiatime (Time)
┃│💬 ⋟ ${prefix}Gamenews (Notícias)
┃│💬 ⋟ ${prefix}Brasileirao (Tabela)
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒✰⃟⃟き
┃│🤡 ⋟ ${prefix}Ttp (Seu texto)
┃│🤡 ⋟ ${prefix}Fsticker (Marcar-foto)
┃│🤡 ⋟ ${prefix}Sticker (Marcar-foto)
┃│🤡 ⋟ ${prefix}Toimg (Marcar-sticker)
┃│🤡 ⋟ ${prefix}Attp (Seu texto)
┃│🤡 ⋟ ${prefix}Attp1 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp2 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp3 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp4 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp5 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp6 (Seu texto)
┃│🤡 ⋟ ${prefix}Attp7 (Seu texto)
┃│🤡 ⋟ ${prefix}Togif (Marcar-sticker)
┃│🤡 ⋟ ${prefix}Roubar (Texto/Texto)
┃│🤡 ⋟ ${prefix}Take (Renomear a figurinha)
┃│🤡 ⋟ ${prefix}Rgtake (Texto|Texto) - Registrar sua marca ďágua.
┃│🤡 ⋟ ${prefix}Rntake (Texto|Texto) - Renomeia a sua marca ďagua.
┃│🤡 ⋟ ${prefix}Figurinhas (Quantidade)
┃│🤡 ⋟ ${prefix}Figumemes (Quantidade)
┃│🤡 ⋟ ${prefix}Figuflork (Quantidade)
┃│🤡 ⋟ ${prefix}Figuemoji (Quantidade)
┃│🤡 ⋟ ${prefix}Figucoreana (Quantidade)
┃│🤡 ⋟ ${prefix}Figubebe (Quantidade)
┃│🤡 ⋟ ${prefix}Figuanime (Quantidade)
┃│🤡 ⋟ ${prefix}Figufunny (Quantidade)
┃│🤡 ⋟ ${prefix}Figuanimais (Quantidade)
┃│🤡 ⋟ ${prefix}Figudesenho (Quantidade)
┃│🤡 ⋟ ${prefix}Figuraiva (Quantidade)
┃│🤡 ⋟ ${prefix}Figuroblox (Quantidade)
┃│🤡 ⋟ ${prefix}Figaleatoria
┃╰══ ⪨
╰❖ ── ✦ ──『✙』── ✦ ── ❖ ──『✙』
╭┤き⃟✰𝐂𝐌𝐃𝐒-𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎𝐒✰⃟⃟き
┃│🤖 ⋟ ${prefix}Gtts (Idioma + Texto)
┃│🙋🏻 ⋟ ${prefix}Tagme 
┃│🥰 ⋟ ${prefix}Emoji (😏/Whatsapp)
┃│😍 ⋟ ${prefix}Emojimix (Emoji+Emoji)
┃│🤓 ⋟ ${prefix}Tabela (Letras/Simbolos) 
┃│🙇🏻 ⋟ ${prefix}Conselhobiblico
┃│🙊 ⋟ ${prefix}Cantadas
┃│🙊 ⋟ ${prefix}Cantadas2
┃│📝 ⋟ ${prefix}Frase
┃│📝 ⋟ ${prefix}Recadoprowhatsapp
┃│📝 ⋟ ${prefix}Frasecriativas
┃│📝 ⋟ ${prefix}Frasebonita
┃│📝 ⋟ ${prefix}Frasefofa
┃│📝 ⋟ ${prefix}Conselhosdepai
┃│📝 ⋟ ${prefix}Conselhosdemãe
┃│📝 ⋟ ${prefix}Conselhos
┃│📝 ⋟ ${prefix}Conselhos2
┃│💬 ⋟ ${prefix}Simi (Hable com ela)  
┃│👀 ⋟ ${prefix}Perfil
┃│🧠 ⋟ ${prefix}Calcular (10 + 10)
┃│👤 ⋟ ${prefix}Ringtone (Toque)
┃│🕵🏻 ⋟ ${prefix}Fazernick (Oq deseja)
┃│⁉️ ⋟ ${prefix}Ptvmsg (Mencione-V)
┃│💬 ⋟ ${prefix}Traduzir (Palavra)
┃│🇧🇷 ⋟ ${prefix}Listaddd (Código do Estado)
┃│🇧🇷 ⋟ ${prefix}Listabr (Números brasileiros)
┃│🇧🇷 ⋟ ${prefix}Listaddi (Código do País)
┃│⚜ ⋟ ${prefix}Grupofc (Comunidade Ofc)
┃│⭐ ⋟ ${prefix}Avalie (Avalie o bot)
┃│🙎🏻‍♂️ ⋟ ${prefix}Vrcard (Vrcard seu)
┃│🥸 ⋟ ${prefix}Contar ( Digite ou copie seu texto )
┃│✨ ⋟ ${prefix}Legenda ( marque uma imagem texto/texto )
┃│😱 ⋟ ${prefix}Fakechat
┃┤📝 ⋟ ${prefix}Enquete (texto/texto/texto/texto)
┃┤📝 ⋟ ${prefix}Enquete2 (texto/texto/texto)
┃╰══ ⪨
*╰═══════❖•ೋ° °ೋ•❖═══════╝*

`}

exports.menu = menu
//===== [NÃO MEXA O CÓDIGO ABAIXO] ==== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})
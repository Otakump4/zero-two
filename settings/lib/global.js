exports.playResult = (data) => {
  return `• *Título:* ${data.resultado[0].title}\n• *Descrição:* ${data.resultado[0].description}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n• *Link:* ${data.resultado[0].url}`
}

exports.playVideoResult = (data) => {
  return `• *Título:* ${data.resultado[0].title}\n• *Descrição:* ${data.resultado[0].description}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n• *Link:* ${data.resultado[0].url}`
}

exports.playVideoResult2 = (data) => {
  return `${data.resultado[0].title}`
}

exports.playDocumentResult = (data) => {
  return `• *Título:* ${data.resultado[0].title}\n• *Descrição:* ${data.resultado[0].description}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n• *Link:* ${data.resultado[0].url}`
}

exports.shazamResult = (data) => {
  return `• *Música:* ${data.resultado[0].title}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n• *Link:* ${data.resultado[0].url}`
}

exports.playMixResult = (data) => {
return `*Irei enviar 5 resultados, são eles:*\n–\n*1°* ${data.resultado[0].title}\n• *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n–\n*2°* ${data.resultado[1].title}\n• *Duração:* ${data.resultado[1].timestamp} | ${data.resultado[1].seconds} segundos.\n–\n*3°* ${data.resultado[2].title}\n• *Duração:* ${data.resultado[2].timestamp} | ${data.resultado[2].seconds} segundos.\n–\n*4°* ${data.resultado[3].title}\n• *Duração:* ${data.resultado[3].timestamp} | ${data.resultado[3].seconds} segundos.\n–\n*5°* ${data.resultado[4].title}\n• *Duração:* ${data.resultado[4].timestamp} | ${data.resultado[4].seconds} segundos.`
}

exports.spotifyResult = (data, dataUrl, getPreview) => {
return `• ID: *${data.resultado.tracksArray[0].id}*\n–\n• Nome da Música: *${data.resultado.tracksArray[0].title}*\n• Duração: *${dataUrl.resultado.duration}*\n• Nome do(s) Artista(s): *${data.resultado.tracksArray[0].artists.map(v => `${v.name}`).join(', ')}*\n• Url: *${data.resultado.tracksArray[0].url}*\n• Preview 30s: *${getPreview.data}*`
}

exports.syntaxDownloadMusic = () => {
return `Por favor, insira o título de uma música ou vídeo.`
}

exports.syntaxPlayMix = () => {
return `Por favor, coloque um nome de um artista para obter sucesso ao resultado.`
}

exports.igstalk = (data) => {
// Variáveis:
var isPrivateAccount = data.resultado.is_private === true ? "Sim." : data.resultado.is_private === false ? "Não." : undefined
var isMusicProfile = data.resultado.is_music_on_profile === true ? "Sim." : data.resultado.is_music_on_profile === false ? "Não." : undefined
var isAccountBusiness = data.resultado.is_business === true ? "Sim." : data.resultado.is_business === false ? "Não." : undefined
var isVerifiedAccount = data.resultado.is_verified === true ? "Sim." : data.resultado.is_verified === false ? "Não." : undefined
var isHighlight = data.resultado.is_highlight === true ? "Sim." : data.resultado.is_highlight === false ? "Não." : undefined
// Texto de envio:
return `© *Instagram Stalker:*\n     • Algumas vezes as informações do perfil não podem ser atuais.\n–\n• Usuário(@): *${data.resultado.username}*\n• Link do perfil: *http://instagram.com/${data.resultado.username}*\n• Nome completo do usuário: *${data.resultado.fullname}*\n–\n• Contém música neste perfil? *${isMusicProfile}*\n• Esta conta contém verificado? *${isVerifiedAccount}*\n• Esta conta é privada? *${isPrivateAccount}*\n• Conta empresarial ou pertence a uma empresa? *${isAccountBusiness}*\n• Esta conta contém algum destaque de stories? *${isHighlight}*\n–\n• Número de seguidores do(a) usuário(a): *${data.resultado.followers} seguidores.*\n• Número de pessoas sendo seguidas pelo(a) usuário(a): *${data.resultado.following} seguindo.*\n–\n• *Biografia:*\n${data.resultado.biography}`
}

exports.kwaiDownload = (result) => { 
return `*Legenda:* ${result[0].legenda}\n*Usuário:* ${result[0].author}`
}

exports.tiktokDownload = (data) => {
return `*Usuário:*〔 @${data.resultado.username} 〕\n–\n• *Descrição:* ${data.resultado.description}`
}

exports.soundcloud = (data, tinyUrl) => {
return `*[ SoundCloud ]* - Informações Áudio:\n- \n• *Música:* ${data.resultado.titulo}\n• *Total de Downloads:* ${data.resultado.total_downloads}\n–\n    • Caso o *áudio* não seja enviado, baixe através do link: ${tinyUrl.data}`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor líquido/taxa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor apresentado + valor icms, em real.)_: *R$ ${data.resultado.total}*\n• Total USD _(valor apresentado + valor icms, convertido p/dolar)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observação:* O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.\n–\n⚠️ *Como é realizado o cálculo de um valor abaixo de R$50?*\n	 Produto × icms(seu estado) = valor_icms\n	 Produto + valor_icms = total\n–\n⚠️ *Como é realizado o cálculo de um valor acima de R$50?*\n 	 Produto + (60 + icms(seu estado)) = valor_icms\n	 Produto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `*Ops!* O comando está sendo utilizado de forma errada, _por favor confira abaixo a forma correta de uso, para obter sucesso._\n–\nPara usar este comando é nescessario, usar da seguinte forma: *${prefix}icms 704|82*, _explicando sobre os valores apresentados:_\n      • *704* ‐ O valor que você deseja saber a probabilidade da possível taxa a ser aplicada sobre o valor.\n      • *82* - O ddd do estado onde você mora, ou o que você deseja consultar.`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Coloque o código da encomenda fornecido pelo Correios, abaixo tem a *explicação e o exemplo de uso*:\n–\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n    • O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n    • Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• *Código inválido ou nenhum resultado foi retornado.* Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n    • Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.syntaxNewsGame = (prefix) => {
return `O *comando* está sendo usado de forma incorreta. Por favor, verifique os exemplos apresentados abaixo:\n• *Uso:* ${prefix}gamenews -filter *(total: 12)*\n–\n    • ${prefix}gamenews -cod\n    • ${prefix}gamenews -csgo\n    • ${prefix}gamenews -fortnite\n    • ${prefix}gamenews -fifa\n    • ${prefix}gamenews -gamexp\n    • ${prefix}gamenews -pes\n    • ${prefix}gamenews -lol\n    • ${prefix}gamenews -pokemon\n    • ${prefix}gamenews -premio-sports\n    • ${prefix}gamenews -rainbow-6\n    • ${prefix}gamenews -valorant\n    • ${prefix}gamenews -tcg`
}

exports.syntaxNewsEsportes = (prefix) => {
return `O *comando* está sendo usado de forma incorreta. Por favor, verifique os exemplos apresentados abaixo:\n• *Uso:* .esportenews -filter *(total: 18)*\n–\n    • ${prefix}esportenews -all\n         • Não realiza nenhum filtro, retorna todas as notícias dos esportes sendo de *forma aleatória.*\n–\n    • ${prefix}esportenews -futebol\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Futebol*.\n–\n    • ${prefix}esportenews -basquete\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Basquete*.\n–\n    • ${prefix}esportenews -volei\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Vôlei*.\n–\n    • ${prefix}esportenews -tenis\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Tênis*.\n–\n    • ${prefix}esportenews -atletismo\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Atletismo*.\n–\n    • ${prefix}esportenews -natacao\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Natação*.\n–\n    • ${prefix}esportenews -ciclismo\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Ciclismo*.\n–\n    • ${prefix}esportenews -boxe\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Boxe*.\n–\n    • ${prefix}esportenews -beisebol\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Beisebol*.\n–\n    • ${prefix}esportenews -futebol-eua\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre o *Futebol Americano.*\n–\n    • ${prefix}esportenews -judo\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Judô*.\n–\n    • ${prefix}esportenews -ginastica\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre a *Ginástica Artística*.\n–\n    • ${prefix}esportenews -golfe\n          • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Golfe*.\n–\n    • ${prefix}esportenews -formula-1\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre a *Fórmula 1*.\n–\n    • ${prefix}esportenews -futsal\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Futsal*.\n–\n    • ${prefix}esportenews -surfe\n         • Realiza um filtro de notícias, retornando como resposta somente notícias sobre *Surfe*.\n–\n    • ${prefix}esportenews -skate\n         • Realiza um filtro de notícias, retornando como resposta somente notícias esportivas sobre: *Skate*.`
}

exports.rastrearEncomenda = (data, q) => {
return `• N° de Rastreio: *${q}*\n—\n📌 *Último Status:*\n—\n${data.resultado.lastStatus}\n—\n📦 *Histórico* - Informações detalhadas sobre o trajeto do objeto: ${data.resultado.pathObject}`
}

exports.deezerMusic = (theMusicD, prefix) => {
return `*[ Deezer ]* - Informações da Música:\n–\n• *Nome da Música:* ${theMusicD.title}\n• *Link - Música:* ${theMusicD.link}\n• *Duração em segundos:* ${theMusicD.duration}s\n• *Nome do Album:* ${theMusicD.album.title}\n• *Link do Album:* ${theMusicD.album.title}\n• *Esta música é explícita?* ${theMusicD.explicit_lyrics ? 'Sim' : 'Não'}\n–\n• *Nome do Artista:* ${theMusicD.artist.name}\n• *Link - Página:* ${theMusicD.artist.link}\n–\nAbaixo será encaminhado uma preview(prévia) da música informada.\n    • Com a duração de apenas *30s*.\n    • Para obter use o comando *${prefix}play* ou baixe o Deezer em sua loja de Apps.`
}

exports.result_APOD = (dataSab, resultExp) => {
return `🔭 Título - ${dataSab.nasa.title}\n\n🌐📝 Explicação - ${resultExp.result}`
}

exports.searchBooks = (getBook) => {
return `• *Titulo:* ${getBook.data.volumeInfo.title}\n• *Autor do Livro:* ${getBook.data.volumeInfo.authors[0]}\n• *Publicado em:* ${getBook.data.volumeInfo.publishedDate}\n• *Publicado por:* ${getBook.data.volumeInfo.publisher}\n• *Quantidade de Paginas:* ${getBook.data.volumeInfo.pageCount}\n–\n• *Descrição:* ${getBook.data.volumeInfo.description}\n–\n👓 *Ler:* ${getBook.data.accessInfo.webReaderLink}\n➕ *Saiba mais:* ${getBook.data.volumeInfo.canonicalVolumeLink}`
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Informações Arquivo:\n–\n• *Nome do Arquivo:* ${ABC.resultado[0].nama}\n• *Tamanho:* ${ABC.resultado[0].size}\n• *Tipo de arquivo a ser enviado:* ${ABC.resultado[0].mime}\n–\n*Por favor, aguarde um pouco estou realizando o envio do arquivo.*\n    • Caso haver um atraso de *2min* pode ser o tamanho do arquivo a ser enviado.\n    • *Não enviou?* Realize o download pelo link: ${encurt.data}`
}

exports.quoteCurrencies = (resposta) => {
return `🏦 *[COTAÇÃO]* - Nas últimas 24horas:\n–\n• Moeda: *${resposta.name}*\n• Valor da moeda mais alto hoje: *${Number(resposta.high).toFixed(2)}*\n• Valor da moeda mais baixo hoje: *${Number(resposta.low).toFixed(2)}*\n• Valor da moeda, atualizado agora: *${Number(resposta.bid).toFixed(2)}*`
}

exports.horoscopo = (q, ABC) =>  {
return `Signo: ${q}\n${ABC.resultado.inform}`
}

exports.respostaChatGPT = (anu1) => {
return `${anu1.resultado}`
}

exports.respostaResumida = (anu1) => {
return `${anu1.resultado}`
}

exports.respostaRedacao = (anu1) => {
return `${anu1.result}`
}

exports.respostaBard = (r) => {
return `${r.resultado}`
}

exports.respostaBing = (result) => {
return `${result.resultado}`
}

exports.corretorOrtografico = (anu1) => {
return `📖 *Texto corrigido:* ${anu1.resultado}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.aptoide = (getApk, sizeApk) => {
return `• *Aplicativo:* ${getApk.name}\n• *Package:* ${getApk.package}\n• *Tamanho do Aplicativo:* ${sizeApk} MB\n• *Versão do Aplicativo:* ${getApk.file.vername}\n–\n• *Download Primário:* ${getApk.file.path}\n• *Download Secundário:* ${getApk.file.path_alt}`
}

exports.memesImages = (teks) => { 
return `${teks.titulo} (Baixado por © 𝒁𝑬𝑹𝑶 𝑻𝑾𝑶)`
}

exports.iFunnyVideo = (teks) => { 
return `${teks.titulo} (Baixado por © 𝒁𝑬𝑹𝑶 𝑻𝑾𝑶)`
}

exports.newsMiscellaneous = (teks) => {
return `• *Notícia:* ${teks.noticia}\n• *Link da Notícia:* ${teks.link}`
}

exports.translator = (bla) => {
return `Seu texto foi traduzido com sucesso: ${bla.result}`
}

exports.smartphoneInfo = (smartInfo) => {
return `• *Smartphone:* ${smartInfo.resultado.nomeCelular}\n• *Resumo:* ${smartInfo.resultado.informações}\n–\n• *Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`
}

exports.clima = (wttrin) => {
return `⚠️️ Sobre o clima de agora no local.\n–\n→ *Local:* ${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+j.region[i].value+', '+j.country[i].value).flat().join(' | ')}\n→ *Temperatura atual:* ${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]\n→ *Sensação térmica:* ${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%\n→ *Chuva em polegadas:* ${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}\n→ *Nivel de visibilidade:* ${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]\n→ *Descrição do clima:* ${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]\n→ *Direção do vento:* ${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]\n→ *Pressão do ar:* ${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]\n–\n️🏘 Algumas informações do local.\n–\n→ *Tipo de requisição:* ${wttrin.request.map(j => j.type).flat().join(' | ')}\n→ *Local da requisição:* ${wttrin.request.map(j => j.query).flat().join(' | ')}\n→ *Local mais aproximado:* ${wttrin.nearest_area.map(j => j.latitude).flat().join(' | ')} Lat. | ${wttrin.nearest_area.map(j => j.longitude).flat().join(' | ')} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}\n→ *Data agora no local:* ${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}\n→ *Tempo de observação:* ${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}`
}

exports.movies = (movieInfo) => {
return `• *Nome do Filme:* ${movieInfo.data.results[0].title}\n• *Nome original:* ${movieInfo.data.results[0].original_title}\n• *Data de Lançamento:* ${movieInfo.data.results[0].release_date}\n• *Avaliações:* ${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)\n• *Popularidade:* ${movieInfo.data.results[0].popularity.toFixed(1)}%\n• *Classificação adulta?* ${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n• *Linguagem oficial:* ${movieInfo.data.results[0].original_language}\n–\n• *Sinopse:* ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `• *Nome da Série:* ${serieInfo.data.results[0].name}\n• *Nome original:* ${serieInfo.data.results[0].original_name}\n• *Data de Lançamento:* ${serieInfo.data.results[0].first_air_date}\n• *Avaliações:* ${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)\n• *Popularidade:* ${serieInfo.data.results[0].popularity.toFixed(1)}%\n• *Classificação adulta?* ${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n• *Linguagem oficial:* ${serieInfo.data.results[0].original_language}\n–\n• *Sinopse:* ${serieInfo.data.results[0].overview}`
}

exports.gamesResult = (titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb) => {
return `🎮 𝐈𝐍𝐅𝐎 𝐆𝐀𝐌𝐄𝐒:\n–\n• Título: *${titulo}*\n• Gênero(s): *${genero}*\n• Plataforma(s): *${plataforma}.*\n• Onde comprar: *${compreaqui}.*\n• Tempo de jogo: *${tempodejogatina} hora(s)*\n• Data de lançamento: *${datadelancamento}*\n• Avaliação do jogo: *${avaliacaodojogo}/${rating_top}*\n• Classificação: *${esrb}*`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`;
}

exports.commandNotFound = (tempo, prefix) => { 
return `• *${tempo}*, esse comando que foi usado não foi encontrado!\n• Utilize *${prefix}menu* para visualizar meus comandos maria joaquina. 🌷`
}

exports.sucessWarning = () => { 
return `Aviso referente a este grupo foi criado(a) com sucesso..`
}

exports.warningRemoved = () => { 
return `Avisos referente a esse grupo, foi tirado de todos os horários registrados..`
}

exports.noWarning = (prefix) => { 
return `Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`
}

exports.warningSyntax = (prefix) => { 
return `Exemplo: ${prefix}rg_aviso 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n–\nNeste exemplo, ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`
}

exports.sucessDeleteWarning = (prefix) => { 
return `O registro anterior foi apagado e recriou um novo, se deseja continuar, clique no botão abaixo..\n- Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`
}

exports.warningMB = (prefix) => { 
return `Este comando so pode ser utilizado com o modo brincadeiras estiver ativo.\nPara ativar, use: *${prefix}modobrincadeira 1*, já para desativar e só mudar o *1* para *0*.`
}

exports.aluguelRegisteredS = () => { 
return "Registro de aluguel deste grupo, foi feito com sucesso..."
}

exports.aluguelRgSyntax = (prefix) => { 
return `Cade a |\nExemplo: ${prefix}rg_aluguel 01/01|Dono do grupo: 555555555 / Pra cobrar o aluguel..`
}

exports.tabelaGrupo = (groupName, tabelagpofc) => {
return `Nome do Grupo:* ${groupName}\n–\n*Horário que criou a tabela:* ${tabelagpofc.Horario}\n*Data que criou a tabela:* ${tabelagpofc.Data}\n–\n*Tabela:* ${tabelagpofc.Tabela}`
}

exports.syntaxOperadora = (prefix) => {
return `Coloque o *número de telefone* que você deseja descobrir a operadora!\n   • É possível somente consultar a operadora de números brasileiros.\n    • Exemplo: *${prefix}operadora 82988279194*`
}

exports.qualOperadora = (data) => {
return `☎️ *Qual Operadora?*\n—\n• N° de Telefone: *${data.resultado.telefone}*\n• Qual é a operadora do número informado? *${data.resultado.operadora}*\n• Este tipo de dispositivo é um: *Telefone ${data.resultado.dispositivo}*\n• Qual é o(a) estado/cidade do DDD informado no número? *${data.resultado.estado}*`
}

exports.aluguelGroupRegistered = () => { 
return "Este grupo ja foi registrado."
}

exports.aluguelRemoveSyntax = (prefix) => { 
return `Digite o ID do grupo que deseja tirar da lista de aluguel, fórma mais fácil de achar o id é consultando o comando lista_aluguel, ou então executando o comando iddogrupo dentro do grupo que deseja tirar da lista de aluguel, e copiando o id, e executando dessa forma.\nExemplo: ${prefix}rm_aluguel 120363343392567405@g.us`
}

exports.aluguelRemoveGroup = () => { 
return "Grupo tirado do registro de aluguel com sucesso.."
}

exports.FormWrong_AddWordsForca1 = (prefix) => { 
return `Faltando a primeira |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`
}

exports.FormWrong_AddWordsForca2 = (prefix) => { 
return `Faltando a segunda |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`
}

exports.sucessAddWord_Forca = () => {
return "Palavra adicionada ao jogo da forca com sucesso..."
}
exports.sucessRemWord_Forca = () => {
return "Palavra tirada do jogo da forca com sucesso..."
}

exports.inUseWords_Forca = () => {
return "Esta palavra já foi adicionada/existente..."
}

exports.gameForcaNotStarted = (prefix) => {
return `O jogo não foi iniciado. Digite: ${prefix}iniciar_forca`
}

exports.sucessResetForca = (prefix) => {
return `O jogo da forca foi resetado com sucesso... Para iniciar novamente é só usar o comando: ${prefix}inciar_forca`
}

exports.forcaInProgress = (prefix) => {
return `Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}resetforca, ou tente acertar o jogo da forca que deve está logo a cima.`
}

exports.forcaStarted = (DM_FR, linha_fr, prefix) => {
return `Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n|________\n       _¦_\n\n\n\n\n\n\n${linha_fr}\n\n_______________________________\n\n_- JOGO INICIADO COM SUCESSO! -_\nPara responder, use: ${prefix}r-f letra que talvez exista por sua observação ou ${prefix}r-f nome todo\n_______________________________`
}

exports.forcaStartedRespond = (DM_FR, ERROS, ERRQ, linha_fr, letra_ut) => {
return `Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n__________-_\n         _|_\n\n        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}\n\n${linha_fr}\n\n___-________-_____\n\nLetras ja utilizadas: ${letra_ut}\n___-________-_____`
}

exports.explanationCash = (prefix) => {
return `• Para adicionar saldo a uma pessoa, use a seguinte forma:\n*Exemplo:* ${prefix}saldo add @pessoa 1\n–\n• Para remover o saldo bancário da ZeroBank de um usuário, use a seguinte forma:\n*Exemplo:* ${prefix}saldo del @pessoa 1`
}

exports.syntaxCash = (prefix) => {
return `Opa, você digitou o tipo ou valor inválido, tenha em mente que você só pode transferir com o tipo ou valor válido. um bom exemplo disso: ${prefix}transferir @pessoa/20`
}


exports.syntaxWithoutCash = (valor) => {
return `[SEM ZEROCASH] - Infelizmente você não possui este valor ${valor}, para realizar esta transferência você precisa ter no máximo ${valor}. Quando estiver o valor volte aqui e tente novamente.`
}

exports.sucessTransferCash1 = (sender, receber, valor) => {
return `💠 *[TRANSFERÊNCIA REALIZADA]* 💠\n✧:ඬ A transferência foi realizada pelo usuário: wa.me/${sender.split("@")[0]}\n✧:ඬ Destino de recebimento ao usuário: ${receber}\n✧:ඬ Valor da Transferência: ${valor}`
}

exports.sucessTransferCash2 = (sender, receber) => {
return `💠 *[TRANSFERÊNCIA REALIZADA]* 💠\n✧:ඬ A transferência foi realizada pelo usuário: wa.me/${sender.split("@")[0]}\n✧:ඬ Destino de recebimento ao usuário: ${receber}`
}

exports.resultMinerar = (minerar) => {
const randomMessageMine = [
   `Você minerando nas ilhas savitas encontrou ${minerar} Coins!👷⛏️`,
   `Você minerando no seu quintal achou ${minerar} Coins.`, 
   `Parabéns você achou ${minerar} Coin no quintal da vizinha? ;-;`, 
   `Você invadiu mina proibida, e quando tava fazendo mineração achou ${minerar} Coins!⛏️`,
    `Você roubou ${minerar} Coins na mina de Minas gerais! 👷⛏️💰`
]
buffer = randomMessageMine[Math.floor(Math.random() * randomMessageMine.length)]
return buffer
}

exports.fishingResult = (lagostas, caranguejos, camaroes, mexilhao, valorfinal) => {
return `┏━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┓\n│▢ Total de Lagostas: ${lagostas}\n│▢ Total de Caranguejos: ${caranguejos}\n│▢ Total de Camarões: ${camaroes}\n│▢ Total de Mexilhão: ${mexilhao}\n│▢ *Resultado Final: ${valorfinal}*\n┗━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┛\nIsso significa que foi adicionado em sua carteira R$${valorfinal},00.`
}

exports.betCashInsufficient = (quantidader, checkxpr) => {
return `Desculpa você ainda não pode apostar! Somente com: ${quantidader} de COINS.\n–\nSeu saldo atual: R$${checkxpr},00`
}

exports.betCashUseDenied = (quantidader, checkxpr) => {
return `Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n–\nSeu dinheiro: ${checkxpr}`
}

exports.barbecueResult = (picanha, contrafl, frangoassa, migilhon, resultFinal) => {
return `┏ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」* ┓\n│▢ Carne - Picanha Argentina: ${picanha}\n│▢ Carne - Contra Filé: ${contrafl}\n│▢ Carne - Asinhas de Frango: ${frangoassa}\n│▢ Carne - Filé Mignon: ${migilhon}\n┗ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」* ┛\n- Foram vendidas hoje por você em nosso açougue: ${resultFinal} peças de carne por você. Parabéns, isso significa que foi adicionado em sua carteira R$${resultFinal},00.`
}

exports.profileInformation = (pushname, sender, info, status, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho) => {
return `👤 「 *INFORMAÇÕES - PERFIL* 」\n–\n• Nome: *${pushname}*\n• Mencionando o usuário: *@${sender.split("@")[0]}*\n• Você está conectado em um dispositivo: ${info.key.id.length > 21 ? '*Android*' : info.key.id.substring(0, 2) == '3A' ? '*iOS*' : '*Windows/Linux*'}\n\n\n• Seu nível de prostituição: *${putar}${putar2}%*\n• Seu nível de gostosura: *${gostosurar}${gostosurar2}%*\n• Seu nível do gadometro: *${nivelgador}${nivelgado2r}%*\n• Valor do seu programa: *R$${programa}*\n\n➻ *Conselho:* ${conselho}`
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`
}

exports.finishAdvertencia = (menc_os2) => {
return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5594.../eu te amo*`
}

exports.anonymousMail = (txt2) => {
return `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`
}

exports.syntaxPrivatePhotoBot = (prefix) => {
return `• ${prefix}privphotobot - Minha foto de perfil visível a todos que entrarem em contato comigo.\n–\n• ${prefix}privphotobot cntt - Minha foto de perfil visível somenre aos meus contatos salvos.\n–\n• ${prefix}privphotobot ngm - Ninguém verá a minha foto de perfil, ou seja, estará oculta a todos.\n–\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`
}

exports.syntaxPrivAddGroup = (prefix) => {
return `• ${prefix}privaddgroup all - Todos os contatos e números que salvarem o número do bot poderam adicionar em grupo.\n–\n• ${prefix}privaddgroup cntt - Somente os contatos salvos em seu dispositivo poderam adicionar em grupos.\n–\n• ${prefix}privaddgroup ngm - Ninguém poderá me adicionar em grupo, somente enviando convite e vossa senhoria aceitando manualmente.\n–\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`
}

exports.addPremiumMessage = (marc_tds) => {
return `@${marc_tds.split("@")[0]} foi adicionado à lista de usuários premium da Zero Two com sucesso.️ 💖`
}

exports.delPremiumMessage = (marc_tds) => {
return `@${marc_tds.split("@")[0]} foi removido da lista premium da Zero Two com sucesso.. 🤭🌷`
}

exports.unbannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os meus comandos. 🥰`
}

exports.bannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi banido e não poderá mais usar os meus comandos. 😒`
}

exports.ownersList = (NomeDoBot, numerodono_ofc, dono1, dono2, dono3, dono4, dono5, dono6) => {
return `Olá, aqui está a lista de proprietários do bot: ${NomeDoBot}\n–\n*Dono Oficial:* wa.me/${numerodono_ofc}\n–\nDono [ 1 ] - wa.me/${dono1}\nDono [ 2 ] - wa.me/${dono2}\nDono [ 3 ] - wa.me/${dono3}\nDono [ 4 ] - wa.me/${dono4}\nDono [ 5 ] - wa.me/${dono5}\nDono [ 6 ] - wa.me/${dono6}`
}

exports.speedSabrina = (tempo, sender, r, kyun, uptime, infoSystem) => {
return `${tempo}, Usuário: @${sender.split("@")[0]}\n–\n⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
}

exports.infoPatente = (tempo, sender, patente, level_up) => {
return `${tempo}, usuário: @${sender.split("@")[0]}, aqui está suas informações de patente e level para saber como está atualmente:\n–\n✧ Patente: ${patente} - Level ${level_up}`
}

exports.updatePatente = (sender, qnt_msg, patente, level_up) => {
return `✥ Parabéns: @${sender.split("@")[0]}\nVocê upou de level e também de patente por completar ${qnt_msg} mensagens, veja as informações abaixo...\n–\n✧ Patente: ${patente} - Level ${level_up}`
}

exports.statusBot = (isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAutoReact, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado Block - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV Block: ${isAntiPv ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Imagem: ${isAntiImg ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Vídeo: ${isAntiVid ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Áudio: ${isAntiAudio? '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Sticker: ${isAntiSticker ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Documento: ${Antidoc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Contato ${isAntiCtt ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Localização: ${Antiloc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Grupo: ${isAntilinkgp ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Hard: ${isAntiLinkHard ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Fake: ${isAntifake ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Notas: ${isAntiNotas ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Catalogo: ${isAnticatalogo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Palavrão: ${isPalavrao ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Limite Caracteres: ${isAntiFlood ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 1: ${isWelkom ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 2: ${isWelkom2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 1: ${isSimi ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 2: ${isSimi2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Sticker: ${isAutofigu ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Resposta: ${isAutorepo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Brincadeira: ${isModobn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Aluguel: ${isModoAluguel ?  '✓ - Função ativa.' : '✕ - Não ativado.'}\n➱ Level ${isLevelingOn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Nsfw: ${isNsfw ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ AutoReact: ${isAutoReact ?  '✓ - Função ativa.' : '✕ - Desativado.\n'}`
}

exports.errorUploadImage = () => {
return `Ocorreu algum erro, desculpa! O limite do tamanho de vídeo que gero o link, é até 30 segundos.`
}

exports.noArgsSearch = () => {
return `Como deseja realizar uma pesquisa sem conter nenhum argumento? `
}

exports.syntaxLogos = () => {
return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`
}

exports.thinkingPrefix = (pushname, prefix) => {
return `Olá ${pushname}, aqui está meu prefixo para uso dos meus comandos: ${prefix}`
}

exports.chamandoBot = (pushname, tempo) => {
const response = [
 `Olá ${pushname}, em que posso ajudar?`, 
 `Olá meu amiguinho(a), tudo bem?`,
 `${tempo} ${pushname}, em que posso ajudar você?`,
 `Por qual motivo você me chamas? 🤔💭`
] 
buffer = response[Math.floor(Math.random() * response.length)]
return buffer 
}

exports.removeUserAntiPlvr = () => {
return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`
}

exports.permissionDenied_rUser = () => {
return `Infelizmente, não sou um administrador, entt não posso te banir!`
}

exports.antisRandomMessage = () => {
return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`
}

exports.charactersAnti = () => {
return `Muitos caracteres enviados, isto é contra as normas do grupo, por precaução, eu irei remover.`
}

exports.markingAllMember = () => {
return `*O participante foi removido do grupo* - Motivo: Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador...`
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n–\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak) => {
return `*Registro de Ausência* - O adminstrador "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n–\n☇ Mensagem: ${blak.msg}`
}

exports.conselhoBiblico = (tempo, pushname, conselhosb, NomeDoBot, groupName) => {
return `${tempo}, ${pushname}! Um conselho bíblico para você:\n–\n${conselhosb}\n–\n• *Bot:* ${NomeDoBot}\n• *Grupo:* ${groupName}`
 }

exports.aluguelMessageActivated = (pushname) => {
return `Olá *${pushname}*, meu proprietário ativou o modo aluguel, ou seja, os comandos não estão liberados aqui. Somente com a autorização dele eu posso responder comandos dados pela administração ou participantes deste grupo / comunidade.`
}

exports.floodCommands = () => {
return `Espere *5s* para usar outro comando ou executar o mesmo...`
}

exports.timeRequired = () => {
return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`
}

exports.error = () => {
return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`
}

exports.messageProhibitedDetAdmin = () => {
return `Mensagem proibida detectada, porém é admin logo a punição será anulada.`
}

exports.messageProhibitedDetUser = () => {
return `Mensagem proibida detectada, banindo o infrator...`
}

exports.antiPrivateBlock = () => {
return `Olá amigo(a), o *anti pv* está ativo no momento, ou seja, estou recebendo as ordens de bloquear os usuários que entrar em contato comigo no privado, Caso deseje me alugar, Chame meu criador: wa.me/559491569380 .`
}

exports.antiPrivateNoBlock = () => {
return `Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais...`
}

exports.antiCalls = () => {
return `Olá amigo, o anti ligar está ativo no momento, ou seja, estou recebendo as ordens de bloquear aqueles que efetuarem ligações para mim.`
}

exports.bannedUser = () => {
return "Você está impossibilitado de usar meus comandos! *Por favor, solicite o desbloqueio ao meu dono.*"
}

exports.syntaxRequestProhibited = (prefix) => {
return `Este comando tem a função de *aceitar, recusar solicitações e lista de pessoas que desejam entrar no grupo*.\n    • Veja os exemplos de uso do comando para não usar de *forma errada*.\n–\n    • *Exemplo 1:* Aceitar solicitação da pessoa que deseja entrar no grupo.\n        •  ${prefix}requestgp -a [número]\n–\n    • *Exemplo 2:* Recusar solicitação da pessoa que deseja entrar no grupo.\n        •  ${prefix}requestgp -r [número]\n–\n    • *Exemplo 3:* Ver a lista de pessoas que desejam entrar no grupo.\n        •  ${prefix}requestgp -a [número]`
}

exports.exeAnimeImage = (prefix) => {
return `O *comando* está sendo usado de forma incorreta. Por favor, verifique os exemplos apresentados abaixo:\n• *Uso:* ${prefix}editanime -filter *(total: 49)*\n–\n   ${prefix}animeimage -cosplay\n–\n   ${prefix}animeimage -waifu\n–\n   ${prefix}animeimage -loli\n–\n   ${prefix}animeimage -shota\n–\n   ${prefix}animeimage -shinomiya\n–\n   ${prefix}animeimage -yotsuba\n–\n   ${prefix}animeimage -yumeko\n–\n   ${prefix}animeimage -tejina\n–\n   ${prefix}animeimage -chiho\n–\n   ${prefix}animeimage -kaori\n–\n   ${prefix}animeimage -boruto\n–\n   ${prefix}animeimage -shizuka\n–\n   ${prefix}animeimage -kaga\n–\n   ${prefix}animeimage -kotori\n–\n   ${prefix}animeimage -mikasa\n–\n   ${prefix}animeimage -akiyama\n–\n   ${prefix}animeimage -gremory\n–\n   ${prefix}animeimage -izuku\n–\n   ${prefix}animeimage -shina\n–\n   ${prefix}animeimage -shinka\n–\n   ${prefix}animeimage -yuri\n–\n   ${prefix}animeimage -eba\n–\n   ${prefix}animeimage -erza\n–\n   ${prefix}animeimage -elaina\n–\n   ${prefix}animeimage -hinata\n–\n   ${prefix}animeimage -naruto\n–\n   ${prefix}animeimage -minato\n–\n   ${prefix}animeimage -sagari\n–\n   ${prefix}animeimage -nezuko\n–\n   ${prefix}animeimage -rize\n–\n   ${prefix}animeimage -anna\n–\n   ${prefix}animeimage -deidara\n–\n   ${prefix}animeimage -asuna\n–\n   ${prefix}animeimage -ayuzawa\n–\n   ${prefix}animeimage -emilia\n–\n   ${prefix}animeimage -chitoge\n–\n   ${prefix}animeimage -hestia\n–\n   ${prefix}animeimage -inori\n–\n   ${prefix}animeimage -itachi\n–\n   ${prefix}animeimage -madara\n–\n   ${prefix}animeimage -sakura\n–\n   ${prefix}animeimage -sasuke\n–\n   ${prefix}animeimage -tsunade\n–\n   ${prefix}animeimage -onepiece\n–\n   ${prefix}animeimage -mobil\n–\n   ${prefix}animeimage -montor\n–\n   ${prefix}animeimage -keneki\n–\n   ${prefix}animeimage -megumin\n–\n   ${prefix}animeimage -toukachan`
}

exports.exeAnimeEdit = (prefix) => {
return `O *comando* está sendo usado de forma incorreta. Por favor, verifique os exemplos apresentados abaixo:\n• *Uso:* ${prefix}editanime -filter *(total: 07)*\n–\n   ${prefix}editanime -random\n–\n   ${prefix}editanime -bleach\n–\n   ${prefix}editanime -chainsaw\n–\n   ${prefix}editanime -dragonball\n–\n   ${prefix}editanime -kimetsu\n–\n   ${prefix}editanime -jujutsu\n–\n   ${prefix}editanime -naruto`
}
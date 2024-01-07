//selo localização
const seloloc = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net","remoteJid": 'status@broadcast'},message: {liveLocationMessage: {degreesLatitude: 173.282, degreesLongitude: -19.378,sequenceNumber: "1657237469254001", thumbnail: fs.readFileSync('./fotos/foto.jpg'), caption: `Bem vindo: ${pushname}`}}}

//selo contato
const selo2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}

//selo vizualização única
const selovizu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "viewOnceMessage": {  "jpegThumbnail": fs.readFileSync(`./fotos/foto.jpg`)} } }

//selo documento
const selodoc = { key : { fromMe: false, participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: `Bem vindo: ${pushname}`,jpegThumbnail: fs.readFileSync(`./fotos/foto.jpg`)}}};

//selo grupo 
const selogp = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6282127487538-1625305606@g.us","inviteCode": "null","groupName": ` Annônimo domina bb `,"caption": `Bem vindo: ${pushname}`,'jpegThumbnail': fs.readFileSync('./fotos/foto.jpg')}}}

//selo carrinho       
const selocar = {key: {fromMe: false,"participant": "0@s.whatsapp.net","remoteJid": "120363022697760691@g.us"},"message": {orderMessage: {itemCount: 999,status: 200,jpegThumbnail: fs.readFileSync('./fotos/foto.jpg'),surface: 200,message: `Annônimo domina\nBem vindo: ${pushname}`,orderTitle: 'up',sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore": 999,"isForwarded": true},sendEphemeral: true}

//selo vídeo
const selovideo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": {"title": `bem vindo: ${pushname}`,"h": `Usuario: ${pushname}`,"duration": "28382","caption": `Bem vindo: ${pushname}`,"jpegThumbnail": fs.readFileSync(`./fotos/foto.jpg`)}}};

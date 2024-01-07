//Cases a baixo, by lucas mod domina ne bb ✨

//Marca todos do grupo/dar um aviso , use assim: /marca (seu aviso)
case 'marcar': {
if(!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')

let teks = `══ *👥membros!* ══
 
 ➲ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
for (let mem of groupMembers) {
teks += ` @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}
break

//Banir usuários de grupo, use assim: /ban (marque a msg do alvo)
case 'ban':
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
conn.sendMessage(from, {text: `Adeus ${num.split('@')[0]}`, mentions: [num]}, {quoted: selo})
conn.groupParticipantsUpdate(from, [num], 'remove')
} else { 
enviar('Responda a mensagem da pessoa')
}
break

//Mudar descrição do grupo, user assim: /descgp (Aqui a descrição)
case 'descgp': 
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')

  desc = args.join(" ")
  conn.groupUpdateDescription(from, `${desc}`)
  enviar(' descrição mudada com sucesso')
  break

//abrir/fechar grupo , use assim: /grupo f ou /grupo a

case 'grupo':
case 'gp': 
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')

if (args[0] === 'a') {
enviar(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
enviar(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

//hidetag, marca todos do grupo

case 'hidetag':
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')
value = body.slice(9)
group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: value,
mentions: mem,
quoted: info
}
conn.sendMessage(from, options)
break

//tira adm do usuário que marca na msg,  use: /rebaixar @dapessoa
case 'rebaixar': 
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')

teks = body.slice(11)
if(teks.length > 15) return enviar('Só pode rebaixar uma pessoa por vez..')
await sleep(2000)
enviar(`@${teks} Foi Rebaixado(a) para membro comum com sucesso...`)
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "demote")
break

case 'promover': 
//tira adm do usuário que marca na msg, use: /promover @dapessoa
if (!isGroup) return enviar('So pode ser usado em grupo')
if (!isGroupAdmins) return enviar('apenas para admins')
if (!isBotGroupAdmins) return enviar('o bot precisa ser adm')
teks = body.slice(11)
if(teks.length > 15) return enviar('Só pode promover uma pessoa por vez..')
await sleep(2000)
enviar(`Agora o @${teks} Tem um pouco de importância.`)
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "promote")
break

//Documento fake, use /docfake Annônimo gostoso|8382828|pdf


//case de brincadeiras, adicione mais nomes de case para aumentar as brincadeiras, use /corno ou /corno @ da pessoa que quer medir a % de corno
case 'corno':
case 'gay':
if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {text: `ೈ፝͜͡⃟ꦿ➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

//Marcação fake para trolar o povo ksksksk
case 'calunia':
teks = args.join(" ");
var alvoNumber;
if (info.message.extendedTextMessage) {
  alvoNumber = info.message.extendedTextMessage.contextInfo.participant;
} else if (info.message.extendedTextMessage == null){
if (!teks) return enviar(`Marque a mensagem de alguém ou digite o seguinte comando:\n${prefix + comando} eu sou gay/eu já sabia/18996998971\n\n*OBS:* o número tem que está no mesmo formato do whatsapp`);
var numbAlv = teks.split("/")[2];
numbAlvs = numbAlv.split("+55").join("").split("-").join("").split(" ").join("");
alvoNumber = "+55" + numbAlvs + "@s.whatsapp.net";
}
var alvo = teks.split("/")[0];
var bot = teks.split("/")[1];
const annônimo = {
key: { fromMe: false, participant: alvoNumber},
message: { 
"extendedTextMessage": {
"text": alvo
}
} 
};
conn.sendMessage(from, {text: bot}, {quoted: annônimo});
break

//medir tamanho do pau kkkkkkkk
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
teste = `SEU PAU TEM ${random}CM\n\n${pp}`
enviar(teste)
break

//pedra, papel , tesoura
case "ppt":
if (args.length < 1) return enviar(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
enviar(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break

//sim ou não 
case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break

//chance 
case 'chance':
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
enviar(' ➥ A chance disso que você falou acontecer e de:❰ '+random+'% ❱ ✧ ')
break

//e isso espero que gostem :)
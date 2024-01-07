const fs = require('fs')
const path = require('path');

const dbPath = path.resolve(__dirname, './funções_rpg/dinheiro/dindin.json');

let data = {};

const carregarDados = () => {
  try {
    const jsonData = fs.readFileSync(dbPath, 'utf8');
    data = JSON.parse(jsonData);
  } catch (error) {
    data = {};
  }
};
const toMs = require('ms')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const dindin = JSON.parse(fs.readFileSync('./funções_rpg/dinheiro/dindin.json'));
const banco = JSON.parse(fs.readFileSync('./funções_rpg/banco/banco.json'));
const _level = JSON.parse(fs.readFileSync('./funções_rpg/level/level.json'))
const _levelmiss = JSON.parse(fs.readFileSync('./funções_rpg/miss/levelmiss.json'))
const diamante = JSON.parse(fs.readFileSync('./funções_rpg/diamante/diamante.json'));
const petgato = JSON.parse(fs.readFileSync('./funções_rpg/comidagato/comidagato.json'));
const fomegato = JSON.parse(fs.readFileSync('./funções_rpg/fomegato/fomegato.json'));
const vida = JSON.parse(fs.readFileSync('./funções_rpg/vida/vida.json'));
const dano = JSON.parse(fs.readFileSync('./funções_rpg/dano/dano.json'));
const defesa = JSON.parse(fs.readFileSync('./funções_rpg/defesa/defesa.json'));
const cartao = JSON.parse(fs.readFileSync('./funções_rpg/cartao/cartao.json'));
const ataque = JSON.parse(fs.readFileSync('./funções_rpg/ataque/ataque.json'));
const batalhaganhas = JSON.parse(fs.readFileSync('./funções_rpg/batalhaganhas/batalhaganhas.json'));
const batalhaperdida = JSON.parse(fs.readFileSync('./funções_rpg/batalhaperdida/batalhaperdida.json'));
const picareta = JSON.parse(fs.readFileSync('./funções_rpg/picareta/picareta.json'));
const desequipado = JSON.parse(fs.readFileSync('./funções_rpg/desequipado/desequipado.json'));
const aquipado = JSON.parse(fs.readFileSync('./funções_rpg/aquipado/aquipado.json'));
//const like = JSON.parse(fs.readFileSync('./datab/usuarios/like.json'));

        
const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
}
}
     
const addATM = (sender) => {
carregarDados();
const obj = {
 id: sender,
 dindin: 0
};
dindin.push(obj)
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
        
const addKoinUser = (sender, amount) => {
carregarDados();
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin += amount
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}


const checkATMuser = (sender) => {
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
return dindin[position].dindin
}
}

const confirmATM = (sender, amount) => {
carregarDados();
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin -= amount
fs.writeFileSync('./funções_rpg/dinheiro/dindin.json', JSON.stringify(dindin))
}
}


//sistema banco//
const addBANCO = (sender) => {
const obj = {id: sender, banco : 0}
banco.push(obj)
fs.writeFileSync('./funções_rpg/banco/banco.json', JSON.stringify(banco))
}

const addKoinBanco = (sender, amount) => {
let position = false
Object.keys(banco).forEach((i) => {
if (banco[i].id === sender) {
position = i
}
})
if (position !== false) {
banco[position].banco += amount
fs.writeFileSync('./funções_rpg/banco/banco.json', JSON.stringify(banco))
}
}

const checkATBANCO = (sender) => {
let position = false
Object.keys(banco).forEach((i) => {
if (banco[i].id === sender) {
position = i
}
})
if (position !== false) {
return banco[position].banco
}
}

const confirmBANCO = (sender, amount) => {
let position = false
Object.keys(banco).forEach((i) => {
if (banco[i].id === sender) {
position = i
}
})
if (position !== false) {
banco[position].banco -= amount
fs.writeFileSync('./funções_rpg/banco/banco.json', JSON.stringify(banco))
}
}
//FINAL SISTEMA BANCO//

//SISTEMA DIAMANTE//
const addDIAMANTE = (sender) => { // ADICIONA USUÁRIO COM O DIAMANTE
const obj = {id: sender, diamante : 0}
diamante.push(obj)
fs.writeFileSync('./funções_rpg/diamante/diamante.json', JSON.stringify(diamante))
}

const addKoinDiamante = (sender, amount) => {
let position = false
Object.keys(diamante).forEach((i) => {
if (diamante[i].id === sender) {
position = i
}
})
if (position !== false) {
diamante[position].diamante += amount
fs.writeFileSync('./funções_rpg/diamante/diamante.json', JSON.stringify(diamante))
}
}

const checkATDIAMNTE = (sender) => {
let position = false
Object.keys(diamante).forEach((i) => {
if (diamante[i].id === sender) {
position = i
}
})
if (position !== false) {
return diamante[position].diamante
}
}

const confirmDIAMANTE = (sender, amount) => {
let position = false
Object.keys(banco).forEach((i) => {
if (diamante[i].id === sender) {
position = i
}
})
if (position !== false) {
diamante[position].banco -= amount
fs.writeFileSync('./funções_rpg/diamante/diamante.json', JSON.stringify(diamante))
}
}
//FINAL SISTEMA BANCO//

//====SISTEMA DE LEVSM//====//
const getLevelingXp = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const getLevelingLevel = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}        

const getLevelingId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].id
}
}

const addLevelingXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./funções_rpg/level/level.json', JSON.stringify(_level))
}
}

const addLevelingLevel = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./funções_rpg/level/level.json', JSON.stringify(_level))
}
}

const addLevelingId = (sender) => {
const obj = {id: sender, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./funções_rpg/level/level.json', JSON.stringify(_level))
}
//====COMIDA PETEZ====//
const addKoinComidagato = (sender, amount) => {
let position = false
Object.keys(petgato).forEach((i) => {
if (petgato[i].id === sender) {
position = i
}
})
if (position !== false) {
petgato[position].petgato += amount
fs.writeFileSync('./funções_rpg/comidagato/comidagato.json', JSON.stringify(petgato))
}
}

const checkATMGato = (sender) => {
let position = false
Object.keys(petgato).forEach((i) => {
if (petgato[i].id === sender) {
position = i
}
})
if (position !== false) {
return petgato[position].petgato
}
}

const addCOMIDAGATO = (sender) => { // ADICIONA USUÁRIO COM O petgato
const obj = {id: sender, petgato : 0}
petgato.push(obj)
fs.writeFileSync('./funções_rpg/comidagato/comidagato.json', JSON.stringify(petgato))
}

//===(FOME DO GATO)====//
const addKoinFomeGato = (sender, amount) => {
let position = false
Object.keys(fomegato).forEach((i) => {
if (fomegato[i].id === sender) {
position = i
}
})
if (position !== false) {
fomegato[position].fomegato += amount
fs.writeFileSync('./funções_rpg/fomegato/fomegato.json', JSON.stringify(fomegato))
}
}

const checkATMFOMEGARTO = (sender) => {
let position = false
Object.keys(fomegato).forEach((i) => {
if (fomegato[i].id === sender) {
position = i
}
})
if (position !== false) {
return fomegato[position].fomegato
}
}

const addFOMEGATO = (sender) => { // ADICIONA USUÁRIO COM O fomegato
const obj = {id: sender, fomegato : 100}
fomegato.push(obj)
fs.writeFileSync('./funções_rpg/fomegato/fomegato.json', JSON.stringify(fomegato))
}
//====FINAL PET====//

//====FUÇAO LIKE====//
const checkATMlike = (sender) => {
let position = false
Object.keys(like).forEach((i) => {
if (like[i].id === sender) {
position = i
}
})
if (position !== false) {
return like[position].like
}
}

const addLikeUser = (sender, amount) => {
let position = false
Object.keys(like).forEach((i) => {
if (like[i].id === sender) {
position = i
}
})
if (position !== false) {
like[position].like += amount
fs.writeFileSync('./datab/usuarios/like.json', JSON.stringify(like))
}
}

const addLIKE = (sender) => {
const obj = {id: sender, like : 0}
like.push(obj)
fs.writeFileSync('./datab/usuarios/like.json', JSON.stringify(like))
}
//====FINAL LIKE======//
const addATMVida = (sender) => {
const obj = {id: sender, vida : 500}
vida.push(obj)
fs.writeFileSync('./funções_rpg/vida/vida.json', JSON.stringify(vida))
}
        
const addVidauser = (sender, amount) => {
let position = false
Object.keys(vida).forEach((i) => {
if (vida[i].id === sender) {
position = i
}
})
if (position !== false) {
vida[position].vida += amount
fs.writeFileSync('./funções_rpg/vida/vida.json', JSON.stringify(vida))
}
}


const checkATMvida = (sender) => {
let position = false
Object.keys(vida).forEach((i) => {
if (vida[i].id === sender) {
position = i
}
})
if (position !== false) {
return vida[position].vida
}
}

const confirmATMvida = (sender, amount) => {
let position = false
Object.keys(vida).forEach((i) => {
if (vida[i].id === sender) {
position = i
}
})
if (position !== false) {
vida[position].vida -= amount
fs.writeFileSync('./funções_rpg/vida/vida.json', JSON.stringify(vida))
}
}
//====SISTEMA DE LEVELMISS//====//
const getLevelingXpp = (sender) => {
let position = false
Object.keys(_levelmiss).forEach((i) => {
if (_levelmiss[i].id === sender) {
position = i
}
})
if (position !== false) {
return _levelmiss[position].xp
}
}

const getLevelingmiss = (sender) => {
let position = false
Object.keys(_levelmiss).forEach((i) => {
if (_levelmiss[i].id === sender) {
position = i
}
})
if (position !== false) {
return _levelmiss[position].level
}
}        

const getLevelingIdd = (sender) => {
let position = false
Object.keys(_levelmiss).forEach((i) => {
if (_levelmiss[i].id === sender) {
position = i
}
})
if (position !== false) {
return _levelmiss[position].id
}
}

const addLevelingXpp = (sender, amount) => {
let position = false
Object.keys(_levelmiss).forEach((i) => {
if (_levelmiss[i].id === sender) {
position = i
}
})
if (position !== false) {
_levelmiss[position].xp += amount
fs.writeFileSync('./funções_rpg/miss/levelmiss.json', JSON.stringify(_levelmiss))
}
}

const addLevelingLevell = (sender, amount) => {
let position = false
Object.keys(_levelmiss).forEach((i) => {
if (_levelmiss[i].id === sender) {
position = i
}
})
if (position !== false) {
_levelmiss[position].level += amount
fs.writeFileSync('./funções_rpg/miss/levelmiss.json', JSON.stringify(_levelmiss))
}
}

const addLevelingIdd = (sender) => {
const obj = {id: sender, xp: 1, level: 1}
_levelmiss.push(obj)
fs.writeFileSync('./funções_rpg/miss/levelmiss.json', JSON.stringify(_levelmiss))
}
// SISTEMA DE LUTA //
const addATMdano = (sender) => {
const obj = {id: sender, dano : 0}
dano.push(obj)
fs.writeFileSync('./funções_rpg/dano/dano.json', JSON.stringify(dano))
}
        
const adddanouser = (sender, amount) => {
let position = false
Object.keys(dano).forEach((i) => {
if (dano[i].id === sender) {
position = i
}
})
if (position !== false) {
dano[position].dano += amount
fs.writeFileSync('./funções_rpg/dano/dano.json', JSON.stringify(dano))
}
}


const checkATMdano = (sender) => {
let position = false
Object.keys(dano).forEach((i) => {
if (dano[i].id === sender) {
position = i
}
})
if (position !== false) {
return dano[position].dano
}
}

const confirmATMdano = (sender, amount) => {
let position = false
Object.keys(dano).forEach((i) => {
if (dano[i].id === sender) {
position = i
}
})
if (position !== false) {
dano[position].dano -= amount
fs.writeFileSync('./funções_rpg/dano/dano.json', JSON.stringify(dano))
}
}

// FINAL DO SISTEMA DE DANO//
const addATMdefesa = (sender) => {
const obj = {id: sender, defesa : 0}
defesa.push(obj)
fs.writeFileSync('./funções_rpg/defesa/defesa.json', JSON.stringify(defesa))
}
        
const adddefesauser = (sender, amount) => {
let position = false
Object.keys(defesa).forEach((i) => {
if (defesa[i].id === sender) {
position = i
}
})
if (position !== false) {
defesa[position].defesa += amount
fs.writeFileSync('./funções_rpg/defesa/defesa.json', JSON.stringify(defesa))
}
}


const checkATMdefesa = (sender) => {
let position = false
Object.keys(defesa).forEach((i) => {
if (defesa[i].id === sender) {
position = i
}
})
if (position !== false) {
return defesa[position].defesa
}
}

const confirmATMdefesa = (sender, amount) => {
let position = false
Object.keys(defesa).forEach((i) => {
if (defesa[i].id === sender) {
position = i
}
})
if (position !== false) {
defesa[position].defesa -= amount
fs.writeFileSync('./funções_rpg/defesa/defesa.json', JSON.stringify(defesa))
}
}
//FINAL DO SISTEMA DE DEFESA//

const addATMataque = (sender) => {
const obj = {id: sender, ataque : 0}
ataque.push(obj)
fs.writeFileSync('./funções_rpg/ataque/ataque.json', JSON.stringify(ataque))
}
        
const addataqueuser = (sender, amount) => {
let position = false
Object.keys(ataque).forEach((i) => {
if (ataque[i].id === sender) {
position = i
}
})
if (position !== false) {
ataque[position].ataque += amount
fs.writeFileSync('./funções_rpg/ataque/ataque.json', JSON.stringify(ataque))
}
}


const checkATMataque = (sender) => {
let position = false
Object.keys(ataque).forEach((i) => {
if (ataque[i].id === sender) {
position = i
}
})
if (position !== false) {
return ataque[position].ataque
}
}

const confirmATMataque = (sender, amount) => {
let position = false
Object.keys(ataque).forEach((i) => {
if (ataque[i].id === sender) {
position = i
}
})
if (position !== false) {
ataque[position].ataque -= amount
fs.writeFileSync('./funções_rpg/ataque/ataque.json', JSON.stringify(ataque))
}
}
//FINAL DO SISTEMA DE ATAQUE//

const addATMbatalhaperdida = (sender) => {
const obj = {id: sender, batalhaperdida : 0}
batalhaperdida.push(obj)
fs.writeFileSync('./funções_rpg/batalhaperdida/batalhaperdida.json', JSON.stringify(batalhaperdida))
}
        
const addbatalhaperdidauser = (sender, amount) => {
let position = false
Object.keys(batalhaperdida).forEach((i) => {
if (batalhaperdida[i].id === sender) {
position = i
}
})
if (position !== false) {
batalhaperdida[position].batalhaperdida += amount
fs.writeFileSync('./funções_rpg/batalhaperdida/batalhaperdida.json', JSON.stringify(batalhaperdida))
}
}


const checkATMbatalhaperdida = (sender) => {
let position = false
Object.keys(batalhaperdida).forEach((i) => {
if (batalhaperdida[i].id === sender) {
position = i
}
})
if (position !== false) {
return batalhaperdida[position].batalhaperdida
}
}

const confirmATMbatalhaperdida = (sender, amount) => {
let position = false
Object.keys(batalhaperdida).forEach((i) => {
if (batalhaperdida[i].id === sender) {
position = i
}
})
if (position !== false) {
batalhaperdida[position].batalhaperdida -= amount
fs.writeFileSync('./funções_rpg/batalhaperdida/batalhaperdida.json', JSON.stringify(batalhaperdida))
}
}

const addATMbatalhaganhas = (sender) => {
const obj = {id: sender, batalhaganhas : 0}
batalhaganhas.push(obj)
fs.writeFileSync('./funções_rpg/batalhaganhas/batalhaganhas.json', JSON.stringify(batalhaganhas, null, 2))
}
        
const addbatalhaganhasuser = (sender, amount) => {
let position = false
Object.keys(batalhaganhas).forEach((i) => {
if (batalhaganhas[i].id === sender) {
position = i
}
})
if (position !== false) {
batalhaganhas[position].batalhaganhas += amount
fs.writeFileSync('./funções_rpg/batalhaganhas/batalhaganhas.json', JSON.stringify(batalhaganhas))
}
}


const checkATMbatalhaganhas = (sender) => {
let position = false
Object.keys(batalhaganhas).forEach((i) => {
if (batalhaganhas[i].id === sender) {
position = i
}
})
if (position !== false) {
return batalhaganhas[position].batalhaganhas
}
}

const confirmATMbatalhaganhas = (sender, amount) => {
let position = false
Object.keys(batalhaganhas).forEach((i) => {
if (batalhaganhas[i].id === sender) {
position = i
}
})
if (position !== false) {
batalhaganhas[position].batalhaganhas -= amount
fs.writeFileSync('./funções_rpg/batalhaganhas/batalhaganhas.json', JSON.stringify(batalhaganhas))
}
}


//sistema cartao//
const addcartao = (sender) => {
const obj = {id: sender, cartao : 0}
cartao.push(obj)
fs.writeFileSync('./funções_rpg/cartao/cartao.json', JSON.stringify(cartao))
}

const addKoincartao = (sender, amount) => {
let position = false
Object.keys(cartao).forEach((i) => {
if (cartao[i].id === sender) {
position = i
}
})
if (position !== false) {
cartao[position].cartao += amount
fs.writeFileSync('./funções_rpg/cartao/cartao.json', JSON.stringify(cartao))
}
}

const checkATcartao = (sender) => {
let position = false
Object.keys(cartao).forEach((i) => {
if (cartao[i].id === sender) {
position = i
}
})
if (position !== false) {
return cartao[position].cartao
}
}

const confirmcartao = (sender, amount) => {
let position = false
Object.keys(cartao).forEach((i) => {
if (cartao[i].id === sender) {
position = i
}
})
if (position !== false) {
cartao[position].cartao -= amount
fs.writeFileSync('./funções_rpg/cartao/cartao.json', JSON.stringify(cartao))
}
}
//FINAL SISTEMA cartao//

//sistema picareta//
const addpicareta = (sender) => {
const obj = {id: sender, picareta : 0}
picareta.push(obj)
fs.writeFileSync('./funções_rpg/picareta/picareta.json', JSON.stringify(picareta))
}

const addKoinpicareta = (sender, amount) => {
let position = false
Object.keys(picareta).forEach((i) => {
if (picareta[i].id === sender) {
position = i
}
})
if (position !== false) {
picareta[position].picareta += amount
fs.writeFileSync('./funções_rpg/picareta/picareta.json', JSON.stringify(picareta))
}
}

const checkATpicareta = (sender) => {
let position = false
Object.keys(picareta).forEach((i) => {
if (picareta[i].id === sender) {
position = i
}
})
if (position !== false) {
return picareta[position].picareta
}
}

const confirmpicareta = (sender, amount) => {
let position = false
Object.keys(picareta).forEach((i) => {
if (picareta[i].id === sender) {
position = i
}
})
if (position !== false) {
picareta[position].picareta -= amount
fs.writeFileSync('./funções_rpg/picareta/picareta.json', JSON.stringify(picareta))
}
}
//FINAL SISTEMA picareta//

//sistema aquipado//
const addaquipado = (sender) => {
const obj = {id: sender, aquipado : 0}
aquipado.push(obj)
fs.writeFileSync('./funções_rpg/aquipado/aquipado.json', JSON.stringify(aquipado))
}

const addKoinaquipado = (sender, amount) => {
let position = false
Object.keys(aquipado).forEach((i) => {
if (aquipado[i].id === sender) {
position = i
}
})
if (position !== false) {
aquipado[position].aquipado += amount
fs.writeFileSync('./funções_rpg/aquipado/aquipado.json', JSON.stringify(aquipado))
}
}

const checkATaquipado = (sender) => {
let position = false
Object.keys(aquipado).forEach((i) => {
if (aquipado[i].id === sender) {
position = i
}
})
if (position !== false) {
return aquipado[position].aquipado
}
}

const confirmaquipado = (sender, amount) => {
let position = false
Object.keys(aquipado).forEach((i) => {
if (aquipado[i].id === sender) {
position = i
}
})
if (position !== false) {
aquipado[position].aquipado -= amount
fs.writeFileSync('./funções_rpg/aquipado/aquipado.json', JSON.stringify(aquipado))
}
}
//FINAL SISTEMA aquipado//


//sistema desequipado//
const adddesequipado = (sender) => {
const obj = {id: sender, desequipado : 1}
desequipado.push(obj)
fs.writeFileSync('./funções_rpg/desequipado/desequipado.json', JSON.stringify(desequipado))
}

const addKoindesequipado = (sender, amount) => {
let position = false
Object.keys(desequipado).forEach((i) => {
if (desequipado[i].id === sender) {
position = i
}
})
if (position !== false) {
desequipado[position].desequipado += amount
fs.writeFileSync('./funções_rpg/desequipado/desequipado.json', JSON.stringify(desequipado))
}
}

const checkATdesequipado = (sender) => {
let position = false
Object.keys(desequipado).forEach((i) => {
if (desequipado[i].id === sender) {
position = i
}
})
if (position !== false) {
return desequipado[position].desequipado
}
}

const confirmdesequipado = (sender, amount) => {
let position = false
Object.keys(desequipado).forEach((i) => {
if (desequipado[i].id === sender) {
position = i
}
})
if (position !== false) {
desequipado[position].desequipado -= amount
fs.writeFileSync('./funções_rpg/desequipado/desequipado.json', JSON.stringify(desequipado))
}
}
//FINAL SISTEMA desequipado//

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

supre = `559491569380@s.whatsapp.net`

//AFK
const addafk = (from) => {
const obj = { id: from, expired: Date.now() + toMs('0m') }
afk.push(obj)
fs.writeFileSync('./datab/grupos/afk.json', JSON.stringify(afk))
}
                         
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}

module.exports = { 
limitAdd, 
addATM, 
addKoinUser, 
addKoinBanco,
addBANCO,
checkATBANCO,
confirmBANCO,
checkATMuser, 
confirmATM,
//====CONFIRMA DIAMANTE====//
addDIAMANTE,
addKoinDiamante,
checkATDIAMNTE,
confirmDIAMANTE,
//====LEVEL====//
getLevelingXp,
getLevelingLevel,
getLevelingId,
addLevelingXp,
addLevelingLevel,
addLevelingId,
//====COMIDA PETES====//
addKoinComidagato,
checkATMGato,
addCOMIDAGATO,
//====FOME GATO====//
addKoinFomeGato,
checkATMFOMEGARTO,
addFOMEGATO,
//====LIKE TINDER====//
checkATMlike,
addLikeUser,
addLIKE,
//====SISTEMA VIDA====//
addATMVida,
addVidauser,
checkATMvida,
confirmATMvida,
//====SISTEMA DE LEVEL MISS====//
getLevelingXpp,
getLevelingmiss,
getLevelingIdd,
addLevelingXpp,
addLevelingLevell,
addLevelingIdd,
//====SISTEMA DE DANO====//
confirmATMdano,
checkATMdano,
addATMdano,
adddanouser,
//====SISTEMA DE DEFESA====//
confirmATMdefesa,
checkATMdefesa,
adddefesauser,
addATMdefesa,
//====SISTEMA DE ATAQUE=====//
confirmATMataque,
checkATMataque,
addataqueuser,
addATMataque,
//====BATALHAS PERDIDAS====//
addATMbatalhaperdida,
addbatalhaperdidauser,
checkATMbatalhaperdida,
confirmATMbatalhaperdida,
//====SISTEMA DE BATALHA GANHAS====//
addATMbatalhaganhas,
addbatalhaganhasuser,
checkATMbatalhaganhas,
confirmATMbatalhaganhas,
//====SISTRMA CARTAO====//
confirmcartao,
checkATcartao,
addKoincartao,
addcartao,
//====SISTEMA PICARETA====//
addpicareta,
addKoinpicareta,
checkATpicareta,
confirmpicareta, 
//====SISTEMA EQUIPAMENTOS====//
addaquipado, 
addKoinaquipado, 
checkATaquipado, 
confirmaquipado, 
//====SISTEMA DESEQUIPAMENTO====//
adddesequipado, 
addKoindesequipado, 
checkATdesequipado, 
confirmdesequipado,
supre }
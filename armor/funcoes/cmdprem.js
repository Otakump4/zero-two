const fs = require("fs")

const cmds = JSON.parse(fs.readFileSync("./settings/media/cmdprem.json"))

const addComandosVipurId = (from) => { 
const obj = { groupId : from, cmds:[]};
cmds.push(obj); 
fs.writeFileSync('./settings/media/cmdprem.json', JSON.stringify(cmds))};
const getComandosVipur = (from) => { 
let position = false; Object.keys(cmds).forEach((i) => { 
if (cmds[i].groupId === from) { position = i }});
if (position !== false) { 
return cmds[position].groupId 
}}
const addComandosVipur = (from, oq) => { 
let position = false;
Object.keys(cmds).forEach((i) => { 
if (cmds[i].groupId === from ){ 
position = i 
}}); 
if (position !== false) { 
cmds[position].cmds.push(oq); fs.writeFileSync('./settings/media/cmdprem.json', JSON.stringify(cmds))}
}
const deleteComandosVipur = (from, oq) => { let position = false; Object.keys(cmds).forEach((i) => { if (cmds[i].groupId === from ){ position = i }}); if (position !== false) { cmds[position].cmds.splice(oq, 1); fs.writeFileSync('./settings/media/cmdprem.json', JSON.stringify(cmds))}}
const getComandoVipur = (from) => { let position = false; Object.keys(cmds).forEach((i) => { if (cmds[i].groupId === from) { position = i }}); if (position !== false) { return cmds[position].cmds}}

module.exports = {
addComandosVipurId, deleteComandosVipur,
getComandoVipur, getComandosVipur, 
addComandosVipur
}
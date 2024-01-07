
const { default: makeWASocket, BufferJSON, MessageType, MessageOptions, getContentType, Mimetype, generateWAMessageFromContent, generateWAMessage, areJidsSameUser, downloadContentFromMessage, proto } = require("@adiwajshing/baileys")
const baileys = require('@adiwajshing/baileys');
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const Crypto = require('crypto')
const axios = require('axios')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')


exports.smsg = (aqua, m, hasParent) => {
if (!m) return m
let M = proto.WebMessageInfo

if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = m.fromMe ? (aqua.user.id.split(":")[0]+'@s.whatsapp.net' || aqua.user.id) : (m.key.participant || m.key.remoteJid)  }
const object = Object.keys(m.message)
m.type = object[0] == 'senderKeyDistributionMessage' ? object[2] : object[0] == 'messageContextInfo' ? object[1] : object[0] || object[1]
m.msg = (m.type == 'viewOnceMessageV2' ? m.message[m.type].message[getContentType(m.message[m.type].message)] : m.message[m.type])
let quoted = m.quoted = m.msg && m.msg.contextInfo ? m.msg.contextInfo.quotedMessage || m.message : null;
if (m.message) {
if (m.type === 'ephemeralMessage') {
exports.smsg(aqua, m.msg)
m.type = m.msg.mtype
m.msg = m.msg.msg }
m.body = m.message?.conversation || m.message?.viewOnceMessageV2?.message?.imageMessage?.caption || m.message?.viewOnceMessageV2?.message?.videoMessage?.caption || m.message?.imageMessage?.caption || m.message?.videoMessage?.caption || m.message?.extendedTextMessage?.text || m.message?.viewOnceMessage?.message?.videoMessage?.caption || m.message?.viewOnceMessage?.message?.imageMessage?.caption || m.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || m?.text || ""

m.mentionedJid = m.quoted ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type] }

if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted }
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
m.quoted.fromMe = m.quoted.sender === (aqua.user && aqua.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id   },
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})}) 
m.quoted.delete = () => aqua.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => aqua.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => downloadMediaMessage(m.quoted) }}
m.download = () => aqua.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.title || ''
m.reply = (text, chatId, options) => aqua.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, detectLinks: false, thumbnail: global.thumb, ...options })
m.copy = () => exports.smsg(aqua, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => aqua.copyNForward(jid, m, forceForward, options)


aqua.appenTextMessage = async(text, chatUpdate) => {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: aqua.user.id,
quoted: m.quoted && m.quoted.fakeObj })
messages.key.fromMe = areJidsSameUser(m.sender, aqua.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'  }
//console.log(JSON.stringify(msg, null, 2))
aqua.ev.emit('messages.upsert', msg) }


return m }


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	//console.log(chalk.cyan(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
 
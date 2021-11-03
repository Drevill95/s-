// BOT BY CONFU_MODS
// :v SI LO PIENSAS EDITAR ALMENOS DEBES DARME PARTE DE EL CRÉDITO CTM
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch');	
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const util = require('util')
const { getBuffer, wait, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')





const imgbb = require('imgbb-uploader')


const phoneNum = require('awesome-phonenumber')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')

const { recognize } = require('./lib/ocr')

const { uploadimg } = require('./lib/uploadimg')


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}




const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const image = JSON.parse(fs.readFileSync('./database/img.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

const { help } = require('./src/help')
const { nsfwmenu } = require('./src/nsfwmenu')
const { addMetadata } = require('./lib/exif.js')
const Exif = require('./exif.js')
const exif = new Exif()
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:ConfuMods\n' 
            + 'ORG:Creador De Sofi Bot\n' 
            + 'TEL;type=CELL;type=VOICE;waid=50254371795:+502 5437 1795\n' 
            + 'END:VCARD'






const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//=================================================//
prefix = '#'
blocked = []
cmdnf = []
ind = []
banChats = false
promote = setting.promote
numbernye = '0'
demote = setting.demote
leave = setting.leave
//=================================================//
async function starts() {
	const SofiBot = new WAConnection()
	SofiBot.version = [2, 2119, 6]
	SofiBot.logger.level = 'warn'
	console.log(banner.string)
	console.log(color('[ BOT]','aqua'), color("BOT BY ConfuMods", "yellow"))
	console.log('>', '[',color('INFO','blue'),']','Suscribete al Canal -_-')
	SofiBot.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea El Código QR De Arriba xd'))
	})

	fs.existsSync('./session.json') && SofiBot.loadAuthInfo('./session.json')
	SofiBot.on('connecting', () => {
	console.log(color('> [ INFO ]', 'white'), color('Conectando...'))
	})
	SofiBot.on('open', () => {
	console.log(color('> [ INFO ]', 'white'), color('Listo :D'))
	})
		await SofiBot.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(SofiBot.base64EncodedAuthInfo(), null, '\t'))
//Banned Call
SofiBot.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        SofiBot.sendMessage(callerId, "No esta permitido llamar al bot asi que seras automáticamente bloqueado :)", MessageType.text)
        await sleep(4000)
        await SofiBot.blockUser(callerId, "add")
})


SofiBot.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await SofiBot.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await SofiBot.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  = `@${num.split('@')[0]}
𝐒𝐈 𝐄𝐑𝐄𝐒 𝐍𝐔𝐄𝐕𝐎 𝐏𝐑𝐄𝐒𝐄𝐍𝐓𝐀𝐓𝐄 𝐎 𝐁𝐀𝐍 🧃

𝐍𝐎𝐌𝐁𝐑𝐄 : 

𝐅𝐎𝐓𝐎 : 

𝐄𝐃𝐀𝐃 : 

𝐏𝐀𝐈𝐒 : 

𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 𝐀 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎 𝐆𝐔𝐀𝐏𝐗 🍭`
				let buff = await getBuffer(ppimg)
				SofiBot.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	//Actualización De Chat.
SofiBot.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const arg = budy.slice(command.length + 1, budy.length)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const meNumber = SofiBot.user.jid.split("@")[0]
		const botNumber = SofiBot.user.jid
//SETTING
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const isMe = botNumber.includes(senderme)
		const isBanned = ban.includes(sender)
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isImage = isGroup ? nsfw.includes(from) : false
		const totalchat = await SofiBot.chats.all()
		const groupMetadata = isGroup ? await SofiBot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isWelkom = isGroup ? welkom.includes(from) : false		
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? SofiBot.user.jid : SofiBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? SofiBot.user.name : conts.notify || conts.vname || conts.name || '-'
       //SETTINGS FUNCIONES
       const apakah = ['Si','No']
   	const gay = ['Eres 15% Gay','Eres 0% Gay 😱','Eres 20% Gay','Eres 78% Gay','Eres 62% Gay','Eres 0.1% Gay','Eres 100% Gay 😬','Eres 6% Gay','Eres 96% Gay','Eres 21% Gay','Eres 50% Gay','Eres 99.99% Gay','Eres 12% Gay','Eres 88% Gay','ERES INFINITAMENTE GAY 🤯','Eres 75% Gay','Eres 19% Gay','Eres Fan De Bts 🤬','Eres 44% Gay','Eres 84% Gay']
       const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
        //MESS
        
		mess = {
			wait: 'Soy lenta, espera (╥﹏╥)',
			success: 'Listo',
			nsfwoff: 'La Funcion De Nsfw No Está Activa',
			wrongFormat: 'Escribe Bien porfavor :c',
			waitmusic: 'Espera, Estoy buscando tu musica 7w7',
			waitimg: 'Soy lenta, espera (╥﹏╥)',
			nsfwoff: 'La Funcion De Nsfw No Está Activa :c',
					musica: 'Espera un momento, estoy buscando tu musica 7u7',
			imageoff: 'No tengo permitido enviar fotos (╥﹏╥) sorry',
			error: {
				stick: 'Pude :c',
				errostick: 'Error al crear tu sticker :c',
				Iv: 'Tu link ya no sirve :c al parecer'
			},
			only: {
				group: 'Este Comando Solo Puede Ser Usado En Grupos',
				admin: 'No Eres Admin (╥﹏╥)',
				Badmin: 'Necesito Ser Admin Primero :3'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            SofiBot.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            SofiBot.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? SofiBot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : SofiBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
                 SofiBot.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
        }
        
const fakekontak = (teks) => {
SofiBot.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


			

        const fakethumb = (teks, yes) => {
            SofiBot.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            SofiBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            SofiBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid : `50254371795@g.us` } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
 const faketoko = (teks) => {
 SofiBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `Holi ( ˘ ³˘)♥ ${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
        const producto = (teks) => {
 SofiBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `𝐒𝐎𝐅𝐈•𝐁𝐎𝐓`,
'productImageCount': 0
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Holi ( ˘ ³˘)♥ ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Sofi Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	SofiBot.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        SofiBot.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    SofiBot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Buenos Dias :D'
        if (hour_now >= '02' && hour_now <= '10') {
        reply(`hol`)
          ucapanWaktu = 'Buenos Dias XD'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Buenas Tardes :0'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Buenas Tardes :v'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Buenas Tardes :U'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Buenas Noches 7u7'
        } else {
          ucapanWaktu = 'Buenas Noches 7w7'
        }

		colors = ['blue']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando', 'blue'), color(moment.tz('America/Perú').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

			switch(command) {
				case prefix+ 'menu':
  case prefix+ 'help':
  wew = fs.readFileSync('./src/foto.png')
					SofiBot.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐎𝐅𝐈•𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/botlogo.webp')} } }, caption: help(prefix) })
				  break
case prefix+ 'nsfwmenu':
if (!isNsfw) return reply(mess.nsfwoff)
SofiBot.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
break




case prefix+ 'tts':
case prefix+ 'gtts':
case 'tts':
if (args.length < 1) return SofiBot.sendMessage(from, `Debes usar el comando correctamente:\n${prefix}tts es (texto)\nEjemplo: ${prefix}tts es Deberia subscribirme al canal de confu`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return SofiBot.sendMessage(from, 'Y El Texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('Ni que fueras a narrar tu historia en Vietnam ;-;')
: gtts.save(ranm, dtt, function() {
SofiBot.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break


case prefix+ 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SOFI-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await SofiBot.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			SofiBot.sendMessage(from, optionshidetag, text)
			break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await SofiBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await SofiBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            SofiBot.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Etiqueta un sticker*`)
            }
            break
		    case prefix+ 'giftag':
                if (!isQuotedVideo) return reply(`Uso: ${prefix + command}`)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await SofiBot.downloadMediaMessage(quoted)
                await fs.writeFileSync(`giftag.gif`, download)
                var group = await SofiBot.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                thumb = fs.readFileSync(`giftag.gif`)
                SofiBot.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'video/gif', thumbnail: thumb })
			    await fs.unlinkSync(`giftag.gif`)
			    break
			case prefix+ 'doctag':
			  //by Dehanjing
		        if (!isQuotedDocument) return amek.reply(from, `Etiqueta un archivo y escribe lo siguiente : ${prefix}doctag*`, mek)
                quoted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                download = await SofiBot.downloadMediaMessage(quoted)
                await fs.writeFileSync(`doc.txt`, download)
                var group = await SofiBot.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                SofiBot.sendMessage(from, fs.readFileSync(`doc.txt`), document, { contextInfo: {mentionedJid: mem }, quoted: mek, mimetype: 'text/plain' })
			    await fs.unlinkSync(`doc.txt`)
			    break
    case prefix+ 'contag':
            if (!mek.key.fromMe) return reply('SOFI-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Numero de telefono invalido (╥﹏╥)');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            SofiBot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await SofiBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await SofiBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            SofiBot.sendMessage(from, ini_buffer, MessageType.sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await SofiBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await SofiBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            SofiBot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await SofiBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await SofiBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            SofiBot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await SofiBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await SofiBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            SofiBot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`Etiqueta un sticker/audio/video con : ${prefix}totag`)
        }
        break

case prefix+ 'closegc':
case prefix+ 'closegp':
case prefix+ 'cerrargp':
case prefix+ 'cerrar':
case prefix+ 'cierra':
SofiBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo Cerrado Por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
SofiBot.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
case prefix+ 'opengc':
case prefix+ 'opengp':
case prefix+ 'abrirgp':
case prefix+ 'abrir':
case prefix+ 'abre':
SofiBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const open = {
text: `Grupo Abierto Por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
SofiBot.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
break
case prefix+ 'kick':
case prefix+ 'eliminar':
case prefix+ 'ban':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`Este Comando Solo Se Puede Usar Cuando Soy Admin (・o・)`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a quien quieras eliminar (・–・;)ゞ')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Byee...(┛❍ᴥ❍)┛彡┻━┻ :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					SofiBot.groupRemove(from, mentioned)
					} else {
					mentions(`Byee...(┛❍ᴥ❍)┛彡┻━┻ @${mentioned[0].split('@')[0]}`, mentioned, true)
					SofiBot.groupRemove(from, mentioned)
					}					
					break 
					
					case prefix+ 'antilink':
if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo (◍•ᴗ•◍)')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito(◍•ᴗ•◍)️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo (・o・)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break
					case prefix+ 'promote':
                 case prefix+ 'dar':
                 case prefix+ 'pm':
					SofiBot.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a quien quieras dar admin UwU')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido✅\n\nAgregando cargo como administrador (◍•ᴗ•◍) :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						SofiBot.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Pedido recibido✅\n\nAgregando cargo como administrador a : @${mentioned[0].split('@')[0]} (◍•ᴗ•◍)`, mentioned, true)
						SofiBot.groupMakeAdmin(from, mentioned)
					}
					break
					case prefix+ 'linkgroup':
					if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(`Este Comando Solo Se Puede Usar Cuando Soy Admin (・o・)`)
				    linkgc = await SofiBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName} (ᗒᗩᗕ)*`
				    SofiBot.sendMessage(from, yeh, text, {quoted: mek1})			       
					break
case prefix+ 'leave':
case prefix+ 'salir':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					SofiBot.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					SofiBot.updatePresence(from, Presence.composing) 
					SofiBot.sendMessage(from, 'Me voy ya no me quieren (╥﹏╥)', text) 
					}, 0)
                     break
       case prefix+ 'ownergrup':
       case prefix+ 'dueñogp':
               SofiBot.updatePresence(from, Presence.composing) 
              options = {
          text: `El Creador De Este Grupo Es :@${from.split("-")[0]} ｡.ﾟ+ ⟵(｡･ω･)`, 
          contextInfo: { mentionedJid: [from] }
           }
           SofiBot.sendMessage(from, options, text, { quoted: mek } )
				break




case prefix+ 'tagall':
case prefix+ 'todos':
case prefix+ 'marcar':
case prefix+ 'etiquetar':
if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ 𝐒𝐨𝐟𝐢 ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					break
case prefix+ 'tagall2':
                case prefix+ 'marcar2':
				SofiBot.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `♡ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					SofiBot.sendMessage(from, 'Mencionando a todos OwO'+teks+'✪ 𝐒𝐨𝐟𝐢 ┃ ᴮᴼᵀ ✪', text, {quoted: mek})
					break
                case prefix+ 'tagall3':
                case prefix+ 'marcar3':
				SofiBot.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					SofiBot.sendMessage(from, '𝚃𝙾𝙳𝙾𝚂'+teks, text, {detectLinks: false, quoted: mek})
					break
                        case prefix+ 'tagall4':
                        case prefix+ 'marcar4':
				SofiBot.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `✿ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					SofiBot.sendMessage(from, '𝙏𝙤𝙙𝙤𝙨'+teks+'✔︎', text, {quoted: mek})
					break
                case prefix+ 'tagall5':
                case prefix+ 'marcar5':
				SofiBot.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('𝑻𝑶𝑫𝑶𝑺'+teks+'')
					break




case prefix+ 'welcome':
case prefix+ 'bienvenida':
case prefix+ 'biemvenida':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`1 para activar`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activada!!!')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('La funcion de bienvenida esta habilitada en este grupo (◍•ᴗ•◍)')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('La funcion de bienvenida esta deshabilitada en este grupo (╥﹏╥)')
					} else {
						reply('1 para activarlo y 0 para desactivarlo')
					}
					break
case prefix+ 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 para activar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ⊙﹏⊙')
						nsfw.push(from)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('La funcion NSFW esta habilitado en este grupo ⊙﹏⊙')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('La funcion NSFW esta deshabilitado en este grupo (◍•ᴗ•◍)')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					break	
					

case prefix+ 'tovid':
    case prefix+ 'tovideo':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await SofiBot.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Listo')
            })
            }else {
            reply('Etiqueta un sticker ｡.ﾟ+ ⟵(｡･ω･)')
            }
            fs.unlinkSync(owgi)
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Etiqueta un video (◍•ᴗ•◍)')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await SofiBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            SofiBot.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('Etiqueta un sticker ｡.ﾟ+ ⟵(｡･ω･)')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await SofiBot.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('inténtalo de nuevo (╥﹏╥)')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'𝐒𝐎𝐅𝐈•𝐁𝐎𝐓')
			fs.unlinkSync(ran)
			})
			break
case prefix+ 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply('Soy lenta, espera (╥﹏╥)')
owgi = await SofiBot.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break






case prefix+ 'pussy':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				SofiBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'pussyimage':
if (!isNsfw) return reply(mess.nsfwoff)
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				SofiBot.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break
case prefix+ 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				SofiBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'yuri':
if (!isNsfw) return reply(mess.nsfwoff)
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			SofiBot.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break
	case prefix+ 'anal':
	if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				SofiBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break		
case prefix+ 'pwankg':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				SofiBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'eron':
if (!isNsfw) return reply(mess.nsfwoff)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			SofiBot.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break

case prefix+ 'ero':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			SofiBot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break
case prefix+ 'erok':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/erok')
			bufero = await getBuffer(eroz.data.url)
			SofiBot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break

	case prefix+ 'hentai':
	if (!isNsfw) return reply(mess.nsfwoff)
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			SofiBot.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break
	
	
	
	
	
  						  	case prefix+ 'stickerwm':
						  	case prefix+ 'stikerwm':
						  	case prefix+ 'sticker':
						  	case prefix+ 's':
						  	case prefix+ 'stiker':
						  	case prefix+ 'stike':
						  	case prefix+ 'sticke':
						  	case prefix+ 'stikewm':
						  	case prefix+ 'stikr':
						  	case prefix+ 'stker':						  
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await SofiBot.downloadAndSaveMediaMessage(encmedia, `./trash/${sender}`)
					const packname1 = (`Confu`)
					const author1 = (`Mods`)
					exif.create(packname1, author1, `confu_${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply('*Error (╥﹏╥)*')
							})
							.on('end', function () {
								console.log('Listo')
								exec(`webpmux -set exif ./trash/confu_${sender}.exif ./trash/${sender}.webp -o ./trash/${sender}.webp`, async (error) => {
									if (error) return reply('*error (╥﹏╥)*')
									SofiBot.sendMessage(from, fs.readFileSync(`./trash/${sender}.webp`), sticker)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./trash/${sender}.webp`)	
									fs.unlinkSync(`./trash/confu_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./trash/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
										const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const media = await SofiBot.downloadAndSaveMediaMessage(encmedia, `./trash/${sender}`)
					const packname1 = (`Confu`)
					const author1 = (`Mods`)
					exif.create(packname1, author1, `confu_${sender}`)
					reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply('*Ocurio un error ⊙﹏⊙*')
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./trash/confu_${sender}.exif ./trash/${sender}.webp -o ./trash/${sender}.webp`, async (error) => {
									if (error) return reply('error (╥﹏╥)')
									SofiBot.sendMessage(from, fs.readFileSync(`./trash/${sender}.webp`), sticker)									
									fs.unlinkSync(media)
									fs.unlinkSync(`./trash/${sender}.webp`)
									fs.unlinkSync(`./trash/confu_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./trash/${sender}.webp`)
			} else {
			reply(`Envia una foto o un video con subtitulo ${prefix}sticker\n\n O bien puedes etiquetar una imagen o video que ya alla sido enviado\n\nNota: Si es un video la duración máxima tiene que ser de 10 segundos｡.ﾟ+ ⟵(｡･ω･)`)
			}
		    break 
		             	          										
					case prefix+ 'toimg':
					if (!isQuotedSticker) return reply('Responde a un sticker')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await SofiBot.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Error al convertir la pegatina en imagen ')
						buffer = fs.readFileSync(ran)
						SofiBot.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 
  


case prefix+ 'attp':
						if (args.length < 1) return reply(`Y El Texto??\n> *Ejemplo* : *${prefix}attp* ConfuMods`)
						 var itsme = `0@s.whatsapp.net`
			   	 var split = `Texto De Colores (◍•ᴗ•◍)`
		     	   var selepbot =         {
					contextInfo:   { participant: itsme, quotedMessage: { extendedTextMessage: { text: split,	}}}}
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
SofiBot.sendMessage(from, attp2, MessageType.sticker, selepbot, {quoted: mek })
						break

//BAN Y UNBAN
/*case prefix+ 'ban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
break


case prefix+ 'unban':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
break*/
       
       
       
      
            case prefix+ 'leertodo':
            case prefix+ 'readall':
            if (!mek.key.fromMe) return fakestatus('Este comando solo puede ser usado por mi (◍•ᴗ•◍)')
            var chats = await SofiBot.chats.all()
            chats.map( async ({ jid }) => {
            await SofiBot.chatRead(jid)
            })
		    var teks = `Fueron Leídos ${chats.length} Chats (・o・)`
	        await SofiBot.sendMessage(from, teks, text, {quoted: mek})
		    console.log('Fueron Leídos: ${chats.length} chats (・o・)')
            break
            case prefix+ 'speed':
            case prefix+ 'velocidad':
	        case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Velocidad: ${latensi.toFixed(4)} Milisegundos*`
			fakegroup(pingnya)
			})
			break  
            


case prefix+ 'ytmp3':
if (args.length === 0) return reply(`Ejemplo: *${prefix}ytmp3* _El link del video para descargar`)
       let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
    if (!isLinks) return reply(mess.error.Iv)
     try {
          reply(mess.musica)
      yta(args[0])
   .then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Información (・o・)*\n\n*Titulo*: ${title}\n*️Extensión*:MP3\n*Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Si la duración de el audio es mayor al límite solo te enviaré el enlace de descarga ⊙﹏⊙_`)
const captions = `*Información*\n\n*Titulo*: ${title}\n*️Extensión*:MP3\n*Tamaño*:${filesizeF}\n\n_Espera, estoy enviando la música (◍•ᴗ•◍)_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case prefix+ 'ytmp4':
if (args.length === 0) return reply(`Enviar  comando *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
reply(mess.mpv)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Información*\n\n*Titulo*: ${title}\n*Extensión*:MP3\n*FileTamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Si la duración de el video es mayor al límite solo te enviare el enlace de descarga ⊙﹏⊙_`)
						const captionsYtmp4 = `*Información*\n\n*Titulo*: ${title}\n*️Extensión*:MP4\n*️Tamaño*:${filesizeF}\n\n_Espera, estoy enviando tu video (◍•ᴗ•◍)_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(`Error`))
				})		
				})
				} catch (err) {
			    reply(`Error :c`)
				}
				break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Que quieres buscar? 7u7')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await SofiBot.sendMessage(from, 'Error (╥﹏╥)', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *BUSCADOR DE YT* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Título: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Duración: ' + video.timestamp + '\n'
		            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *Sofi-Bot*'
    		await fakethumb(tbuff,ytresult)
			break
case prefix+ 'play':
			if (args.length === 0) return reply(`Ejemplo: *${prefix}play* _El título de la musica para buscar_`)
			reply(mess.musica)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Información*\n\n*Titulo*: ${title}\n*Extensión*: MP3\n*️Tamaño*: ${filesizeF}\n*Link* : ${a.data}\n\n_Si la duración es mayor al límite no podré enviarte la música :c_`)
		                        const captions = `*Información*\n\n*Titulo*: ${title}\n*️Extensión*: MP3\n*Tamaño*: ${filesizeF}\n*Link*: ${a.data}\n\n_Espera, estoy enviando tu musica (◍•ᴗ•◍)_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error (╥﹏╥)'))
                        })                
                        })
                        } catch (err) {
                        reply(`Error (╥﹏╥)`)
                        }
                   break  
                   case prefix+ 'video':
            if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El título del video para buscar_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Titulo*: ${title}\n*️Extensión*:MP3\n*FileTamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Si la duración de el vídeo es mayor al límite no podré enviártelo (╥﹏╥)_`)
		                        const captions = `*PLAY VIDEO*\n\n*Titulo*: ${title}\n*️Extensión*:MP4\n*Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Espera, estoy enviando tu vídeo (◍•ᴗ•◍)_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error (╥﹏╥)'))
                        })                
                        })
                        } catch (error) {
                        reply(`Error (╥﹏╥)`)
                        }
                   break
         //------FUNCIONES PARA EL USUÁRIO-------
                   case prefix+ 'wame':
                   SofiBot.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp (◍•ᴗ•◍) : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    SofiBot.sendMessage(from, options, text, { quoted: mek } )
				break
case prefix+ 'creador':
case prefix+ 'confu':
await SofiBot.sendMessage(from, {displayname: "ConfuMods", vcard: vcard}, MessageType.contact)
reply('El es mi novio, digo mi creador (ᗒcᗕ)')
break

const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
		                case prefix+ 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            SofiBot.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nEj : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
case prefix+ 'frases':
				SofiBot.updatePresence(from, Presence.composing) 
				     
				
				 
								const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la música habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros límites, vamos más allá de ello (Albert Einstein)','Lo que no nos mata nos hace más fuertes (Friedrich Nietzsche)','Si caminas solo, irás más rápido. Si caminas acompañado, llegarás más lejos.','Una vida llena de errores no solo es más honorable, sino que es más sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que más ha vivido no es aquel que más años ha cumplido, sino aquel que más ha experimentado la vida','Si lo puedes soñar, lo puedes hacer','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer está lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombrías, pues eso es parte de adquirir experiencia. Y descubrir cuán gratas o desafortunadas son las que te esperan, es algo nunca podrás evadir','La felicidad no es algo que pospones para el futuro, es algo que diseñas para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones serán el reflejo de la manera que tienes de ver la vida y las que te van definir ante los demás. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos haría mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta tú mismo, pueden ocultar sorpresas que en la vida te podrías haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y reír. Recuérdalo, todos tenemos los días contados, vive cada uno de tus días como si fueran el regalo más grande, porque nadie puede asegurarte el mañana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detrás de su comportamiento, pero descubrirlo es la tarea más interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las páginas vacías de la historia','La decepción después de un amor fallido, puede llegar a oprimir tu corazón hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enfócate en quienes se encuentran a tu lado en el presente y quédate con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocación, entiérrala y sigue adelante','Amar es la aventura más grande en la que te puedes embarcar. Porque te puede hacer volar más alto de lo que jamás imaginarte y también ponerte los pies de la tierra']
 					const jys = fra[Math.floor(Math.random() * fra.length)]
					  ses = fs.readFileSync(`./media/5.jpg`)
					SofiBot.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ👌*\n\n'+ jys, quoted: mek })
break                     
			    case prefix+ 'piropos':
				
								const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
					const js = mary[Math.floor(Math.random() * mary.length)]
					  wew = fs.readFileSync(`./media/2.jpg`)
					SofiBot.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
break  

case prefix+ 'charli':
case prefix+ 'charlie':
case prefix+ 'carlie':
case prefix+ 'carli':
const ch =['Si','No','No','Si']
    const cha = ch[Math.floor(Math.random() * ch.length)]
reply(`𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐂𝐡𝐚𝐫𝐥𝐢𝐞

𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 : ${cha}`)
break

			case prefix+ 'juego':
           
			reply(`𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨 :
			
𝑷𝑨𝑹𝑨 𝑱𝑼𝑮𝑨𝑹 𝑼𝑻𝑰𝑳𝑰𝒁𝑨 𝑼𝑵𝑶 𝑫𝑬 𝑬𝑺𝑻𝑶𝑺 :
		    
𝑷𝑰𝑬𝑫𝑹𝑨 : #✊
		   
𝑷𝑨𝑷𝑬𝑳 : #✋
		   
𝑻𝑰𝑱𝑬𝑹𝑨 : #✌️`)
		   break
		  
		   case prefix+ '✊':
            
const piedra =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`]
    const jg = piedra[Math.floor(Math.random() * piedra.length)]
    SofiBot.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jg, text)
    break
    
    case prefix+ '✋':
           
const papel =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n  :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`]
    const jggg = papel[Math.floor(Math.random() * papel.length)]
    SofiBot.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jggg, text)
    break
    
    case prefix+ '✌️':           
const tijera =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n:( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n:0 𝑬𝒎𝒑𝒂𝒕𝒆 `]
    const jgg = tijera[Math.floor(Math.random() * tijera.length)]
    SofiBot.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jgg, text)
    break



case prefix+ 'blood':             
const apis9 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe9 = apis9[Math.floor(Math.random() * apis9.length)]
                bpp = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${nepe9}&text=${bpp}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})                  
                  break  
                  
case prefix+ 'blood2':
           const apis8 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe8 = apis8[Math.floor(Math.random() * apis8.length)]     
                bpp1 = `${body.slice(8)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${nepe8}&text=${bpp1}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+ 'bokeh':
           const apis7 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe7 = apis7[Math.floor(Math.random() * apis7.length)]     
                bpp2 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bokeh?apikey=${nepe7}&text=${bpp2}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+ 'toxic':
          const apis1 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe1 = apis1[Math.floor(Math.random() * apis1.length)]    
                bpp3 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/toxic?apikey=${nepe1}&text=${bpp3}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+ 'ice':
const apis =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe = apis[Math.floor(Math.random() * apis.length)]
                
                bpp5 = `${body.slice(5)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/icecold?apikey=${nepe}&text=${bpp5}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break  
                  
case prefix+ 'box':
       const apis2 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe2 = apis2[Math.floor(Math.random() * apis2.length)]        
                bpp4 = `${body.slice(5)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=${nepe2}&text=${bpp4}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+ 'love':
    const apis3 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe3 = apis3[Math.floor(Math.random() * apis3.length)]           
                bpp7 = `${body.slice(6)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=${nepe3}&text=${bpp7}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break  
                  
case prefix+ 'luxury':
   const apis4 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe4 = apis4[Math.floor(Math.random() * apis4.length)]           
                bpp6 = `${body.slice(8)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=${nepe4}&text=${bpp6}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+ 'love2':
            const apis5 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe5 = apis5[Math.floor(Math.random() * apis5.length)]    
                bpp8 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=${nepe5}&text=${bpp8}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break  
                  
case prefix+ 'grose':
    const apis6 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe6 = apis6[Math.floor(Math.random() * apis6.length)]            
                bpp9 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/golderrose?apikey=${nepe6}&text={bpp9}`, {method: 'get'})
                     SofiBot.sendMessage(from, buff, image, {quoted: mek})
                  
                  break  


case prefix+ 'waifu':

reply (mess.wait)
const uui =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65']
    const xfjs = uui[Math.floor(Math.random() * uui.length)]
uwu = fs.readFileSync(`./waifu/${xfjs}.jpg`);
SofiBot.sendMessage(from, uwu, image, {quote: mek})
break

case prefix+ 'loli':

reply (mess.wait)
const ui =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69']
    const xfjjs = ui[Math.floor(Math.random() * ui.length)]
uwu = fs.readFileSync(`./loli/${xfjjs}.jpg`);
SofiBot.sendMessage(from, uwu, image, {quote: mek})
break


case prefix+ 'muslos':
case prefix+ 'muslo':
reply (mess.wait)
const uiu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
    const xfjjjjjs = uiu[Math.floor(Math.random() * uiu.length)]
uwu = fs.readFileSync(`./muslos/${xfjjjjjs}.jpg`);
SofiBot.sendMessage(from, uwu, image, {quote: mek})
break	
				
     default:
     
     
                         if (budy.includes('chat.whatsapp')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin (◍•ᴗ•◍)❤')
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 @${sender.split("@")[0]}`)
					SofiBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }

		if (isGroup && !isCmd && budy != undefined) {
						console.log(budy)
					} else {
						console.log(color('[ BOT ]','blue'), 'Comando No Registrado De', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	}
starts() 

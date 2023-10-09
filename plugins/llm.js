let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `_*Lebih Milih Mana*_ \n ${pickRandom(lmm)}`, m)
}
handler.help = ['lmm']
handler.tags = ['game']
handler.command = /^lmm/i
handler.limit = true
handler.group = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const lmm = [
"1. Rajin \n 2. Ganteng/Cantik",
"1. Pinter Agama \n 2. Pinter Akademik",
"1. Suka Berkebun \n 2. Suka Melaut",
"1. Akademiknya jago \n 2. Softskillnya keren",
"1. Basket \n 2. Futsal",
"1. Penyayang hewan \n 2. Penyayang tanaman",
"1. Friendly ke orang \n 2. Buaya"
"1. Royale tapi sedikit sedikit \n 2. Perhitungan tapi sekalinya beliin sesuatu banyak"
]

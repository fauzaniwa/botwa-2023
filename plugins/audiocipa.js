let fs = require('fs')
let handler = async (m) => {
let iwa = fs.readFileSync('./mp3/akusayangmoci.ogg')
conn.sendFile(m.chat, iwa, '', '', m, true)
}

handler.customPrefix = /^(moci|cipa|cip|cipaa|mocii|cipaaa|ciip|ciiip|cipp|cippp)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

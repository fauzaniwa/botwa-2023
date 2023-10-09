let fs = require('fs')
let handler = async (m) => {
let iwa = fs.readFileSync('./mp3/iwa ganteng.ogg')
conn.sendFile(m.chat, iwa, '', '', m, true)
}

handler.customPrefix = /^(iwa|iwaa|iwaa|iiwa|iiwaa|iwaaa|iwaaaa|iiwwwaaaa)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

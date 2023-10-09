let fs = require('fs')
let handler = async (m) => {
let shalawat = fs.readFileSync('./mp3/shalawat.opus')
conn.sendFile(m.chat, shalawat, '', '', m, true)
}

handler.customPrefix = /^(shalawat|sholawat|solawat|salawat|malam jumat)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

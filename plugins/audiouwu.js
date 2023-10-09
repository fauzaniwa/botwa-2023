let fs = require('fs')
let handler = async (m) => {
let uwu = fs.readFileSync('./mp3/uwu.ogg')
conn.sendFile(m.chat, uwu, '', '', m, true)
}

handler.customPrefix = /^(uwu|uuwu|uuwuu|uwuu|uwuuu|uuuwu|uwuk|uuwuk)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

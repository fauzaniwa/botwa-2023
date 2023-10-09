let handler = async m => m.reply(`
╭─「 Donasi • Pulsa/DANA/Saweria 」
│ •  [0895-1531-0917]
│ •  [https://saweria.co/fauzaniwa]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
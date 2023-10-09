// let handler = async(m, { conn, text, usedPrefix }) => {
// let [number, pesan] = text.split `|`

//     if (!number) return conn.reply(m.chat, 'Penggunaan format sebagai berikut\n\nContoh:\n/menfess 62××××|hallo sayang', m)
//     if (!pesan) return conn.reply(m.chat, 'Penggunaan format sebagai berikut\n\nContoh:\n/menfess 62××××|hallo sayang', m)
//     if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
//     let user = global.db.data.users[m.sender]

//     let korban = `${number}`
//     var nomor = m.sender
//     let spam1 = `Halo Saya IWaBot Ada Yang Kirim Pesan Nih Ke Kamu
// (Pengirim Rahasia)

// ⬡──⬡─────────⬡──⬡
// 📫Pengirim : wa.me/6289516366131
// 💌 Pesan : ${pesan}
// ⬡──⬡─────────⬡──⬡

// Maaf Anda Belum Bisa Membalas ke Pengirim
// ------------------------------------------
// ▮PENGIRIM RAHASIA 」 
// Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
// mantan?, tapi Tidak ingin tau siapa Pengirimnya?
// Kamu bisa menggunakan Bot ini
// Contoh Penggunaan: .menfess nomor|pesan untuknya
// Contoh: .menfess 628xxxxxxxxxx|hai owner
// wajib menggunakan 628xxx-`

//     conn.reply(korban + '@s.whatsapp.net', spam1, m)

//     let logs = `Sukses Mengirim Pesan
// 👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
// ⬡──⬡─────────⬡──⬡
// 💌 Isi Pesan : ${pesan}
// ⬡──⬡─────────⬡──⬡`

//     conn.reply(m.chat, logs, m)
// }


// handler.help = ['menfess nomor|pesan']
// handler.tags = ['nocategory']

// handler.command = /^(fir|firza)$/i

// handler.limit = true
// handler.private = true

// module.exports = handler
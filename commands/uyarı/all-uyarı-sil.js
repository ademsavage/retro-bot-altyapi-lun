const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu Komutu Kullanmak İçin İzniniz Yok ^^**");


  message.channel.send(`Sunucunudaki herkesin uyarısı silindi!`)
  await data.delete(`sayı.${message.guild.id}`)
  await data.delete(`bilgi.${message.guild.id}`)
  
}


exports.config = {
name: "allclearwarn",
  aliases: ["all-uyarı-sil","all-clear-warn","all-uyarı-sıfırla"]
}
const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu Komutu Kullanmak İçin İzniniz Yok ^^**");

  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase().includes(args[0].toLowerCase()))
  if(!user) return message.channel.send(`"${args[0]}" bu sunucuda bulunamadı.`)
  
  const sayı = await data.fetch(`sayı.${message.guild.id}.${user.id}`)
  if(!sayı) return message.channel.send(`Bu üyenin hiç bir uyarısı yok.`)
  
  const bilgi = await data.fetch(`bilgi.${message.guild.id}.${user.id}`)

  message.channel.send(`**${user.tag}** üyesinin ${sayı} uyarısı silindi.`)
  await data.delete(`sayı.${message.guild.id}.${user.id}`)
  await data.delete(`bilgi.${message.guild.id}.${user.id}`)
  
}


exports.config = {
name: "clearwarn",
  aliases: ["uyarı-sil","clear-warn","uyarı-sıfırla"]
}
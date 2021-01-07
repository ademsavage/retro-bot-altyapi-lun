const Discord = require('discord.js');
const ms = require("ms");
const data = require('quick.db')
const moment = require('moment')
moment.locale('tr');

exports.run = async (client, message, args) => {
  let lh = await data.fetch(`Ukanal_${message.guild.id}`);
  
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Mesajları Yönet\`" **yetkisine sahip olmalısın.**`);

if(!lh) return message.channel.send(`**Uyarı Kanalı** Ayarlanamamış! *${client.twenzy.prefix}uyarı-kanal #uyarı-takip*`)

  if(!args[0]) return message.channel.send(`**Kimi uyaracağımı yazmadın!** \`${client.twenzy.prefix}uyar @kullanıcı sebep\``)
  
  
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase().includes(args[0].toLowerCase()))
  if(!user) return message.channel.send(`"${args[0]}" bu sunucuda bulunamadı.`)
  


    client.channels.cache.get(lh).send(`**${user.tag ? user.tag : user.user.tag}** (**${user.id}**)`)

  
  let reason;
  if(!args.slice(1).join(" ")) {
  reason = ''
  } else { reason = ` Sebep: ${args.slice(1).join(" ")}` }
  
  
  await data.add(`sayı.${message.guild.id}.${user.id}`, 1)
  if(typeof await data.fetch(`case.${message.guild.id}`) != 'number') await data.set(`case.${message.guild.id}`, 0);
  await data.add(`case.${message.guild.id}`, 1)

  const l = await data.fetch(`sayı.${message.guild.id}.${user.id}`)


  
  const casee = await data.fetch(`case.${message.guild.id}`)
  var tarih = new Date(Date.now())
  console.log(tarih)
  if(!data.get(`bilgi.${message.guild.id}.${user.id}`) instanceof Array) data.set(`bilgi.${message.guild.id}.${user.id}`, []);
  
  data.push(`bilgi.${message.guild.id}.${user.id}`, {moderator: message.author.tag, case: '#'+casee.toString() ? '#'+casee.toString() : '#0', tarih: moment().format("DD-MM-YYYY"), reason: reason ? reason : 'Sebep: N/A'})
  message.channel.send(`**${user.tag ? user.tag : user.user.tag}** uyarıldı, bu onun ${l ? l : '0'}. uyarısı.${reason ? reason : ''}`)
  
}

  exports.config = {
  name: 'uyar',
   aliases: ["uyarı-ver"]
 };

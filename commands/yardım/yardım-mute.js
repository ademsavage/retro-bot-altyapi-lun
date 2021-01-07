const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = client.twenzy.prefix
let eklenti = new Discord.MessageEmbed()  
.setColor('#480069') 
.setAuthor(`RetroLUN Mute Komutları`, client.user.avatarURL())
.addField(`__Mute Rol__`,`**+** \`${prefix}mute-rol\` Mute rolünü ayarlarsınız.`,true)
.addField(`__Mute__`,`**+** \`${prefix}mute\` Belirlediğiniz kişiyi mutelersiniz.`,true)
.setFooter(`designed twenzy - RetroLUN`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "mute-sistemi",
  aliases: []
}

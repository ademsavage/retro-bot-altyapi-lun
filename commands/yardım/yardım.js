const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = client.twenzy.prefix
let eklenti = new Discord.MessageEmbed()  
.setColor('#480069') 
.setAuthor(`RetroLUN Komutları`, client.user.avatarURL())
.addField(`__Uyarı Sistemi__`,`**+** \`${prefix}uyarı-sistemi\` Uyarı sistemi komutlarını gösterir.`,true)
.addField(`__Kayıt Sistemi__`,`**+** \`${prefix}kayıt-sistemi\` Kayıt sistemi komutlarını gösterir.`,true)
.addField(`__Mute Sistemi__`,`**+** \`${prefix}mute-sistemi\` Mute sistemi komutlarını gösterir.`,true)
.setFooter(`designed twenzy - RetroLUN`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}

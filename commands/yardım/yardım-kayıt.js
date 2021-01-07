const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = client.twenzy.prefix
let eklenti = new Discord.MessageEmbed()  
.setColor('#480069') 
.setAuthor(`RetroLUN Kayıt Komutları`, client.user.avatarURL())
.addField(`__Erkek__`,`**+** \`${prefix}erkek\` Bir kullanıcıyı erkek olarak kayıt edersiniz.`,true)
.addField(`__Kadın__`,`**+** \`${prefix}kadın\` Bir kullanıcıyı kadın olarak kayıt edersiniz.`,true)
.setFooter(`designed twenzy - RetroLUN`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıt-sistemi",
  aliases: []
}

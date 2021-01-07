const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = client.twenzy.prefix
let eklenti = new Discord.MessageEmbed()  
.setColor('#480069') 
.setAuthor(`RetroLUN Uyarı Komutları`, client.user.avatarURL())
.addField(`__Uyarı Ver__`,`**+** \`${prefix}uyar\` Bir kişiyi uyarırsınız.`,true)
.addField(`__Uyarılar__`,`**+** \`${prefix}uyarılar\` Bir kişinin kaç uyarısı var bakarsınız.`,true)
.addField(`__Uyarı Sil__`,`**+** \`${prefix}uyarı-sıfırla\` Bir kişinin uyarılarını silersiniz.`,true)
.addField(`__All Uyarı Sil__`,`**+** \`${prefix}all-uyarı-sil\` Sunucudaki herkesin uyarısını silersiniz.`,true)
.addField(`__Uyarı Kanal__`,`**+** \`${prefix}uyarı-kanal\` Uyarı log kanalını ayalarsınız.`,true)
.setFooter(`designed twenzy - RetroLUN`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "uyarı",
  aliases: ["uyarı-sistemi"]
}

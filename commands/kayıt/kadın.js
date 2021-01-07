const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
if(!member) return message.channel.send(
new Discord.MessageEmbed()
.setColor('BLACK')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Rol Verilecek Kişiyi Etiketlemelisin!'))  
  member.roles.remove('Alınacak Rol İd')//kayıtsız rol id
  member.roles.add('Verilecek Rol İd')//kadın rolü id
const embed = new Discord.MessageEmbed()


      .addField(`**ARAMIZA BİR BAYAN ÜYE KATILDI!**`,
      `\n**Aramıza Katılan Kullanıcı:** ${member.user} \n\n**ARAMIZA HOŞ GELDİN GÜZEL İNSAN**`)
client.channels.cache.get('Bu Mesajın Atılacağı Kanal idsi').send(embed)//genel sohbetin id'sini girerseniz daha iyi olur



 return message.channel.send(
 new Discord.MessageEmbed()
    .setColor('BLACK')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
    .setAuthor('RetroLUN')//botun ismini yada başka birşeyini yazabilirsiniz yada sunucu ismini falan herşeyi yazabilirsiniz
    .setTitle('Kadın rolü verildi')
    .setDescription(`Kadın Rolü Verilen ${member.user} Kadın Rolü Olarak <@&Kadın rolünün id> Verildi`)
    .setFooter('designed twenzy')//en alttaki açıklama kısmı burası
)}
exports.config = {
name: "kadın",
  aliases: ["k"]
}

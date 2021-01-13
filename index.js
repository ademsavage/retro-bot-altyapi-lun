const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const db = require('quick.db');


client.twenzy = {
  "botid": "Nzk4ODM0NTk5MTkwNTkzNTk2.X_6ysg.dG1lSWG42F54ek1gR7feb4LiTb4",
  "prefix": "!",
  "renk": "#7289da",
  "token": "558725043455262753"
};

//----------------------------------------------\\

client.on("message", async message => {
	

  let prefix = client.twenzy.prefix
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});



 const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
 };
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./commands/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => {
      let props = require(`./commands/${f}/${fs}`);
      log(`${props.config.name} // Yüklendi`);
      client.commands.set(props.config.name, props);
      props.config.aliases.forEach(alias => {
        client.aliases.set(alias, props.config.name);
      });
     });
    });
   });
  });

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\


client.login(client.twenzy.token)
.then(function() {
console.log('Token doğru. Bot aktif ediliyor. - RetroLUN')
}, function(err) {
console.log("Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`✨ Yardım almak için | ${client.twenzy.prefix}yardım`,
`⚡️❤️`,
`💎 RetroLUN`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "WATCHING"});

        }, 2 * 5000);
});





//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
  let prefix = client.twenzy.prefix
  if(msg.content == `<@!${client.twenzy.botid}>`) return msg.channel.send(`> **RetroLUN | Prefix**\n\n> **Sanırım beni etiketlediniz.**\n > Buyurun prefix(ön ek)im \`${client.twenzy.prefix}\``);
});



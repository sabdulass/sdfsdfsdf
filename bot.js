 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("550992032793886740")
setInterval(function() {
channel.send(`★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★★ OBX ★`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
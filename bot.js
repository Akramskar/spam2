const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539478320916725761")
setInterval(function() {
channel.send(`spin around brother`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

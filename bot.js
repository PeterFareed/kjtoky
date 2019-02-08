const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543459025887690765")
setInterval(function() {
channel.send(`! iiOsOs Games_Legends! iiOsOs Games_Legends! iiOsOs Games_Legends! iiOsOs Games_Legends! iiOsOs Games_Legends`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
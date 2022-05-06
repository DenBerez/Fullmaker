require('dotenv').config()
const Discord = require("discord.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.on("messageCreate", msg => {
  // var presence = msg['client'].user.presence.activities.filter(x=>x.type === "Playing")
  if (msg.content === "/full") {
    msg.reply(`${msg.author} is looking for more players to make a full in whatever they're playing!`);
  }
  let contentArr = msg.content.split(" ");
  if (contentArr[0] === "/full" && contentArr[1] && !contentArr[2]) {
    msg.reply(`${msg.author} is looking for ${contentArr[1]} more players to make a full in whatever they're playing!`);
  }
  if (contentArr[0] === "/full" && contentArr[1] && contentArr[2]) {
    let firstLetter = contentArr[2][0].toUpperCase();
    msg.reply(`${msg.author} is looking for ${contentArr[1]} more players to make a full in ${firstLetter + contentArr[2].slice(1, contentArr[2].length)}!`);
  }
});


client.login(process.env.TOKEN);
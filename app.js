const Discord = require('discord.js');
const client = new Discord.Client();
//a sneaky file that shall NEVER be uploaded! Muahahah.
//so what if it's untracked. you can't stop me.
const settings = require("./settings.json");

client.on('ready',() => {
  console.log('Operational.');
})

var prefix = "||";
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  }
});

client.login(settings.token);

const Discord = require('discord.js');
const client = new Discord.client();
//a sneaky file that shall NEVER be uploaded! Muahahah.
//so what if it's untracked. you can't stop me.
const settings = require("./settings.json");

client.on('ready',() => {
  console.log('My creator has awoken me. What is my purpose?');
})

client.on('message', message => {
  if (message.content === "weedbot?") {
    message.reply("Is that my name? Interesting.");
  }
});

client.login(settings.token);

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
  if(!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else

  if (message.content.startsWith(prefix + '420')) {
    var currentDt = new Date();
    var todays420 = new Date();
    todays420.setHours(17, 20, 0);
    if(todays420 - currentDt > 0) {
      message.channel.send(timeRemaining(todays420));
    } else {
      var next420 = new Date(currentDt.setDate(currentDt.getDate() + 1));
      next420.setHours(16, 20, 0);
      message.channel.send(timeRemaining(next420));
    }
    function timeRemaining(endtime){
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t/1000) % 60);
      var minutes = Math.floor((t/1000/60) % 60);
      var hours = Math.floor((t/(1000*60*60)) % 24);
      return "It is " + hours + " hour(s), " + minutes + " minute(s), and"
        + seconds + " seconds until the next 420.";
    }
  }
});

client.login(settings.token);

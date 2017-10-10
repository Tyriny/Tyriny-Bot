const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

  
client.on('ready', () => {
  client.user.setPresence({game: {name: "~help for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
if(command === "tacos") {
	message.channel.sendMessage('TACOS ARE THE BEST');
}

if(command ==="ping") {
	message.channel.sendMessage('PONG!');
}
if(command ==="help") {
	message.author.sendMessage("List of avaliable commands: ~ping , ~help , ~taco");
}
});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

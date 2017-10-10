const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var fortunes = [
    "definitely",
    "yes",
    "no",
    "my sources are asleep, please try again",
    "try again later"
];
  
client.on('ready', () => {
  client.user.setPresence({game: {name: "~help for commands!", type: 0}});
  console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
if(command === "taco") {
	message.channel.sendMessage('TACOS ARE THE BEST');
}

if(command ==="ping") {
	message.channel.sendMessage('PONG!');
}
if(command ==="help") {
	message.author.sendMessage("List of avaliable commands: ~ping , ~help , ~taco , ~8ball");
}

if(command === "8ball") {
     if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("I do not understand");
  }
});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

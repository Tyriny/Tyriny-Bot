client.user.setGame('game here !')client.user.setGame('Type ~help for help')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// This is how you set the game
client.on('ready', () => {
  client.user.setPresence({game: {name: "~help for help", type: 0}});
  console.log('I am ready!');
  
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


// This doesn't work anymore --> client.user.setGame('Type ~help for help')


});


setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

  if(command === "~ping") {
    message.channel.sendMessage("Pong!");
}


const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
  client.user.setPresence({game: {name: "(replaceme)", type: 0}});
  console.log('I am ready!');
  
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

cmd_prefix = """~"""

bot = commands.Bot(command_prefix=cmd_prefix, description=desc)



});


setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

  if(command === "~ping") {
    message.channel.sendMessage("Pong!");
}
  if(command === "~help") {
    message.author.sendMessage("~help *Sends you a list of avaliable commands*");}  

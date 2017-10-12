const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var mention = message.mentions.members.first();

var fortunes = [
    ":white_check_mark: It is certain :white_check_mark: ",
    ":white_check_mark: It is decidedly so :white_check_mark: ",
    ":white_check_mark: Without a doubt :white_check_mark: ",
    ":white_check_mark: You may rely on it :white_check_mark: ",
    ":white_check_mark: Yes, definitely :white_check_mark: ",
 ,     ":white_check_mark: As I see it, yes :white_check_mark: ",
    ":white_check_mark: Most likely :white_check_mark: ",
    ":white_check_mark: Outlook good :white_check_mark: ", 
    ":white_check_mark: Yes :white_check_mark: ",
    ":white_check_mark: Signs point to yes :white_check_mark: ",
    ":thinking: Reply hazy, try again :thinking: ",
    ":thinking: Ask again later :thinking: ",
    ":thinking: Better not tell you now :thinking: ",
    ":thinking: Cannot predict now :thinking: ",
    ":thinking: Concentrate and ask again :thinking: ",
    ":x: Don't count on it :x:",
    ":x: My reply is no :x:",
    ":x: My sources say no :x:",
    ":x: Outlook not so good :x:",
// Last one doesn't need comma after it.
    ":x: Very doubtful :x:"
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
	message.author.sendMessage("List of available commands: ~ping , ~help , ~taco , ~8ball , ~suicide , ~kys");
	message.channel.sendMessage("Sent message to you! Check your direct messages!");
}

if(command === "8ball") {
     if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("Usage: ~8ball [question]");
  }
if(command === "kys") {
     message.channel.sendMessage('I am a :robot: and thus am unable to commit suicide :x: :gun:')
}

if(command === "suicide") {
     message.channel.sendMessage('If you are having suicidal thoughts, please consider :telephone: the suicide hotline! The number can be found here: http://suicidehotlines.com/international.html')
}
		
});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);

var Discord = require('discord.js');
var bot = new Discord.Client();
const fs = require('fs');

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //Basic---Command
  if (msg === prefix + 'CC') {
    message.channel.send( 'The Bot has connected!' )
  }
});

//Bot_Token
bot.login(process.env.bot_token);

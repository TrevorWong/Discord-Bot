var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //Basic---Command
  if (msg === prefix + 'CC') {
    message.channel.send( 'The Bot has connected!' )
  }
  
  //Troll---Command
  
  //GameInvite---Command
  if (msg === prefix + 'R6') {
    message.channel.send( '@everyone anyone play R6?  BY( ' + sender + '  )')
  }
  if (msg === prefix + 'Z') {
    message.channel.send( '@everyone anyone play 戰意?  BY( ' + sender + '  )')
  }
}); 

//Bot_Token
bot.login(process.env.BOT_TOKEN);

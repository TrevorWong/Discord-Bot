var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  //command
    if (msg === prefix + 'CC') {
      message.channel.send( 'The Bot has connected!' )
    }
});
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'User');
    member.addRole(role)
    member.guild.channel.get('445889881022136320').send('[ServerBOT]' + member.user.username + 'Has join the Discord Server!');
});

bot.login(process.env.bot_token);

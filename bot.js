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
    console.log('[ServerBOT]' + member.user.username + 'has join the Discord Server!')
    console.log(member)
  
    var role = member.guild.roles.find('name', 'User');
    member.addRole(role)
    member.guild.channel.get('445899572171243520').send('[ServerBOT]' + member.user.username + 'has join the Discord Server!');
});

bot.login(process.env.bot_token);

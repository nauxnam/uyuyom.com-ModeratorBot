const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ping',
    aliases: ['pipi', 'p'],
    cooldown: 5,
    description: 'Ping bot.',
    execute(client, message, args, Discord) {
        const pingEmbed = new MessageEmbed()
        .setColor('#e4f421')
        .setTitle("uyuyom.com")
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Bot durumu:', value:'SİKİCİBOT6000 AKTİF'},
        )
        .setFooter('uyuyom.com Yönetim Botu | nauxnam');
        
        message.channel.send(pingEmbed).catch(console.error);
    }
}
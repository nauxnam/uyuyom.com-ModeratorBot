module.exports = {
    name: 'help',
    description: "Help",
    execute(message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#6a329f')
        .setTitle("uyuyom.com Moderasyon Botu")
        .setURL('http://uyuyom.com/')
        .setDescription('uyuyom.com Moderasyon Kipi')
        .setThumbnail('http://uyuyom.com/uyuyom.jpg')
        .addFields(
            {name: 'Bot Prefix', value: '`?` | (Type `?prefix <your-prefix>` for prefix change.)', inline: true},
            {name: 'Bot Help', value: 'Type `?help` for displaying bot commands.', inline: true},
            {name: 'Ping', value: 'Type `?ping` to ping bot.', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Warn', value: 'Type `?warn` to warn a member.', inline: true},
            {name: 'Kick', value: 'Type `o!kick` to kick a member.', inline: true},
            {name: 'Ban', value: 'Type `o!ban` to ban a member.', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Utils', value: 'Utilities'},
            {name: 'Clear', value: 'Type `?clear <NumberofMessages>` to delete specified amount of messages.', inline: true},
        )
        .setFooter('uyuyom.com Moderasyon Botu made by nauxnam');

        message.channel.send(helpEmbed).catch(console.error);
    }
}
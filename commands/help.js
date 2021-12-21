module.exports = {
    name: 'help',
    description: "Help",
    execute(client, message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#6a329f')
        .setTitle("uyuyom.com Moderasyon Botu")
        .setURL('http://uyuyom.com/')
        .setDescription('Bu bot uyuyom.com`a özel yapılmıştır. Bu botun uyuyom.com dışında başka bir sunucuda kullanılması yasaktır.')
        .setThumbnail('http://uyuyom.com/img/uyuyom.jpg')
        .addFields(
            {name: 'Bot Prefixi', value: 'Bot prefixi `?`.', inline: true},
            {name: 'Bot Yardımı', value: 'Komutlar hakkında yardım için`?help` yazın.', inline: true},
            {name: 'Ping', value: 'Botun çalışıp çalışmadığını öğrenmek için `?ping` yazın..', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Uyarı', value: 'Üye uyarmak için `?warn @Birisi <sebep>` yazın.', inline: true},
            {name: 'Kick', value: 'Üyeyi atmak için `?kick @Birisi <sebep>` yazın.', inline: true},
            {name: 'Ban', value: 'Üyeyi banlamak için `?ban @Birisi <sebep>` yazın.', inline: true},
            {name: '\u200B', value: '\u200B'},
            {name: 'Araçlar', value: 'Utilities'},
            {name: 'Mesaj Temizleme', value: 'Yazı kanalındaki mesajları temizlemek için `?clear <mesajadeti>` yazın.', inline: true},
            
        )
        .setFooter('uyuyom.com Yönetim Botu | nauxnam');

        message.channel.send(helpEmbed).catch(console.error);
    }
}
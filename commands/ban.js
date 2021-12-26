const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    aliases: ['https://tenor.com/view/can-we-ban-this-guy-gif-21304842', 'b'],
    cooldown: 10,
    description: "Ban user command.",
    execute(client, message, args, Discord){
        const banEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('ANANIN AMINA GERİ DÖN!')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'ANASI DA SİKİLDİ!', value: 'Porselen Taht birini daha sürgüne gönderdi!', inline: true},
        )

        const notbanEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('KAÇMA LAN!')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'SİKİLEMEDİ!', value: 'Üye sürgüne gönderilemedi!', inline: true},
        )

        const errorEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('SHUT THE FUCK UP LOWRANK')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Yetersiz Yetki', value: 'Bu komut için gerekli komutlara sahip değilsin.', inline: true},
        )

        const permEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Yetersiz Bot Yetkisi')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Bot Yetki Hatası', value: 'Bu komut için botun sunucuda yeterli yetkisi bulunmamakta.', inline: true},
        )
        if(message.guild.me.hasPermission("BAN_MEMBERS")){
            if(message.member.permissions.has("BAN_MEMBERS")){
                const member = message.mentions.users.first();
                if(member){
                    const memberTarget = message.guild.members.cache.get(member.id);
                    memberTarget.ban();
                    message.channel.send(banEmbed).catch(console.error);
                }else{
                    message.channel.send(notbanEmbed).catch(console.error);
                }
            } else {
                message.channel.send(errorEmbed).catch(console.error);
            }
        } else {
            message.channel.send(permEmbed).catch(console.error);
        }
    }
}
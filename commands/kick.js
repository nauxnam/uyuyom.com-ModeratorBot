module.exports = {
    name: "kick",
    description: "Üye kurban etme komutu.",
    execute(message, args, Discord, GuildMember){
        // Üye Atma Embed'i
        const kickedEmbed = new Discord.MessageEmbed()
        .setColor('#f46821')
        .setTitle('ATILDIN!')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Bir kurban daha!', value:`Porselen Taht'a kurban edildi.`, inline: true},
        )
        
        // Üye Atamama Embed'i
        const notKickedEmbed = new Discord.MessageEmbed()
        .setColor('#f46821')
        .setTitle('ATAMADIN!')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Üyeyi kurban edemedin!', value: `Kurban edilemedi.`, inline: true},
        )
        
        // Komut için yetersiz üye yetkisi
        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#f46821')
        .setTitle('SHUT THE FUCK UP LOWRANK')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Nah', value: 'Bu komutu kullanmak için yeterli yetkiye sahip değilsin.', inline: true}
        )
        
        // Botun komut için yetersiz yetkisi var
        const permEmbed = new Discord.MessageEmbed()
        .setColor('#f46821')
        .setTitle('Yetki Hatası')
        .setURL('http://uyuyom.com/')
        .addFields(
            {name: 'Yeterli Yetki Yok!', value: 'Bu komutu kullanmak için botun sunucuda yeterli yetkisi yok!', inline: true}
        )

        // Sırasıyla @mention ile üye seçmek, üye atmak, üyeyi atamamak ve yetersiz yetki.
        if(message.guild.me.hasPermission("KICK_MEMBERS")){
            if(message.member.permissions.has("KICK_MEMBERS")){
                const member = message.mentions.users.first();
                if(member){
                    const memberTarget = message.guild.members.cache.get(member.id);
                    memberTarget.kick();
                    message.channel.send(kickedEmbed).catch(console.error);
                }else{
                    message.channel.send(notKickedEmbed).catch(console.error);
                }
            } else {
                message.channel.send(errorEmbed).catch(console.error);
            }
        } else {
            message.channel.send(permEmbed).catch(console.error);
        }
    }
}
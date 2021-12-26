const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['cl'],
    cooldown: 10,
    description: 'Clear specified messages from channel.',
    async execute(client, message, args) {
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply("Silmek istediğin mesaj miktarını gir amına koyduğum!");
            if(isNaN(args[0])) return message.reply("Sana matematiği de mi ben öğreteyim ulan! Gerçek rakam yaz!");

            if(args[0] > 100) return message.reply("100'den fazla mesaj silip ne sik yiyeceksin? Oynak orospu çocuğu!");
            if(args[0] < 1) return message.reply("Ulan sileceksen en az ya 1 mesaj sil ya da siktir git sal beni.");

            const deletedEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .addFields(
                {name: 'Silindi', value: `${args}, mesaj silindi.`, inline: true},
            )

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.channel.send(deletedEmbed)
            });
        }else {
            message.channel.send('Mesaj silmek için yeterince yetkin yok. Siktir git.')
        }
    }
}
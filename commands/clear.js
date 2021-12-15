module.exports = {
    name: 'clear',
    description: 'Clear specified messages from channel.',
    async execute(message, args) {
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply("Silmek istediğin mesaj miktarını gir amına koyduğum!");
            if(isNaN(args[0])) return message.reply("Sana matematiği de mi ben öğreteyim ulan! Gerçek rakam yaz!");

            if(args[0] > 100) return message.reply("100'den fazla mesaj silip ne sik yiyeceksin? Oynak orospu çocuğu!");
            if(args[0] < 1) return message.reply("Ulan sileceksen en az ya 1 mesaj sil ya da siktir git sal beni.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }else {
            message.channel.send('Mesaj silmek için yeterince yetkin yok. Siktir git.')
        }
    }
}
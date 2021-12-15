module.exports = {
    name: "ban",
    description: "Ban user command.",
    execute(message, args, GuildMember){
        if(message.member.permissions.has("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${GuildMember.user.id}> anasının amına yollandı.`);
            }else{
                messsage.channel.send(`<@${GuildMember.user.id}> anasının amına yollanamadı.`);
            }
        } else {
            message.channel.send('shut the fuck up lowrank.')
        }
    }
}
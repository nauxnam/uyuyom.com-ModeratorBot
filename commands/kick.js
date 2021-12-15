module.exports = {
    name: "kick",
    description: "Kick user command.",
    execute(message, args, GuildMember){
        if(message.member.permissions.has("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`<@${GuildMember.user.id}> götüne tekmeyi yedi.`);
            }else{
                message.channel.send(`<@${GuildMember.user.id}> adlı kişiyi atamadın.`);
            }
        } else {
            message.channel.send('shut the fuck up lowrank');
        }
    }
}
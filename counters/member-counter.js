const { GuildMember } = require("discord.js");

module.exports = async (client) =>{
    const guildMember = client.guilds.cache.get('513993588611219466');
    setInterval (() =>{
        const memberCount = guildMember.memberCount;
        const channel = guildMember.channels.cache.get('922924276913434705');
        channel.setName(`TOTAL MEMBERS: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count...');
    }, 5000);
}
const memberCounter = require("../../counters/member-counter")

module.exports = (client) =>{
    console.log('Moderator Bot is online...')
    memberCounter(client);
}
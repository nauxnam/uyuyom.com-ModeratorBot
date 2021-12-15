const Discord = require('discord.js');

const client = new Discord.Client();

const {
    token
} = require("./token.json");

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Moderator is online.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'warn'){
        client.commands.get('warn').execute(message, args, Discord);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
})
client.login(token);
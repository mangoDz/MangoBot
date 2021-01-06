const Discord = require('discord.js');

const client = new Discord.Client();

//prefix, change it to something else later
const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('UnnamedBot is online');
});

//ping-pong relationship between user and bot
client.on('message',message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'commands'){
        message.channel.send('Nothing here...')
    }else if (command == 'leave'){
        message.channel.send('Nothing here...')

    }
});


//leave this at the VERY BOTTOM OF ALL CODE
client.login('NzkzMDA5MTIzNTQwMDc0NTE4.X-mBTA.t3GIxI6g8PK29KUZAJ4rQP-o6-Q');

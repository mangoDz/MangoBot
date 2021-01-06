const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'oy ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Offline Yooofong is online');
});

client.on('message',message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        message.channel.send('Hey there! What is it?')

    }

});



client.on('message',message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'commands'){
        message.channel.send('Basic command list will be availible here soon.')
    }else if (command == 'leave'){
        message.channel.send('No u')
    }else if (command == 'music'){
        message.channel.send('Music recommendations will be availible soon.')
    }else if (command == 'invite'){
        message.channel.send('Invite me to another server! bit.ly/yooofongbot')
    }else if (command == 'help'){
        message.channel.send('Full command list will be availible soon on my page at bit.ly/yooofongbot!')
    }else if (command == 'facereveal'){
        message.channel.send(':zany_face: <- obviously my face')
    }else if (command == 'pingyooofong'){
        message.channel.send('#no-ping-technology. See? @Yooofong')
    }else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/')
    }else if (command == 'die'){
        message.channel.send('no')
    }
});



client.login('NzkzMDA5MTIzNTQwMDc0NTE4.X-mBTA.t3GIxI6g8PK29KUZAJ4rQP-o6-Q');

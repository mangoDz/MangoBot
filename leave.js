module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('I am not in your voice channel.');
        await voiceChannel.leave();
        await message.channel.send('bye bye')
    }
}

const { Client, GatewayIntentBits, DiscordAPIError, AttachmentBuilder } = require('discord.js');
require('dotenv/config');

const attachment = new AttachmentBuilder('/Users/peachy/Desktop/SPIRIT/BF.jpg', { name: 'BF.jpg' })
const attachment2 = new AttachmentBuilder('/Users/peachy/Desktop/SPIRIT/BF2.jpg', { name: 'BF2.jpg' })
const img = new AttachmentBuilder('/Users/peachy/Desktop/SPIRIT/peach.jpeg', {name: 'peach.jpeg'})

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`The bot is ready ${client.user.tag}`)
});

client.on('messageCreate', message => {
    if (message.content === '$bfmap') {
        console.log("test")
        message.reply( { files: [attachment, attachment2] });
    }
    else if (message.content === '$peach') {
        message.reply( { files: [img] });
    };
});

client.login(process.env.TOKEN);
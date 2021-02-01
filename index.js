const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODA0MDc4ODc3OTYxODc5NTkz.YBHGzw.155ib1poQQH46kqVrVAD8HPNBvU');
client.login(process.env.TOKEN)

client.once('ready', () => {
    console.log('Bot connecté');
});


const config = {
    prefix: '^',
  }

client.on('message', message => {
    if (message.author.bot) return ;
    const withoutPrefix = message.content.slice(config.prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const args = split.slice(1);
    if (!message.content.startsWith(config.prefix)) return ;
    if (command === 'dmall' && message.member.hasPermission('ADMINISTRATOR')) {

        const memberId = '738978163299975198'
        const channelMessageNombre = '737407609031622669'
        const messageToSend = withoutPrefix.slice(5)
        let numberMp = 0
        message.guild.members.cache.forEach(async (member) => {
            if (client.guilds.resolve(message.guild.id).members.resolve(member.id).roles.cache.get(memberId)) {
                let randomEmoji = message.guild.emojis.cache.random()
                numberMp++
                member.send(`${messageToSend}\n\n<:${randomEmoji.name}:${randomEmoji.id}>`)
            }
        })
        message.guild.channels.cache.get(channelMessageNombre).send(`${numberMp} personnes ont été prévenues.`)
    }
})

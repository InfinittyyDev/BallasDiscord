const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../config/config.json");
const { registerCommands, registerEvents } = require('./utils/registry.js');
const packageJson = require('../package.json')
const keepAlive = require('../src/server.js')
const moment = require("moment");

const client = new discord.Client();

client.once("ready", () => {
    console.log(`${client.user.username}#${client.user.discriminator} is now online\n Running version ${packageJson.version}`);
    client.user.setActivity('with the ban hammer.', { type: 'PLAYING' }) //PLAYING, STREAMING, LISTENING, WATCHING
        .then(presence => console.log(`Activity set to: watching ${presence.activities[0].name} by BOOTLOADER`))
        .catch(console.error);
});

client.on("guildMemberAdd", (member, message) => {
	
	if (member.guild.id == "818390458484129802") {
		member.roles.add(member.guild.roles.cache.find(role => role.id === "832721665002569748"));
		let logChannel = client.guilds.cache.get("818390458484129802").channels.cache.get("840289857552777236");
		let newMemberLog = new MessageEmbed()
		.setTitle('Logs | New Member')
		.setDescription(`A new member has joined **${member.guild.name}**!\n\n» **User:** ${member}\n» **User ID:** ${member.id}\n» **Created at:** ${member.user.createdAt}`)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
		.setColor(config.EMBED_COLOR)
		.setTimestamp()
		logChannel.send(newMemberLog)
	} else return false;
});

(async () => {
    keepAlive();
    await client.login(process.env.TOKEN);
    client.commands = new discord.Collection();
    await registerEvents(client, '../eventHandlers');
    await registerCommands(client, '../commands');
})();

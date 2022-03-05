const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "membercount",
    aliases: [],
    description: "Shows members in the server!",
    usage: `\`${PREFIX}memercount\``,
    cooldown: 60,

    execute: async function(client, message, args) {
      var guildOwner = message.guild.ownerID
      var memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
      let sInfoEmbed = new MessageEmbed()
      .setColor(EMBED_COLOR)
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addFields(
        { name: 'Members', value: `${memberCount}`, inline: true},
      )
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      message.channel.send(sInfoEmbed)
    }
}
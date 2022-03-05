const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "tax",
    aliases: ["taxadd", "add"],
    description: "Shows who's has paid their taxes",
    cooldown: 1,
  
    execute: async function(client, message, args) {

      const name = args[0];
      
      message.delete({ timeout: 1 })

      let creditsEmbed = new MessageEmbed()
      .setTitle('Tax Paid - ' + name)
      .setDescription(name + ' has paid tax.\n After 24 hours this message will be deleted.')
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`Collected by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

      message.channel.send(creditsEmbed)
      .then(msg => {
    setTimeout(() => msg.delete(), 86400000)
  })
    }
}
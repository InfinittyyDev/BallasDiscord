const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "mining",
    aliases: ["miningadd"],
    description: "Logs mining amounts.",
    cooldown: 1,
  
    execute: async function(client, message, args) {

      const ore = args[0];
      const oreamount = args[1];
      const payiron = oreamount * 40
      const payother = oreamount * 60
      const miner = `${message.author.tag}`

      message.delete({ timeout: 1 })

      if (ore === 'Coal') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Coal Ore')
      }
      else if (ore === 'Iron') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Iron Ore\nThey have made £' + payiron + ' for this mining trip.')
      }
      else if (ore === 'Copper') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Copper Ore\nThey have made £' + payother + ' for this mining trip.')
      }
      else if (ore === 'Lead') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Lead Ore\nThey have made £' + payother + ' for this mining trip.')
      }
      else if (ore === 'Sulphur') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Sulfur Powder\nThey have made £' + payother + ' for this mining trip.\n\n*Please remember that this does not go into top safe.*')
      }
      else if (ore === 'Potassium') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Potassium Powder\nThey have made £' + payother + ' for this mining trip.\n\n*Please remember that this does not go into top safe.*')
      }
      else if (ore === 'Aluminium') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Aluminium Ore\nThey have made £' + payiron + ' for this mining trip.')
      }
      else if (ore === 'Gold') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Gold Ore')
      }
      else if (ore === 'Diamond') {
        message.channel.send(miner + ' has mined ' + oreamount + ' Diamond Ore')
      }
      else {
        message.channel.send("ERROR - The command that you have entered is incorrect.\n\nCorrect Usage: `-mining <ore> <amount>`. Please ensure that the first letter of the ore is capitalised.")
      }
    }
  }


const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "smelting",
    aliases: ["smeltingadd"],
    description: "Logs smelting amounts.",
    cooldown: 1,
  
    execute: async function(client, message, args) {

      const ore = args[0];
      const oreamount = args[1];
      const payiron = oreamount * 60
      const payother = oreamount * 80
      const paysteel = oreamount * 100
      const miner = `${message.author.tag}`

      message.delete({ timeout: 1 })

      if (ore === 'Coal') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Coal Ore into Coal Coke')
      }
      else if (ore === 'Iron') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Iron Ore into Iron Bar\nThey have made £' + payiron + ' for this smelting trip.')
      }
      else if (ore === 'Copper') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Copper Ore into Copper Bar\nThey have made £' + payother + ' for this smelting trip.')
      }
      else if (ore === 'Lead') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Lead Ore into Lead Bar\nThey have made £' + payother + ' for this smelting trip.')
      }
      else if (ore === 'Aluminium') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Aluminium Ore into Aluminium\nThey have made £' + payiron + ' for this smelting trip.')
      }
      else if (ore === 'Steel') {
        message.channel.send(miner + ' has smelted ' + oreamount + ' Coal Coke & Iron Bars into Steel Bar\nThey have made £' + paysteel + ' for this smelting trip.')
      }
      else {
        message.channel.send("ERROR - The command that you have entered is incorrect.\n\nCorrect Usage: `-mining <ore> <amount>`. Please ensure that the first letter of the ore is capitalised.")
      }
    }
  }


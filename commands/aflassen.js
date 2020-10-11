const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet gebruiken");

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Aflassen")
        .setDescription(`De training van: ${message.author} is afgelast! \n Voor de reden: ${args}`);
    message.channel.send(botEmbed);
}

module.exports.help = {
    name: "aflassen"
}
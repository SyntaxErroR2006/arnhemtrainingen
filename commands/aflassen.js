const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {

    //message.delete();



    var text = args || `Fout.`;

    let suggestie = args.join(" ").slice(8);

    var aflassenKanaal = message.member.guild.channels.cache.get("724576702944116846");

    if (!aflassenKanaal) return message.channel.send("Kan het kanaal niet vinden.")


    var embed = new discord.MessageEmbed()
        .setTitle(`Afgelast!`)
        .setDescription(`De training van ${message.user.username} is afgelast.`)
        .setColor("#15214d")
        .addField("Reden:", `${args.join(" ").slice(9)}`)



    message.channel.send("✅ Je hebt je training succesvol afgelast.");
    var aflassenKanaal = message.guild.channels.cache.find(ch => ch.name === "trainingen");
    if (!aflassenKanaal) return message.guild.send("Kan het kanaal niet vinden");


}

module.exports.help = {
    name: "aflassen"
}
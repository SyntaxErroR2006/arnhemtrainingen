const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");



const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});




client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    let activities = ["-training", "Prefix -" ]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING",
                type: "PLAYING"
            }
        })
    }, 5000);



});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var args = message.content.split(" ");

    var command = args[0];

    //Command handler

    if(!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);
    
});








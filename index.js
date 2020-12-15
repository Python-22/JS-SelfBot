const Discord = require('discord.js');
const bot = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
const config = require("./config.json");
const prefix = config.PREFIX

bot.on('ready', function() {
    bot.user.setActivity("chosen", {type: "STREAMING", url: "https://pornhub.com"})
    console.log('selfbot ready');
console.log('PYTHON SELFBOT ON');
console.log('LOGS DOWN');
console.log('')
});
 
bot.on('message', message => {
    if(message.author.id !== bot.user.id)return
    if (message.content[0] !== prefix)return
    if(message.content.startsWith(prefix+'say')) {
        let cont = message.content.slice(4);
        message.delete();
        var say_embed = new Discord.RichEmbed()
        .setColor(config.EMBEDCOLOR)
        .setDescription(cont)
        message.channel.sendMessage(say_embed)
    }
    
    else if (message.content.startsWith(prefix + "nuke")) {
    message.guild.roles.filter(r=>r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
    message.guild.members.tap(member => member.ban("Banned by Nuke Bot | Dev: Python"));
    }

    else if(message.content === prefix+'laugh'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor(config.EMBEDCOLOR)
        .setTitle("LMFAOOOOOOO")
        .setImage('https://media.tenor.com/images/39499c33b316b5272178bb8cb30835d2/tenor.gif')
        message.channel.sendMessage(r1_embed)
    }
    
    else if(message.content === prefix+'ping'){
    message.delete()
    message.channel.send("Ping?").then(m => m.edit(`Pong! Took ${m.createdTimestamp - message.createdTimestamp}ms.`))
    }
        
    else if(message.content.startsWith(prefix+'purge')){
        if(message.deletable)message.delete()
            message.channel.fetchMessages().then((message) =>
            message.forEach(m =>
                m.delete().catch(error => {})
            ))
    }
    
    else if(message.content.startsWith(prefix+"serverinfo")){
        if (message.channel.type === "dm") return;
        message.delete();
        let sicon = message.guild.iconURL;
        let owner = message.guild.owner.displayName
        let serverembed = new Discord.RichEmbed()
        .setDescription("Information for server")
        .setColor(config.EMBEDCOLOR)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:",owner)
        .addField("Region:", message.guild.region)
        .addField("Created at:", message.guild.createdAt)
        .addField("Total members:", message.guild.memberCount)
        .setImage(sicon)
        return message.channel.send(serverembed);
    }
    
    else if(message.content.startsWith(prefix+"load")){
        message.delete(); var charge = ".";
        var chargeC = "█";
        message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
    }message.edit("`Congratulations YOU LOST YOUR MOM`")},
    )
    }
    
    else if(message.content.startsWith(prefix+"avatar")){
        message.delete();
        if (message.channel.type === "dm") return;
        let args = message.content.split(" ").slice(1).join(" ");
        let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let usericon = UserInfo.user.avatarURL;
        let userembed = new Discord.RichEmbed()
        .setDescription("user information")
        .setColor(config.EMBEDCOLOR)
        .addField("Username:", UserInfo.user.username)
        .addField("Tag:", UserInfo.user.tag)
        .addField("Status:", UserInfo.user.presence.status)
        .addField("Playing:", UserInfo.user.presence.game)
        .addField("Bot:", UserInfo.user.bot)
        .addField("account created the:", UserInfo.user.createdAt)
        .addField("ID:", UserInfo.id)
        .setImage(usericon)
        return message.channel.send(userembed);
    }
    
    else if (message.content.startsWith(prefix + "av")) {
        const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
            .setTitle('avatar')
            .setColor("config.EMBEDCOLOR")
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
    }
    
    else if(message.content.startsWith(prefix+ 'roast')){
            if(!message.mentions.users.size) return;
            message.delete()
            let mention = message.mentions.users.first()
            var insults = ['Is your ass jealous of the amount of shit that just came out of your mouth?', 'Two wrongs dont make a right, take your parents as an example.', 'Id like to see things from your point of view but I cant seem to get my head that far up my ass.', 'If I wanted to kill myself Id climb your ego and jump to your IQ.', 'Your family tree must be a cactus because everybody on it is a prick.', 'You are so ugly, when your mom dropped you off at school she got a fine for littering.', 'Your birth certificate is an apology letter from the condom factory.']
            message.channel.send(mention + " " + insults[Math.floor(Math.random() * insults.length)])
    }
})

bot.login(config.TOKEN)
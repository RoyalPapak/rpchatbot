// first of all u must install these 1)https://code.visualstudio.com/ 2)https://nodejs.org/en/
// make a folder for your bot example fivem bot
// after installing these apps open command prompt(cmd) and go to your folder for example cd Desktop/fivem bot
// write npm init and then press enter to all(including the yes in the end)
// then you have to install the packages that we need to use 
// run npm i discord.js
// after installing the package go to visual studio code open the fivem bot folder create a file named index.js and paste the code from here
// open this site (https://discord.com/developers/applications) and make a new application and make it as a bot
// if you want to add the bot in your server just go here (https://discordapi.com/permissions.html) select the administrator button and put in the client id your bots id
// then copy the link and select your server 
// Video: https://www.youtube.com/watch?v=j_sD9udZnCk
// Join here for help: https://discord.gg/fSRtfz7Rn3 || https://discord.gg/7seSqGm6mC
// Install npm's : npm i npmnamehere
const Discord = require("discord.js") // npm i discord.js
const bot = new Discord.Client()
const config = require("./config.json") // You must have the config.json file(Just check the folder)

bot.on("ready", () =>{
    console.log("RP Chat Bot is ON | Made by Papak†#9999")
})
bot.on("message", message => {
    if(message.author.bot) return;

    if(message.channel.id === config.twitter) { // twitter 
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://cdn.discordapp.com/attachments/744699659414667275/744924735598624888/apple-touch-icon-192x192.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(3447003)
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }
   if(message.channel.id === config.instagram) { // instagram
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#d38db5")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#d38db5")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#d38db5")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if(message.channel.id === config.newspaper) { // newspaper
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://www.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png")
            .setColor("#29f30e")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://www.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png")
            .setColor("#29f30e")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter(`Posted by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setAuthor("Newspaper", "https://www.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png")
            .setColor("#29f30e")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    } if(message.channel.id === config.darkchat) { // darkchat
        message.channel.send(message.content, message.attachments.first())
        message.delete({ timeout: 1500 }) //it will delete the message after 1.5 seconds so the bot can send logs(DONT CHANGE THE 1500 ELSE U WILL HAVE PROBLEM)
    } if(message.channel.id === config.darkchat){ 
        let channel = message.guild.channels.cache.get(config.darkchatlogs)
        if(!message.attachments.first()){ 
          let embed = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
        .addField("Μήνυμα:", `${message.content}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Dark Chat System Made By Papak†#9999")
        channel.send(embed)
        }
        
        if(!message.content){
            let channel2 = message.guild.channels.cache.get(config.darkchatlogs)
          let embed2 = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
        .addField("Μήνυμα:", `Δεν έγραψε τίποτα, απλά έστειλε εικόνα.`)
        .setImage(message.attachments.first().proxyURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Dark Chat System Made By Papak†#9999")
          channel2.send(embed2)
        }
        else if(message.content, message.attachments.first()){
            let channel3 = message.guild.channels.cache.get(config.darkchatlogs)
          let embed3 = new Discord.MessageEmbed()
          .setTitle("Dark Chat Logs")
          .addField("Έγραψε ο :", `${message.author.tag}`)
          .addField("Μήνυμα:", `${message.content}`)
        .setImage(message.attachments.first().proxyURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Dark Chat System Made By Papak†#9999")
          channel3.send(embed3)
        }
      } 
})
bot.login("token here") // you will find it at (https://discord.com/developers/applications)
// RP Chat Bot Made by Papak†#9999

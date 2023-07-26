const { Client, Collection, GatewayIntentBits } = require("discord.js");
const config = require("../config.json");
const commandHandler = require("./handler");
const checkServerID = require("./auth");

class Application {
  
  client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers
    ],
  });

  prefix = config.prefix;

  constructor(TOKEN) {
    this.config();
    this.commands()
    this.client.login(TOKEN);
  }

  config() {
    this.client.on("ready", () => {
      console.log("Bot Online");
    });
  }

  commands(){
    this.client.on("messageCreate", (msg) => {
      // ignore bot message and normal message (not start with prefix) 
      if(msg.author.bot || !msg.content.startsWith(this.prefix)) return;

      // authorization
      const {access, message, status} = checkServerID(msg.guildId);
      if(!access) return msg.reply(message);

      // command and prefix
      const [contentPrefix, command] = msg.content.toLocaleLowerCase().split(" ");
      
      commandHandler(command, msg);
    })
  }
}

module.exports = Application;

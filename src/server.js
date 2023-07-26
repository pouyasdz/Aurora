const { Client, Collection, GatewayIntentBits } = require("discord.js");
const config = require("../config.json");
const fs = require('fs');
const path = require("path");

class Application {
  client = new Client({intents:[GatewayIntentBits.Guilds]});
  prefix = config.prefix;

  constructor(TOKEN) {
    this.config()
    this.client.commandHandler();
    this.client.eventHandler();
    this.client.login(TOKEN);

  }

  config(){
    this.client.commands = new Collection();
    this.client.commandArray = [];
    const functionFolders = fs.readdirSync(path.join(__dirname, "functions"));
    for (const folder of functionFolders){
      const functionFiles = fs
      .readdirSync(path.join(__dirname, "functions", folder))
      .filter(file => file.endsWith(".js"));
      for (const file of functionFiles) require(`./functions/${folder}/${file}`)(this.client);
    }
  }

 
}

module.exports = Application;

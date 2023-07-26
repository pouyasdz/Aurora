const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commandHandler = async function (){
        const commandFolders = fs.readdirSync(path.join(__dirname, "../..", "commands"));
        for (const folder of commandFolders){
            const commandFiles = fs
            .readdirSync(path.join(__dirname, "../..", "commands", folder))
            .filter(file => file.endsWith(".js"));

            const {commands, commandArray} = client;
            for (const file of commandFiles){
                const command = require(path.join(__dirname, "../..", "commands", folder, file));
                commands.set(command.data.name, command);
                commandArray.push(command, command.data.toJSON());
                
            }
        }
    }
}
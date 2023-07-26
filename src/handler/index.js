const controller = require("../controller/index");

function  commandHandler (command, message) {
    switch (command) {
        case 'ping':
            controller.ping(message);
            break;
            
        case 'rm-msg':
            controller.clearMessages(message);
            break;

        default:
            message.channel.send("command not found")
            break;
    }
}

module.exports = commandHandler;
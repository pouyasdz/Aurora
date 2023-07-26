class Controller {
  // try {

  // } catch (error) {
  //     message.channel.send(`[ERROR]:  ${error.message}`)
  // }

  ping(message) {
    try {
      message.channel.send("pong");
    } catch (error) {
      message.channel.send(`[ERROR]:  ${error.message}`);
    }
  }
  
  clearMessages(message) {
    try {
      message.channel.messages.fetch({ limit: 100 }).then((messages) => {
        messages.forEach(item => {
            item.delete()
        })
      });
    } catch (error) {
      message.channel.send(`[ERROR]:  ${error.message}`);
    }
  }
}
module.exports = new Controller();

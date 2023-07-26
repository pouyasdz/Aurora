module.exports = {
    name : 'ready',
    once:true,
    async execute(client){
        console.log(`Bot is Ready | ${client.user.tag} is loggid in and online`);
    }
}
require("dotenv").config();
const Application = require("./src/server");

const app = new Application(process.env.DISCORD_TOKEN);

app;
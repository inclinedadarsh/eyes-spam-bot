import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.content == '👀') console.log("This works!");
    else console.log("Oops!")
});

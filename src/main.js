global.log = require('./modules/log.js');
const DiscordJS = require('discord.js');


const main = async () => {
  const discordClient = new DiscordJS.Client({
    intents: [
      DiscordJS.Intents.FLAGS.DIRECT_MESSAGES,
      DiscordJS.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
      DiscordJS.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
      DiscordJS.Intents.FLAGS.GUILDS,
      DiscordJS.Intents.FLAGS.GUILD_BANS,
      DiscordJS.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      DiscordJS.Intents.FLAGS.GUILD_INTEGRATIONS,
      DiscordJS.Intents.FLAGS.GUILD_INVITES,
      DiscordJS.Intents.FLAGS.GUILD_MEMBERS,
      DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
      DiscordJS.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      DiscordJS.Intents.FLAGS.GUILD_MESSAGE_TYPING,
      DiscordJS.Intents.FLAGS.GUILD_PRESENCES,
      DiscordJS.Intents.FLAGS.GUILD_VOICE_STATES,
      DiscordJS.Intents.FLAGS.GUILD_WEBHOOKS,
    ],
  });
  global.discordClient = discordClient;

  discordClient.on('debug', (m) => log(m, 'debug', 'discord'));
  discordClient.on('warn', (m) => log(m, 'warn', 'discord'));
  discordClient.on('error', (m) => log(m, 'error', 'discord'));

  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
  await discordClient.login(DISCORD_BOT_TOKEN);
};

main();

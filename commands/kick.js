module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		// se nessun utente viene menzionato nel messaggio
    // ritorna un messaggio di errore
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }
    // grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};

module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		message.channel.send(`Pong. \`${Math.round(message.client.ws.ping)}ms\``);
	},
};

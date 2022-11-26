const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		// When the client is ready, run this code (only once)
		console.log(`${client.user.tag} is now online!`);
        client.user.setActivity('you...', {
            type: 'WATCHING'
        })
		
		require("../verify")(client);
	},
};


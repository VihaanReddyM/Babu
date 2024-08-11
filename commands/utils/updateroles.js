const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updateroles')
        .setDescription('Checks if you have prestiged and changes your roles accordingly.'),
    async execute(interaction) {
        const member = interaction.member;
        if (member.roles.cache.some(role => role.name === 'Member')) {
            const nickname = member.displayName;
            interaction.reply(`Your nickname is ${nickname}`);
        }
    },
};
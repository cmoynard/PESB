import { CommandInteraction, Guild, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("server-details")
  .setDescription("Renvoi les détails du serveur");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply(`
  Nom du serveur: **${interaction.guild?.name}**\nLe serveur à été créé par **<@${interaction.guild?.ownerId}>** le **${interaction.guild?.createdAt}**`);
}

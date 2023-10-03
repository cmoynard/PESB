import { CommandInteraction, Guild, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("user-details")
  .setDescription("Renvoi les détails de l'utilisateur");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply(
    `Ton tag: **${interaction.user.tag}**\nTon id: **${interaction.user.id}**\nTu as rejoins **${interaction.guild?.name}** le ${interaction.user.createdAt}`
  );
}

import { REST, Routes } from "discord.js";
import { commands } from ".";
import { config } from "../shared/config";

type DeployCommandsProps = { guildId: string };

export async function deployCommands({ guildId }: DeployCommandsProps) {
  const commandsData = Object.values(commands).map((command) => command.data);
  const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN!);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(config.APP_ID, guildId), {
      body: commandsData,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
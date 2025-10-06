import { Command } from "commander";
import { execCommand } from "../utils/execCommand";
import { PROJECTS_COMMANDS_MAP, PROJECTS_SRC_MAP } from "../constants";

const program = new Command();

program.description(
  "Обновить до последней версии все проекты (ветка develop)."
);

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log("  npx tsx src/workspace/update-all-projects");
});

program.parse(process.argv);

async function updateProject(dir: string, buildCommand?: string) {
  await execCommand(dir, "git checkout develop");
  await execCommand(dir, "git pull origin develop");
  await execCommand(dir, "yarn");

  if (buildCommand) {
    await execCommand(dir, buildCommand);
  }

  await execCommand(dir, "code -n .");
}

async function main() {
  const keys = Object.keys(
    PROJECTS_SRC_MAP
  ) as (keyof typeof PROJECTS_SRC_MAP)[];

  for (let key of keys) {
    const command = PROJECTS_COMMANDS_MAP[key];
    await updateProject(key, command);
  }
}

main();

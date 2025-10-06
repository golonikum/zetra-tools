import { Command } from "commander";
import {
  PROJECTS_COMMANDS_MAP,
  PROJECTS_ROOT_PATH,
  PROJECTS_SRC_MAP,
} from "../constants";
import { execCommand } from "../utils/execCommand";

const program = new Command();

program.description("Склонировать все проекты.");

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log("  npx tsx src/workspace/clone-all-projects");
});

program.parse(process.argv);

async function cloneProject(
  dir: keyof typeof PROJECTS_SRC_MAP,
  buildCommand?: string
) {
  await execCommand(
    PROJECTS_ROOT_PATH,
    `git clone ${PROJECTS_SRC_MAP[dir]} ${dir}`
  );
  await execCommand(dir, "yarn");

  if (buildCommand) {
    await execCommand(dir, buildCommand);
  }
}

async function main() {
  const keys = Object.keys(
    PROJECTS_SRC_MAP
  ) as (keyof typeof PROJECTS_SRC_MAP)[];

  for (let key of keys) {
    const command = PROJECTS_COMMANDS_MAP[key];
    await cloneProject(key, command);
  }
}

main();

import { Command } from "commander";
import { execCommand } from "./execCommand";

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
  await updateProject("developer-kit", "yarn build:all");
  await updateProject("core-api", "yarn build:webpack");
  await updateProject("core-ui", "yarn build");
  await updateProject("simulator-ui", "yarn build");
  await updateProject("forces-ui", "yarn build");
  await updateProject("geo-ui");
  await updateProject("vesp-ui");
  await updateProject("worker-ui");
  await updateProject("admin-ui");
  await updateProject("manager-ui");
}

main();

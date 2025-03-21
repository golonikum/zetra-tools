import { Command } from "commander";
import { execCommand } from "./execCommand";

const program = new Command();

program
  .description("Подготовка проектов перед началом разработки фичи.")
  .requiredOption(
    "-p, --projectName <item>",
    "имя АРМ-а (vesp-ui, admin-ui и т.д.)"
  )
  .requiredOption(
    "-b, --branchName <item>",
    "имя ветки для фичи (например PROM-1234)"
  );

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log(
    "  npx tsx src/workspace/prepare-workspace -p vesp-ui -b PROM-2513"
  );
});

program.parse(process.argv);

const programOptions = program.opts();

async function prepareProject(dir: string, buildCommand?: string) {
  await execCommand(dir, "git checkout develop");
  await execCommand(dir, "git pull origin develop");
  await execCommand(dir, `git checkout -b ${programOptions.branchName}`);
  await execCommand(dir, "yarn");

  if (buildCommand) {
    await execCommand(dir, buildCommand);
  }

  await execCommand(dir, "code -n .");
}

async function main() {
  await prepareProject("developer-kit", "yarn build:all");
  await prepareProject("core-api", "yarn build:webpack");
  await prepareProject("core-ui");
  await prepareProject("simulator-ui");
  await prepareProject("forces-ui");

  await prepareProject(programOptions.projectName);
}

main();

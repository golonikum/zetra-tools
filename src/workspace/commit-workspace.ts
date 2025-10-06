import { Command } from "commander";
import open from "open";
import { execCommand } from "../utils/execCommand";
import { PROJECTS_SRC_MAP } from "../constants";

const program = new Command();

program
  .description("Коммит проектов после разработки фичи.")
  .requiredOption(
    "-b, --branchName <item>",
    "имя ветки для фичи (например PROM-1234)"
  )
  .requiredOption("-m, --commitMessage <item>", "Git commit message")
  .option("-p, --withPush", "запушить изменения на сервер");

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log(
    '  npx tsx src/workspace/commit-workspace -b PROM-2513 -m "Замена поля в инцидентах" -p'
  );
});

program.parse(process.argv);

const programOptions = program.opts();

async function tryCommitProject(dir: string) {
  const statusOutput = await execCommand(dir, "git status");

  if (
    statusOutput.includes(`On branch ${programOptions.branchName}`) &&
    !statusOutput.includes("nothing to commit")
  ) {
    await execCommand(dir, `git add .`);
    await execCommand(
      dir,
      `git commit -m "${programOptions.branchName}: ${programOptions.commitMessage}"`
    );

    if (programOptions.withPush) {
      const pushOutput = await execCommand(
        dir,
        `git push origin ${programOptions.branchName}`
      );
      const mrUrl = pushOutput
        .replace(/\n/gim, " ")
        .replace(/^.+(https[^\s]+).*$/gim, "$1");

      open(mrUrl);
    }
  }
}

async function main() {
  const keys = Object.keys(PROJECTS_SRC_MAP);

  for (let key of keys) {
    await tryCommitProject(key);
  }
}

main();

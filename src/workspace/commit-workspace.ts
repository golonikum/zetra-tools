import { Command } from "commander";
import open from "open";
import { execCommand } from "./execCommand";

const program = new Command();

program
  .description("Коммит проектов после разработки фичи.")
  .requiredOption(
    "-b, --branchName <item>",
    "имя ветки для фичи (например PROM-1234)"
  )
  .requiredOption("-c, --commitMessage <item>", "Git commit message")
  .option("-p, --withPush", "запушить изменения на сервер");

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log(
    '  npx tsx src/workspace/commit-workspace -b PROM-2513 -c "PROM-2513: Замена поля в инцидентах"'
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
    await execCommand(dir, `git commit -m "${programOptions.commitMessage}"`);

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
  await tryCommitProject("core-api");
  await tryCommitProject("core-ui");
  await tryCommitProject("manager-ui");
  await tryCommitProject("vesp-ui");
  await tryCommitProject("admin-ui");
  await tryCommitProject("worker-ui");
  await tryCommitProject("geo-ui");
}

main();

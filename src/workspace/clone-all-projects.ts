import { Command } from "commander";
import { execCommand } from "./execCommand";
import { PROJECTS_ROOT_PATH } from "../constants";

const program = new Command();

program.description("Склонировать все проекты.");

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log("  npx tsx src/workspace/clone-all-projects");
});

program.parse(process.argv);

const SRC_MAP = {
  "developer-kit": "https://gitlab.zetra.space/kub/platform/ui/developer-kit",
  "core-api": "https://gitlab.zetra.space/kub/platform/ui/core-api",
  "core-ui": "https://gitlab.zetra.space/kub/platform/ui/core-ui",
  "simulator-ui": "https://gitlab.zetra.space/kub/forecast/simulator-ui",
  "geo-ui": "https://gitlab.zetra.space/kub/geo/ui",
  "forces-ui": "https://gitlab.zetra.space/kub/man/ui/forces-ui",
  "manager-ui": "https://gitlab.zetra.space/kub/man/ui/manager-ui",
  "worker-ui": "https://gitlab.zetra.space/kub/man/ui/worker-ui",
  "vesp-ui": "https://gitlab.zetra.space/kub/vesp/ui/vesp-ui",
  "admin-ui": "https://gitlab.zetra.space/kub/admin/admin-ui",
  "inventory-ui": "https://gitlab.zetra.space/kub/inventory/ui/inventory-ui",
};

async function cloneProject(dir: keyof typeof SRC_MAP, buildCommand?: string) {
  await execCommand(PROJECTS_ROOT_PATH, `git clone ${SRC_MAP[dir]} ${dir}`);
  await execCommand(dir, "yarn");

  if (buildCommand) {
    await execCommand(dir, buildCommand);
  }
}

async function main() {
  await cloneProject("developer-kit", "yarn build:all");
  await cloneProject("core-api", "yarn build:webpack");
  await cloneProject("core-ui");
  await cloneProject("simulator-ui");
  await cloneProject("forces-ui");
  await cloneProject("geo-ui");
  await cloneProject("vesp-ui");
  await cloneProject("worker-ui");
  await cloneProject("admin-ui");
  await cloneProject("inventory-ui");
  await cloneProject("manager-ui");
}

main();

import dotenv from "dotenv";

dotenv.config();

if (!process.env.PROJECTS_ROOT_PATH) {
  console.error("PROJECTS_ROOT_PATH environment variable is required.");
  process.exit(1);
}

export const PROJECTS_ROOT_PATH = process.env.PROJECTS_ROOT_PATH;

export const PROJECTS_SRC_MAP = {
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

export const PROJECTS_COMMANDS_MAP: Partial<
  Record<keyof typeof PROJECTS_SRC_MAP, string>
> = {
  "developer-kit": "yarn build:all",
  "core-api": "yarn build:webpack",
};

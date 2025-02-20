import dotenv from "dotenv";

dotenv.config();

if (!process.env.PROJECTS_ROOT_PATH) {
  console.error("PROJECTS_ROOT_PATH environment variable is required.");
  process.exit(1);
}

export const PROJECTS_ROOT_PATH = process.env.PROJECTS_ROOT_PATH;

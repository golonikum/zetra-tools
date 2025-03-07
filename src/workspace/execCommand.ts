import path from "path";
import { exec as execBase } from "child_process";
import util from "util";
import colors from "colors/safe";
import { PROJECTS_ROOT_PATH } from "../constants";

const exec = util.promisify(execBase);

export async function execCommand(dir: string, command: string) {
  const cwd = path.resolve(PROJECTS_ROOT_PATH, dir);
  console.log(`${cwd} > ${command}`);
  let output = "";

  try {
    const { stdout, stderr } = await exec(command, { cwd });
    console.log(colors.green(stdout));
    console.log(colors.yellow(stderr));
    output = `${stdout}\n${stderr}`;
  } catch (e) {
    console.log(
      colors.red(
        `Ошибка исполнения команды "${command}" в директории "${cwd}".`
      )
    );
    if (e instanceof Error) {
      console.log(colors.red(e.message));
    }
    throw e;
  } finally {
    return output;
  }
}

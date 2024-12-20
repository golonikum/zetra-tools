import path from "path";
import { Command } from "commander";
import { replaceInFileSync } from "replace-in-file";
import { getAllFilesSync } from "get-all-files";
import colors from "colors/safe";
import singleline from "singleline";

import { MAP } from "./map";
import { TOP_LEVEL_COMPONENTS } from "./items";

const program = new Command();

program
  .description(
    "Замена в АРМ-ах всех импортов core-ui на module federation remote модули."
  )
  .requiredOption(
    "-p, --projectName <item>",
    "имя АРМ-а (vesp-ui, admin-ui и т.д.)"
  )
  .option("-i, --idleRun", "холостой прогон (без изменения файлов)")
  .option("-v, --verbose", "показать больше информации");

program.on("--help", () => {
  console.log("");
  console.log("Пример вызова:");
  console.log("  npx tsx src/mf/replace-core-ui -p manager-ui -i");
});

program.parse(process.argv);

const programOptions = program.opts();

const componentsMap: Record<string, string> = Object.entries(MAP).reduce(
  (res, [key, value]) => {
    const item = value.reduce((r, c) => ({ ...r, [c]: key }), {});
    return { ...res, ...item };
  },
  {}
);

const files = getAllFilesSync(
  path.resolve(__dirname, "../../..", `${programOptions.projectName}/src`)
).toArray();

const options = {
  files,
  from: /import \{[^\}]+\} from 'core-ui';/gim,
  to: (match: string) => {
    const items = singleline(
      match.replace(/import \{([^\}]+)\} from 'core-ui';/gim, "$1")
    )
      .replace(/^(.+),$/, "$1")
      .split(", ");

    const alertItems: string[] = [];

    const newImports = items.reduce<string[]>((res, cur) => {
      let str = "";

      if (cur === "utils") {
        str = "import * as utils from 'core_ui/utils';";
      } else if (componentsMap[cur]) {
        str = `import { ${cur} } from 'core_ui/${componentsMap[cur]}';`;
      } else if (TOP_LEVEL_COMPONENTS.includes(cur)) {
        str = `import { ${cur} } from 'core_ui/${cur}';`;
      } else {
        alertItems.push(str);
      }

      return [...res, str];
    }, []);

    if (alertItems.length) {
      console.log(colors.red("Ошибка замены в файле: "));
      console.log(colors.red(alertItems.join(",\n")));
      process.exit(1);
    }

    if (programOptions.verbose) {
      console.log(colors.green(match));
      console.log(colors.green("-------------------------------------"));
      console.log(colors.green(newImports.join("\n")));
      console.log("\n");
    }

    if (programOptions.idleRun) {
      return match;
    } else {
      return newImports.join("\n");
    }
  },
};

try {
  const results = replaceInFileSync(options);
  if (programOptions.verbose) {
    console.log("Обработано файлов: ", results.length);
    console.log(
      "Изменено файлов: ",
      results.filter((item) => item.hasChanged).length
    );
    console.log("\n");
  }
} catch (error) {
  console.error("Ошибка:", error);
}

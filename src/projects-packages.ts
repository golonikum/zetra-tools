import fs from "fs";
import path from "path";

const PROJECTS = {
  "admin-ui": path.resolve(__dirname, "../..", "admin-ui"),
  "core-api": path.resolve(__dirname, "../..", "core-api"),
  "core-ui": path.resolve(__dirname, "../..", "core-ui"),
  "global-config": path.resolve(
    __dirname,
    "../..",
    "developer-kit/packages/global-config"
  ),
  "linter-config": path.resolve(
    __dirname,
    "../..",
    "developer-kit/packages/linter-config"
  ),
  "test-utils": path.resolve(
    __dirname,
    "../..",
    "developer-kit/packages/test-utils"
  ),
  "webpack-config": path.resolve(
    __dirname,
    "../..",
    "developer-kit/packages/webpack-config"
  ),
  "geo-ui": path.resolve(__dirname, "../..", "geo-ui"),
  "manager-ui": path.resolve(__dirname, "../..", "manager-ui"),
  "simulator-ui": path.resolve(__dirname, "../..", "simulator-ui"),
  "vesp-ui": path.resolve(__dirname, "../..", "vesp-ui"),
  "worker-ui": path.resolve(__dirname, "../..", "worker-ui"),
};

type ItemType = {
  projectName: string;
  dependencies: Record<string, string>;
};

const ITEMS: ItemType[] = [];

let ALL_DEPENDENCIES: string[] = [];

const extractProjectPackages = (project: keyof typeof PROJECTS): ItemType => {
  let packageObj = JSON.parse(
    fs.readFileSync(path.resolve(PROJECTS[project], "package.json"), {
      encoding: "utf8",
    })
  );

  return {
    projectName: project,
    dependencies: {
      ...packageObj.devDependencies,
      ...packageObj.dependencies,
    },
  };
};

const fillAllDependencies = () => {
  const obj = ITEMS.reduce((res, cur) => ({ ...res, ...cur.dependencies }), {});
  ALL_DEPENDENCIES = Object.entries(obj)
    .filter(([key, val]) => !(val as string).includes("link"))
    .map(([key, val]) => key)
    .sort();
};

const wrapHtml = (body: string) => `<html>
<body>
<head>
  <style>
    .highlighted {
      background: #EB4C4F;
      color: white;
    }
    * {
      font-family: monospace;
    }
  </style>
</head>
<table cellpadding="8" cellspacing="4" border="1">
${body}
</table>
</body>
</html>`;

const processProjects = () => {
  Object.keys(PROJECTS).forEach((project) => {
    ITEMS.push(extractProjectPackages(project as any));
  });

  fillAllDependencies();

  const tableHead = `<tr><th></th>${ITEMS.map(
    (item) => `<th>${item.projectName}</th>`
  ).join("")}</tr>`;
  const tableRows = ALL_DEPENDENCIES.map((name) => {
    const firstColumn = `<td>${name}</td>`;
    const otherColumns = ITEMS.map(
      ({ dependencies }) => `<td>${dependencies[name] || ""}</td>`
    ).join("");
    const versions = new Set<string>();
    ITEMS.forEach((item) => {
      if (item.dependencies[name]) {
        versions.add(item.dependencies[name]);
      }
    });
    const differs = versions.size > 1;
    return `<tr class="${
      differs ? "highlighted" : ""
    }">${firstColumn}${otherColumns}</tr>`;
  }).join("");

  fs.writeFileSync(
    path.resolve(__dirname, "../build", "projects-packages.html"),
    wrapHtml(`${tableHead}${tableRows}`),
    {
      encoding: "utf8",
    }
  );
};

processProjects();

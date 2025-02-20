import path from "path";
import { spawn } from "node:child_process";
import { PROJECTS_ROOT_PATH } from "../constants";

const children: any[] = [];
const remotes = ["department-ui", "simulator-ui"];
let isAllRunning = false;

const MESSAGES = {
  loopback: "[webpack-dev-server] Loopback",
  browsersListWarning: "Browserslist: caniuse-lite is outdated",
  federatedTypesCreated: "Federated types created correctly",
  noErrorsFound: "No errors found.",
  manifestWarning:
    "Manifest will use absolute path resolution via its host at runtime",
  projectIsRunningAt: "Project is running at",
};

const logStdout = (project: string) => (data: any) => {
  if (
    data.includes(MESSAGES.federatedTypesCreated) ||
    data.includes(MESSAGES.noErrorsFound)
  ) {
    console.log(`[${project}] ${data}`);
  }
};

const logStderr = (project: string) => (data: any) => {
  if (data.includes(MESSAGES.loopback)) {
    console.log(`[${project}] ${`${data}`.split("\n")[0]}`);
    return;
  }
  if (
    !data.includes(MESSAGES.browsersListWarning) &&
    !data.includes(MESSAGES.manifestWarning) &&
    !data.includes(MESSAGES.projectIsRunningAt)
  ) {
    console.log(`[${project}] ${data}`);
  }
};

const logError = (project: string) => (data: any) => {
  console.error(`[${project}], error: ${data}`);
};

process.on("exit", function () {
  children.forEach((child) => {
    process.kill(child.pid, "SIGTERM");
  });
});

const coreUiProcess = spawn("yarn", ["start:mf"], {
  shell: true,
  cwd: path.resolve(PROJECTS_ROOT_PATH, "core-ui"),
});
children.push(coreUiProcess);

coreUiProcess.stdout.on("data", (data: any) => {
  logStdout("core-ui")(data);

  if (data.includes(MESSAGES.noErrorsFound) && !isAllRunning) {
    remotes.forEach((remote) => {
      const remoteProcess = spawn("yarn", ["start"], {
        shell: true,
        cwd: path.resolve(PROJECTS_ROOT_PATH, remote),
      });
      children.push(remoteProcess);

      remoteProcess.stdout.on("data", logStdout(remote));
      remoteProcess.stderr.on("data", logStderr(remote));
      remoteProcess.on("error", logError(remote));
    });
    isAllRunning = true;
  }
});

coreUiProcess.stderr.on("data", logStderr("core-ui"));
coreUiProcess.on("error", logError("core-ui"));

import { Command, Option } from "commander";
import { writeFileSync } from "fs";
import { getBasePackageJson } from "./node.js";
import path from "path";

const templateTypes = {
  node: "node",
  ts: "ts",
};

async function writePackageJson(json: AnyType) {
  const writePath = path.resolve(process.cwd(), "package.json");
  console.log("写入路径", writePath);
  // 写入package.json文件
  try {
    await writeFileSync(writePath, JSON.stringify(json, null, 2));
    console.log("package.json written successfully.");
  } catch (error) {
    console.error("Error writing package.json:", error);
  }
}

export function buildInitCommand() {
  const initCommand = new Command("init");
  initCommand.description("Initialize a new project");
  initCommand.requiredOption("--name <str>", "package name");
  initCommand.addOption(
    new Option("--template <str>", "package template type")
      .choices(Object.values(templateTypes))
      .default(templateTypes.node)
  );
  initCommand.action(async (opts) => {
    if (opts.template === templateTypes.node) {
      const json = getBasePackageJson({ name: opts.name, esModule: true });
      writePackageJson(json);
    }
    console.log("Initializing project...", opts);
  });
  return initCommand;
}

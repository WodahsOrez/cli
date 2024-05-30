import { Command, Option } from "commander";
import { buildInitCommand } from "./init/index.js";
import { buildGitCommand } from "./git/index.js";
const program = new Command();

program
  .option("--first")
  .option("-s, --separator <char>")
  .addCommand(buildInitCommand())
  .addCommand(buildGitCommand())
  .action((opts, command) => {
    console.log("请选择以下指令执行", command.commands.map((item) => item._name).join(","));
  })
  .addOption(new Option("-d, --drink <size>", "drink size").choices(["small", "medium", "large"]));

// 解析命令参数，触发对应的action
program.parse();

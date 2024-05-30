import { Command, Option } from "commander";
import { execSync } from "child_process";

export function buildGitCommand() {
  const gitCommand = new Command("git");
  gitCommand.description("git helpful commands").action((opts, command) => {
    console.log("git command", opts);
  });
  gitCommand.command('user').addOption(new Option('-u, --username <username>', 'git username').choices(['wz', 'lxmdream'])).action((opts, command) => {
    if(opts.username=== 'wz'){
      execSync(`git config user.name "WodahsOrez" \n git config user.email "lxmdream@vip.qq.com"`)
      console.log('设置本地git账户WodahsOrez成功');
    }
  })
  return gitCommand;
}

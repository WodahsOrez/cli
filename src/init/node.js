// 全局配置
const globalConfig = {
  userName: "WodahsOrez",
  scope: "@wodahs-orez",
};

export function getBasePackageJson(opts) {
  const packageJson = {
    name: (globalConfig.scope ? globalConfig.scope + "/" : "") + opts.name,
    version: "0.0.1",
    main: "src/index.js",
    scripts: {},
    author: globalConfig.userName,
    license: "MIT",
  };

  if(opts.esModule){
    packageJson.type = "module";
  }
  return packageJson;
}

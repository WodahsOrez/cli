import { getBasePackageJson } from "./node";

export function getTsPackageJson(opts: Parameters<typeof getBasePackageJson>[0]){
  const json = getBasePackageJson(opts);
  return json;
}
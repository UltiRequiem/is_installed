import { isInstalled } from "./mod.ts";

console.log(await isInstalled("ls")); //=> true
console.log(await isInstalled("non-existing-command")); //=> false

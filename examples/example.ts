import { isInstalled } from "../src/index.js";

console.log(await isInstalled("ls")); //=> true
console.log(await isInstalled("non-existing-command")); //=> false

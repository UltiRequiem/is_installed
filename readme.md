# is_installed

Check if a binary is installed.

## Install

```sh
npm install @ultirequiem/is-installed
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { isInstalled } from "@ultirequiem/is-installed";

await isInstalled("ls"); //=> true
await isInstalled("non-existing-command"); //=> false
```

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/is_installed/tags) 🏷️

## Licence

MIT License 📄
